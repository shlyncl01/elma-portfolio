// All of your text lives here. Edit this file, not the components.
// Wrap words in **double asterisks** to make them bold.

export const ME = {
  name: "Ashley Nicole J. Elma",
  typed: ["Ashley", "Ashley Nicole Elma"], // the name that types itself in the sidebar
  initials: "AE",
  role: "Web & Mobile Developer",
  status: "Open to OJT · November 2026 · 400 hours",   // fill in your real availability
  tagline: "I build full-stack apps with React, Node.js and MongoDB. I'm looking for an OJT where I can ship real features.",
  email: "ashleyelma1@gmail.com", // your GitHub shows a different email; pick the one you check
  phone: "0966 865 2807",
  location: "Molino IV, Bacoor City, Cavite",
  resume: "/Elma,AshleyNicole_Resume.pdf", // put the file in /public
  socials: [
    { label: "GitHub", href: "https://github.com/shlyncl01" },
    { label: "LinkedIn", href: "https://linkedin.com/in/ashley-nicole-elma-aa8123444" }, // TODO
  ],
};

export const ABOUT = [
  "I'm a 4th-year **BSIT student** at National University – Mall of Asia, specializing in **Mobile and Web Applications**. I build full-stack apps: **React** interfaces, **Node.js and Express** APIs, **MongoDB** databases, deployed and live.",
  "For my capstone, **Kanang-Alalay**, I built the web platform for the Little Sisters of the Abandoned Elderly: a public booking and donation site, plus admin and head-caregiver dashboards for **residents, medications, inventory and audit logs**. It is now **used by our client** in their daily operations.",
  "I test my own work, debug carefully, and write code a teammate can read. I'm looking for an **OJT** where I can ship features on a real codebase and learn how a professional team works.",
];

// slug = simple-icons name, color = brand hex, src = full image URL (overrides slug), invert = black icon that flips to white in the navy theme
export const SKILLS = [
  {
    group: "Front-end Development",
    items: [
      { name: "React", slug: "react", color: "61DAFB" },
      { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
      { name: "HTML5", slug: "html5", color: "E34F26" },
      { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
      { name: "Bootstrap", slug: "bootstrap", color: "7952B3" },
    ],
  },
  {
    group: "Mobile Development",
    items: [
      { name: "React Native", slug: "react", color: "61DAFB" },
      { name: "Flutter", slug: "flutter", color: "02569B" },
      { name: "Android Studio", slug: "androidstudio", color: "3DDC84" },
    ],
  },
  {
    group: "Back-end & Database",
    items: [
      { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
      { name: "Express.js", slug: "express", invert: true },
      { name: "MongoDB", slug: "mongodb", color: "47A248" },
    ],
  },
  {
    group: "Deployment & Tools",
    items: [
      { name: "Vercel", slug: "vercel", invert: true },
      { name: "Render", slug: "render", color: "46E3B7" },
      { name: "GitHub", slug: "github", invert: true },
      { name: "Figma", slug: "figma", color: "F24E1E" },
      { name: "Canva", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" },
    ],
  },
];
export const EXPERIENCE = [
  {
    when: "2026",
    title: "Full-stack Developer",
    org: "Kanang-Alalay Capstone, LSAE",
    text: "Built the web side of Kanang-Alalay, a medication, booking and donation management system for a nursing home. Delivered the public site and the Admin and Head Caregiver dashboards, with role-based access (JWT), OTP account activation, real-time notifications and audit logging. Now used by our client, the Little Sisters of the Abandoned Elderly.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Socket.IO"],  // keep only what you personally used
    link: "https://lsae-kanangalalay.online/",
  },
];

// image: put screenshots in /public/projects/ (any size, ~16:9 looks best). Missing images show a placeholder.
// Descriptions marked (edit) are guessed from repo names. Rewrite them in your own words.
export const PROJECTS = [
  {
    title: "Kanang-Alalay",
    text: "Live capstone project, now used by our client, the Little Sisters of the Abandoned Elderly: public booking and donation pages and role-based dashboards for medication, inventory and compliance tracking.",
    tags: ["JavaScript", "React", "Node.js", "Express", "MongoDB Atlas"],
    link: "https://lsae-kanangalalay.online/",
    image: "/projects/kanang-alalay.png",
  },
     {
    title: "PawHelp",
    text: "A volunteer drive manager for animal shelters. Organizers post drives, volunteers reserve slots and get notified of changes, and anyone can open a shared drive link without an account.",    tags: ["React", "Node.js", "Express", "MongoDB"],
    image: "/projects/pawhelp.png",
  },
];

export const NAV = [
  ["about", "About Me"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["contact", "Contact"],
];