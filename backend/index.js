// backend/index.js
console.log("✅ Running backend file:", __filename);

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { MongoClient, ObjectId } = require("mongodb");
const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// MongoDB config
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const dbName = process.env.MONGODB_DB || "test";
const postsCollection = process.env.MONGODB_COLLECTION || "posts";
const jobsCollection = process.env.MONGODB_JOBS_COLLECTION || "jobs";
const applicationsCollection = process.env.MONGODB_APPLICATIONS_COLLECTION || "applications";

let client;
let db;

// Connect to Mongo and return DB instance
async function connectToMongo() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    db = client.db(dbName);
    console.log(`✅ Connected to MongoDB database: ${dbName}`);
  }
  return db;
}

// -------------------------------
// Blog helpers
// -------------------------------
function computeReadTime(htmlContent) {
  if (!htmlContent) return "1 min read";
  const text = htmlContent.replace(/<[^>]*>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function mapDocToBlogPost(doc) {
  return {
    id: doc._id ? String(doc._id) : "",
    slug: doc.metaUrl || doc.slug || "",
    title: doc.title || doc.metaTitle || "Untitled",
    excerpt: doc.excerpt || "",
    content: doc.content || "",
    category: Array.isArray(doc.categories)
      ? doc.categories[0] || "Uncategorized"
      : doc.category || "Uncategorized",
    author:
      typeof doc.author === "object" && doc.author?.name
        ? doc.author.name
        : String(doc.author || "Unknown"),
    authorImage: doc.authorImage || doc.authorAvatar || undefined,
    date: doc.createdAt ? new Date(doc.createdAt).toISOString().split("T")[0] : "",
    readTime: computeReadTime(doc.content),
    image: doc.imageUrl || doc.image || "/placeholder.svg",
    featured: Boolean(doc.featured),
    tags: Array.isArray(doc.tags) ? doc.tags : [],
    seoTitle: doc.metaTitle || doc.title || "",
    seoDescription: doc.metaDescription || doc.excerpt || "",
    published: doc.status ? doc.status === "published" : doc.published !== false,
    views: doc.views !== undefined ? Number(doc.views) : undefined,
    likes: doc.likes !== undefined ? Number(doc.likes) : undefined,
  };
}

// -------------------------------
// BLOG ENDPOINTS
// -------------------------------

// GET /api/blog/posts  -> list posts (supports category, tags, search, featured)
app.get("/api/blog/posts", async (req, res) => {
  try {
    const database = await connectToMongo();
    const col = database.collection(postsCollection);

    const query = { status: "published" };

    if (req.query.category && req.query.category !== "All") {
      query.categories = req.query.category;
    }

    if (req.query.tags) {
      const tags = req.query.tags.split(",").map((t) => t.trim()).filter(Boolean);
      if (tags.length) query.tags = { $in: tags };
    }

    if (req.query.search) {
      const search = req.query.search;
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { excerpt: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } },
        { tags: { $elemMatch: { $regex: search, $options: "i" } } },
      ];
    }

    if (req.query.featured !== undefined) {
      query.featured = req.query.featured === "true";
    }

    const docs = await col.find(query).sort({ createdAt: -1 }).toArray();
    res.json(docs.map(mapDocToBlogPost));
  } catch (e) {
    console.error("❌ Error in GET /api/blog/posts:", e);
    res.status(500).json({ error: String(e) });
  }
});

// GET /api/blog/posts/:slug -> single post by metaUrl/slug/id
app.get("/api/blog/posts/:slug", async (req, res) => {
  try {
    const database = await connectToMongo();
    const col = database.collection(postsCollection);

    let doc = await col.findOne({ metaUrl: req.params.slug, status: "published" });
    if (!doc) doc = await col.findOne({ slug: req.params.slug, status: "published" });
    if (!doc && /^[0-9a-fA-F]{24}$/.test(req.params.slug)) {
      doc = await col.findOne({ _id: new ObjectId(req.params.slug), status: "published" });
    }
    if (!doc) return res.status(404).json({ error: "Not found" });

    res.json(mapDocToBlogPost(doc));
  } catch (e) {
    console.error("❌ Error in GET /api/blog/posts/:slug:", e);
    res.status(500).json({ error: String(e) });
  }
});

// GET /api/blog/posts/:slug/related -> related posts
app.get("/api/blog/posts/:slug/related", async (req, res) => {
  try {
    const database = await connectToMongo();
    const col = database.collection(postsCollection);

    let doc = await col.findOne({ metaUrl: req.params.slug, status: "published" });
    if (!doc) doc = await col.findOne({ slug: req.params.slug, status: "published" });
    if (!doc && /^[0-9a-fA-F]{24}$/.test(req.params.slug)) {
      doc = await col.findOne({ _id: new ObjectId(req.params.slug), status: "published" });
    }
    if (!doc) return res.json([]);

    const limit = Number(req.query.limit) || 3;

    // Use relatedPosts field if present
    if (doc.relatedPosts && Array.isArray(doc.relatedPosts) && doc.relatedPosts.length > 0) {
      const relatedPostIds = doc.relatedPosts.map((r) =>
        typeof r === "object" && r.$oid ? new ObjectId(r.$oid) : typeof r === "string" ? new ObjectId(r) : r
      );
      const relatedDocs = await col.find({ _id: { $in: relatedPostIds }, status: "published" }).limit(limit).toArray();
      return res.json(relatedDocs.map(mapDocToBlogPost));
    }

    // Fallback: match by category/tags and sort by relevance
    const category = Array.isArray(doc.categories) ? doc.categories[0] : doc.category;
    const tags = Array.isArray(doc.tags) ? doc.tags : [];
    const query = {
      _id: { $ne: doc._id },
      status: "published",
      $or: [{ categories: category }, { tags: { $in: tags } }],
    };

    const relatedDocs = await col.find(query).limit(20).toArray();
    const sorted = (relatedDocs || [])
      .filter(Boolean)
      .map((d) => ({ doc: d }))
      .sort((a, b) => {
        const aCat = Array.isArray(a.doc.categories) && category && a.doc.categories.includes(category) ? 1 : 0;
        const bCat = Array.isArray(b.doc.categories) && category && b.doc.categories.includes(category) ? 1 : 0;
        if (aCat !== bCat) return bCat - aCat;
        const aTagMatches = (a.doc.tags || []).filter((t) => tags.includes(t)).length;
        const bTagMatches = (b.doc.tags || []).filter((t) => tags.includes(t)).length;
        return bTagMatches - aTagMatches;
      })
      .slice(0, limit)
      .map((s) => mapDocToBlogPost(s.doc));

    res.json(sorted);
  } catch (e) {
    console.error("❌ Error in GET /api/blog/posts/:slug/related:", e);
    res.status(500).json({ error: String(e) });
  }
});

// GET /api/blog/categories
app.get("/api/blog/categories", async (req, res) => {
  try {
    const database = await connectToMongo();
    const col = database.collection(postsCollection);
    const categories = await col.distinct("categories");
    const cleaned = Array.from(new Set((categories || []).flat().filter(Boolean))).sort();
    res.json(["All", ...cleaned]);
  } catch (e) {
    console.error("❌ Error in GET /api/blog/categories:", e);
    res.status(500).json({ error: String(e) });
  }
});

// GET /api/blog/tags
app.get("/api/blog/tags", async (req, res) => {
  try {
    const database = await connectToMongo();
    const col = database.collection(postsCollection);
    const tags = await col.distinct("tags");
    const cleaned = Array.from(new Set((tags || []).flat().filter(Boolean))).sort();
    res.json(cleaned);
  } catch (e) {
    console.error("❌ Error in GET /api/blog/tags:", e);
    res.status(500).json({ error: String(e) });
  }
});

// -------------------------------
// CAREERS HELPERS
// -------------------------------
function mapDocToJob(doc) {
  return {
    id: doc._id ? String(doc._id) : "",
    jobId: doc.jobId || "N/A",
    title: doc.title || "Untitled Role",
    typeOfPosition: doc.typeOfPosition || doc.type || "Full time",
    primaryRole: doc.primaryRole || "N/A",
    workArrangement: doc.workArrangement || doc.workArrangement || doc.workArrangement || "Hybrid",
    country: doc.country || "N/A",
    areaOfWork: doc.areaOfWork || doc.area || "N/A",
    employmentType: doc.employmentType || "Regular",
    experience: doc.experience || "Not specified",
    postedDate: doc.postedDate || doc.createdAt || null,
    introduction: doc.introduction || doc.Introduction || "",
    responsibilities: doc.responsibilities || doc.Responsibilities || "",
    requirements: doc.requirements || doc.Requirements || "",
    isActive: doc.isActive !== false,
    createdAt: doc.createdAt || null,
  };
}

// GET /api/careers/jobs/jobId/:jobId
app.get("/api/careers/jobs/jobId/:jobId", async (req, res) => {
  try {
    const database = await connectToMongo();
    const col = database.collection(jobsCollection);

    const jobId = req.params.jobId;

    // Find the document using jobId instead of _id
    const doc = await col.findOne({ jobId: jobId, isActive: true });

    if (!doc) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.json(mapDocToJob(doc));
  } catch (e) {
    console.error("❌ Error fetching job by jobId:", e);
    res.status(500).json({ error: String(e) });
  }
});

// GET /api/careers/jobs
app.get("/api/careers/jobs", async (req, res) => {
  try {
    const database = await connectToMongo();
    const col = database.collection(jobsCollection);

    const { search, areas } = req.query;
    const query = { isActive: true };

    if (search) query.title = { $regex: search, $options: "i" };
    if (areas) query.areaOfWork = { $in: areas.split(",") };

    const docs = await col.find(query).sort({ createdAt: -1 }).toArray();
    res.json(docs.map(mapDocToJob));
  } catch (e) {
    console.error("❌ Error fetching jobs:", e);
    res.status(500).json({ error: String(e) });
  }
});

// GET /api/careers/areas
app.get("/api/careers/areas", async (req, res) => {
  try {
    const database = await connectToMongo();
    const col = database.collection(jobsCollection);

    // Use areaOfWork or area field depending on your documents
    const areas = await col.distinct("areaOfWork", { isActive: true });
    // fallback: also include 'area' if that's used in your data
    const alt = await col.distinct("area", { isActive: true });
    const merged = Array.from(new Set([...(areas || []), ...(alt || [])].flat().filter(Boolean))).sort();
    res.json(merged);
  } catch (e) {
    console.error("❌ Error fetching areas:", e);
    res.status(500).json({ error: String(e) });
  }
});


// -------------------------------
// APPLICATIONS (S3 presign + save)
// -------------------------------

// AWS config (v2 SDK)
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION || "ap-south-1",
});

const s3 = new AWS.S3();

// POST /api/applications/presign
app.post("/api/applications/presign", async (req, res) => {
  try {
    const { fileName } = req.body;
    if (!fileName) return res.status(400).json({ error: "Missing file name" });

    if (!process.env.AWS_BUCKET_NAME) {
      console.error("❌ AWS_BUCKET_NAME not set in env");
      return res.status(500).json({ error: "Server misconfiguration" });
    }

    const fileKey = `resumes/${uuidv4()}-${fileName}`;

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: fileKey,
      Expires: 60 * 5,
      ContentType: "application/pdf",
    };

    const uploadUrl = await s3.getSignedUrlPromise("putObject", params);

    res.json({
      uploadUrl,
      fileUrl: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileKey}`,
    });
  } catch (e) {
    console.error("❌ Error generating presign URL:", e);
    res.status(500).json({ error: "Failed to generate upload URL" });
  }
});

// POST /api/applications
app.post("/api/applications", async (req, res) => {
  try {
    const {
      jobId,        // this is expected to be the human jobId (ex: "J1234")
      firstName,
      lastName,
      email,
      phone,
      portfolio,
      linkedin,
      resumeUrl
    } = req.body;

    // Required fields validation
    if (!jobId || !firstName || !lastName || !email || !phone || !resumeUrl) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Connect to DB
    const database = await connectToMongo();
    const jobsCol = database.collection("jobs");
    const appsCol = database.collection("applications");

    // 🔥 Find the job using the human jobId (Ex: "J1234")
    const job = await jobsCol.findOne({ jobId });

    if (!job) {
      return res.status(400).json({ error: "Invalid jobId: job not found" });
    }

    // Prepare the document to insert
    const newApp = {
      firstName,
      lastName,
      email,
      phone,
      portfolio: portfolio || "",
      linkedin: linkedin || "",
      resumeUrl,

      // 🔥 FIXED: store both
      jobId: job.jobId,        // example: "J1234"
      jobRef: job._id,         // Mongo ObjectId reference to Job

      status: "under-review",  // default for TalentHub

      createdAt: new Date()
    };

    const result = await appsCol.insertOne(newApp);

    res.json({
      message: "Application saved successfully",
      id: result.insertedId
    });

  } catch (e) {
    console.error("❌ Error saving application:", e);
    res.status(500).json({ error: "Failed to save application" });
  }
});


// Simple test endpoint
app.get("/api/test", (req, res) => {
  res.send("✅ Careers API file is active");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 API backend listening on port ${PORT}`);
});
