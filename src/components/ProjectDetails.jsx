import { useParams, useNavigate } from "react-router-dom"
import { projectData } from "../data/projects"
import { motion } from "framer-motion"
import HighlightsCarousel from "./HighlightsCarousel"
import {
  ArrowLeft,
  Info,
  Lightbulb,
  Bug,
  ClipboardList,
  ListChecks,
  FolderOpen,
  Palette,
  LayoutDashboard,
  Smartphone,
  Film,
  Star,
  BookOpenCheck,
  Trophy,
} from "lucide-react"

const SectionHeading = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-2 mb-6">
    <Icon className="w-6 h-6 text-indigo-600" />
    <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
  </div>
)

export default function ProjectDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projectData.find((proj) => proj.id === id)

  if (!project) {
    return <div className="p-10 text-center">Project not found.</div>
  }

  return (
    <section className="relative w-full max-w-6xl px-6 py-12 mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate("/projects")}
        className="fixed flex items-center gap-2 px-4 py-2 transition bg-white rounded-full shadow-md top-6 left-6 hover:bg-gray-100"
      >
        <ArrowLeft size={18} />
        Back
      </button>
      {/* Title & Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        {/* Flex container for content and video */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          {/* Left side: Text content */}
          <div className="flex-1 space-y-8">
            {/* Title & miniDescription */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <h1 className="text-6xl font-bold text-gray-900">
                {project.title}
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg leading-relaxed text-gray-700">
              {project.description}
            </p>

            {/* Meta info (Role, Duration, Tools) */}
            <div className="flex flex-wrap gap-6 text-base text-gray-600">
              <span>
                <strong>Role:</strong> {project.role}
              </span>
              <span>
                <strong>Duration:</strong> {project.duration}
              </span>
              <span>
                <strong>Tools:</strong> {project.tools.join(", ")}
              </span>
            </div>
          </div>

          {/* Right side: Video */}
          {project.videos[0]["App Overview"] && (
            <div className="flex flex-col items-center">
              <motion.video
                src={project.videos[0]["App Overview"]}
                autoPlay
                loop
                muted
                className="w-full lg:w-[300px] shadow-md rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          )}
        </div>
      </motion.div>
      {/* Highlights */}
      {project.images[0].highlights?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionHeading icon={Star} title="Project Highlights" />
          <div className="mt-6">
            <HighlightsCarousel images={project.images[0].highlights} />
          </div>
        </motion.div>
      )}
      {/* Problems Identified */}
      {project.problemIdentified && (
        <div className="mb-16">
          <SectionHeading icon={Bug} title="Problems Identified" />
          <div className="space-y-6">
            {typeof project.problemIdentified === "object" &&
            !Array.isArray(project.problemIdentified)
              ? Object.entries(project.problemIdentified).map(
                  ([intro, points], idx) => (
                    <div key={idx}>
                      <p className="mb-2 text-lg text-gray-700">{intro}</p>
                      {Array.isArray(points) && (
                        <ul className="pl-5 space-y-2 text-gray-700 list-disc">
                          {points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )
                )
              : project.problemIdentified.map((text, idx) => (
                  <p key={idx} className="text-lg text-gray-700">
                    {text}
                  </p>
                ))}
          </div>
        </div>
      )}
      {/* Problem Statement */}
      {project.problemStatement && (
        <div className="mb-16">
          <SectionHeading icon={ClipboardList} title="Problem Statement" />
          <p className="text-lg text-gray-700">{project.problemStatement}</p>
        </div>
      )}
      {/* Overview */}
      {project.projectOverview && (
        <div className="mb-16">
          <SectionHeading icon={Info} title="Project Overview" />
          <div className="space-y-6">
            {project.projectOverview.map((item, idx) => {
              const question = Object.keys(item)[0]
              const answer = item[question]
              return (
                <div key={idx}>
                  <h3 className="text-xl font-semibold">{question}</h3>
                  <p className="text-gray-700">{answer}</p>
                </div>
              )
            })}
          </div>
        </div>
      )}
      {/* Design Process */}
      {project.ideationAndProcess && (
        <div className="mb-16">
          <SectionHeading icon={Lightbulb} title="Design Process" />
          <div className="space-y-8">
            {project.ideationAndProcess.map((section, idx) => {
              const sectionTitle = Object.keys(section)[0]
              const sectionContent = section[sectionTitle]
              return (
                <div key={idx}>
                  <h3 className="mb-2 text-xl font-semibold">{sectionTitle}</h3>
                  {typeof sectionContent === "string" ? (
                    <p className="text-gray-700">{sectionContent}</p>
                  ) : Array.isArray(sectionContent) ? (
                    <ul className="pl-5 space-y-1 text-gray-700 list-disc">
                      {sectionContent.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <div className="pl-4 space-y-4">
                      {Object.entries(sectionContent).map(([sub, pts], i) => (
                        <div key={i}>
                          <h4 className="text-lg font-medium">{sub}</h4>
                          {Array.isArray(pts) ? (
                            <ul className="pl-5 space-y-1 text-gray-700 list-disc">
                              {pts.map((p, j) => (
                                <li key={j}>{p}</li>
                              ))}
                            </ul>
                          ) : typeof pts === "string" && pts.trim() !== "" ? (
                            <p className="mt-1 text-gray-700">{pts}</p>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
      {/* Style Guide */}
      <div className="mb-16">
        <SectionHeading icon={Palette} title="Style Guide" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="mb-4 text-xl font-bold">Typography</h3>
            {Object.entries(project.typography).map(([key, val]) => (
              <p key={key} className="mb-1">
                <strong className="capitalize">{key}:</strong> {val}
              </p>
            ))}
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="mb-4 text-xl font-bold">Color Scheme</h3>
            <div className="space-y-2">
              {project.colorScheme.map((colorObj, idx) => {
                const key = Object.keys(colorObj)[0]
                const value = colorObj[key]
                return (
                  <div key={idx} className="flex items-center gap-4">
                    <span className="w-40 font-medium capitalize">
                      {key.replace(/-/g, " ")}
                    </span>
                    <span className="text-gray-900 w-28">{value}</span>
                    <div
                      className="w-6 h-6 border rounded-full shadow-sm"
                      style={{ backgroundColor: value }}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Blueprints */}
      {project.images[0].wireframes?.length > 0 && (
        <div className="mb-16">
          <SectionHeading icon={LayoutDashboard} title="Design Blueprints" />

          <div className="flex justify-center mt-6">
            <img
              src={project.images[0].wireframes[0]}
              alt="Wireframes"
              className="object-contain w-full max-w-4xl shadow-md rounded-xl"
            />
          </div>
        </div>
      )}

      {/* App Interface */}
      {project.images[0].appImages?.length > 0 && (
        <div className="mb-16">
          <SectionHeading icon={Smartphone} title="App Interface" />

          <div className="flex justify-center mt-6">
            <img
              src={project.images[0].appImages[0]}
              alt="App UI"
              className="object-contain w-full max-w-4xl shadow-md rounded-xl"
            />
          </div>
        </div>
      )}

      {/* Videos Section */}
      {(project.videos.some((v) => Object.values(v)[0]) ||
        project.images[0].userFlow?.length > 0) && (
        <div className="mb-16">
          <SectionHeading icon={Film} title="User Flow Demo" />

          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {/* Videos */}
            {project.videos.map((vid, idx) => {
              const title = Object.keys(vid)[0]
              const src = Object.values(vid)[0]

              return src ? (
                <div
                  key={idx}
                  className="flex flex-col items-center max-w-[320px]"
                >
                  <video
                    src={src}
                    controls
                    className="rounded-lg w-full max-w-[320px] max-h-[400px] object-contain"
                  />
                  <p className="mt-2 text-lg font-semibold text-center text-gray-700">
                    {title}
                  </p>
                </div>
              ) : null
            })}

            {/* User Flow Images */}
            {project.images[0].userFlow?.length > 0 && (
              <div className="mb-8">
                <div className="flex flex-wrap justify-center gap-6 mt-6">
                  {project.images[0].userFlow.map((item, idx) => {
                    const title = Object.keys(item)[0]
                    const src = Object.values(item)[0]

                    return (
                      <div
                        key={idx}
                        className="flex flex-col items-center max-w-[500px] rounded-lg"
                      >
                        <img
                          src={src}
                          alt={title}
                          className="object-contain w-full border border-gray-200 rounded-lg shadow-sm"
                        />
                        <p className="mt-1 text-lg font-semibold text-center text-gray-700">
                          {title}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Key Features */}
      {project.keyFeatures?.length > 0 && (
        <div className="mb-16">
          <SectionHeading icon={ListChecks} title="Key Features" />
          <ul className="pl-5 space-y-2 text-gray-700 list-disc">
            {project.keyFeatures.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Story */}
      {project.story?.length > 0 && (
        <div className="mb-16">
          <SectionHeading
            icon={BookOpenCheck}
            title={`The story behind "${project.title}"`}
          />
          <div className="space-y-6">
            {project.story.map((item, idx) => {
              const [heading, content] = Object.entries(item)[0]
              return (
                <div key={idx}>
                  <h3 className="text-xl font-semibold">{heading}</h3>
                  {typeof content === "string" ? (
                    <p className="text-gray-700">{content}</p>
                  ) : (
                    <div className="mt-2 space-y-4">
                      {content.map((section, i) => {
                        const [subHeading, description] =
                          Object.entries(section)[0]
                        return (
                          <div key={i}>
                            <h4 className="text-lg font-medium">
                              {subHeading}
                            </h4>
                            <p className="text-gray-600">{description}</p>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Final Outcome & Impact */}
      {project.finalOutcomeAndImpact && (
        <div className="mb-16">
          <SectionHeading icon={Trophy} title="Final Outcome & Impact" />
          <div className="space-y-6">
            {Array.isArray(project.finalOutcomeAndImpact)
              ? project.finalOutcomeAndImpact.map((item, idx) => (
                  <div key={idx}>
                    {Object.entries(item).map(([title, content], i) => (
                      <div key={i} className="mb-4">
                        <h3 className="text-xl font-semibold">{title}</h3>
                        {Array.isArray(content) ? (
                          <ul className="pl-5 space-y-1 text-gray-700 list-disc">
                            {content.map((pt, j) => (
                              <li key={j}>{pt}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-700">{content}</p>
                        )}
                      </div>
                    ))}
                  </div>
                ))
              : Object.entries(project.finalOutcomeAndImpact).map(
                  ([title, content], idx) => (
                    <div key={idx}>
                      <h3 className="text-xl font-semibold">{title}</h3>
                      <ul className="pl-5 space-y-1 text-gray-700 list-disc">
                        {content.map((pt, i) => (
                          <li key={i}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
          </div>
        </div>
      )}

      {/* Key Learnings */}
      {project.keyLearnings && (
        <div className="mb-16">
          <SectionHeading icon={BookOpenCheck} title="Key Learnings" />
          {Array.isArray(project.keyLearnings) ? (
            <ul className="pl-5 space-y-2 text-gray-700 list-disc">
              {project.keyLearnings.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700">{project.keyLearnings.heading}</p>
          )}
        </div>
      )}

      {/* Assets Link */}
      {project.assetsLink && (
        <div className="mb-16">
          <SectionHeading icon={FolderOpen} title="All Assets" />
          <a
            href={project.assetsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-lg font-medium text-primary hover:underline"
          >
            View Project Assets →
          </a>
        </div>
      )}
    </section>
  )
}
