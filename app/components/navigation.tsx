"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [subMenuOpen, setSubMenuOpen] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            onClick={() => (window.location.href = "/")}
            whileHover={{ scale: 1.05, cursor: "pointer" }}
            className="flex flex-col items-center space-y-1 select-none"
          >
            <img
              src="/logo_theguys.png"
              alt="The Guys Logo"
              className="h-16 w-auto max-w-[160px] md:h-20 md:max-w-[200px] object-contain drop-shadow-md transition-all duration-200"
            />
            {/* <span className="text-white text-2xl font-bold">The Guys</span> */}
          </motion.div>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => { setServicesOpen(false); setSubMenuOpen(null); }}
            >
              <motion.a
                href="/services"
                whileHover={{ y: -2 }}
                className="text-gray-300 hover:text-white transition-colors font-medium cursor-pointer"
              >
                Services
              </motion.a>
              {/* Main Services Dropdown */}
              <div
                className={`absolute left-0 mt-2 w-64 bg-black/95 rounded-xl shadow-lg transition-opacity duration-200 z-50 ${servicesOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <ul className="py-2">
                  <li
                    className="relative"
                    onMouseEnter={() => setSubMenuOpen("digital-marketing")}
                    onMouseLeave={() => setSubMenuOpen(null)}
                  >
                    <a href="/services/digital-marketing" className="block px-6 py-3 text-gray-200 hover:bg-gray-800 rounded-lg font-semibold flex justify-between items-center">
                      Digital Marketing
                      <span className="ml-2">&rarr;</span>
                    </a>
                    {/* Sub-services */}
                    <div
                      className={`absolute left-full top-0 mt-0 w-64 bg-black/95 rounded-xl shadow-lg transition-opacity duration-200 z-50 ${subMenuOpen === "digital-marketing" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                      onMouseEnter={() => setSubMenuOpen("digital-marketing")}
                      onMouseLeave={() => setSubMenuOpen(null)}
                    >
                      <ul className="py-2">
                        <li><a href="/services/digital-marketing/social-media-management" className="block px-6 py-2 text-gray-200 hover:bg-gray-800 rounded-lg">Social Media Management</a></li>
                        <li><a href="/services/digital-marketing/ugc-content" className="block px-6 py-2 text-gray-200 hover:bg-gray-800 rounded-lg">UGC Content</a></li>
                        <li><a href="/services/digital-marketing/influencer-campaigns" className="block px-6 py-2 text-gray-200 hover:bg-gray-800 rounded-lg">Influencer Campaigns</a></li>
                        <li><a href="/services/digital-marketing/funnel-design-email" className="block px-6 py-2 text-gray-200 hover:bg-gray-800 rounded-lg">Funnel Design & Email</a></li>
                      </ul>
                    </div>
                  </li>
                  <li
                    className="relative"
                    onMouseEnter={() => setSubMenuOpen("legal-compliance")}
                    onMouseLeave={() => setSubMenuOpen(null)}
                  >
                    <a href="/services/legal-compliance" className="block px-6 py-3 text-gray-200 hover:bg-gray-800 rounded-lg font-semibold flex justify-between items-center">
                      Legal & Compliance
                      <span className="ml-2">&rarr;</span>
                    </a>
                    <div
                      className={`absolute left-full top-0 mt-0 w-64 bg-black/95 rounded-xl shadow-lg transition-opacity duration-200 z-50 ${subMenuOpen === "legal-compliance" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                      onMouseEnter={() => setSubMenuOpen("legal-compliance")}
                      onMouseLeave={() => setSubMenuOpen(null)}
                    >
                      <ul className="py-2">
                        <li><a href="/services/legal-compliance/company-formation" className="block px-6 py-2 text-gray-200 hover:bg-gray-800 rounded-lg">Company Formation</a></li>
                        <li><a href="/services/legal-compliance/licensing-compliance" className="block px-6 py-2 text-gray-200 hover:bg-gray-800 rounded-lg">Licensing & Compliance</a></li>
                        <li><a href="/services/legal-compliance/vasp-licensing" className="block px-6 py-2 text-gray-200 hover:bg-gray-800 rounded-lg">VASP Licensing</a></li>
                        <li><a href="/services/legal-compliance/regulatory-documentation" className="block px-6 py-2 text-gray-200 hover:bg-gray-800 rounded-lg">Regulatory Documentation</a></li>
                        <li><a href="/services/legal-compliance/legal-advisory" className="block px-6 py-2 text-gray-200 hover:bg-gray-800 rounded-lg">Legal Advisory</a></li>
                      </ul>
                    </div>
                  </li>
                  <li
                    className="relative"
                    onMouseEnter={() => setSubMenuOpen("operations")}
                    onMouseLeave={() => setSubMenuOpen(null)}
                  >
                    <a href="/services/operations" className="block px-6 py-3 text-gray-200 hover:bg-gray-800 rounded-lg font-semibold flex justify-between items-center">
                      Operations
                      <span className="ml-2">&rarr;</span>
                    </a>
                    <div
                      className={`absolute left-full top-0 mt-0 w-64 bg-black/95 rounded-xl shadow-lg transition-opacity duration-200 z-50 ${subMenuOpen === "operations" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                      onMouseEnter={() => setSubMenuOpen("operations")}
                      onMouseLeave={() => setSubMenuOpen(null)}
                    >
                      <ul className="py-2">
                        <li><a href="/services/operations/talent-acquisition" className="block px-6 py-2 text-gray-200 hover:bg-gray-800 rounded-lg">Talent Acquisition</a></li>
                        <li><a href="/services/operations/company-infrastructure" className="block px-6 py-2 text-gray-200 hover:bg-gray-800 rounded-lg">Company Infrastructure</a></li>
                        <li><a href="/services/operations/governance-sops" className="block px-6 py-2 text-gray-200 hover:bg-gray-800 rounded-lg">Governance & SOPs</a></li>
                        <li><a href="/services/operations/events-community" className="block px-6 py-2 text-gray-200 hover:bg-gray-800 rounded-lg">Events & Community</a></li>
                      </ul>
                    </div>
                  </li>
                  <li
                    className="relative"
                    onMouseEnter={() => setSubMenuOpen("consulting")}
                    onMouseLeave={() => setSubMenuOpen(null)}
                  >
                    <a href="/services/consulting" className="block px-6 py-3 text-gray-200 hover:bg-gray-800 rounded-lg font-semibold flex justify-between items-center">
                      Strategy & Consulting
                      <span className="ml-2">&rarr;</span>
                    </a>
                    <div
                      className={`absolute left-full top-0 mt-0 w-64 bg-black/95 rounded-xl shadow-lg transition-opacity duration-200 z-50 ${subMenuOpen === "consulting" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                      onMouseEnter={() => setSubMenuOpen("consulting")}
                      onMouseLeave={() => setSubMenuOpen(null)}
                    >
                      <ul className="py-2">
                        <li><a href="/services/consulting/go-to-market-strategy" className="block px-6 py-2 text-gray-200 hover:bg-gray-800 rounded-lg">Go-To-Market Strategy</a></li>
                        <li><a href="/services/consulting/business-development" className="block px-6 py-2 text-gray-200 hover:bg-gray-800 rounded-lg">Business Development</a></li>
                        <li><a href="/services/consulting/product-development" className="block px-6 py-2 text-gray-200 hover:bg-gray-800 rounded-lg">Product Development</a></li>
                        <li><a href="/services/consulting/pricing-optimization" className="block px-6 py-2 text-gray-200 hover:bg-gray-800 rounded-lg">Pricing Optimization</a></li>
                      </ul>
                    </div>
                  </li>
                  <li
                    className="relative"
                    onMouseEnter={() => setSubMenuOpen("pr")}
                    onMouseLeave={() => setSubMenuOpen(null)}
                  >
                    <a href="/services/pr" className="block px-6 py-3 text-gray-200 hover:bg-gray-800 rounded-lg font-semibold flex justify-between items-center">
                      PR & Communications
                      <span className="ml-2">&rarr;</span>
                    </a>
                    <div
                      className={`absolute left-full top-0 mt-0 w-64 bg-black/95 rounded-xl shadow-lg transition-opacity duration-200 z-50 ${subMenuOpen === "pr" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                      onMouseEnter={() => setSubMenuOpen("pr")}
                      onMouseLeave={() => setSubMenuOpen(null)}
                    >
                      <ul className="py-2">
                        <li><a href="/services/pr/launch-pr" className="block px-6 py-2 text-gray-200 hover:bg-gray-800 rounded-lg">Launch PR</a></li>
                        <li><a href="/services/pr/founder-branding" className="block px-6 py-2 text-gray-200 hover:bg-gray-800 rounded-lg">Founder Branding</a></li>
                        <li><a href="/services/pr/crisis-management" className="block px-6 py-2 text-gray-200 hover:bg-gray-800 rounded-lg">Crisis Management</a></li>
                        <li><a href="/services/pr/press-coverage" className="block px-6 py-2 text-gray-200 hover:bg-gray-800 rounded-lg">Press Coverage</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <motion.a
              href="/#case-studies"
              whileHover={{ y: -2 }}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Case Studies
            </motion.a>
            <motion.a
              href="/about"
              whileHover={{ y: -2 }}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              About
            </motion.a>
            <motion.a
              href="/blog"
              whileHover={{ y: -2 }}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Blog
            </motion.a>
            <motion.button
              onClick={() => window.open("https://calendly.com/hershey-theguysglobal/30min", "_blank")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Let's Talk
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-gray-800"
          >
            <div className="flex flex-col space-y-4 pt-4">
              <a
                href="#services"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="#case-studies"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="/blog"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </a>
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false);
                }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full font-semibold text-left"
              >
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
