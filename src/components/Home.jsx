import { Link } from "react-router-dom"

export default function Home() {
  return (
    <section
      className="flex items-center justify-center px-6 py-16 lg:py-24"
      style={{ minHeight: "calc(100vh - 64px)" }} // Adjust for navbar height
    >
      <div className="w-full mx-auto text-center max-w-7xl">
        <div className="space-y-12 animate-fade-in-up">
          <h1
            className="mb-8 pb-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent
            sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.3]"
          >
            Transforming Ideas into User-Centered Experiences, Where Creativity
            Meets Purposeful Design
          </h1>
          <p className="max-w-4xl mx-auto mb-8 text-base leading-relaxed text-secondary font-domine sm:text-lg md:text-xl lg:text-2xl">
            With a keen eye for detail and a user-first mindset, I create
            interfaces that empower users and elevate brands. Designing for
            impact fuels my passion every single day. I’m dedicated to blending
            creativity with strategy, shaping designs that are not only
            beautiful but also intuitive and impactful. UI/UX design isn’t just
            my skill — it’s my passion.
          </p>
          <div className="flex flex-col justify-center gap-6 sm:flex-row sm:justify-center">
            <Link
              to={"/projects"}
              className="px-8 py-4 text-white transition-all duration-200 rounded-full bg-primary hover:bg-primary-dark"
            >
              View My Work
            </Link>
            <Link
              to={"/contact"}
              className="px-8 py-4 font-medium transition-all duration-200 border-2 rounded-full border-primary text-primary hover:bg-primary hover:text-white"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
