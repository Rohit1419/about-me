export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  year: string;
  blurb: string;
  tech: string[];
  image: string;
  alt: string;
  isVideo?: boolean;
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: "mewcp",
    title: "MewCP",
    year: "2026",
    blurb:
      "Gateway to the Agentic Economy: It connect powerful MCP servers to AI agents in single click, enabling businesses to automate workflows with custom agents that can see, read, and interact with the apps. Built on FastMCP, open-source Python framework for building MCP servers, MewCP abstracts away the complexity of servers & infrastructure so businesses can focus on building transformative AI experiences that drive efficiency and growth.",
    tech: ["Typescript", "Next.js", "MongoDb", "Redis", "AWS"],
    image: "/test.mp4",
    alt: "MewCP-Where Agents connect purrr-fectly",
    isVideo: true,
    links: [
      // { label: "Case Study", href: "/case-study/mewcp" },
      { label: "Live", href: "https://mewcp.com/" },
    ],
  },
  {
    id: "CitiChain",
    title: "CitiChain",
    year: "2025",
    blurb:
      "Decentralized banking service with to simlify the leagal overhead for normal users, It enebles one time KYC for all banking needs, including opening accounts, applying for loans, and investing with RBI backing. Where bank can controle each transaction records and restrict access to transfer and utilise debt funds with the helf of E-ruppe(regulated by RBI and backed with INR). Follows Zero Knowledge proofs approach to securely share KYC data without exposing sensitive information, giving users control and privacy while streamlining access to financial services.",
    tech: ["Python", "Node.js", "MongoDB", "Solidity", "Web3.js", "React"],
    image: "/projects/project-2.png",
    alt: "Decentralized banking service with ZKPs",
    links: [
      { label: "Github", href: "https://github.com/siddhesh-desai/citiChain" },
      // { label: "Live", href: "https://citchain.com/" },
    ],
  },
  // {
  //   id: "nonprofit-roi",
  //   title: "Nonprofit ROI Calculator",
  //   year: "2025",
  //   blurb:
  //     "Embeddable ROI calculator for nonprofit campaigns with real-time projections and branded PDF exports. Drop-in React component for Webflow and no-code platforms.",
  //   tech: ["Next.js", "TypeScript", "React"],
  //   image: "/projects/project-3.png",
  //   alt: "Nonprofit ROI calculator",
  //   links: [
  //     { label: "Case Study", href: "/case-study/share-calculator" },
  //     {
  //       label: "Live",
  //       href: "https://www.shareservices.co/digital-fundraising-calculator-for-nonprofits",
  //     },
  //   ],
  // },
  // {
  //   id: "customer-reference",
  //   title: "Customer Reference Agent",
  //   year: "2025",
  //   blurb:
  //     'Internal AI search tool that surfaces customer quotes from Salesforce using semantic search and confidence scoring. Eliminates the mid-pitch "can you find me a quote?" scramble.',
  //   tech: ["Claude", "Next.js", "Vercel AI SDK"],
  //   image: "/projects/project-4.png",
  //   alt: "AI-powered reference agent interface",
  //   links: [
  //     { label: "Case Study", href: "/case-study/reference-agent" },
  //     { label: "Demo", href: "https://reference-agent.vercel.app/" },
  //   ],
  // },
  // {
  //   id: "blog-analysis",
  //   title: "Blog Content Audit",
  //   year: "2024",
  //   blurb:
  //     "AI-assisted content audit that classified 500+ blog posts by strategic use case, revealing that 62% of content targeted acquisition over retention—a strategic gap invisible in the spreadsheet view.",
  //   tech: ["Python", "Claude", "Next.js"],
  //   image: "/projects/project-5.png",
  //   alt: "Blog content analysis dashboard",
  //   links: [
  //     { label: "Case Study", href: "/case-study/blog-audit" },
  //     { label: "Live", href: "https://blog-data-visualization.vercel.app/" },
  //   ],
  // },
  // {
  //   id: "patches",
  //   title: "pATCHES",
  //   year: "ongoing",
  //   blurb:
  //     "Music education platform and JavaScript plugin ecosystem reaching 2M+ visitors with $200k+ in plugin sales since 2016.",
  //   tech: ["JavaScript", "AWS", "Web Analytics"],
  //   image: "/projects/project-6.png",
  //   alt: "pATCHES music education platform",
  //   links: [{ label: "Website", href: "https://www.patches.zone" }],
  // },
  // {
  //   id: "listen-too",
  //   title: "Listen Too",
  //   year: "2024",
  //   blurb:
  //     "Shareable playlist generator built on Spotify's API. Analyzes recent listening activity and creates curated playlists in seconds.",
  //   tech: ["Next.js", "TypeScript", "OAuth"],
  //   image: "/projects/project-7.png",
  //   alt: "Spotify playlist generator",
  //   links: [
  //     { label: "Case Study", href: "/case-study/listen-too" },
  //     { label: "Live", href: "https://www.listen-too.app" },
  //   ],
  // },
];
