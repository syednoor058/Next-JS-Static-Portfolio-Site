// Service Data

export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "E-Commerce & SaaS Solutions",
    description:
      "From subscription workflows to multi-tenant systems, each product is engineered for performance and effortless management at any scale.",
    items: [
      {
        title: "Multi-Tenant Architecture",
        description: "(Role Management, Tenant Isolation, Scalable Logic)",
      },
      {
        title: "Payment & Subscription Systems",
        description: "(Stripe, PayPal, Local Gateways, Billing Flows)",
      },
      {
        title: "Admin Dashboards & Automation",
        description: "(Analytics, CRUD Systems, Automated Operations)",
      },
    ],
  },
  {
    title: "API Building & Integration",
    description:
      "Whether building new endpoints or integrating external services, every API is structured for clarity, security, and long-term maintainability.",
    items: [
      {
        title: "Custom API Development",
        description: "(REST, GraphQL, Modular Architecture)",
      },
      {
        title: "Service Integrations",
        description: "(Payments, Auth, Third-Party Platforms)",
      },
      {
        title: "Security & Authentication",
        description: "(JWT, OAuth, Input Validation, Rate Limiting)",
      },
    ],
  },
  {
    title: "Performance Optimization & Refactoring",
    description:
      "Through focused refactoring and performance audits, your product becomes faster, more stable, and easier to scale—without disrupting core functionality.",
    items: [
      {
        title: "Codebase Refactoring",
        description: "(Structure Cleanup, Reusable Patterns, Best Practices)",
      },
      {
        title: "Performance Audits",
        description: "(Core Web Vitals, Lighthouse, Rendering Analysis)",
      },
      {
        title: "Caching & Query Optimization",
        description: "(DB Queries, API Caching, Rendering Efficiency)",
      },
    ],
  },
];

// Project Data

export const projects = [
  {
    id: 1,
    name: "Lumivance - Tech & Gadgets E-commerce",
    description:
      "Lumivance is an open-source Next.js eCommerce frontend project. It provides a modern, fast and customizable shopping UI.",
    href: "https://lumivance-ecommerce.vercel.app/",
    image: "/assets/projects/lumivance-ecommerce.jpg",
    bgImage: "/assets/projects/lumivance-ecommerce.jpg",
    frameworks: [
      { id: 2, name: "Next.js" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind CSS" },
      { id: 1, name: "Redux Toolkit" },
      { id: 3, name: "SSL Commerz" },
    ],
  },
  {
    id: 2,
    name: "Pulse Fitness - Full Responsive Gymnassium Website",
    description:
      "An online store specializing in rare and decorative plants with a clean, user-friendly interface.",
    href: "https://pulse-fitness-gym.vercel.app/",
    image: "/assets/projects/pulse-fitness-website.jpg",
    bgImage: "/assets/backgrounds/royal-blue-bg.jpg",
    frameworks: [
      { id: 2, name: "Next.js" },
      { id: 3, name: "Stripe" },
      { id: 4, name: "Tailwind CSS" },
      { id: 5, name: "Framer Motion" },
      { id: 1, name: "Relume AI" },
    ],
  },
  {
    id: 3,
    name: "Devion Ark - SEO Optimized Agency Website",
    description:
      "An e-commerce platform for Apple products and accessories with deals and category filtering.",
    href: "https://devion-ark-website.vercel.app/",
    image: "/assets/projects/devion-ark.jpg",
    bgImage: "/assets/backgrounds/royal-blue-bg.jpg",
    frameworks: [
      { id: 2, name: "Next.js" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "Framer Motion" },
      { id: 6, name: "GSAP" },
      { id: 5, name: "Stripe" },
    ],
  },
  {
    id: 4,
    name: "Real Estate Management System",
    description:
      "A multi-category online shop featuring electronics, home appliances, and gaming gear with special offers.",
    href: "https://sikder-foundation.vercel.app/",
    image: "/assets/projects/real-estate-management.jpg",
    bgImage: "/assets/backgrounds/building-bg.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Laravel" },
      { id: 3, name: "PostgreSQL" },
      { id: 4, name: "Tailwind CSS" },
      { id: 5, name: "Redux Toolkit" },
    ],
  },
  {
    id: 5,
    name: "Treatos BD - Pet Shop with POS System",
    description:
      "A curated collection of designer home decor items, including furniture and artisan vases.",
    href: "https://treatosbd.com/",
    image: "/assets/projects/treatosbd-web-store.jpg",
    bgImage: "/assets/backgrounds/pet-cat-bg.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Laravel" },
      { id: 3, name: "PostgreSQL" },
      { id: 4, name: "Material UI" },
      { id: 5, name: "SSL Commerz" },
    ],
  },
  {
    id: 6,
    name: "OmniQ - Online Car Rental Platform",
    description:
      "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
    href: "https://omniq-rent.vercel.app/",
    image: "/assets/projects/omniQ-cars.jpg",
    bgImage: "/assets/backgrounds/car-bg.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Node.js" },
      { id: 6, name: "Express.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Zustand" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
];

// Social Networks Links

export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/shaed_noor/" },
  {
    name: "Facebook",
    href: "https://www.facebook.com/shaed.noor/",
  },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/shaednoor/" },
  { name: "GitHub", href: "https://github.com/syednoor058" },
];

export const NAV_ITEMS = [
  { name: "home", url: "/" },
  { name: "about", url: "/about" },
  { name: "services", url: "/services" },
  { name: "work", url: "/work" },
  { name: "contact", url: "/contact" },
];

export const projectsList = [
  {
    title: "ApplyWise | AI Resume Optimizer",
    tags: [
      "React",
      "Tailwind",
      "Puter.Js",
      "Vercel",
      "Headless Server",
      "AI Agent",
    ],
    url: "#",
    file: "img" as const,
    alt: "ApplyWise application mockup",
    src: "https://res.cloudinary.com/de8g5laai/image/upload/v1770348776/apply-wise_pnvlit.jpg",
    colSpan: 7 as const,
  },
  {
    title: "OmniQ | Online Car Rental Platform",
    tags: ["React", "Node.JS", "Express", "MongoDB", "Tailwind", "Zustand"],
    url: "#",
    file: "vid" as const,
    src: "https://res.cloudinary.com/de8g5laai/video/upload/v1770348779/omniQ_jmfdo3.mp4",
    colSpan: 5 as const,
  },
  {
    title: "Lumivance | Tech & Gadgets E-commerce",
    tags: [
      "Next.js",
      "Tailwind",
      "MongoDB",
      "Vercel",
      "Redux",
      "SSLCommerz",
    ],
    url: "#",
    file: "img" as const,
    alt: "Lumivance ecommerce application mockup",
    src: "https://res.cloudinary.com/de8g5laai/image/upload/v1770348777/lumivance_kxlimi.jpg",
    colSpan: 5 as const,
  },
  {
    title: "Lexora | Law Firm Business Portfolio",
    tags: [
      "Next.js",
      "Tailwind",
      "Shad/Cn",
      "Radix UI",
      "Framer Motion",
      "Stripe",
    ],
    url: "#",
    file: "img" as const,
    alt: "lexora business portfolio mockup",
    src: "https://res.cloudinary.com/de8g5laai/image/upload/v1770348777/lexora_crklet.jpg",
    colSpan: 7 as const,
  },
  {
    title: "PropSuit | Real Estate Management System",
    tags: ["React", "Laravel", "PostgreSQL", "Tailwind", "Redux"],
    url: "#",
    file: "vid" as const,
    src: "https://res.cloudinary.com/de8g5laai/video/upload/v1770348779/propsuit_dutgec.mp4",
    colSpan: 7 as const,
  },
  {
    title: "Pulse Fitness | Gymnasium Business Portfolio",
    tags: [
      "Next.js",
      "Tailwind",
      "Relume UI",
      "Framer Motion",
      "Stripe",
    ],
    url: "#",
    file: "img" as const,
    alt: "pulse fitness gymnasium mockup",
    src: "https://res.cloudinary.com/de8g5laai/image/upload/v1770348777/pulse-fitness_jzm10d.jpg",
    colSpan: 5 as const,
  },
];