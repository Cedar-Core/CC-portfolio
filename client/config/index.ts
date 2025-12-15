import type { PortfolioConfig } from "./types";

export const config: PortfolioConfig = {
  // ==========================================================================
  // Personal Information
  // ==========================================================================
  personal: {
    name: "Cedar Core",
    shortName: "Cedar",
    role: "Creative Development Studio",
    tagline: "Building Digital Experiences That Matter",
    bio: `Cedar Core is a creative development studio specializing in modern web applications, 
    mobile solutions, and digital transformation. We partner with ambitious companies to 
    turn complex ideas into elegant, high-performance digital products that drive real 
    business results. Our team combines deep technical expertise with creative problem-solving 
    to deliver solutions that exceed expectations.`,
    shortBio:
      "Creative development studio specializing in modern web applications, mobile solutions, and digital transformation.",
    avatar: "/images/logo.png",
    location: {
      city: "San Francisco",
      state: "California",
      country: "United States",
      timezone: "America/Los_Angeles",
      remote: true,
    },
    contact: [
      {
        type: "email",
        label: "Email",
        value: "hello@cedarcore.dev",
        href: "mailto:hello@cedarcore.dev",
        icon: "Mail",
      },
      {
        type: "phone",
        label: "Phone",
        value: "+1 (555) 123-4567",
        href: "tel:+15551234567",
        icon: "Phone",
      },
      {
        type: "website",
        label: "Website",
        value: "cedarcore.dev",
        href: "https://cedarcore.dev",
        icon: "Globe",
      },
      {
        type: "calendar",
        label: "Schedule a Call",
        value: "Book a meeting",
        href: "https://cal.com/cedarcore",
        icon: "Calendar",
      },
    ],
    availability: {
      status: "available",
      message: "Available for new projects starting January 2025",
    },
  },

  // ==========================================================================
  // Branding
  // ==========================================================================
  branding: {
    name: "Cedar Core",
    tagline: "Building Digital Experiences That Matter",
    logo: {
      light: "/logo-dark.png",
      dark: "/logo-dark.png",
      icon: "/logo-dark.png",
    },
    colors: {
      primary: "#5D9EFF",
      secondary: "#525FF9",
      accent: "#10B981",
    },
    fonts: {
      heading: "Inter",
      body: "Inter",
      mono: "JetBrains Mono",
    },
  },

  // ==========================================================================
  // Company Values
  // ==========================================================================
  values: [
    {
      icon: "Lightbulb",
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge solutions",
    },
    {
      icon: "Target",
      title: "Precision",
      description: "Meticulous attention to every detail",
    },
    {
      icon: "Users",
      title: "Collaboration",
      description: "Building together for better results",
    },
    {
      icon: "TrendingUp",
      title: "Growth",
      description: "Focused on long-term success",
    },
  ],

  // ==========================================================================
  // Skills
  // ==========================================================================
  skillCategories: [
    {
      id: "frontend",
      label: "Frontend",
      icon: "Layout",
      description: "Modern UI development with React ecosystem",
      order: 1,
    },
    {
      id: "backend",
      label: "Backend",
      icon: "Server",
      description: "Scalable server-side solutions",
      order: 2,
    },
    {
      id: "database",
      label: "Database",
      icon: "Database",
      description: "Data storage and management",
      order: 3,
    },
    {
      id: "devops",
      label: "DevOps",
      icon: "Cloud",
      description: "Infrastructure and deployment",
      order: 4,
    },
    {
      id: "mobile",
      label: "Mobile",
      icon: "Smartphone",
      description: "Cross-platform mobile development",
      order: 5,
    },
    {
      id: "design",
      label: "Design",
      icon: "Palette",
      description: "UI/UX and visual design",
      order: 6,
    },
    {
      id: "tools",
      label: "Tools",
      icon: "Wrench",
      description: "Development tools and utilities",
      order: 7,
    },
  ],

  skills: [
    // Frontend
    {
      id: "react",
      name: "React",
      category: "frontend",
      proficiency: "expert",
      proficiencyPercent: 95,
      icon: "react",
      color: "#61DAFB",
      yearsOfExperience: 5,
      featured: true,
      order: 1,
    },
    {
      id: "nextjs",
      name: "Next.js",
      category: "frontend",
      proficiency: "expert",
      proficiencyPercent: 95,
      icon: "nextjs",
      color: "#000000",
      yearsOfExperience: 4,
      featured: true,
      order: 2,
    },
    {
      id: "typescript",
      name: "TypeScript",
      category: "frontend",
      proficiency: "expert",
      proficiencyPercent: 90,
      icon: "typescript",
      color: "#3178C6",
      yearsOfExperience: 4,
      featured: true,
      order: 3,
    },
    {
      id: "tailwindcss",
      name: "Tailwind CSS",
      category: "frontend",
      proficiency: "expert",
      proficiencyPercent: 95,
      icon: "tailwindcss",
      color: "#06B6D4",
      yearsOfExperience: 3,
      featured: true,
      order: 4,
    },
    {
      id: "vue",
      name: "Vue.js",
      category: "frontend",
      proficiency: "advanced",
      proficiencyPercent: 80,
      icon: "vue",
      color: "#4FC08D",
      yearsOfExperience: 2,
      featured: false,
      order: 5,
    },

    // Backend
    {
      id: "nodejs",
      name: "Node.js",
      category: "backend",
      proficiency: "expert",
      proficiencyPercent: 90,
      icon: "nodejs",
      color: "#339933",
      yearsOfExperience: 5,
      featured: true,
      order: 1,
    },
    {
      id: "python",
      name: "Python",
      category: "backend",
      proficiency: "advanced",
      proficiencyPercent: 85,
      icon: "python",
      color: "#3776AB",
      yearsOfExperience: 4,
      featured: true,
      order: 2,
    },
    {
      id: "graphql",
      name: "GraphQL",
      category: "backend",
      proficiency: "advanced",
      proficiencyPercent: 82,
      icon: "graphql",
      color: "#E10098",
      yearsOfExperience: 3,
      featured: false,
      order: 3,
    },
    {
      id: "rest-api",
      name: "REST APIs",
      category: "backend",
      proficiency: "expert",
      proficiencyPercent: 95,
      icon: "api",
      yearsOfExperience: 5,
      featured: false,
      order: 4,
    },

    // Database
    {
      id: "postgresql",
      name: "PostgreSQL",
      category: "database",
      proficiency: "advanced",
      proficiencyPercent: 88,
      icon: "postgresql",
      color: "#4169E1",
      yearsOfExperience: 4,
      featured: true,
      order: 1,
    },
    {
      id: "mongodb",
      name: "MongoDB",
      category: "database",
      proficiency: "advanced",
      proficiencyPercent: 85,
      icon: "mongodb",
      color: "#47A248",
      yearsOfExperience: 4,
      featured: true,
      order: 2,
    },
    {
      id: "redis",
      name: "Redis",
      category: "database",
      proficiency: "intermediate",
      proficiencyPercent: 75,
      icon: "redis",
      color: "#DC382D",
      yearsOfExperience: 2,
      featured: false,
      order: 3,
    },
    {
      id: "prisma",
      name: "Prisma",
      category: "database",
      proficiency: "advanced",
      proficiencyPercent: 88,
      icon: "prisma",
      color: "#2D3748",
      yearsOfExperience: 3,
      featured: false,
      order: 4,
    },

    // DevOps
    {
      id: "aws",
      name: "AWS",
      category: "devops",
      proficiency: "advanced",
      proficiencyPercent: 82,
      icon: "aws",
      color: "#FF9900",
      yearsOfExperience: 4,
      featured: true,
      order: 1,
    },
    {
      id: "docker",
      name: "Docker",
      category: "devops",
      proficiency: "advanced",
      proficiencyPercent: 85,
      icon: "docker",
      color: "#2496ED",
      yearsOfExperience: 4,
      featured: true,
      order: 2,
    },
    {
      id: "kubernetes",
      name: "Kubernetes",
      category: "devops",
      proficiency: "intermediate",
      proficiencyPercent: 70,
      icon: "kubernetes",
      color: "#326CE5",
      yearsOfExperience: 2,
      featured: false,
      order: 3,
    },
    {
      id: "github-actions",
      name: "GitHub Actions",
      category: "devops",
      proficiency: "advanced",
      proficiencyPercent: 88,
      icon: "github",
      yearsOfExperience: 3,
      featured: false,
      order: 4,
    },

    // Mobile
    {
      id: "react-native",
      name: "React Native",
      category: "mobile",
      proficiency: "advanced",
      proficiencyPercent: 85,
      icon: "react",
      color: "#61DAFB",
      yearsOfExperience: 3,
      featured: true,
      order: 1,
    },
    {
      id: "expo",
      name: "Expo",
      category: "mobile",
      proficiency: "advanced",
      proficiencyPercent: 82,
      icon: "expo",
      yearsOfExperience: 2,
      featured: false,
      order: 2,
    },

    // Design
    {
      id: "figma",
      name: "Figma",
      category: "design",
      proficiency: "advanced",
      proficiencyPercent: 88,
      icon: "figma",
      color: "#F24E1E",
      yearsOfExperience: 4,
      featured: true,
      order: 1,
    },
    {
      id: "ui-ux",
      name: "UI/UX Design",
      category: "design",
      proficiency: "advanced",
      proficiencyPercent: 85,
      icon: "Palette",
      yearsOfExperience: 4,
      featured: true,
      order: 2,
    },

    // Tools
    {
      id: "git",
      name: "Git",
      category: "tools",
      proficiency: "expert",
      proficiencyPercent: 95,
      icon: "git",
      color: "#F05032",
      yearsOfExperience: 6,
      featured: false,
      order: 1,
    },
    {
      id: "vscode",
      name: "VS Code",
      category: "tools",
      proficiency: "expert",
      proficiencyPercent: 95,
      icon: "vscode",
      color: "#007ACC",
      yearsOfExperience: 5,
      featured: false,
      order: 2,
    },
  ],

  // ==========================================================================
  // Projects
  // ==========================================================================
  projects: [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      slug: "ecommerce-platform",
      shortDescription:
        "A full-featured e-commerce solution with real-time inventory and secure payments.",
      description: `Built a comprehensive e-commerce platform featuring real-time inventory management, 
      secure Stripe payments, and an intuitive admin dashboard. The platform handles thousands of 
      daily transactions with 99.9% uptime and sub-200ms response times.`,
      category: "Web Development",
      type: "web",
      status: "completed",
      featured: true,
      order: 1,
      techStack: [
        "Next.js",
        "TypeScript",
        "Stripe",
        "PostgreSQL",
        "Prisma",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "live",
          label: "Live Site",
          url: "https://example.com",
          icon: "ExternalLink",
        },
        {
          type: "case-study",
          label: "Case Study",
          url: "/projects/ecommerce-platform",
          icon: "FileText",
        },
      ],
      images: [
        {
          src: "/images/projects/ecommerce-hero.jpg",
          alt: "E-Commerce Dashboard",
          type: "hero",
          order: 1,
        },
        {
          src: "/images/projects/ecommerce-thumb.jpg",
          alt: "E-Commerce Thumbnail",
          type: "thumbnail",
          order: 2,
        },
      ],
      highlights: [
        "Increased client revenue by 150% in first year",
        "Handles 10,000+ daily transactions",
        "99.9% uptime with auto-scaling infrastructure",
      ],
      client: "Fashion Retail Brand",
      duration: "4 months",
      year: 2024,
      tags: ["e-commerce", "payments", "saas", "dashboard"],
    },
    {
      id: "healthcare-app",
      title: "Healthcare Mobile App",
      slug: "healthcare-app",
      shortDescription:
        "HIPAA-compliant mobile app for patient management and telemedicine.",
      description: `Developed a HIPAA-compliant mobile application for patient management and 
      telemedicine consultations. Features include secure video calls, appointment scheduling, 
      prescription management, and real-time health monitoring integration.`,
      category: "Mobile Development",
      type: "mobile",
      status: "completed",
      featured: true,
      order: 2,
      techStack: ["React Native", "Node.js", "MongoDB", "WebRTC", "AWS"],
      links: [
        {
          type: "case-study",
          label: "Case Study",
          url: "/projects/healthcare-app",
          icon: "FileText",
        },
      ],
      images: [
        {
          src: "/images/projects/healthcare-hero.jpg",
          alt: "Healthcare App Screens",
          type: "hero",
          order: 1,
        },
      ],
      highlights: [
        "Serving 50,000+ active patients",
        "HIPAA & GDPR compliant",
        "4.8★ rating on App Store",
      ],
      client: "Regional Medical Group",
      duration: "6 months",
      year: 2023,
      tags: ["healthcare", "mobile", "telemedicine", "hipaa"],
    },
    {
      id: "financial-dashboard",
      title: "Financial Analytics Dashboard",
      slug: "financial-dashboard",
      shortDescription:
        "Real-time financial data visualization and portfolio management platform.",
      description: `Created an interactive dashboard for real-time financial data visualization 
      and portfolio management. Features advanced charting, predictive analytics, and 
      customizable reporting for wealth management professionals.`,
      category: "UI/UX Design",
      type: "web",
      status: "completed",
      featured: true,
      order: 3,
      techStack: ["React", "D3.js", "Python", "FastAPI", "Redis", "WebSocket"],
      links: [
        {
          type: "demo",
          label: "Live Demo",
          url: "https://demo.example.com",
          icon: "Play",
        },
        {
          type: "case-study",
          label: "Case Study",
          url: "/projects/financial-dashboard",
          icon: "FileText",
        },
      ],
      images: [
        {
          src: "/images/projects/finance-hero.jpg",
          alt: "Financial Dashboard",
          type: "hero",
          order: 1,
        },
      ],
      highlights: [
        "Real-time data with <50ms latency",
        "Managing $500M+ in tracked assets",
        "50+ custom visualization types",
      ],
      client: "Investment Firm",
      duration: "5 months",
      year: 2024,
      tags: ["fintech", "dashboard", "analytics", "data-viz"],
    },
    {
      id: "saas-platform",
      title: "Multi-tenant SaaS Platform",
      slug: "saas-platform",
      shortDescription:
        "Scalable SaaS with subscription management and team collaboration.",
      description: `Built a multi-tenant SaaS application with subscription management via Stripe, 
      comprehensive analytics, and real-time team collaboration features. The platform serves 
      thousands of organizations with complete data isolation and role-based access control.`,
      category: "Full Stack",
      type: "web",
      status: "completed",
      featured: true,
      order: 4,
      techStack: [
        "TypeScript",
        "Next.js",
        "tRPC",
        "PostgreSQL",
        "Redis",
        "AWS",
      ],
      links: [
        {
          type: "live",
          label: "Visit Site",
          url: "https://example.com",
          icon: "ExternalLink",
        },
      ],
      images: [
        {
          src: "/images/projects/saas-hero.jpg",
          alt: "SaaS Platform",
          type: "hero",
          order: 1,
        },
      ],
      highlights: [
        "10,000+ active organizations",
        "99.99% uptime SLA",
        "SOC 2 Type II certified",
      ],
      client: "Tech Startup",
      duration: "8 months",
      year: 2023,
      tags: ["saas", "multi-tenant", "subscription", "b2b"],
    },
    {
      id: "ai-content-platform",
      title: "AI Content Generation Platform",
      slug: "ai-content-platform",
      shortDescription: "AI-powered content creation and management system.",
      description: `Developed an AI-powered content generation platform leveraging OpenAI's GPT-4 
      for automated content creation, with built-in SEO optimization, brand voice training, 
      and multi-channel publishing capabilities.`,
      category: "AI/ML",
      type: "web",
      status: "in-progress",
      featured: false,
      order: 5,
      techStack: [
        "Next.js",
        "Python",
        "OpenAI",
        "LangChain",
        "Pinecone",
        "Vercel AI SDK",
      ],
      links: [],
      images: [
        {
          src: "/images/projects/ai-hero.jpg",
          alt: "AI Platform",
          type: "hero",
          order: 1,
        },
      ],
      highlights: [
        "Generates 10,000+ articles/month",
        "85% reduction in content creation time",
        "Multi-language support (12 languages)",
      ],
      duration: "Ongoing",
      year: 2024,
      tags: ["ai", "ml", "content", "automation"],
    },
  ],

  // ==========================================================================
  // Experience
  // ==========================================================================
  experience: [
    {
      id: "cedarcore-founder",
      company: "Cedar Core",
      companyUrl: "https://cedarcore.dev",
      role: "Founder & Lead Developer",
      type: "full-time",
      location: "San Francisco, CA",
      remote: true,
      startDate: "2020-01-01",
      current: true,
      description:
        "Founded and lead a creative development studio focused on delivering exceptional digital experiences for clients worldwide.",
      responsibilities: [
        "Lead technical architecture and development for all client projects",
        "Manage client relationships and project scoping",
        "Mentor junior developers and conduct code reviews",
        "Establish development processes and best practices",
        "Drive business development and strategic partnerships",
      ],
      highlights: [
        {
          text: "Delivered 50+ successful projects",
          metrics: "for clients across 12 countries",
        },
        {
          text: "Maintained 98% client satisfaction rate",
          metrics: "based on post-project surveys",
        },
        { text: "Grew revenue 300%", metrics: "year-over-year from 2021-2024" },
      ],
      techStack: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "AWS",
        "PostgreSQL",
      ],
      order: 1,
    },
    {
      id: "techcorp-senior",
      company: "TechCorp Solutions",
      companyUrl: "https://techcorp.example.com",
      role: "Senior Full Stack Developer",
      type: "full-time",
      location: "San Francisco, CA",
      remote: false,
      startDate: "2017-06-01",
      endDate: "2019-12-31",
      current: false,
      description:
        "Led development of enterprise applications and mentored a team of junior developers.",
      responsibilities: [
        "Architected and developed scalable microservices",
        "Led migration from monolith to microservices architecture",
        "Implemented CI/CD pipelines and automated testing",
        "Mentored team of 5 junior developers",
        "Collaborated with product and design teams on feature development",
      ],
      highlights: [
        {
          text: "Reduced deployment time by 80%",
          metrics: "through CI/CD automation",
        },
        {
          text: "Improved API response times by 60%",
          metrics: "via caching and optimization",
        },
        { text: "Led team that shipped 3 major product releases", metrics: "" },
      ],
      techStack: ["React", "Node.js", "Python", "Docker", "Kubernetes", "AWS"],
      order: 2,
    },
    {
      id: "startup-developer",
      company: "InnoStart Labs",
      companyUrl: "https://innostart.example.com",
      role: "Full Stack Developer",
      type: "full-time",
      location: "Palo Alto, CA",
      remote: false,
      startDate: "2015-03-01",
      endDate: "2017-05-31",
      current: false,
      description:
        "Early-stage startup where I wore multiple hats building the core product from scratch.",
      responsibilities: [
        "Built core product features from ideation to deployment",
        "Implemented real-time features using WebSockets",
        "Integrated third-party APIs and payment systems",
        "Participated in product planning and user research",
        "Managed AWS infrastructure and deployments",
      ],
      highlights: [
        {
          text: "Built MVP in 3 months",
          metrics: "that secured $2M seed funding",
        },
        { text: "Scaled platform to 10,000+ users", metrics: "in first year" },
        {
          text: "Implemented features that increased user engagement by 40%",
          metrics: "",
        },
      ],
      techStack: ["React", "Express.js", "MongoDB", "Socket.io", "AWS"],
      order: 3,
    },
  ],

  // ==========================================================================
  // Education
  // ==========================================================================
  education: [
    {
      id: "stanford-cs",
      institution: "Stanford University",
      institutionUrl: "https://stanford.edu",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startDate: "2011-09-01",
      endDate: "2015-06-01",
      current: false,
      location: "Stanford, CA",
      gpa: "3.8",
      honors: ["Magna Cum Laude", "Dean's List (6 semesters)"],
      relevantCourses: [
        "Data Structures & Algorithms",
        "Machine Learning",
        "Distributed Systems",
        "Human-Computer Interaction",
      ],
      order: 1,
    },
  ],

  // ==========================================================================
  // Certifications
  // ==========================================================================
  certifications: [
    {
      id: "aws-solutions-architect",
      name: "AWS Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      issuerLogo: "/images/certs/aws-logo.png",
      issueDate: "2023-06-15",
      expiryDate: "2026-06-15",
      credentialId: "AWS-SAP-123456",
      credentialUrl: "https://aws.amazon.com/verification",
      skills: ["AWS", "Cloud Architecture", "Infrastructure"],
      featured: true,
      order: 1,
    },
    {
      id: "gcp-cloud-architect",
      name: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      issuerLogo: "/images/certs/gcp-logo.png",
      issueDate: "2023-03-20",
      expiryDate: "2025-03-20",
      credentialId: "GCP-PCA-789012",
      skills: ["GCP", "Cloud Architecture", "Kubernetes"],
      featured: true,
      order: 2,
    },
    {
      id: "mongodb-developer",
      name: "MongoDB Certified Developer",
      issuer: "MongoDB",
      issuerLogo: "/images/certs/mongodb-logo.png",
      issueDate: "2022-11-10",
      credentialId: "MDB-DEV-345678",
      skills: ["MongoDB", "Database Design", "Aggregation"],
      featured: false,
      order: 3,
    },
  ],

  // ==========================================================================
  // Services
  // ==========================================================================
  services: [
    {
      id: "web-development",
      title: "Web Development",
      shortDescription:
        "Custom web applications built with modern frameworks and best practices.",
      description:
        "We build high-performance web applications using React, Next.js, and TypeScript. Our solutions are optimized for speed, accessibility, and SEO.",
      icon: "Globe",
      features: [
        "React & Next.js",
        "TypeScript",
        "API Integration",
        "Database Design",
        "Performance Optimization",
        "SEO Best Practices",
      ],
      order: 1,
    },
    {
      id: "mobile-development",
      title: "Mobile Development",
      shortDescription:
        "Native and cross-platform mobile apps for iOS and Android.",
      description:
        "We create beautiful, performant mobile applications using React Native. Our apps deliver native-like experiences with shared codebases.",
      icon: "Smartphone",
      features: [
        "React Native",
        "iOS & Android",
        "Push Notifications",
        "Offline Support",
        "App Store Optimization",
        "Analytics Integration",
      ],
      order: 2,
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      shortDescription:
        "User-centered design that drives engagement and conversions.",
      description:
        "We design intuitive interfaces that delight users and achieve business goals. Our process includes research, prototyping, and iterative testing.",
      icon: "Palette",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
        "Usability Testing",
        "Accessibility (WCAG)",
      ],
      order: 3,
    },
    {
      id: "cloud-solutions",
      title: "Cloud Solutions",
      shortDescription:
        "Scalable cloud infrastructure for reliable applications.",
      description:
        "We architect and deploy cloud infrastructure that scales with your business. Our solutions ensure high availability and cost optimization.",
      icon: "Cloud",
      features: [
        "AWS & Azure",
        "CI/CD Pipelines",
        "Containerization",
        "Monitoring & Alerts",
        "Auto-scaling",
        "Cost Optimization",
      ],
      order: 4,
    },
    {
      id: "security-compliance",
      title: "Security & Compliance",
      shortDescription: "Robust security for regulated industries.",
      description:
        "We implement security best practices and help you achieve compliance certifications. Our expertise includes HIPAA, SOC 2, and GDPR.",
      icon: "Shield",
      features: [
        "Security Audits",
        "HIPAA Compliance",
        "SOC 2 Preparation",
        "Data Encryption",
        "Access Control",
        "Penetration Testing",
      ],
      order: 5,
    },
    {
      id: "digital-strategy",
      title: "Digital Strategy",
      shortDescription: "Strategic consulting for digital transformation.",
      description:
        "We help you navigate digital transformation with clear roadmaps and actionable strategies. Our consulting drives measurable business outcomes.",
      icon: "Rocket",
      features: [
        "Tech Assessment",
        "Roadmap Planning",
        "Scalability Review",
        "Performance Optimization",
        "Team Augmentation",
        "Technical Due Diligence",
      ],
      order: 6,
    },
  ],

  // ==========================================================================
  // Testimonials
  // ==========================================================================
  testimonials: [
    {
      id: "testimonial-1",
      author: "Sarah Chen",
      role: "CTO",
      company: "TechVentures Inc",
      companyUrl: "https://techventures.example.com",
      avatar: "/images/testimonials/sarah.jpg",
      content:
        "Cedar Core transformed our outdated platform into a modern, scalable solution. Their technical expertise and attention to detail exceeded our expectations. The team delivered on time and the results speak for themselves - 40% improvement in user engagement.",
      rating: 5,
      projectId: "ecommerce-platform",
      featured: true,
      order: 1,
    },
    {
      id: "testimonial-2",
      author: "Michael Rodriguez",
      role: "Founder",
      company: "HealthFirst",
      avatar: "/images/testimonials/michael.jpg",
      content:
        "Working with Cedar Core on our healthcare app was a game-changer. They understood the complexities of HIPAA compliance and delivered a solution that our patients love. The app has been instrumental in our growth.",
      rating: 5,
      projectId: "healthcare-app",
      featured: true,
      order: 2,
    },
    {
      id: "testimonial-3",
      author: "Emily Watson",
      role: "Product Director",
      company: "FinanceFlow",
      companyUrl: "https://financeflow.example.com",
      content:
        "The financial dashboard Cedar Core built for us is incredibly powerful yet intuitive. Our wealth managers can now make data-driven decisions in real-time. The visualization capabilities are unmatched.",
      rating: 5,
      projectId: "financial-dashboard",
      featured: true,
      order: 3,
    },
  ],

  // ==========================================================================
  // Social Links
  // ==========================================================================
  socialLinks: [
    {
      platform: "github",
      label: "GitHub",
      url: "https://github.com/cedarcore",
      icon: "Github",
      username: "cedarcore",
      order: 1,
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      url: "https://linkedin.com/company/cedarcore",
      icon: "Linkedin",
      username: "cedarcore",
      order: 2,
    },
    {
      platform: "twitter",
      label: "Twitter",
      url: "https://twitter.com/cedarcore",
      icon: "Twitter",
      username: "@cedarcore",
      order: 3,
    },
    {
      platform: "dribbble",
      label: "Dribbble",
      url: "https://dribbble.com/cedarcore",
      icon: "Dribbble",
      username: "cedarcore",
      order: 4,
    },
    {
      platform: "instagram",
      label: "Instagram",
      url: "https://instagram.com/cedarcore",
      icon: "Instagram",
      username: "@cedarcore",
      order: 5,
    },
  ],

  // ==========================================================================
  // Navigation
  // ==========================================================================
  navigation: {
    main: [
      { label: "Home", href: "/", order: 1 },
      { label: "About", href: "#about", order: 2 },
      { label: "Services", href: "#services", order: 3 },
      { label: "Projects", href: "#projects", order: 4 },
      { label: "Contact", href: "#contact", order: 5 },
    ],
    footer: {
      sections: [
        {
          title: "Services",
          links: [
            { label: "Web Development", href: "#services", order: 1 },
            { label: "Mobile Development", href: "#services", order: 2 },
            { label: "UI/UX Design", href: "#services", order: 3 },
            { label: "Cloud Solutions", href: "#services", order: 4 },
          ],
        },
        {
          title: "Company",
          links: [
            { label: "About Us", href: "#about", order: 1 },
            { label: "Our Work", href: "#projects", order: 2 },
            { label: "Careers", href: "/careers", order: 3 },
            { label: "Contact", href: "#contact", order: 4 },
          ],
        },
        {
          title: "Resources",
          links: [
            { label: "Blog", href: "/blog", order: 1 },
            { label: "Case Studies", href: "/case-studies", order: 2 },
            { label: "Privacy Policy", href: "/privacy", order: 3 },
            { label: "Terms of Service", href: "/terms", order: 4 },
          ],
        },
      ],
    },
  },

  // ==========================================================================
  // SEO Configuration
  // ==========================================================================
  seo: {
    defaultTitle: "Cedar Core - Creative Development Studio",
    titleTemplate: "%s | Cedar Core",
    description:
      "Cedar Core is a creative development studio specializing in modern web applications, mobile solutions, and digital transformation. We build digital experiences that matter.",
    siteUrl: "https://cedarcore.dev",
    siteName: "Cedar Core",
    locale: "en_US",
    type: "website",
    twitterHandle: "@cedarcore",
    twitterCardType: "summary_large_image",
    openGraph: {
      images: [
        {
          url: "https://cedarcore.dev/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Cedar Core - Creative Development Studio",
        },
      ],
    },
    keywords: [
      "web development",
      "mobile development",
      "React",
      "Next.js",
      "TypeScript",
      "UI/UX design",
      "software development",
      "digital agency",
      "San Francisco",
    ],
    author: "Cedar Core",
    themeColor: "#5D9EFF",
    favicon: "/favicon.ico",
    appleTouchIcon: "/apple-touch-icon.png",
    manifest: "/site.webmanifest",
  },

  pageSEO: {
    home: {
      title: "Cedar Core - Creative Development Studio",
      description:
        "We build digital experiences that matter. Modern web applications, mobile solutions, and digital transformation.",
    },
    about: {
      title: "About Us",
      description:
        "Learn about Cedar Core, our mission, values, and the team behind our digital solutions.",
    },
    projects: {
      title: "Our Work",
      description:
        "Explore our portfolio of web applications, mobile apps, and digital products.",
    },
    contact: {
      title: "Contact Us",
      description:
        "Get in touch to discuss your next project. We'd love to hear from you.",
    },
  },

  // ==========================================================================
  // Statistics
  // ==========================================================================
  statistics: [
    {
      id: "projects",
      label: "Projects Delivered",
      value: "50",
      suffix: "+",
      icon: "Briefcase",
      order: 1,
    },
    {
      id: "satisfaction",
      label: "Client Satisfaction",
      value: "98",
      suffix: "%",
      icon: "Heart",
      order: 2,
    },
    {
      id: "experience",
      label: "Years Experience",
      value: "5",
      suffix: "+",
      icon: "Calendar",
      order: 3,
    },
    {
      id: "clients",
      label: "Happy Clients",
      value: "35",
      suffix: "+",
      icon: "Users",
      order: 4,
    },
  ],

  // ==========================================================================
  // Call to Actions
  // ==========================================================================
  ctas: {
    hero: {
      id: "hero-cta",
      title: "Ready to bring your ideas to life?",
      description:
        "Let's discuss your next project and create something amazing together.",
      primaryButton: {
        text: "View Our Work",
        href: "#projects",
        icon: "ArrowRight",
      },
      secondaryButton: {
        text: "Start a Project",
        href: "#contact",
        icon: "Send",
      },
    },
    contact: {
      id: "contact-cta",
      title: "Let's Work Together",
      description: "Have a project in mind? We'd love to hear about it.",
      primaryButton: {
        text: "Get in Touch",
        href: "#contact",
        icon: "Mail",
      },
    },
    footer: {
      id: "footer-cta",
      title: "Start Your Project Today",
      description: "Ready to transform your digital presence?",
      primaryButton: {
        text: "Schedule a Call",
        href: "https://cal.com/cedarcore",
        icon: "Calendar",
      },
    },
  },

  // ==========================================================================
  // Feature Flags
  // ==========================================================================
  features: {
    blog: false,
    testimonials: true,
    newsletter: true,
    darkMode: true,
    analytics: true,
  },
};

// ==========================================================================
// Export Type for Config
// ==========================================================================
export type { PortfolioConfig };

// ==========================================================================
// Default Export
// ==========================================================================
export default config;
