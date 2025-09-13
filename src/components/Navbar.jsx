import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom"
import resume from "/Resume.pdf"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  const handleNavClick = (id) => {
    if (id === "resume") {
      const link = document.createElement("a")
      link.href = resume
      link.download = "Khushboo.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      return
    }

    navigate(id)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="z-50 w-full h-16 transition-all duration-300 rounded-b-lg shadow-lg bg-white/100 backdrop-blur-md">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="px-4 font-bold text-gray-900">
            <h1 className="text-2xl tracking-wide cursor-default">Portfolio</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden space-x-8 md:flex bg-white/100 backdrop-blur-md">
            <button
              onClick={() => handleNavClick("/")}
              className={`relative px-3 py-2 text-sm font-medium font-inter transition-colors duration-200 ${
                location.pathname === "/"
                  ? "text-primary"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              Home
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 ${
                  location.pathname === "/" ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>

            <button
              onClick={() => handleNavClick("/about")}
              className={`relative px-3 py-2 text-sm font-medium font-inter transition-colors duration-200 ${
                location.pathname.startsWith("/about")
                  ? "text-primary"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              About
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 ${
                  location.pathname === "/about" ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>

            <button
              onClick={() => handleNavClick("/projects")}
              className={`relative px-3 py-2 text-sm font-medium font-inter transition-colors duration-200 ${
                location.pathname.startsWith("/projects")
                  ? "text-primary"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              Projects
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 ${
                  location.pathname.startsWith("/projects")
                    ? "scale-x-100"
                    : "scale-x-0"
                }`}
              />
            </button>

            <button
              onClick={() => handleNavClick("/more-work")}
              className={`relative px-3 py-2 text-sm font-medium font-inter transition-colors duration-200 ${
                location.pathname.startsWith("/more-work")
                  ? "text-primary"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              More Work
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 ${
                  location.pathname.startsWith("/more-work")
                    ? "scale-x-100"
                    : "scale-x-0"
                }`}
              />
            </button>

            <button
              onClick={() => handleNavClick("/contact")}
              className={`relative px-3 py-2 text-sm font-medium font-inter transition-colors duration-200 ${
                location.pathname.startsWith("/contact")
                  ? "text-primary"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              Contact
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 ${
                  location.pathname.startsWith("/contact")
                    ? "scale-x-100"
                    : "scale-x-0"
                }`}
              />
            </button>

            <button
              onClick={() => handleNavClick("resume")}
              title="Download Resume"
              className="relative px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 font-inter hover:text-primary"
            >
              <i className="mr-1 fa-solid fa-download" />
              Resume
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-700 transition-colors md:hidden hover:text-primary"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`w-full -mt-3 md:hidden transition-all duration-300 overflow-hidden shadow-lg bg-white/100 backdrop-blur-md ${
            isMobileMenuOpen ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <button
            onClick={() => handleNavClick("/")}
            className={`block w-full text-left px-4 py-3 text-sm font-medium font-inter transition-colors ${
              location.pathname === "/"
                ? "text-primary bg-primary/10"
                : "text-gray-700 hover:text-primary hover:bg-gray-50"
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick("/about")}
            className={`block w-full text-left px-4 py-3 text-sm font-medium font-inter transition-colors ${
              location.pathname.startsWith("/about")
                ? "text-primary bg-primary/10"
                : "text-gray-700 hover:text-primary hover:bg-gray-50"
            }`}
          >
            About
          </button>

          <button
            onClick={() => handleNavClick("/projects")}
            className={`block w-full text-left px-4 py-3 text-sm font-medium font-inter transition-colors ${
              location.pathname.startsWith("/projects")
                ? "text-primary bg-primary/10"
                : "text-gray-700 hover:text-primary hover:bg-gray-50"
            }`}
          >
            Projects
          </button>

          <button
            onClick={() => handleNavClick("/more-work")}
            className={`block w-full text-left px-4 py-3 text-sm font-medium font-inter transition-colors ${
              location.pathname.startsWith("/more-work")
                ? "text-primary bg-primary/10"
                : "text-gray-700 hover:text-primary hover:bg-gray-50"
            }`}
          >
            More Work
          </button>

          <button
            onClick={() => handleNavClick("/contact")}
            className={`block w-full text-left px-4 py-3 text-sm font-medium font-inter transition-colors ${
              location.pathname.startsWith("/contact")
                ? "text-primary bg-primary/10"
                : "text-gray-700 hover:text-primary hover:bg-gray-50"
            }`}
          >
            Contact
          </button>

          <button
            onClick={() => handleNavClick("resume")}
            title="Download Resume"
            className="block w-full px-4 py-3 text-sm font-medium text-left text-gray-700 font-inter hover:text-primary hover:bg-gray-50"
          >
            <i className="mr-1 fa-solid fa-download" />
            Resume
          </button>
        </div>
      </div>
    </nav>
  )
}
