import { Mail, Linkedin, Dribbble } from "lucide-react"

const Contact = () => {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "khushboo981193@gmail.com",
      href: "mailto:khushboo981193@gmail.com",
      color: "hover:text-red-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me on LinkedIn",
      href: "https://www.linkedin.com/in/khushboo-%E2%80%8E-302325248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:text-blue-600",
    },
    {
      icon: Dribbble,
      label: "Dribbble",
      value: "View my designs on Dribbble",
      href: "https://dribbble.com/KayDogra",
      color: "hover:text-pink-500",
    },
  ]

  return (
    <section id="contact" className="px-4 py-6">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center mb-14 ">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl font-inter">
            Let's Get In Touch
          </h2>
          <div className="w-64 h-1 mx-auto mb-6 bg-primary"></div>
        </div>

        <div className="flex flex-col items-center justify-center gap-12">
          {/* Contact Information */}
          <div className="space-y-16">
            <div>
              <div className="flex items-center justify-center gap-24 space-y-6 max-[600px]:flex-col max-[600px]:gap-6 ">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 text-gray ${link.color} transition-all duration-200 group`}
                  >
                    <div className="flex items-center justify-center w-12 h-12 transition-colors rounded-full bg-primary/20 group-hover:bg-primary/30">
                      <link.icon size={20} />
                    </div>
                    <div>
                      <div className="font-medium text-gray font-inter">
                        {link.label}
                      </div>
                      <div className="text-sm font-domine">{link.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="p-6 border border-gray-400 cursor-default rounded-xl text-gray">
                Available for remote work
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
