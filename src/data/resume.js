export const profile = {
  name: "Ratnakumar A",
  role: "Fullstack Developer (React + Java with Spring Boot)",
  company: "Nexturn Private Limited",
  title: "Associate Full Stack Developer L3",
  location: "Tamil Nadu, India",
  headline: "Fullstack Developer (React + Java with Spring Boot) | Associate Full Stack Developer L3 @ NexTurn",
  experienceYears: "3+ Years",
  summary: "Fullstack Developer with 3+ years of overall experience building scalable and high-performance web applications using React, Java and Springboot. Skilled in designing intuitive user interfaces, optimizing rendering performance, creating and integrating REST APIs for dynamic data-driven applications. Proficient in modern workflows with GitHub Actions and Agile methodologies, with a strong focus on usability, performance, and seamless user experience.",
  bio: "Fullstack Developer with 3+ years of experience specializing in React, Java, and Spring Boot. Building scalable web architectures, AI gesture-tracking healthcare platforms, and high-performance microservices.",
  avatar: "/assets/profile_photo.jpg",
  contact: {
    email: "arksvg@gmail.com",
    phone: "+91-9445177941",
    location: "Tamil Nadu, India",
    nativeLocation: "Sivaganga, Tamil Nadu, India",
    coordinates: { lat: 9.83996, lng: 78.48323 }, // Tamil Nadu, India
    timezone: "Asia/Kolkata",
    utcOffset: "+05:30"
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/arksvg/",
    github: "https://github.com/arksvg",
    instagram: "https://instagram.com/arksvg",
    whatsapp: "https://api.whatsapp.com/send/?phone=9445177941&text=Hi%21&type=phone_number&app_absent=0",
    hackerrank: "https://www.hackerrank.com/profile/arksvg",
    resume: "https://drive.google.com/file/d/1MAPn84UAtn8vQkSbnWqnt4Gh0aubdhtM/view?usp=sharing"
  },
  stats: [
    { label: "Experience", value: "3+ Years", sub: "React & Spring Boot" },
    { label: "Academic CGPA", value: "8.98", sub: "B.Tech IT • Saranathan" },
    { label: "Hackathon Victory", value: "1st Place", sub: "UYIR State Level 2025" },
    { label: "MobAiHackathon", value: "2nd Prize", sub: "NexTurn On-the-Spot Award" }
  ],
  technicalSkills: {
    languages: ["Java", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
    frontend: ["React", "Redux", "Next.js", "MUI", "Ant Design", "Tailwind CSS", "Canvas API"],
    backend: ["Spring Boot", "REST API Development", "JPA", "Hibernate", "MVC Architecture", "Microservices"],
    databases: ["MongoDB", "MySQL"],
    apiIntegration: ["REST API Integration", "Axios", "Fetch API", "JSON Handling", "Swagger"],
    toolsWorkflow: ["Git", "GitHub Actions", "VS Code", "Postman", "JIRA", "ClickUp", "Figma", "Bitbucket", "Strapi"],
    testingDev: ["Browser DevTools", "Debugging", "Performance Tuning"],
    methodologies: ["Agile", "Scrum"]
  },
  skills: {
    frontend: ["React", "Redux", "Next.js", "TypeScript", "Tailwind CSS", "MUI", "Canvas API"],
    backend: ["Java", "Spring Boot", "REST APIs", "Microservices", "JPA / Hibernate", "MySQL", "MongoDB"],
    cloud: ["GitHub Actions", "CI/CD", "Postman", "Swagger", "Git & Bitbucket", "Vite", "VS Code"],
    design: ["Figma UI/UX", "Responsive Design", "Design Systems", "Interactive Wireframing"]
  }
};

export const professionalExperience = [
  {
    id: "nexturn_l3",
    role: "Associate Full Stack Developer L3",
    company: "Nexturn Private Limited",
    location: "Tamil Nadu, India",
    period: "Jan 2024 – Present",
    type: "Full-Time",
    highlights: [
      "Developed scalable and responsive UI components using ReactJS and Redux for production healthcare applications.",
      "Improved application performance by 25% through optimized state management and lazy loading strategies.",
      "Designed and integrated RESTful APIs using Spring Boot, handling request validation, business logic, and JSON-based data exchange; implemented MediaPipe 33-point landmark model–based gesture and pose detection to enhance user interaction.",
      "Worked with CI/CD pipelines using GitHub Actions for build and deployment automation."
    ],
    skills: ["React", "Redux", "Spring Boot", "MediaPipe", "REST APIs", "GitHub Actions", "CI/CD"]
  },
  {
    id: "nexturn_intern",
    role: "Software Engineer Intern",
    company: "Nexturn Private Limited",
    location: "Tamil Nadu, India",
    period: "Sep 2022 – Dec 2023",
    type: "Internship",
    highlights: [
      "Improved API response time by 20% using Java and Spring Boot through optimized backend logic, request handling, and REST API performance tuning.",
      "Developed and tested REST APIs, including request/response handling and validation."
    ],
    skills: ["Java", "Spring Boot", "REST APIs", "Performance Tuning", "API Validation"]
  }
];

export const educationData = [
  {
    id: "edu_mba",
    degree: "Master of Business Administration (MBA) – Project Management",
    institution: "Alagappa University",
    period: "2026 – 2027",
    type: "Postgraduate Degree",
    status: "First Class with Distinction",
    details: "Pursuing an MBA in Project Management (2026–2027) with First Class with Distinction.",
    link: "https://www.linkedin.com/in/arksvg/"
  },
  {
    id: "edu_btech",
    degree: "Bachelor of Technology – IT",
    institution: "Saranathan College of Engineering, Trichy",
    period: "2019 – 2023",
    type: "Full-Time",
    cgpa: "8.98",
    details: "Graduated with 8.98 CGPA. Recognized as Best Outgoing Student for the 2023 batch."
  }
];

export const certificationsData = [
  {
    title: "Frontend Developer | React Certification",
    issuer: "HackerRank",
    year: "2025"
  },
  {
    title: "Object-Oriented Programming with Java",
    issuer: "edX",
    year: "2024"
  },
  {
    title: "Springboot Certification",
    issuer: "Amigoscode",
    year: "2023"
  },
  {
    title: "Java Programming Masterclass",
    issuer: "Udemy",
    year: "2023"
  }
];

export const achievementsData = [
  {
    id: "vcet_neural_forum_2026",
    title: "Keynote Speaker & Placement Masterclass | VCET Madurai",
    issuer: "Velammal College of Engineering & Technology",
    organization: "VCET – Department of AI & DS",
    date: "Sep 2026",
    year: "2026",
    badge: "Keynote Honor",
    image: "/assets/vcet_campus_to_corporate_roadmap_2026.jpg",
    description: "Delivered an industry masterclass on 'Campus to Corporate: IT Placement Roadmap' for AI & DS students, honored with a memento of appreciation.",
    links: [
      {
        label: "Speaker Profile",
        url: "https://www.linkedin.com/in/arksvg/"
      }
    ]
  },
  {
    id: "youth_action_hackathon",
    title: "Second Runner Up | Youth Action Hackathon - 2026",
    issuer: "Tiruchirappalli City Corporation",
    date: "Sep 2026",
    year: "2026",
    organization: "Tiruchirappalli City Corporation",
    badge: "Second Runner Up",
    image: "/assets/youth_action_hackathon_2026.jpg",
    description: "Honored as Second Runner Up at the Youth Action Hackathon organized by Tiruchirappalli City Corporation for engineering impactful civic and smart city solutions.",
    links: [
      {
        label: "Facilitation Posters",
        url: "https://www.linkedin.com/in/arksvg/overlay/Honor/1044059680/treasury/?profileId=ACoAADFu4uYByXScY0dx5q6fLaZLXpT9EFp3LBE"
      },
      {
        label: "Demo Pitching",
        url: "https://www.linkedin.com/in/arksvg/overlay/Honor/1044059680/treasury/?profileId=ACoAADFu4uYByXScY0dx5q6fLaZLXpT9EFp3LBE"
      }
    ]
  },
  {
    id: "sih_jury_2026",
    title: "Smart India Hackathon (SIH) – Jury Member",
    issuer: "Saranathan College of Engineering",
    organization: "Internal Hackathon for Smart India Hackathon 2026",
    date: "Sep 2026",
    year: "2026",
    badge: "SIH Jury Member",
    image: "/assets/sih_jury_evaluator_2026.jpg",
    description: "Returned as a Jury Member to evaluate innovative student teams and select finalists for Smart India Hackathon (SIH) 2026.",
    links: [
      {
        label: "Evaluator Profile",
        url: "https://www.linkedin.com/in/arksvg/"
      }
    ]
  },
  {
    id: "mobai_hackathon",
    title: "Second Place | Internal Hackathon | NextHack - MobAiThon 2026",
    issuer: "NexTurn",
    date: "May 2026",
    year: "2026",
    organization: "NexTurn",
    badge: "Second Place",
    image: "/assets/mobai_hackathon_2026.jpg",
    description: "Secured Second Place in NexTurn's internal NextHack - MobAiThon 2026 with cutting-edge AI and automation platforms (BlackSqaud & NexTBiller).",
    links: [
      {
        label: "Second-Place BlackSqaud",
        url: "https://www.linkedin.com/in/arksvg/overlay/Honor/2048700986/treasury/?profileId=ACoAADFu4uYByXScY0dx5q6fLaZLXpT9EFp3LBE"
      },
      {
        label: "NexTBiller",
        url: "https://www.linkedin.com/in/arksvg/overlay/Honor/2048700986/treasury/?profileId=ACoAADFu4uYByXScY0dx5q6fLaZLXpT9EFp3LBE"
      }
    ]
  },
  {
    id: "alumni_speaker_cse_2026",
    title: "Alumni Keynote Speaker | Saranathan College of Engineering",
    issuer: "Saranathan College of Engineering",
    organization: "Saranathan College of Engineering (Dept. of CSE)",
    date: "Mar 2026",
    year: "2026",
    badge: "Alumni Keynote",
    image: "/assets/feed_4.jpg",
    description: "Invited as an alumnus to deliver a talk to 3rd-year CSE students on real-time corporate AI applications and enterprise tech stacks.",
    links: [
      {
        label: "Speaker Profile",
        url: "https://www.linkedin.com/in/arksvg/"
      }
    ]
  },
  {
    id: "uyir_hackathon",
    title: "Winners of National Level UYIR Road Safety Hackathon - 2025",
    issuer: "Government of Tamilnadu",
    date: "Feb 2025",
    year: "2025",
    organization: "Government of Tamilnadu",
    badge: "1st Prize Champion",
    description: "Secured 1st Prize across the state and nationally for Namma Padhai, an AI-powered road safety, navigation, and congestion mitigation platform.",
    image: "/assets/users_cluee7fz4036qqd0171ygrjx3_fPsXOdOSxLnW8fo9-Screenshot 2025-04-20 010628.png",
    link: "https://www.youtube.com/watch?v=Usdmuwjqqxg&ab_channel=TheNexTurnShows",
    links: [
      {
        label: "Appreciation Letter",
        url: "https://www.linkedin.com/in/arksvg/overlay/Honor/313655427/treasury/?profileId=ACoAADFu4uYByXScY0dx5q6fLaZLXpT9EFp3LBE"
      },
      {
        label: "Certificate of Appreciation",
        url: "https://www.linkedin.com/in/arksvg/overlay/Honor/313655427/treasury/?profileId=ACoAADFu4uYByXScY0dx5q6fLaZLXpT9EFp3LBE"
      },
      {
        label: "Watch Feature Video",
        url: "https://www.youtube.com/watch?v=Usdmuwjqqxg&ab_channel=TheNexTurnShows"
      }
    ]
  },
  {
    id: "ots_award",
    title: "On The Spot - OTS Award",
    issuer: "NexTurn",
    date: "Jul 2024",
    year: "2024",
    organization: "NexTurn",
    badge: "OTS Award",
    image: "/assets/ots_award_nexturn.png",
    description: "Awarded the On The Spot (OTS) Award at NexTurn for exceptional technical execution, rapid problem-solving, and dedication to mission-critical deliverables."
  },
  {
    id: "valedictorian_honor",
    title: "Best Outgoing Student Award",
    issuer: "Saranathan College of Engineering",
    date: "2023",
    year: "2023",
    organization: "Saranathan College of Engineering",
    description: "Conferred the Best Outgoing Student honor for the 2023 graduating batch honoring academic and leadership excellence.",
    badge: "Valedictorian Honor",
    image: "/assets/users_cluee7fz4036qqd0171ygrjx3_rp5DiEZYBY33RsAQ-WhatsApp Image 2025-04-20 at 01.13.00_31c3b122.jpg"
  },
  {
    id: "sih_finalist",
    title: "Finalist – Smart India Hackathon (SIH)",
    issuer: "Ministry of Education, Govt. of India",
    date: "2022",
    year: "2022",
    organization: "Ministry of Education, Govt. of India",
    description: "National Finalist in Smart India Hackathon solving critical government & industrial problem statements.",
    badge: "National Finalist",
    image: "/assets/sih_finalist_presentation.jpg"
  },
  {
    id: "nss_award",
    title: "Best NSS Volunteer Award",
    issuer: "Anna University",
    date: "2021",
    year: "2021",
    organization: "Anna University",
    description: "Awarded Best NSS Volunteer by Anna University in recognition of dedication to social welfare and leadership.",
    badge: "State NSS Award",
    image: "/assets/users_cluee7fz4036qqd0171ygrjx3_0igHMlEeDDykERKm-Screenshot 2025-04-20 010814.png"
  }
];

export const clientProjects = [
  {
    id: "care_space",
    name: "Care Space",
    tagline: "Healthcare Web Application with Real-Time Pose Tracking",
    category: "Production Healthcare",
    image: "https://risecxlibrary.blob.core.windows.net/clients/develop_logo_big.png",
    objectFit: "cover",
    description: "A production healthcare application with a canvas-based visualization layer for rendering real-time pose landmarks and user interactions.",
    problem: "Healthcare interfaces needed a touch-free, real-time way to track posture and gesture for patient interaction, without sacrificing UI responsiveness.",
    features: [
      "Canvas-based rendering of 33-point pose landmarks in real time",
      "Gesture and posture tracking built on Google MediaPipe",
      "Redux-managed state keeping updates smooth under continuous landmark data stream",
      "25% performance boost via optimized state slices and lazy loaded views"
    ],
    contribution: "Built the canvas visualization layer and the real-time gesture-tracking UI, and managed application state through Redux to keep updates smooth under continuous landmark data.",
    tech: ["React", "Redux", "MediaPipe", "Canvas API", "Spring Boot"],
    link: null,
    motif: "landmarks",
    glowColor: "rgba(56, 189, 248, 0.25)"
  },
  {
    id: "reclaimz",
    name: "Reclaimz",
    tagline: "Fintech Revenue Cycle & Claims Analytics Platform",
    category: "Production FinTech",
    image: "/assets/reclaimz_logo.png",
    bannerBg: "bg-zinc-950",
    description: "Enterprise fintech revenue-cycle platform delivering high-density claims analytics, financial forecasting, and interactive risk-management dashboards.",
    problem: "Financial institutions and enterprise claims teams required centralized, high-density visualization of multi-payer claims, exposure heat maps, and cash forecasting with instant multi-criteria filtering across complex datasets.",
    features: [
      "Claims Analytics module with AG Grid data tables featuring viewport-fit sizing, dynamic column definitions, and totals rows",
      "Reusable global filter engine with date-types, predefined ranges, multi-select dropdowns, auto-apply, and saved custom views",
      "Financial Command Center dashboards for Cash Forecast, Profitability, Cost Accounting, and exposure heat maps",
      "Redux Toolkit Query (RTK Query) integration delivering claims, payer, and risk data with shimmer skeleton loaders",
      "Enterprise security with AWS Amplify Multi-Factor Authentication (MFA) and full WCAG-compliant light/dark themes"
    ],
    contribution: "Built and maintained the Claims Analytics module and global filter engine, integrated RTK Query data pipelines, and engineered high-density AG Grid dashboards with AWS Amplify MFA.",
    tech: ["React", "TypeScript", "Redux Toolkit", "RTK Query", "Material UI", "AG Grid", "AWS Amplify", "Storybook", "Vite"],
    link: null,
    motif: "analytics",
    glowColor: "rgba(14, 165, 233, 0.25)"
  },
  {
    id: "admin_erp",
    name: "Admin ERP System",
    tagline: "Modular Admin & Enterprise Resource Platform",
    category: "Production Enterprise",
    description: "An ERP system built around a modular, reusable component architecture spanning both frontend and backend.",
    problem: "The system needed authentication, authorization, and data management to be consistent and reusable across many admin modules rather than rebuilt per screen.",
    features: [
      "Modular, reusable component architecture on both frontend and backend",
      "Integrated authentication and authorization with role-based access control (RBAC)",
      "Centralized RESTful data management services handling JSON-based exchange"
    ],
    contribution: "Designed the reusable component structure and integrated the backend services powering authentication, authorization, and data management.",
    tech: ["React", "Spring Boot", "REST APIs", "MySQL", "JPA/Hibernate"],
    link: null,
    motif: "modules",
    glowColor: "rgba(168, 85, 247, 0.25)"
  },
  {
    id: "sams_culinary",
    name: "Sam's Culinary Art Class",
    tagline: "Culinary Academy & Workshop Platform",
    category: "Live Client Site",
    description: "Interactive culinary academy website featuring baking workshop schedules, masterclasses, and online course registration.",
    features: [
      "Dynamic workshop calendar and course curriculum explorer",
      "Lead generation and direct student registration workflow",
      "Responsive mobile-first culinary gallery"
    ],
    tech: ["React", "Tailwind CSS", "Workshops", "Booking Flow", "Vercel"],
    link: "https://www.samsculinaryartclass.com/",
    motif: "culinary",
    glowColor: "rgba(245, 158, 11, 0.25)"
  },
  {
    id: "jeeva_associates",
    name: "Jeeva Associates",
    tagline: "Corporate Consulting & Tax Advisory Firm",
    category: "Live Client Site",
    description: "Corporate digital presence delivering tax consulting, auditing services, and direct appointment scheduling.",
    features: [
      "Taxation and financial consulting services catalog",
      "Consultation appointment request and inquiry portal",
      "Corporate compliance guidelines and advisory"
    ],
    tech: ["Next.js", "Consulting", "Auditing", "Lead Gen", "Tailwind CSS"],
    link: "https://jeevassociates.com/",
    motif: "corporate",
    glowColor: "rgba(59, 130, 246, 0.25)"
  },
  {
    id: "dfs_home_bakes",
    name: "DFS Home Bakes",
    tagline: "Artisan Bakery & Custom Cake Web Store",
    category: "Live Client Site",
    description: "Delightful custom cake showcase and bakery ordering platform with rich dessert menus and direct WhatsApp ordering.",
    features: [
      "Visual custom cake and pastry flavor menu",
      "One-click WhatsApp order generation with prefilled items",
      "Customer reviews and occasion cake galleries"
    ],
    tech: ["React", "WhatsApp Commerce", "Bakery UI", "Vercel"],
    link: "https://dfshomebakes.vercel.app/",
    motif: "bakery",
    glowColor: "rgba(236, 72, 153, 0.25)"
  },
  {
    id: "an_microgreens",
    name: "AN Microgreens",
    tagline: "Organic Superfoods & Urban Farming Portal",
    category: "Live Client Site",
    description: "Modern AgriTech and organic superfoods storefront promoting fresh microgreens cultivation and harvest subscriptions.",
    features: [
      "Nutritional breakdown and superfood health guides",
      "Direct harvest-to-table delivery order inquiry",
      "Urban farming methodology showcase"
    ],
    tech: ["React", "AgriTech", "Organic Foods", "Tailwind CSS"],
    link: "https://an-microgreens.vercel.app/",
    motif: "microgreens",
    glowColor: "rgba(16, 185, 129, 0.25)"
  },
  {
    id: "rubi_masala",
    name: "Rubi Masala",
    tagline: "Authentic Traditional Spice Blends",
    category: "Live Client Site",
    description: "Vibrant food brand showcase highlighting authentic spice formulations and bulk distributor networks.",
    features: [
      "Product range breakdown with ingredient authenticity certification",
      "Wholesale and retail distributor contact portal",
      "Traditional stone grinding process storytelling"
    ],
    tech: ["React", "Brand Identity", "Spice Processing", "Catalog"],
    link: "https://rubimasala.vercel.app/",
    motif: "spice",
    glowColor: "rgba(234, 88, 12, 0.25)"
  },
  {
    id: "varma_sakshi",
    name: "Varma Sakshi",
    tagline: "Traditional Varma Therapy & Wellness Platform",
    category: "Live Client Site",
    description: "Holistic healing portal detailing traditional Indian Varma therapy techniques and therapy appointments.",
    features: [
      "Comprehensive treatment directory for chronic conditions",
      "Online consultation booking and practitioner details",
      "Patient testimonials and healing methodologies"
    ],
    tech: ["React", "Holistic Health", "Varma Therapy", "Appointments"],
    link: "https://varmasakshi.com/",
    motif: "wellness",
    glowColor: "rgba(20, 184, 166, 0.25)"
  },
  {
    id: "violinist",
    name: "Violinist.in",
    tagline: "Concert Artist & Classical Music Portfolio",
    category: "Live Client Site",
    description: "Artistic classical & contemporary violinist portfolio featuring concert tour dates and event booking inquiries.",
    features: [
      "Media audio/video performances showcase",
      "Concert schedule and private event booking form",
      "Artist biography and press credentials"
    ],
    tech: ["React", "Music Portfolio", "Concert Booking", "Dark Aesthetic"],
    link: "https://violinist.in/",
    motif: "violin",
    glowColor: "rgba(168, 85, 247, 0.25)"
  },
  {
    id: "sundaram_jewellery",
    name: "Sundaram Jewellery",
    tagline: "Luxury Gold & Diamond Collection Storefront",
    category: "Live Client Site",
    description: "Exquisite luxury jewellery storefront featuring bridal ornaments, daily gold rate tickers, and showroom guidance.",
    features: [
      "Daily gold and silver market rate updates",
      "High-resolution bridal and festive jewelry catalog",
      "Showroom appointment and map locator"
    ],
    tech: ["React", "Luxury Retail", "Jewellery Store", "E-Catalog"],
    link: "https://sundaram-jewellery.vercel.app/",
    motif: "jewellery",
    glowColor: "rgba(245, 158, 11, 0.25)"
  }
];

export const coreProjects = [
  {
    id: "uyir_hackathon",
    title: "UYIR Hackathon - Namma Padhai",
    category: "State Level Winner (1st Prize)",
    description: "Award-winning road safety and navigation optimization platform developed for the UYIR State Level Hackathon 2025.",
    tags: ["Hackathon Winner", "Web Platform", "Smart Mobility", "Full Stack"],
    image: "/assets/users_cluee7fz4036qqd0171ygrjx3_PRh07sQGtpubKbwH-Screenshot 2025-02-16 130604.png",
    link: "https://github.com/arksvg/Namma-Padhai",
    sourceType: "github",
    badge: "1st Prize Champion"
  },
  {
    id: "infra_builder",
    title: "Infra Builder Tool",
    category: "Cloud Engineering",
    description: "NexTurn Infrastructure provisioning tool designed to automate cloud stack creation, validation, and configuration.",
    tags: ["Cloud Infra", "Automation", "DevOps", "NexTurn"],
    image: "/assets/users_cluee7fz4036qqd0171ygrjx3_WBbIDkw1yac5LeZ8-Screenshot 2024-10-04 220628.png",
    link: "https://github.com/arksvg/InfraBuilder-NT",
    sourceType: "github"
  },
  {
    id: "admin_erp_project",
    title: "Admin Module ERP Project",
    category: "Enterprise Software",
    description: "Comprehensive enterprise resource planning administration dashboard with robust role-based access control and microservices.",
    tags: ["ERP", "Admin Dashboard", "Enterprise", "RBAC"],
    image: "/assets/users_cluee7fz4036qqd0171ygrjx3_4QbmPPMziZg0RF57-Admin.png",
    link: "https://github.com/arksvg/Admin-Module-ERP-Project",
    sourceType: "github"
  },
  {
    id: "bookstore_app",
    title: "Bookstore Application",
    category: "Full Stack Web",
    description: "Full-stack bookstore management application built with Angular frontend and Spring Boot RESTful microservices.",
    tags: ["Angular", "Spring Boot", "REST API", "Java", "SQL"],
    image: "/assets/users_cluee7fz4036qqd0171ygrjx3_oHK3hEuArzchN60y-Bookstore.png",
    link: "https://github.com/arksvg/Bookstore-Application-Project",
    sourceType: "github"
  },
  {
    id: "currency_converter",
    title: "Currency Converter",
    category: "Live Web App",
    description: "Real-time exchange rate calculation web application deployed live on Netlify with modern responsive UI.",
    tags: ["React / Vite", "Live Demo", "Netlify", "Exchange API"],
    image: "/assets/screenshot(1).jpeg",
    favicon: "/assets/sites_favicons_aHR0cHM6Ly9udC1jdXJyZW5jeS1jb252ZXJ0ZXIubmV0bGlmeS5hcHAvdml0ZS5zdmc=.svg",
    link: "https://nt-currency-converter.netlify.app/",
    sourceType: "live"
  },
  {
    id: "letta_chat",
    title: "Letta Chat",
    category: "AI & Conversational System",
    description: "Intelligent conversational interface and chatbot application built for seamless communication workflows.",
    tags: ["AI Chat", "Letta", "NLP", "Real-time UI"],
    image: "/assets/users_cluee7fz4036qqd0171ygrjx3_504kHD0nDN2RfIXm-output 2.png",
    link: "https://github.com/arksvg/letta-chat",
    sourceType: "github"
  },
  {
    id: "genai_hackathon",
    title: "GenAI Hackathon - Web Chatbot",
    category: "GenAI / LLM",
    description: "Generative AI powered interactive chatbot developed during the GenAI Hackathon for specialized query handling.",
    tags: ["GenAI", "LLM", "Chatbot", "Hackathon"],
    image: "/assets/users_cluee7fz4036qqd0171ygrjx3_Q9xDLy81IB6m4dl6-NTiu.png",
    link: "https://github.com/arksvg/GenAI-Hackathon--Web-Based-Chatbot",
    sourceType: "github"
  }
];

export const figmaProjects = [
  {
    id: "fig_web_chat",
    title: "Web Chat Design Prototype",
    subtitle: "Interactive UI/UX Case Study",
    category: "UI/UX Prototype",
    description: "Modern desktop & web conversational interface featuring intuitive messaging flows, clean hierarchy, and user status indicators.",
    tags: ["Figma Prototype", "Chat UI", "UX Case Study", "Design System"],
    image: "/assets/users_cluee7fz4036qqd0171ygrjx3_CBStYAVEDj4sDTjW-1 Web.png",
    link: "https://www.figma.com/proto/vofmNpuEcaO0hg2nhbnCpb/Ratnakumar-A?page-id=1%3A11&type=design&node-id=1-11&viewport=-1430%2C148%2C0.23&t=LsrQBWkL4YADFRyD-1&scaling=scale-down&starting-point-node-id=415%3A337&mode=design"
  },
  {
    id: "fig_spotify",
    title: "Spotify Prototype : Redesign",
    subtitle: "Audio Streaming Mobile Experience",
    category: "App Redesign",
    description: "Elevated Spotify mobile player experience with streamlined queue controls and high-impact visual aesthetics.",
    tags: ["Figma", "Spotify Redesign", "Mobile UX", "Micro-interactions"],
    image: "/assets/users_cluee7fz4036qqd0171ygrjx3_CfSYL7BZRB5vrjKi-Spotify.png",
    link: "https://www.figma.com/proto/vofmNpuEcaO0hg2nhbnCpb/Ratnakumar-A?page-id=1%3A4&type=design&node-id=51-3&viewport=181%2C-1102%2C0.35&t=pbPEOugwVIqxXGXP-1&scaling=scale-down&starting-point-node-id=49%3A38&mode=design"
  },
  {
    id: "fig_calculator",
    title: "Calculator Design",
    subtitle: "Clean Utility UI Kit",
    category: "Component Design",
    description: "Sleek, minimalist calculator interface with tactile button styling and refined layout proportions.",
    tags: ["Figma", "Calculator UI", "Clean Aesthetic", "UI Kit"],
    image: "/assets/users_cluee7fz4036qqd0171ygrjx3_S9EXNHkQPZ6Bpl2g-Calc.png",
    link: "https://www.figma.com/proto/vofmNpuEcaO0hg2nhbnCpb/Ratnakumar-A?page-id=0%3A1&type=design&node-id=44-24&viewport=223%2C312%2C0.1&t=VjY0xw7Daq4I1gsk-1&scaling=scale-down&mode=design"
  },
  {
    id: "fig_youtube",
    title: "YouTube Premium Prototype : Redesign",
    subtitle: "Video Streaming Redesign",
    category: "Media UX",
    description: "Modernized YouTube Premium experience with seamless video controls, intuitive playlists, and gesture navigation.",
    tags: ["Figma", "YouTube Redesign", "Video Player", "Interactive Prototype"],
    image: "/assets/users_cluee7fz4036qqd0171ygrjx3_uIUss4t5Ra5uCLNp-YT.png",
    link: "https://www.figma.com/proto/vofmNpuEcaO0hg2nhbnCpb/Ratnakumar-A?page-id=1%3A8&type=design&node-id=155-28&viewport=401%2C321%2C0.32&t=TMrT1Vh3ZTDAW7lv-1&scaling=scale-down&starting-point-node-id=155%3A28&mode=design"
  },
  {
    id: "fig_carousels",
    title: "UX Carousel Showcase",
    subtitle: "Automotive UX Showcase",
    category: "Design Portfolio",
    description: "Curated collection of UX carousels and visual design showcases hosted on Google Drive.",
    tags: ["Google Drive", "UX Carousels", "Visual Design", "Design Assets"],
    image: "/assets/users_cluee7fz4036qqd0171ygrjx3_tmLJLNUP9h4bhFUr-Car.jpg",
    link: "https://drive.google.com/drive/folders/10aBpFSUFhqLT1tW-cFTW7T5eG0C8rlgh?usp=sharing"
  }
];
