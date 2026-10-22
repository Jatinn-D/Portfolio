// All site copy lives here, so text can be updated without touching layout code.

export const PROFILE = {
  name: "Jatin Dilip",
  email: "jatindilip25@gmail.com",
  phone: "+91 86672 93993",
  phoneHref: "tel:+918667293993",
  github: "https://github.com/Jatinn-D",
  linkedin: "https://www.linkedin.com/in/jaatinnn/",
  instagram: "https://www.instagram.com/jatinn_d/",
  resume: "/Resume.pdf",
};

export interface Project {
  id: string;
  name: string;
  summary: string;
  url: string;
  displayUrl: string;
  github?: string;
  image: string;
  imageAlt: string;
  problem: string;
  built: string;
  result?: string;
  context: string;
  stack: string[];
  demo?: { mobile: string; password: string };
}

export const PROJECTS: Project[] = [
  {
    id: "suvarna",
    name: "Suvarna",
    summary: "Pawn shop management system",
    url: "https://pawnbrokerapp.pages.dev",
    displayUrl: "pawnbrokerapp.pages.dev",
    github: "https://github.com/Jatinn-D/PawnShopManagementSystem",
    image: "/projects/suvarna.webp",
    imageAlt: "Suvarna login screen",
    problem:
      "Pawn shops were keeping pledges in hand-written books and working out interest by hand. It was slow, and mistakes cost money.",
    built:
      "A web app that records every pledge, calculates interest and loan maturity automatically, and finds any record instantly. It installs on phones and desktops as an app (PWA).",
    result:
      "Live with 3 pawn businesses. Search stays instant across thousands of records thanks to B-tree indexes, with secure login, rate limiting, auto-logout and automatic backups.",
    context: "Designed and built solo",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Supabase"],
    demo: { mobile: "9444206861", password: "12345678" },
  },
  {
    id: "clinic",
    name: "Dr. Sindhu's Skin Clinic",
    summary: "Appointment booking portal and WhatsApp bot",
    url: "https://drsindhusclinic-appointments.vercel.app",
    displayUrl: "drsindhusclinic-appointments.vercel.app",
    image: "/projects/clinic.webp",
    imageAlt: "Dr. Sindhu's Skin Clinic booking page",
    problem:
      "Patients needed a simple way to see a doctor's free slots and book one themselves, without calling the clinic.",
    built:
      "A four-step booking portal synced live with the clinic's scheduling system through the Clinicea API, plus a 24/7 WhatsApp chatbot (Gupshup API) that shares open slots and sends patients straight to the portal.",
    result:
      "Patients can book at any time of day, and the doctor's 15–20 daily slots stay in sync in real time.",
    context: "Designed and built solo during my internship at Camomile Health Care",
    stack: ["Clinicea API", "Gupshup WhatsApp API", "REST APIs"],
  },
  {
    id: "delight",
    name: "Delight Studio",
    summary: "Online store for a Chennai women's fashion boutique",
    url: "https://delight-studio.vercel.app",
    displayUrl: "delight-studio.vercel.app",
    image: "/projects/delight.webp",
    imageAlt: "Delight Studio home page with a saree on a red backdrop",
    problem:
      "A local boutique needed an online store that is easy to browse on a phone and feels as premium as its shop.",
    built:
      "A storefront with 190+ products, category menus, search, filters and sorting, a wishlist, a cart, order tracking and policy pages.",
    context: "Designed and built solo",
    stack: ["Next.js"],
  },
  {
    id: "akronix",
    name: "Akronix",
    summary: "Website for a Chennai tech services company",
    url: "https://akronix-web.vercel.app",
    displayUrl: "akronix-web.vercel.app",
    image: "/projects/akronix.webp",
    imageAlt: "Akronix home page with the headline Build. Connect. Scale.",
    problem:
      "A new company offering software, marketing, networking and mentoring needed one site that explains all four and turns visitors into booked calls.",
    built:
      "A multi-page site with a built-in consultation scheduler: visitors pick a date, then a time slot, then add their details.",
    context: "Designed and built solo",
    stack: [],
  },
];

export const PROCESS = [
  {
    title: "Find the friction",
    body: "I start with how the work is done today and where time is lost: interest worked out by hand at a pawn shop, a literary search that froze at CICT, bad records slipping into a database.",
  },
  {
    title: "Design it first",
    body: "I sketch the flow and screens in Figma and try out motion in Jitter before I write code, so the tool is easy to use from day one.",
  },
  {
    title: "Build with AI in the loop",
    body: "I use AI coding tools to move fast, guided by a skill.md file of my own base UI rules, so generated screens stay consistent with the design. I've also built on the Gemini API.",
  },
  {
    title: "Ship it and stay with it",
    body: "I deploy on Vercel and Cloudflare Pages and keep improving after launch. Suvarna is live with 3 businesses today.",
  },
];

export interface Job {
  role: string;
  org: string;
  period: string;
  place: string;
  points: string[];
}

export const EXPERIENCE: Job[] = [
  {
    role: "Full-Stack Developer Intern",
    org: "Central Institute of Classical Tamil (CICT)",
    period: "Apr 2026 – Present",
    place: "Chennai",
    points: [
      "Rebuilding the institute's teaching website end to end: moving old content into a new responsive design and bringing interactive quizzes back from Adobe Flash.",
      "Moved a 37,545-row Tamil literary corpus from Excel into a database with B-tree indexes. A search that used to freeze now filters almost instantly.",
      "Modelled 150,000+ word-level grammar tags that power the site's grammar-analysis tools.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    org: "Camomile Health Care",
    period: "Mar 2026 – May 2026",
    place: "Chennai",
    points: [
      "Built a custom booking portal for a two-doctor clinic, synced with the Clinicea scheduling API, and fixed the API's authentication and data-sync issues.",
      "Built a 24/7 WhatsApp chatbot with the Gupshup API so patients can check open slots by chat and go straight to booking.",
    ],
  },
  {
    role: "AI Engineer Intern",
    org: "Upstride",
    period: "Jan 2026 – Mar 2026",
    place: "Remote",
    points: [
      "Set up Prometheus and Grafana monitoring for a pharmaceutical company's backend systems.",
      "Implemented an API gateway with JWT authentication for secure data exchange between services.",
    ],
  },
  {
    role: "Data Engineering Intern",
    org: "Analytix Hub AI",
    period: "Dec 2025 – Feb 2026",
    place: "Chennai",
    points: [
      "Built a data-quality system that reads Excel files or live databases, detects columns, and checks each one against 8+ rule types. Bad records go to a review queue.",
      "Added fuzzy name matching against a master table. In testing it caught 100% of the errors planted in a 1,000-row dataset.",
    ],
  },
  {
    role: "UI Designer (Freelance)",
    org: "Buildify-Web",
    period: "Aug 2025 – Present",
    place: "Remote",
    points: [
      "Designed the complete Figma UI for a company's ERP system, making dense business data easy to work with.",
      "Designed posters and social media content for business and EdTech clients.",
    ],
  },
  {
    role: "Web Developer Intern",
    org: "Triland Animation Studio",
    period: "Jun 2025 – Aug 2025",
    place: "Chennai",
    points: [
      "Rebuilt the studio's website in React, responsive on every screen, with an opening reel animation that plays as you scroll.",
    ],
  },
];

export const SKILLS = [
  {
    group: "Build",
    items: ["React", "Next.js", "Node.js", "Express", "Python", "Java", "SQL", "PostgreSQL", "Supabase", "Tailwind CSS"],
  },
  {
    group: "Design",
    items: ["Figma", "Jitter", "GSAP", "Framer Motion", "Responsive UI"],
  },
  {
    group: "AI and data",
    items: ["Gemini API", "AI-assisted UI with skill.md rules", "Pentaho", "Fuzzy matching", "B-tree indexing"],
  },
  {
    group: "Ship and run",
    items: ["Git", "Docker", "Linux", "Vercel", "Cloudflare Pages", "Grafana", "Prometheus"],
  },
];

export const ACHIEVEMENTS = [
  "Finalist three times: Smart India Hackathon '24, Spectrum '25 and InnoHack '26, out of 12+ national and college hackathons",
  "Multiple wins at college-level UI/UX design competitions",
  "NPTEL certifications in Cloud Computing and Python for Data Science",
  "Non-Technical Head, Texus '26",
];
