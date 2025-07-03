let posts = [];

export async function GET() {
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(req) {
  const data = await req.json();
  const newPost = { ...data, id: Date.now().toString(), date: new Date().toISOString() };
  posts = [newPost, ...posts];
  return new Response(JSON.stringify(newPost), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
} 