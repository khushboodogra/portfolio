export default function About() {
  return (
    <div className="flex flex-col items-center w-full px-4 py-6">
      <div className="w-full max-w-6xl px-4 mx-auto space-y-12 sm:px-6 lg:px-8">
        {/* Row: Image + Heading */}
        <div className="flex flex-col items-center justify-center gap-6 text-center lg:flex-row lg:justify-center lg:text-center">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src="/portrait.png"
              alt="Khushboo"
              className="object-cover object-top rounded-full shadow-lg w-52 h-52"
            />
          </div>

          {/* Heading */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] font-bold text-gray-900 font-inter">
            Hello, I'm Khushboo
          </h3>
        </div>

        {/* Description Section */}
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg leading-relaxed text-left text-secondary font-domine">
                Hi, I'm Khushboo — a passionate and detail-oriented UI/UX
                Designer with a creative mindset and a strong foundation in
                digital communication. My journey began in digital marketing,
                where I gained two years of hands-on experience working with
                diverse organizations, followed by six months as a freelancer.
              </p>
              <p className="text-lg leading-relaxed text-left text-secondary font-domine">
                Over time, I discovered that my true passion lies in design —
                particularly mobile app design — which inspired me to pivot into
                the world of UI/UX. I've been dedicatedly learning and evolving
                in this field ever since, constantly refining my skills and
                staying up-to-date with the latest trends and tools.
              </p>
              <p className="text-lg leading-relaxed text-left text-secondary font-domine">
                Outside of work, I find inspiration in music and often blend
                creativity with curiosity in everything I do. I'm now looking
                forward to contributing to a dynamic organization where I can
                bring value through thoughtful design and continue growing
                professionally.
              </p>
              <div className="flex flex-wrap items-center justify-start gap-3">
                <h3 className="text-lg font-bold text-gray-900 font-inter">
                  Skills:
                </h3>
                <div className="flex flex-wrap gap-3 ml-3">
                  {[
                    "UI/UX Design",
                    "Mobile App Design",
                    "Figma",
                    "Digital Marketing",
                    "User Research",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary font-inter"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
