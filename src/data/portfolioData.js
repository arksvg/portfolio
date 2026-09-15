export const portfolioData = {
  profile: {
    name: "Ratnakumar A",
    role: "Associate Cloud Engineer II",
    company: "NexTurn",
    tagline: "Building resilient cloud systems & crafting intuitive, aesthetic digital experiences.",
    roles: [
      { text: "Associate Cloud Engineer II @ NexTurn", icon: "Cloud", color: "indigo" },
      { text: "Full-Stack Web Developer", icon: "Globe", color: "sky" },
      { text: "UI/UX Designer", icon: "Sparkles", color: "purple" }
    ],
    avatar: "/assets/unnamed.jpg",
    status: {
      available: true,
      text: "Open to Collaborations & Opportunities"
    },
    contact: {
      phone: "+91 9445177941",
      email: "arksvg@gmail.com",
      location: "Sivaganga, Tamil Nadu, India",
      coordinates: { lat: 9.83996, lng: 78.48323 },
      timezone: "Asia/Kolkata",
      utcOffset: "+05:30"
    },
    bio: [
      "I am a graduate with a B.Tech in Information Technology from SCE, driven by a deep passion for web development and cloud systems.",
      "As I continue to grow in the world of technology, I am excited to connect, collaborate, and contribute to innovative solutions in the field."
    ],
    socials: {
      linkedin: {
        title: "LinkedIn",
        handle: "arksvg",
        url: "https://linkedin.com/in/arksvg",
        color: "#0A66C2"
      },
      github: {
        title: "GitHub",
        handle: "arksvg",
        url: "https://github.com/arksvg",
        color: "#24292e"
      },
      instagram: {
        title: "Instagram",
        handle: "@arksvg",
        url: "https://instagram.com/arksvg",
        followers: "712",
        color: "#E1306C"
      },
      whatsapp: {
        title: "WhatsApp",
        url: "https://api.whatsapp.com/send/?phone=9445177941&text=Hi%21&type=phone_number&app_absent=0",
        color: "#25D366"
      },
      gmail: {
        title: "Gmail",
        url: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlFmXZlKWgRSXpKjnsmfVcwRsnFjMlfpHqrDBKWnxSmggWTRqmfzXVrqgWsqVXnZhJzMrL",
        color: "#EA4335"
      },
      hackerrank: {
        title: "HackerRank",
        handle: "arksvg",
        url: "https://www.hackerrank.com/profile/arksvg",
        color: "#00EA64"
      },
      resume: {
        title: "Resume",
        url: "https://drive.google.com/file/d/1MAPn84UAtn8vQkSbnWqnt4Gh0aubdhtM/view?usp=sharing",
        color: "#4285F4"
      }
    },
    skillsOverview: [
      "Cloud Infrastructure", "React.js", "Redux", "MediaPipe", "Angular", 
      "Spring Boot", "UI/UX Design", "Figma", "Tailwind CSS", "Next.js", "Node.js"
    ],
    stats: [
      { label: "Client & Core Projects", value: "10+", sub: "Production Built" },
      { label: "Hackathon Wins", value: "1st Place", sub: "UYIR 2025" },
      { label: "Design Prototypes", value: "10+", sub: "Figma & UX" }
    ]
  },

  sections: [
    {
      id: "about",
      title: "About Me",
      icon: "User",
      description: "My background, education, and technical drive.",
      items: [
        {
          id: "about_1",
          type: "bio_card",
          title: "Education & Foundation",
          text: "I am a graduate with a B.Tech in Information Technology from SCE, driven by a deep passion for web development and cloud engineering.",
          highlight: "B.Tech in IT • SCE Graduate",
          accentColor: "from-blue-500/20 to-indigo-500/20",
          icon: "GraduationCap",
          colSpan: "col-span-12 md:col-span-6"
        },
        {
          id: "about_2",
          type: "bio_card",
          title: "Vision & Growth",
          text: "As I continue to grow in the world of technology, I am excited to connect, collaborate, and contribute to innovative solutions in the field.",
          highlight: "Continuous Growth • Innovation",
          accentColor: "from-purple-500/20 to-pink-500/20",
          icon: "Rocket",
          colSpan: "col-span-12 md:col-span-6"
        }
      ]
    },
    {
      id: "client_work",
      title: "Client-Side & Featured Production Projects",
      icon: "Sparkles",
      description: "Production web applications, interactive canvas landmarks, modular ERP architecture, and live commercial sites.",
      items: [
        {
          id: "client_care_space",
          name: "Care Space",
          title: "Care Space",
          tagline: "Healthcare Web Application",
          subtitle: "Healthcare Web Application",
          category: "Featured Production Project",
          description: "A production healthcare application with a canvas-based visualization layer for rendering real-time pose landmarks and user interactions.",
          problem: "Healthcare interfaces needed a touch-free, real-time way to track posture and gesture for patient interaction, without sacrificing UI responsiveness.",
          features: [
            "Canvas-based rendering of pose landmarks in real time",
            "Gesture and posture tracking built on MediaPipe",
            "Redux-managed state for seamless real-time UI updates"
          ],
          contribution: "Built the canvas visualization layer and the real-time gesture-tracking UI, and managed application state through Redux to keep updates smooth under continuous landmark data.",
          tech: ["React", "Redux", "MediaPipe", "Canvas API"],
          tags: ["React", "Redux", "MediaPipe", "Canvas API"],
          motif: "landmarks",
          link: null,
          href: null,
          glowColor: "rgba(56, 189, 248, 0.25)",
          featured: true,
          colSpan: "col-span-12 md:col-span-6"
        },
        {
          id: "client_admin_erp",
          name: "Admin ERP System",
          title: "Admin ERP System",
          tagline: "Modular Admin & Resource Platform",
          subtitle: "Modular Admin & Resource Platform",
          category: "Featured Production Project",
          description: "An ERP system built around a modular, reusable component architecture spanning both frontend and backend.",
          problem: "The system needed authentication, authorization, and data management to be consistent and reusable across many admin modules rather than rebuilt per screen.",
          features: [
            "Modular, reusable component architecture on both frontend and backend",
            "Integrated authentication and authorization",
            "Centralized data management services"
          ],
          contribution: "Designed the reusable component structure and integrated the backend services powering authentication, authorization, and data management.",
          tech: ["React", "Spring Boot", "REST APIs"],
          tags: ["React", "Spring Boot", "REST APIs"],
          motif: "modules",
          link: null,
          href: null,
          glowColor: "rgba(168, 85, 247, 0.25)",
          featured: true,
          colSpan: "col-span-12 md:col-span-6"
        },
        {
          id: "client_sams",
          name: "Sam's Culinary Art Class",
          title: "Sam's Culinary Art Class",
          tagline: "Culinary Academy & Workshop Platform",
          subtitle: "Culinary Academy & Workshop Platform",
          category: "Live Client Site",
          description: "Premium interactive culinary academy website featuring baking workshop schedules, hands-on masterclasses, and student enrollment workflows.",
          tech: ["React", "Tailwind CSS", "Workshops", "Booking Flow"],
          tags: ["React", "Tailwind CSS", "Workshops", "Booking Flow"],
          motif: "culinary",
          link: "https://www.samsculinaryartclass.com/",
          href: "https://www.samsculinaryartclass.com/",
          sourceType: "live",
          glowColor: "rgba(245, 158, 11, 0.25)",
          colSpan: "col-span-12 md:col-span-6"
        },
        {
          id: "client_jeeva",
          name: "Jeeva Associates",
          title: "Jeeva Associates",
          tagline: "Corporate Consulting & Tax Advisory",
          subtitle: "Corporate Consulting & Tax Advisory",
          category: "Live Client Site",
          description: "Authoritative corporate firm digital presence providing comprehensive tax consulting, auditing services, and direct client consultation scheduling.",
          tech: ["Next.js", "Consulting", "Auditing", "Lead Gen"],
          tags: ["Next.js", "Consulting", "Auditing", "Lead Gen"],
          motif: "corporate",
          link: "https://jeevassociates.com/",
          href: "https://jeevassociates.com/",
          sourceType: "live",
          glowColor: "rgba(59, 130, 246, 0.25)",
          colSpan: "col-span-12 md:col-span-6"
        },
        {
          id: "client_dfs",
          name: "DFS Home Bakes",
          title: "DFS Home Bakes",
          tagline: "Artisan Bakery & Custom Cake Shop",
          subtitle: "Artisan Bakery & Custom Cake Shop",
          category: "Live Client Site",
          description: "Delightful custom cake showcase and bakery ordering platform with rich dessert menus, flavor catalogs, and direct WhatsApp order integrations.",
          tech: ["React", "WhatsApp Commerce", "Bakery UI", "Vercel"],
          tags: ["React", "WhatsApp Commerce", "Bakery UI", "Vercel"],
          motif: "bakery",
          link: "https://dfshomebakes.vercel.app/",
          href: "https://dfshomebakes.vercel.app/",
          sourceType: "live",
          glowColor: "rgba(236, 72, 153, 0.25)",
          colSpan: "col-span-12 md:col-span-6"
        },
        {
          id: "client_an_microgreens",
          name: "AN Microgreens",
          title: "AN Microgreens",
          tagline: "Organic Superfoods & Urban Farming",
          subtitle: "Organic Superfoods & Urban Farming",
          category: "Live Client Site",
          description: "Modern AgriTech and organic superfoods storefront promoting fresh microgreens cultivation, health benefits, and local harvest subscriptions.",
          tech: ["React", "AgriTech", "Organic Foods", "Vercel"],
          tags: ["React", "AgriTech", "Organic Foods", "Vercel"],
          motif: "microgreens",
          link: "https://an-microgreens.vercel.app/",
          href: "https://an-microgreens.vercel.app/",
          sourceType: "live",
          glowColor: "rgba(16, 185, 129, 0.25)",
          colSpan: "col-span-12 md:col-span-6"
        },
        {
          id: "client_rubi_masala",
          name: "Rubi Masala",
          title: "Rubi Masala",
          tagline: "Authentic Traditional Spice Blends",
          subtitle: "Authentic Traditional Spice Blends",
          category: "Live Client Site",
          description: "Vibrant food brand showcase highlighting authentic handpicked spice formulations, traditional grinding purity, and bulk distribution channels.",
          tech: ["React", "Brand Identity", "Spice Processing", "Catalog"],
          tags: ["React", "Brand Identity", "Spice Processing", "Catalog"],
          motif: "spice",
          link: "https://rubimasala.vercel.app/",
          href: "https://rubimasala.vercel.app/",
          sourceType: "live",
          glowColor: "rgba(234, 88, 12, 0.25)",
          colSpan: "col-span-12 md:col-span-6"
        },
        {
          id: "client_varma_sakshi",
          name: "Varma Sakshi",
          title: "Varma Sakshi",
          tagline: "Traditional Varma Therapy & Wellness",
          subtitle: "Traditional Varma Therapy & Wellness",
          category: "Live Client Site",
          description: "Holistic healing portal detailing traditional Indian Varma therapy techniques, therapeutic treatments, and patient consultation booking.",
          tech: ["React", "Holistic Health", "Varma Therapy", "Appointments"],
          tags: ["React", "Holistic Health", "Varma Therapy", "Appointments"],
          motif: "wellness",
          link: "https://varmasakshi.com/",
          href: "https://varmasakshi.com/",
          sourceType: "live",
          glowColor: "rgba(20, 184, 166, 0.25)",
          colSpan: "col-span-12 md:col-span-6"
        },
        {
          id: "client_violinist",
          name: "Violinist.in",
          title: "Violinist.in",
          tagline: "Concert Artist & Musical Performances",
          subtitle: "Concert Artist & Musical Performances",
          category: "Live Client Site",
          description: "Artistic classical & contemporary violinist portfolio featuring concert repertoire, event booking inquiries, and high-impact media gallery.",
          tech: ["React", "Music Portfolio", "Concert Booking", "Media UI"],
          tags: ["React", "Music Portfolio", "Concert Booking", "Media UI"],
          motif: "violin",
          link: "https://violinist.in/",
          href: "https://violinist.in/",
          sourceType: "live",
          glowColor: "rgba(168, 85, 247, 0.25)",
          colSpan: "col-span-12 md:col-span-6"
        },
        {
          id: "client_sundaram_jewellery",
          name: "Sundaram Jewellery",
          title: "Sundaram Jewellery",
          tagline: "Luxury Gold & Diamond Collection",
          subtitle: "Luxury Gold & Diamond Collection",
          category: "Live Client Site",
          description: "Exquisite luxury jewellery storefront featuring bridal ornaments, daily gold rate tickers, festive catalog browsing, and showroom directions.",
          tech: ["React", "Luxury Retail", "Jewellery Store", "E-Catalog"],
          tags: ["React", "Luxury Retail", "Jewellery Store", "E-Catalog"],
          motif: "jewellery",
          link: "https://sundaram-jewellery.vercel.app/",
          href: "https://sundaram-jewellery.vercel.app/",
          sourceType: "live",
          glowColor: "rgba(245, 158, 11, 0.25)",
          colSpan: "col-span-12 md:col-span-6"
        }
      ]
    },
    {
      id: "projects",
      title: "My Projects & Hackathons",
      icon: "FolderGit2",
      description: "Full-stack web applications, AI chatbots, and cloud infrastructure tools.",
      items: [
        {
          id: "proj_1",
          title: "UYIR Hackathon - Namma Padhai",
          category: "Hackathon Winner",
          description: "Award-winning road safety and navigation optimization platform developed for the UYIR Hackathon.",
          tags: ["Hackathon", "Web Platform", "Smart Mobility", "Full Stack"],
          image: "/assets/users_cluee7fz4036qqd0171ygrjx3_PRh07sQGtpubKbwH-Screenshot 2025-02-16 130604.png",
          href: "https://github.com/arksvg/Namma-Padhai",
          sourceType: "github",
          featured: true,
          colSpan: "col-span-12 md:col-span-6"
        },
        {
          id: "proj_2",
          title: "Infra Builder Tool",
          category: "Cloud Engineering",
          description: "NexTurn Infrastructure provisioning tool designed to automate cloud stack creation and configuration.",
          tags: ["Cloud Infra", "Automation", "DevOps", "NexTurn"],
          image: "/assets/users_cluee7fz4036qqd0171ygrjx3_WBbIDkw1yac5LeZ8-Screenshot 2024-10-04 220628.png",
          href: "https://github.com/arksvg/InfraBuilder-NT",
          sourceType: "github",
          colSpan: "col-span-12 md:col-span-6"
        },
        {
          id: "proj_3",
          title: "Admin-Module-ERP-Project",
          category: "Enterprise Software",
          description: "Comprehensive enterprise resource planning administration dashboard with robust role-based access control.",
          tags: ["ERP", "Admin Dashboard", "Enterprise", "RBAC"],
          image: "/assets/users_cluee7fz4036qqd0171ygrjx3_4QbmPPMziZg0RF57-Admin.png",
          href: "https://github.com/arksvg/Admin-Module-ERP-Project",
          sourceType: "github",
          colSpan: "col-span-12 md:col-span-6"
        },
        {
          id: "proj_4",
          title: "Bookstore Application",
          category: "Full Stack",
          description: "Full-stack bookstore management application built with Angular frontend and Spring Boot RESTful microservices.",
          tags: ["Angular", "Spring Boot", "REST API", "Java", "SQL"],
          image: "/assets/users_cluee7fz4036qqd0171ygrjx3_oHK3hEuArzchN60y-Bookstore.png",
          href: "https://github.com/arksvg/Bookstore-Application-Project",
          sourceType: "github",
          colSpan: "col-span-12 md:col-span-6"
        },
        {
          id: "proj_5",
          title: "Currency Converter",
          category: "Live Web App",
          description: "Real-time exchange rate calculation web application deployed live on Netlify with modern responsive UI.",
          tags: ["React / Vite", "Live Demo", "Netlify", "Exchange API"],
          image: "/assets/screenshot(1).jpeg",
          favicon: "/assets/sites_favicons_aHR0cHM6Ly9udC1jdXJyZW5jeS1jb252ZXJ0ZXIubmV0bGlmeS5hcHAvdml0ZS5zdmc=.svg",
          href: "https://nt-currency-converter.netlify.app/",
          sourceType: "live",
          colSpan: "col-span-12 md:col-span-6"
        },
        {
          id: "proj_6",
          title: "Letta Chat",
          category: "AI & Chat System",
          description: "Intelligent conversational interface and chatbot application built for seamless communication workflows.",
          tags: ["AI Chat", "Letta", "NLP", "Real-time UI"],
          image: "/assets/users_cluee7fz4036qqd0171ygrjx3_504kHD0nDN2RfIXm-output 2.png",
          href: "https://github.com/arksvg/letta-chat",
          sourceType: "github",
          colSpan: "col-span-12 md:col-span-6"
        },
        {
          id: "proj_7",
          title: "GenAI Hackathon - Web Based Chatbot",
          category: "GenAI / Hackathon",
          description: "Generative AI powered interactive chatbot developed during the GenAI Hackathon for specialized query handling.",
          tags: ["GenAI", "LLM", "Chatbot", "Hackathon"],
          image: "/assets/users_cluee7fz4036qqd0171ygrjx3_Q9xDLy81IB6m4dl6-NTiu.png",
          href: "https://github.com/arksvg/GenAI-Hackathon--Web-Based-Chatbot",
          sourceType: "github",
          colSpan: "col-span-12 md:col-span-6"
        }
      ]
    },
    {
      id: "achievements",
      title: "Achievements",
      icon: "Trophy",
      description: "Recognitions, awards, and prestigious milestones.",
      items: [
        {
          id: "ach_1",
          title: "UYIR Hackathon - Winners | 2025",
          subtitle: "1st Place Champions",
          category: "Hackathon Victory",
          description: "Secured first prize at the prestigious UYIR Hackathon 2025 for innovation in traffic solutions.",
          tags: ["1st Place", "UYIR 2025", "TheNexTurnShows", "Video Feature"],
          image: "/assets/users_cluee7fz4036qqd0171ygrjx3_fPsXOdOSxLnW8fo9-Screenshot 2025-04-20 010628.png",
          href: "https://www.youtube.com/watch?v=Usdmuwjqqxg&ab_channel=TheNexTurnShows",
          sourceType: "youtube",
          badge: "1st Prize",
          colSpan: "col-span-12 md:col-span-6"
        },
        {
          id: "ach_2",
          title: "Best NSS Volunteer Award | 2022",
          subtitle: "National Service Scheme Recognition",
          category: "Leadership & Community",
          description: "Conferred the Best NSS Volunteer Award in 2022 for outstanding dedication to social welfare initiatives.",
          tags: ["NSS Award", "Social Service", "Leadership", "Honor"],
          image: "/assets/users_cluee7fz4036qqd0171ygrjx3_0igHMlEeDDykERKm-Screenshot 2025-04-20 010814.png",
          badge: "Honor Award",
          colSpan: "col-span-12 md:col-span-6 md:row-span-2"
        },
        {
          id: "ach_3",
          title: "Best OutGoing Student Award | SCE | 2023",
          subtitle: "Academic & Extracurricular Excellence",
          category: "Institutional Honor",
          description: "Awarded Best OutGoing Student at SCE (2023 batch) honoring consistent academic and leadership excellence.",
          tags: ["SCE 2023", "Valedictorian Honor", "Excellence"],
          image: "/assets/users_cluee7fz4036qqd0171ygrjx3_rp5DiEZYBY33RsAQ-WhatsApp Image 2025-04-20 at 01.13.00_31c3b122.jpg",
          badge: "Best OutGoing Student",
          colSpan: "col-span-12 md:col-span-6"
        }
      ]
    },
    {
      id: "hackerrank",
      title: "HackerRank Profile",
      icon: "Terminal",
      description: "Algorithmic problem solving and coding challenges.",
      items: [
        {
          id: "hr_1",
          title: "HackerRank Competitive Coding",
          subtitle: "@arksvg",
          category: "Problem Solving",
          description: "Continuous problem-solving practice in algorithms, data structures, and core programming languages.",
          tags: ["Algorithms", "Data Structures", "HackerRank", "Problem Solving"],
          image: "/assets/users_cluee7fz4036qqd0171ygrjx3_2waaawXryRbGAp2l-Screenshot 2025-04-20 220004.png",
          href: "https://www.hackerrank.com/profile/arksvg",
          sourceType: "hackerrank",
          colSpan: "col-span-12 md:col-span-12"
        }
      ]
    },
    {
      id: "figma",
      title: "Figma Skills",
      icon: "Palette",
      description: "Interactive UI/UX prototypes, app redesigns, and user experience concepts.",
      items: [
        {
          id: "fig_1",
          title: "Web Chat Design Prototype",
          subtitle: "Interactive UI/UX Case Study",
          category: "Interactive Prototype",
          description: "Modern desktop & web conversational interface featuring intuitive messaging flows, clean hierarchy, and user status indicators.",
          tags: ["Figma Prototype", "Chat UI", "UX Case Study", "Design System"],
          image: "/assets/users_cluee7fz4036qqd0171ygrjx3_CBStYAVEDj4sDTjW-1 Web.png",
          href: "https://www.figma.com/proto/vofmNpuEcaO0hg2nhbnCpb/Ratnakumar-A?page-id=1%3A11&type=design&node-id=1-11&viewport=-1430%2C148%2C0.23&t=LsrQBWkL4YADFRyD-1&scaling=scale-down&starting-point-node-id=415%3A337&mode=design",
          sourceType: "figma",
          featured: true,
          colSpan: "col-span-12 md:col-span-6 md:row-span-2"
        },
        {
          id: "fig_2",
          title: "Spotify Prototype : Redesign",
          subtitle: "Audio Streaming Experience",
          category: "App Redesign",
          description: "Elevated Spotify mobile player experience with streamlined queue controls and high-impact visual aesthetics.",
          tags: ["Figma", "Spotify Redesign", "Mobile UX", "Micro-interactions"],
          image: "/assets/users_cluee7fz4036qqd0171ygrjx3_CfSYL7BZRB5vrjKi-Spotify.png",
          href: "https://www.figma.com/proto/vofmNpuEcaO0hg2nhbnCpb/Ratnakumar-A?page-id=1%3A4&type=design&node-id=51-3&viewport=181%2C-1102%2C0.35&t=pbPEOugwVIqxXGXP-1&scaling=scale-down&starting-point-node-id=49%3A38&mode=design",
          sourceType: "figma",
          colSpan: "col-span-12 md:col-span-6"
        },
        {
          id: "fig_3",
          title: "Calculator Design",
          subtitle: "Clean Utility UI",
          category: "Component Design",
          description: "Sleek, minimalist calculator interface with tactile button styling and refined layout proportions.",
          tags: ["Figma", "Calculator UI", "Clean Aesthetic", "UI Kit"],
          image: "/assets/users_cluee7fz4036qqd0171ygrjx3_S9EXNHkQPZ6Bpl2g-Calc.png",
          href: "https://www.figma.com/proto/vofmNpuEcaO0hg2nhbnCpb/Ratnakumar-A?page-id=0%3A1&type=design&node-id=44-24&viewport=223%2C312%2C0.1&t=VjY0xw7Daq4I1gsk-1&scaling=scale-down&mode=design",
          sourceType: "figma",
          colSpan: "col-span-12 md:col-span-6"
        },
        {
          id: "fig_4",
          title: "YouTube Premium Prototype : Redesign",
          subtitle: "Video Streaming Redesign",
          category: "Media UX",
          description: "Modernized YouTube Premium experience with seamless video controls, intuitive playlists, and gesture navigation.",
          tags: ["Figma", "YouTube Redesign", "Video Player", "Interactive Prototype"],
          image: "/assets/users_cluee7fz4036qqd0171ygrjx3_uIUss4t5Ra5uCLNp-YT.png",
          href: "https://www.figma.com/proto/vofmNpuEcaO0hg2nhbnCpb/Ratnakumar-A?page-id=1%3A8&type=design&node-id=155-28&viewport=401%2C321%2C0.32&t=TMrT1Vh3ZTDAW7lv-1&scaling=scale-down&starting-point-node-id=155%3A28&mode=design",
          sourceType: "figma",
          colSpan: "col-span-12 md:col-span-6"
        },
        {
          id: "fig_5",
          title: "UX Carousel's",
          subtitle: "Automotive UX Showcase",
          category: "Design Portfolio",
          description: "Curated collection of UX carousels and visual design showcases hosted on Google Drive.",
          tags: ["Google Drive", "UX Carousels", "Visual Design", "Design Assets"],
          image: "/assets/users_cluee7fz4036qqd0171ygrjx3_tmLJLNUP9h4bhFUr-Car.jpg",
          favicon: "/assets/sites_favicons_aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2Zhdmljb24uaWNv.ico",
          href: "https://drive.google.com/drive/folders/10aBpFSUFhqLT1tW-cFTW7T5eG0C8rlgh?usp=sharing",
          sourceType: "drive",
          colSpan: "col-span-12 md:col-span-6"
        }
      ]
    },
    {
      id: "connect",
      title: "Let's Connect",
      icon: "Handshake",
      description: "Direct channels to get in touch, discuss opportunities, or collaborate.",
      items: [
        {
          id: "conn_gmail",
          title: "Gmail",
          subtitle: "arksvg@gmail.com",
          category: "Email",
          icon: "Mail",
          href: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlFmXZlKWgRSXpKjnsmfVcwRsnFjMlfpHqrDBKWnxSmggWTRqmfzXVrqgWsqVXnZhJzMrL",
          image: "/assets/screenshot.jpeg",
          favicon: "/assets/sites_favicons_aHR0cHM6Ly9tYWlsLmdvb2dsZS5jb20vZmF2aWNvbi5pY28=.ico",
          color: "#EA4335",
          colSpan: "col-span-6 md:col-span-3"
        },
        {
          id: "conn_linkedin",
          title: "LinkedIn",
          subtitle: "in/arksvg",
          category: "Professional Network",
          icon: "Linkedin",
          href: "https://linkedin.com/in/arksvg",
          color: "#0A66C2",
          colSpan: "col-span-6 md:col-span-3"
        },
        {
          id: "conn_whatsapp",
          title: "WhatsApp",
          subtitle: "+91 9445177941",
          category: "Direct Messaging",
          icon: "MessageCircle",
          href: "https://api.whatsapp.com/send/?phone=9445177941&text=Hi%21&type=phone_number&app_absent=0",
          favicon: "/assets/sites_favicons_aHR0cHM6Ly9zdGF0aWMud2hhdHNhcHAubmV0L3JzcmMucGhwL3Y0L3l6L3IvdWpUWTlpX0poczEucG5n.png",
          color: "#25D366",
          colSpan: "col-span-6 md:col-span-3"
        },
        {
          id: "conn_instagram",
          title: "Instagram",
          subtitle: "@arksvg",
          category: "Social",
          followers: "712",
          icon: "Instagram",
          href: "https://instagram.com/arksvg",
          color: "#E1306C",
          colSpan: "col-span-6 md:col-span-3"
        },
        {
          id: "conn_resume",
          title: "Ratnakumar Resume",
          subtitle: "Official CV Document",
          category: "Resume / CV",
          icon: "FileText",
          image: "/assets/users_cluee7fz4036qqd0171ygrjx3_RpAo1mRNipKrQ0nK-WhatsApp Image 2025-04-07 at 19.34.06_6f7df33a.jpg",
          favicon: "/assets/sites_favicons_aHR0cHM6Ly9zc2wuZ3N0YXRpYy5jb20vaW1hZ2VzL2JyYW5kaW5nL3Byb2R1Y3QvMXgvZHJpdmVfMjAyMHE0XzMyZHAucG5n.png",
          href: "https://drive.google.com/file/d/1MAPn84UAtn8vQkSbnWqnt4Gh0aubdhtM/view?usp=sharing",
          color: "#4285F4",
          colSpan: "col-span-12 md:col-span-6"
        },
        {
          id: "conn_map",
          type: "map_widget",
          title: "Sivaganga, Tamil Nadu",
          subtitle: "Based in South India • Available Worldwide",
          category: "Location",
          href: "https://www.google.com/maps/@9.83996160000001,78.4832343999999,13.001486700740298z",
          colSpan: "col-span-12 md:col-span-6"
        }
      ]
    }
  ]
};
