// ── PERSONAL INFO ────────────────────────────────────────
export const PERSONAL = {
  name: "Haneesh Yadav",
  firstName: "Haneesh",
  greeting: "Hello, I'm",
  tagline: "Creative",
  profession1: "Java/Web",
  profession2: "Developer",
  profileImgHome: "assets/images/home-perfil.png",
  profileImgAbout: "assets/images/profile.png",
  resumeUrl: "assets/resume/RESUME.pdf",
};

// ── ABOUT SECTION ────────────────────────────────────────
export const ABOUT = {
  titleHighlight: "Creativity",
  titleRest: "Is My Passion",
  description:
    "I'm a java/web developer passionate about building scalable applications and experimenting with modern technologies. Driven by curiosity and a love for problem-solving, I'm always exploring new development skills and pushing the boundaries of what I can create.",
  boldWords: ["java/web developer", "problem-solving"],
};

// ── STATS ─────────────────────────────────────────────────
export const STATS = [
  { number: "2",   label: "Projects\nLaunched" },
  { number: "10+",  label: "Technologies\nMastered" },
];

// ── NAVIGATION LINKS ─────────────────────────────────────
export const NAV_LINKS = [
  { label: "About",    href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills" },
  { label: "Contact",  href: "#contact" },
];

// ── SOCIAL LINKS ─────────────────────────────────────────
export const SOCIAL_LINKS = [
  { icon: "ri-linkedin-box-line", href: "https://www.linkedin.com/in/haneesh-yadav/", label: "LinkedIn" },
  { icon: "ri-github-line",       href: "https://github.com/haneesh-yadav",           label: "GitHub"   },
];

// ── CONTACT INFO ─────────────────────────────────────────
export const CONTACT = {
  email: "haneesh.yadavv@gmail.com",
  displayEmail: "haneesh.yadavv@gmail.com",
  location: "Gurugram, India (Remote-friendly)",
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/haneesh-yadav/" },
    { label: "GitHub",   href: "https://github.com/haneesh-yadav" },
  ],
};

// ── FOOTER ───────────────────────────────────────────────
export const FOOTER = {
  ownerName: "Haneesh",
};

// ── PROJECTS ─────────────────────────────────────────────
export const PROJECTS = [
  {
    num: "01",
    type: "Web / Blockchain",
    title: "BhoomiSetu",
    subtitle: "Blockchain Land Records Platform",
    tech: "React, Java, SpringBoot, MySQL",
    highlights: [
      "Digitised land records using blockchain for tamper-proof ownership history",
      "Built end-to-end from smart-contract layer to responsive React UI",
    ],
    img: "assets/images/project-1.png",
    link: "https://bhoomi-setu.vercel.app/",
    github: "https://github.com/haneesh-yadav/bhoomiSetu",
  },
  {
    num: "02",
    type: "Web / Real-Time",
    title: "Tambola Game",
    subtitle: "Multiplayer Real-Time Housie",
    tech: "React, Node.js, Express, Socket.IO",
    highlights: [
      "Supports 200+ concurrent players via Socket.IO namespaced rooms",
      "Auto-claims, live number board, and host dashboard built from scratch",
    ],
    img: "assets/images/project-2.png",
    link: "https://haneesh-tambola.vercel.app/",
    github: "https://github.com/haneesh-yadav/tambola",
  },
];

// ── EXPERIENCE ────────────────────────────────────────────
export const EXPERIENCE = [
  {
    title: "Finance Head",
    subtitle: "VIT Stellar Club",
    year: "Present",
    desc: "Leading financial planning and fund management — overseeing budgets, sponsorship allocations, and ensuring transparent financial operations across all club events and initiatives.",
  },
];

// ── EDUCATION ─────────────────────────────────────────────
export const EDUCATION = [
  {
    title: "B.Tech — CSE",
    subtitle: "VIT Vellore University",
    year: "Present",
    desc: "Pursuing Computer Science Engineering — deepening expertise in algorithms, data structures, full-stack development, and emerging technologies while actively building real-world projects.",
  },
  {
    title: "12th Grade",
    subtitle: "Blue Bells Public School",
    year: "2024",
    desc: "Completed Senior Secondary with Science stream, developing independent learning habits and preparing rigorously for competitive exams.",
  },
  {
    title: "10th Grade",
    subtitle: "Narayana E-Techno School",
    year: "2022",
    desc: "Built strong academic foundations across Mathematics and Science — developing the analytical mindset that drives my approach to software development today.",
  },
];

// ── SKILLS ────────────────────────────────────────────────
// icon: Remix Icon class name
export const SKILL_CATEGORIES = [
  {
    category: "Languages",
    icon: "ri-code-s-slash-line",
    skills: ["Java", "JavaScript", "HTML5", "CSS3", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    icon: "ri-stack-line",
    skills: ["React", "Node.js", "Express", "Socket.IO"],
  },
  {
    category: "Tools & Platforms",
    icon: "ri-tools-line",
    skills: ["Git", "GitHub", "MySQL", "Vercel", "VS Code"],
  },
  {
    category: "Currently Learning",
    icon: "ri-book-open-line",
    skills: ["Spring/SpringBoot", "Databases"],
  },
];

// ── CURRENTLY BUILDING ───────────────────────────────────
export const CURRENTLY_BUILDING = "An AI-powered code review tool using the Anthropic API";
