import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import ProjectDetails from "./components/ProjectDetails"
import MoreWork from "./components/MoreWork"
import Contact from "./components/Contact"
import { Route, Routes } from "react-router-dom"

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/more-work" element={<MoreWork />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}
