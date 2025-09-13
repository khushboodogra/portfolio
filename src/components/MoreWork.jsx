import { ExternalLink, Dribbble } from "lucide-react"

const MoreWork = () => {
  const figmaWorks = [
    {
      title: "Spotify Clone App",
      description:
        "A modern, user-centered redesign of the Spotify interface, focusing on seamless music discovery and intuitive navigation.",
      image: "https://khushboodogra.github.io/More-Work-Assets/spotify.png",
      category: "UI Design",
      url: "https://dribbble.com/shots/25924809-Spotify",
    },
    {
      title: "Food Fusion App",
      description:
        "A user-friendly food ordering app designed for effortless browsing, quick customization, and a seamless ordering experience.",
      image: "https://khushboodogra.github.io/More-Work-Assets/food-fusion.png",
      category: "Mobile Design",
      url: "https://dribbble.com/shots/25924941-Food-Fusion",
    },
    {
      title: "Crypto Exchange Dashboard",
      description:
        "A sleek and intuitive crypto exchange dashboard designed for real-time trading, portfolio management, and user-focused navigation.",
      image:
        "https://khushboodogra.github.io/More-Work-Assets/crypto-dashboard.png",
      category: "Dashboard",
      url: "https://dribbble.com/shots/25924888-Crypto-Exchange-Dashboard",
    },
    {
      title: "Food Delivery App",
      description:
        "An engaging and efficient food ordering app UI/UX focused on easy navigation, quick ordering, and a delightful user journey.",
      image:
        "https://khushboodogra.github.io/More-Work-Assets/food-app-ios.png",
      category: "Mobile Design",
      url: "https://dribbble.com/shots/25927247-Food-App-IOS",
    },
    {
      title: "YTS Clone Website",
      description:
        "A minimalist and user-friendly movie torrent website design inspired by YTS, focusing on smooth browsing, clean layouts, and optimized content discovery.",
      image: "https://khushboodogra.github.io/More-Work-Assets/yts.png",
      category: "Web Design",
      url: "https://dribbble.com/shots/25924912-Yify-YTS",
    },
    {
      title: "Travel Website",
      description:
        "A seamless and visually engaging travel booking platform designed for effortless trip planning, personalized recommendations, and smooth user flow.",
      image:
        "https://khushboodogra.github.io/More-Work-Assets/travel-website.png",
      category: "Web Design",
      url: "https://dribbble.com/shots/25924903-Travel-Website",
    },
  ]

  return (
    <section>
      <div className="p-4 mx-auto mt-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            More Work
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-primary"></div>
          <p className="max-w-3xl mx-auto mb-6 text-xl text-secondary">
            Additional design projects and explorations created in Figma
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {figmaWorks.map((work, index) => (
            <div
              key={index}
              className="overflow-hidden transition-all duration-300 shadow-md bg-cream rounded-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="object-cover w-full h-48 transition-transform duration-500"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/30 to-transparent group-hover:opacity-100"></div>
                <div className="absolute top-4 right-4">
                  <div className="p-2 rounded-full bg-white/90 backdrop-blur-sm">
                    <Dribbble size={16} className="text-primary" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 text-xs font-medium rounded-full font-inter text-primary bg-primary/10">
                    {work.category}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-bold text-gray-900 font-inter">
                  {work.title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-secondary font-domine">
                  {work.description}
                </p>

                <a
                  href={work.url}
                  target="_blank"
                  className="flex items-center justify-center w-full gap-2 py-2 text-sm font-medium text-white transition-all duration-200 rounded-lg bg-primary font-inter hover:bg-primary/90 group"
                >
                  View on Dribbble
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MoreWork
