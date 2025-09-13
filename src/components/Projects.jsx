import { Calendar, Wrench, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"
import { projectData } from "../data/projects"
import { motion } from "framer-motion"

const Projects = () => {
  const projects = projectData

  return (
    <section id="projects" className="h-full py-4 mt-4 bg-cream">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 0.6 }}
            className="h-1 mx-auto mb-6 bg-primary"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto text-xl text-secondary font-domine"
          >
            Here are my two major projects that showcase my skills in design and
            development.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="overflow-hidden transition-all duration-300 bg-white shadow-lg rounded-2xl group hover:transform"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-sm font-medium text-white rounded-full bg-primary">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="mb-6 leading-relaxed text-secondary font-domine">
                  {project.description}
                </p>

                <div className="mb-6 space-y-4">
                  <div className="flex items-center gap-2 text-sm text-secondary">
                    <Calendar size={16} />
                    <span>Duration: {project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-secondary">
                    <Wrench size={16} />
                    <span>Tools: {project.tools.join(", ")}</span>
                  </div>
                </div>

                <Link
                  to={`/projects/${project.id}`}
                  state={{ project }}
                  className="flex items-center justify-center w-full gap-2 py-3 font-medium text-white transition-all duration-200 rounded-lg bg-primary hover:bg-primary/90 group"
                >
                  View Details
                  <ExternalLink size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
