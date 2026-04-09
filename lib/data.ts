export interface Experience {
  company: string;
  role: string;
  period: string;
  description?: string;
}

export const experience: Experience[] = [
  {
    company: "MewCP",
    role: "Founding Engineer",
    period: "2026 Jan — Present",
    description:
      "Building a no-code Agentic workflow automation platform for businesses of all sizes. Actively leading the development and infrastructure evolution of the MewCP ecosystem.",
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2025 Nov — 2025 Dec",
    description:
      "Shipped an SEO-optimized landing page with Sanity CMS & Cloudinary CDN for content and media management, featuring web analytics and Gmail service integration.",
  },
  {
    company: "SmowCode",
    role: "Software Developer Intern",
    period: "2025 Jan — 2025 July",
    description:
      "Built a modular C-based networking library providing Wi-Fi and HTTP abstractions over a constrained runtime, with a custom ring buffer for reliable streaming and flow control.",
  },
  {
    company: "Precious Models",
    role: "Shopify Store Developer",
    period: "2022",
    description:
      "Designed and implemented a custom Shopify jewelry store optimized for SEO, user experience, and conversion rates. Managed end-to-end operations, including product inventory, order processing, and secure payment integrations.",
  },
];

export const skills = {
  languages: ["Python", "TypeScript", "SQL"],
  frameworks: [
    "NestJS",
    "Next.js",
    "Node.js",
    "FastAPI",
    "React",
    "Langchain",
    "FastMCP",
  ],
  data: ["PostgreSQL", "MongoDB", "Redis", "Vector Databases[Qdrant]"],
  tools: ["AWS (EC2, RDS, S3)", "GitHub Actions", "Docker", "Kubernetes"],
};

export const status = {
  current: "Founding Engineer at MewCP",
  location: "India, Mumbai",
  timezone: "IST (UTC-5:30)",
};

export const about = `I've spent a decade building product-focused software in early-stage environments where requirements emerge through iteration and constraints are real. My work spans frontend, backend, and data infrastructure, with recent focus on AI-assisted workflows and analytics platforms.

I'm also a 3× founder. Building and operating pATCHES taught me the full product lifecycle—from early user testing through scaling to 2M+ visitors, balancing new features against operational stability.`;
