export const projectData = [
  {
    id: "leaflit",
    title: "LeafLit",
    category: "Mobile App Design",
    miniDescription: "A clean, minimal mobile app for book lovers.",
    description:
      "A beautifully designed app that allows users to read, rent, and explore books, manage their profile and addresses, discover authors, and complete secure purchases—all through an elegant, minimal UI.",
    role: "UI/UX Designer – responsible for the complete design process including wireframes, user flows, and final high-fidelity prototypes.",
    duration: "3 weeks",
    tools: ["Figma"],
    assetsLink: "https://github.com/khushboodogra/LeafLit-Assets",
    coverImage:
      "https://khushboodogra.github.io/LeafLit-Assets/i-phone-frames/all.png",
    images: [
      {
        highlights: [
          "https://khushboodogra.github.io/LeafLit-Assets/i-phone-frames/2%20Screens.png",
          "https://khushboodogra.github.io/LeafLit-Assets/i-phone-frames/3%20Screens.png",
          "https://khushboodogra.github.io/LeafLit-Assets/i-phone-frames/4%20screens.png",
          "https://khushboodogra.github.io/LeafLit-Assets/i-phone-frames/all.png",
        ],
        userFlow: [
          {
            "Profile Page Prototype":
              "https://khushboodogra.github.io/LeafLit-Assets/i-phone-frames/Profile%20Edit%20Frame.png",
          },
          {
            "Book Description Prototype":
              "https://khushboodogra.github.io/LeafLit-Assets/i-phone-frames/Book%20Description%20Frame.png",
          },
        ],
        appImages: [
          "https://khushboodogra.github.io/LeafLit-Assets/app-images/all.png",
        ],
        wireframes: [
          "https://khushboodogra.github.io/LeafLit-Assets/wireframes/all.png",
        ],
      },
    ],
    videos: [
      {
        "App Overview":
          "https://khushboodogra.github.io/LeafLit-Assets/videos/overview.mp4",
      },
      {
        "Home Page":
          "https://khushboodogra.github.io/LeafLit-Assets/videos/home.mp4",
      },
      {
        "Cart Page":
          "https://khushboodogra.github.io/LeafLit-Assets/videos/cart.mp4",
      },
    ],
    story: [
      {
        "LeafLit was created to solve a familiar challenge: while book lovers enjoy exploring stories, they often face scattered, unfriendly, or cluttered apps that make discovery and reading feel like a chore. Many platforms overwhelm users with ads, poor categorization, or lack of personalization—leading to frustration instead of inspiration.":
          "",
      },
      {
        "To bring clarity and joy into this space, I followed a structured design process:":
          [
            {
              "Understanding the Reader’s Needs":
                "I began by exploring how readers currently discover and manage books across apps and physical platforms. Through competitor research and reference studies, I found that users value simplicity, personalization, and a clean reading journey—without unnecessary complexity.",
            },
            {
              "Structuring the Experience":
                "Using these insights, I shaped the information architecture and user flows. The goal was to create a seamless experience where users could sign up, browse genres, explore authors, save favorites, and manage purchases with minimal effort. Instead of overloading pages, I focused on guiding users step by step.",
            },
            {
              "From Wireframes to UI":
                "I started with low-fidelity wireframes to outline the hierarchy and flow of each page. Once I validated the structure, I moved to high-fidelity UI screens, blending modern visuals, balanced typography, and an inviting color scheme that reflected a calm reading environment.",
            },
            {
              "Prototyping Interactions":
                "To showcase the app’s usability, I built interactive prototypes that demonstrated critical flows—like browsing categories, checking book details, adding to favorites, and completing checkout. This helped me visualize the journey and refine usability before finalizing.",
            },
            {
              "Bringing It All Together":
                "Finally, I documented the complete journey into a comprehensive case study. Since the app isn’t live, I focused on self-testing and peer feedback to polish the designs. One limitation I identified was the lack of deeper personalization (like AI-driven recommendations), which would make discovery even more engaging. This is an area I’d like to explore in future versions.",
            },
          ],
      },
    ],
    keyFeatures: [
      "Onboarding & Authentication - A clean onboarding flow with sign-up/sign-in options to quickly get users started.",
      "Profile & Address Management - Simple and structured profile settings with address management for smoother checkouts.",
      "Browse by Genre - A grid-based genre selection page where readers can instantly explore categories like Thriller, Fantasy, History, Romance, and more.",
      "Author Pages - Each author is presented with their photo and name only. Tapping on an author opens a dedicated page showing all their books, grouped by genre.",
      "Library & Favorites - Users can maintain a personal library and save favorite books for quick access.",
      "Book Details - Each book has a detail page with cover, genre, rating, number of pages, description, and purchase options.",
      "Cart & Checkout - A simple shopping cart and secure checkout experience with clear CTAs for adding or buying books instantly.",
    ],
    typography: {
      font: "Inter",
      sizes: "20px, 18px, 16px",
      heading: "Semi-Bold, 20px",
      subheading: "Medium, 18px",
      body: "Medium, 16px",
    },
    colorScheme: [
      { "theme-color": "#AD5E66" },
      { "head-Text-color": "#000000" },
      { "body-text-color": "#000000" },
      { "line-color": "#D9D9D9" },
      { buttons: "#AD5E66" },
      { buttons: "#EEEEEE" },
      { "logout-button-color": "#E93748" },
      { "frame-color": "#FFEFEE" },
      { "background-color": "#FFFFFF" },
    ],
    projectOverview: [
      {
        "Why does this matter?":
          "Book lovers deserve a clean, calm, and engaging app experience to help them discover and enjoy books effortlessly.",
      },
      {
        "Who is affected?":
          "Casual readers, book renters, students, and anyone looking for a lightweight, easy-to-use book app.",
      },
      {
        "Current solutions?":
          "Apps like Amazon Kindle or Google Books are rich in features but often complex and less engaging for new users.",
      },
      {
        "Are there alternatives?":
          "Yes, but many are outdated, cluttered, or lack a clear genre-based and author-first experience.",
      },
      {
        "What’s missing?":
          "A user-centered approach focused on discovery, accessibility, and clean visual storytelling—which LeafLit addresses.",
      },
    ],
    ideationAndProcess: [
      {
        Discovery: {
          "I started by identifying frustrations readers face. I asked": [
            "How can I make browsing feel like visiting a cozy bookstore?",
            "What design choices make checkout feel safe and instant?",
          ],
        },
      },
      {
        "Research & References":
          "I analyzed top apps (Kindle, Audible, Blinkist), took inspiration from minimalist product design, and studied reading habits from surveys.",
      },
      {
        "Wireframes to High-Fidelity": [
          "Designed user flows for all major features (author, library, cart, profile, author browsing).",
          "Maintained consistency using a light grey theme.",
          "Used cards for books, modular components for author lists and genre tiles.",
        ],
      },
      {
        "Design Decisions": [
          "Confirmation Page was designed with calm colors and a clear visual hierarchy to reduce post-purchase anxiety.",
          "Author Page includes visual book previews and a light bio to build emotional connection.",
          "Genre & Home Page split content by mood and trend, avoiding decision fatigue.",
        ],
      },
      {
        "Challenges & Solutions": [
          `Difficulty balancing variety and minimalism: Solved by grouping categories under “Today's Pick,” “Trending,” and “Best Sellers.”`,
          "UI density in mobile layout: Solved using white space and collapsible sections.",
        ],
      },
      {
        "Usability Test & Validation": {
          "Since LeafLit is not public, I couldn't conduct formal usability testing. Instead:":
            [
              "I self-tested the flows multiple times.",
              "Refined UI spacing, button labels, and icons based on feedback from peers and mentors informally.",
              "This approach allowed me to stay honest while still improving based on review.",
            ],
        },
      },
    ],
    problemIdentified: {
      "Despite the popularity of book reading apps, users often face:": [
        "Cluttered UIs",
        "Lack of personalization",
        "Poor author discovery",
        "Complicated checkout flows",
        "Many apps prioritize features over simplicity, leaving readers overwhelmed.",
      ],
    },
    problemStatement:
      "Despite the abundance of digital book apps, many remain cluttered and confusing. Author discovery is hidden, checkout is complicated, and personalization feels lacking. LeafLit aims to solve this by offering a clean, simple, and engaging reading experience from browsing to checkout.",
    finalOutcomeAndImpact: {
      "What Worked:": [
        "Clean navigation with a calm reading UI",
        "Book discovery felt intuitive",
        "Personalization through profile & library worked well",
      ],
      "What Didn’t:": [
        "A few UI elements initially lacked hierarchy (now fixed)",
        "First cart screen design needed clarity in pricing (now redesigned)",
      ],
    },
    keyLearnings: {
      heading:
        "Working on LeafLit taught me how to evaluate designs without direct user testing by relying on structured self-reviews and peer feedback. I learned the importance of creating intuitive flows, documenting decisions, and making improvements even when live audience input isn’t available. This project also strengthened my ability to transform ideas into a polished, end-to-end app case study.",
    },
  },

  {
    id: "tractokart",
    title: "TractoKart",
    category: "Mobile App Design",
    miniDescription:
      "Simplifying tractor spare parts shopping for rural users.",
    description:
      "A mobile app tailored for India's rural and semi-urban population to help them easily discover, compare, and purchase tractor spare parts from the comfort of their phones.",
    role: "UI/UX Designer – responsible for the complete design process including wireframes, user flows, and final high-fidelity prototypes.",
    duration: "4 weeks",
    tools: ["Figma"],
    assetsLink: "https://github.com/khushboodogra/TracktoKart-Assets",
    coverImage:
      "https://khushboodogra.github.io/TracktoKart-Assets/i-phone-frames/multiple-screens.png",
    images: [
      {
        highlights: [
          "https://khushboodogra.github.io/TracktoKart-Assets/i-phone-frames/single-screen.png",
          "https://khushboodogra.github.io/TracktoKart-Assets/i-phone-frames/2-screens.png",
          "https://khushboodogra.github.io/TracktoKart-Assets/i-phone-frames/4-screens.png",
          "https://khushboodogra.github.io/TracktoKart-Assets/i-phone-frames/multiple-screens.png",
        ],
        userFlow: [
          {
            "Net-Banking Option Prototype":
              "https://khushboodogra.github.io/TracktoKart-Assets/i-phone-frames/payment.png",
          },
          {
            "EMI Option Prototype":
              "https://khushboodogra.github.io/TracktoKart-Assets/i-phone-frames/emi.png",
          },
          {
            "UPI Option Prototype":
              "https://khushboodogra.github.io/TracktoKart-Assets/i-phone-frames/upi.png",
          },
        ],
        appImages: [
          "https://khushboodogra.github.io/TracktoKart-Assets/app-images/all.png",
        ],
        wireframes: [
          "https://khushboodogra.github.io/TracktoKart-Assets/wireframes/all.png",
        ],
      },
    ],
    videos: [
      {
        "App Overview":
          "https://khushboodogra.github.io/TracktoKart-Assets/videos/overview.mp4",
      },
      {
        "Home Page":
          "https://khushboodogra.github.io/TracktoKart-Assets/videos/home.mp4",
      },
      {
        "Cart Page":
          "https://khushboodogra.github.io/TracktoKart-Assets/videos/cart.mp4",
      },
    ],
    story: [
      {
        "TractoKart was born from a simple but critical observation: farmers and tractor owners in India often struggle to find the right spare parts in their local areas. They depend heavily on word-of-mouth or must travel long distances just to check availability. Many digital alternatives are not built for them—they’re cluttered, not localized, or simply not trusted.":
          "",
      },
      {
        "To bring a structured design solution to this problem, I followed a clear process:":
          [
            {
              "Understanding the Market":
                "I conducted market and competitor research to identify existing gaps in the agricultural spare parts ecosystem. This helped me understand how traditional markets operate, where digital platforms fall short, and what farmers actually value in a buying experience—trust, simplicity, and easy access.",
            },
            {
              "Structuring the Experience":
                "Based on research insights, I defined the information architecture and user flows. The goal was to keep navigation simple, ensuring that even first-time app users could search for parts, browse categories, and place an order without confusion.",
            },
            {
              "From Wireframes to UI":
                "I began with low-fidelity wireframes to map out the hierarchy and structure. Once the flow felt intuitive, I moved to high-fidelity UI screens, incorporating bold visuals, clean typography, and localized design elements that built trust for the target audience.",
            },
            {
              "Prototyping Interactions":
                "To bring the designs to life, I built interactive prototypes that showcased key flows such as product search, category browsing, and payment options (Net Banking, EMI, UPI). These prototypes made the app feel real and allowed me to evaluate usability early on.",
            },
            {
              "Bringing It All Together":
                "Finally, I compiled the entire process into a detailed UX/UI case study. Since the app cannot be made live, I relied on structured self-reviews and peer feedback to refine the flows and visuals. One limitation I recognized during this phase was the lack of multi-language support—many farmers are not fluent in English, which could make adoption difficult. This is a clear area for improvement in future iterations.",
            },
          ],
      },
    ],
    keyFeatures: [
      "Search by tractor model for accurate results.",
      "Top categories & popular products for quick discovery.",
      "Bulk order discounts & special offers to encourage larger purchases.",
      "Location-based product availability for region-specific supply.",
      "Multiple payment options including Net Banking, EMI, and UPI.",
      "Profile & saved items for a personalized shopping experience.",
    ],
    typography: {
      font: "Inter",
      sizes: "24px, 20px, 16px",
      heading: "Semi-Bold, 24px",
      subheading: "Medium, 20px",
      body: "Medium, 16px",
    },
    colorScheme: [
      { "theme-color": "#2623D2" },
      { "head-Text-color": "#000000" },
      { "body-text-color": "#000000" },
      { "line-color": "#AAAAAA" },
      { buttons: "#2623D2" },
      { "logout-button-color": "#FD1818" },
      { "frame-color": "#EDEDED" },
      { "background-color": "#FFFFFF" },
    ],
    projectOverview: [
      {
        "Why does this problem matter?":
          "A tractor left unused due to a missing part can cost a farmer days of productivity and income. A digital solution can prevent such losses and bring convenience closer to rural communities.",
      },
      {
        "Who does this impact?":
          "Small-to-medium farmers, tractor owners, mechanics, and spare parts vendors in rural and semi-urban India.",
      },
      {
        "How are they living with the problem today?":
          "They depend on traveling to local cities, speaking to unreliable vendors, and struggling with inconsistent pricing and availability.",
      },
      {
        "Are there any alternatives?":
          "Some general e-commerce platforms sell parts, but they’re hard to navigate, not region-specific, and not always trustworthy.",
      },
      {
        "How good are the alternatives?":
          "They lack localized UX, vernacular language support, or clarity in parts specification.",
      },
      {
        "Are there any existing solutions that people are not aware of?":
          "A few vendors list products on OLX, social platforms, or small websites, but discoverability and trust are major concerns.",
      },
    ],
    ideationAndProcess: [
      {
        "Research & Discovery": {
          "I began with market and competitor research to map out the current landscape. Many existing platforms were either generic e-commerce sites or poorly structured spare parts portals that lacked trust and clarity.":
            [
              "Farmers often found these apps too cluttered or confusing.",
              "Search features did not match local terminology.",
              "Payment options weren’t tailored to rural communities.",
              "A major insight was language accessibility—many farmers are not comfortable with English, making app usability more challenging.",
            ],
          "This reinforced the need for a localized, farmer-first approach.":
            "",
        },
      },
      {
        "Information Architecture & User Flow": {
          "I defined:": [
            "A clear information hierarchy (Onboarding → Categories → Product Details → Cart → Checkout).",
            "Simple navigation paths so users could reach their goals within 2–3 taps.",
            "A consistent flow across all key features: product discovery, saved lists, notifications, and payment.",
            "The goal was to reduce friction and make the journey predictable yet effortless.",
          ],
        },
      },
      {
        Wireframing: {
          "I sketched low-fidelity wireframes to quickly test different layouts. This allowed me to:":
            [
              "Focus on functionality before visuals.",
              "Experiment with homepage, category, and product description layouts.",
              "Identify gaps early in the journey.",
            ],
        },
      },
      {
        "High-Fidelity UI Design": {
          "Once the structure was finalized, I created high-fidelity UI screens. My choices focused on:":
            [
              "Bold typography and icons for easy readability.",
              "Neutral backgrounds with vibrant highlights to keep focus on products.",
              "Localized aesthetics that feel clean and trustworthy.",
              "Trust-building cues like order confirmation and secure payment visuals.",
            ],
        },
      },
      {
        "Interactive Prototypes": {
          "I built clickable prototypes showcasing:": [
            "Navigation from home to categories.",
            "Search and filtering.",
            "Cart and checkout with Net Banking, EMI, UPI.",
            "Confirmation pages for user reassurance.",
          ],
        },
      },
      {
        "Refinement & Self-Validation": {
          "Since I couldn’t make the app public, I tested through structured self-reviews and peer feedback. I walked through each flow, checked consistency, and refined based on observations. This helped me identify not just UI gaps but also larger issues such as the lack of vernacular support, which could affect usability for non-English speaking farmers.":
            "",
        },
      },
    ],
    problemIdentified: {
      "": [
        "Farmers and tractor owners struggle to find spare parts in local markets, leading to delays and loss of productivity.",
        "Heavy dependence on word-of-mouth and unreliable vendors makes the buying process inconsistent.",
        "Digital alternatives exist but are cluttered, not localized, and often lack trust.",
        "Limited availability of region-specific parts causes farmers to travel long distances just to check stock.",
        "Inconsistent pricing and no clear product information add to confusion.",
        "Lack of vernacular (local language) support makes existing digital platforms difficult for non-English-speaking farmers to use.",
        "Payment options on many platforms are not tailored to rural preferences, reducing adoption.",
      ],
    },
    problemStatement:
      "Rural and semi-urban users lack access to a dedicated digital solution for ordering tractor spare parts. While the agricultural sector is evolving, its support infrastructure—like spare parts distribution—remains offline and inconsistent. On top of this, many farmers are not comfortable reading English, which makes it difficult for them to use most existing digital solutions. TractoKart is built to close this gap, though in its current version, language support remains an area for future improvement.",
    finalOutcomeAndImpact: [
      {
        "How does this solve the problem?":
          "TractoKart removes the guesswork from spare part buying. It offers clear categorization, easy checkout, and secure payment—all structured for low-tech environments. While it doesn’t yet support multiple languages, it lays a strong foundation that can be extended for vernacular users.",
      },
      {
        "Learnings & Reflections":
          "Designing for rural audiences taught me that simplicity is everything. No feature is valuable unless it’s understandable and usable without instructions.",
      },
      {
        "What Worked": [
          "Visual filters",
          "Card-based product previews",
          "Step-by-step checkout with confirmation screens",
        ],
      },
      {
        "What didn’t work?": [
          "UPI for high-cost orders",
          "Cluttered footer navigation (refined later)",
          "Single-language support limiting adoption among non-English speakers",
        ],
      },
    ],
    keyLearnings: [
      "Working on TractoKart helped me understand the importance of designing around real users and their constraints. Since the app couldn’t go live, I had to rely on research, peer reviews, and self-validation instead of real-world testing. This made me more disciplined in checking flows, spotting friction points, and refining visuals.",
      " One major takeaway was the need for vernacular support—many farmers simply don’t interact in English, and this makes even the best-designed features less usable. If I continue this project, multilingual support will be a top priority. More than anything, this experience reinforced that good design isn’t just about looking polished—it’s about removing barriers and making everyday tasks effortless for the user.",
    ],
  },
]
