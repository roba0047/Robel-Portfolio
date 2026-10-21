// Edit everything about the portfolio here.
export const profile = {
  name: "Robel Haftu",
  title: "Full-Stack Software Developer",
  company: "MD's Software Solutions",
  phone: "0979120275",
  email: "robelhaftu.03@gmail.com",
  github: "https://github.com/roba0047",
  // Set to e.g. "/robel-haftu-cv.pdf" after placing the file in /public. While null, the CV button is shown disabled.
  cvUrl: null as string | null,
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export const skillGroups = [
  { title: "Frontend", icon: "Layout", items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Responsive UI development"] },
  { title: "Backend", icon: "Server", items: ["Node.js", "PHP", "Laravel", "Python", "REST API development"] },
  { title: "Databases", icon: "Database", items: ["MySQL", "MongoDB", "SQL"] },
  { title: "Programming Languages", icon: "Code2", items: ["JavaScript", "Python", "Java", "C++"] },
  { title: "Tools & Engineering", icon: "GitBranch", items: ["Git and GitHub", "API integration", "Database design", "Full-stack application architecture"] },
] as const;

export type ProjectCategory = "Websites" | "Business Systems" | "AI Projects";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  details: string;
  tags: string[]; // editable sample tags
  features: string[];
  stack?: string[]; // fill in the confirmed tech stack; hidden when empty
  live?: string;
  repo?: string;
  status?: string;
  image?: string; // optional screenshot URL; a designed placeholder shows otherwise
};

export const projects: Project[] = [
  {
    id: "melc",
    title: "My English Language Center",
    category: "Websites",
    description: "A website for an English language learning center, presenting the institution and its services through a modern web experience.",
    details: "Built to give the language center a clear, trustworthy online presence — introducing the institution, its programs and services, and making it easy for prospective students to get in touch.",
    features: ["Presents the institution and its programs","Service information for prospective students","Responsive layout for mobile and desktop","Clear contact paths"],
    tags: ["Website", "Responsive UI"],
    live: "https://www.myenglishlanguagecenter.com/",
    repo: "https://github.com/roba0047/My-English-Language-Center-web",
  },
  {
    id: "ewt",
    title: "Ethiopia Wildlife Tours",
    category: "Websites",
    description: "A tourism website focused on presenting Ethiopian wildlife and travel experiences.",
    details: "A travel-focused website showcasing Ethiopia's wildlife and tour experiences, designed to inspire visitors and present offerings clearly.",
    features: ["Showcases Ethiopian wildlife and destinations","Presents tour and travel experiences","Responsive, image-led layout"],
    tags: ["Website", "Tourism"],
    live: "https://www.ethiowildlifetours.com/",
  },
  {
    id: "vibeica",
    title: "Vibeica",
    category: "Websites",
    description: "A deployed web project built to deliver a polished online experience.",
    details: "A live, deployed web project focused on a polished, modern user experience.",
    features: ["Live, deployed website","Polished, modern interface"],
    tags: ["Website"],
    live: "https://vibeica.com/",
  },
  {
    id: "csai",
    title: "Campus Security AI",
    category: "AI Projects",
    description: "An AI security project built around a monitoring dashboard and computer-vision-based security concepts.",
    details: "An AI-focused campus security project exploring a monitoring dashboard and computer-vision concepts for security. This is a collaborative, in-progress project — not every AI feature is presented as fully operational.",
    features: ["Monitoring dashboard concept","Computer-vision-based security concepts","Collaborative repository (RobelAwet branch)"],
    tags: ["AI", "Computer Vision", "Dashboard"],
    repo: "https://github.com/Bereket-Mussie/campus-security-ai/tree/RobelAwet",
    status: "AI security project · in development",
  },
  {
    id: "hms",
    title: "Hotel Management System",
    category: "Business Systems",
    description: "A management application concept for organizing hotel operations and administrative workflows.",
    details: "A management application concept covering hotel operations and administrative workflows. Demo available on request.",
    features: ["Organizes hotel operations","Administrative workflow management","Database-driven records"],
    tags: ["Business System", "Database"],
    status: "Private · Demo available on request",
  },
  {
    id: "sms",
    title: "School Management System",
    category: "Business Systems",
    description: "A software project supporting school administration and information management.",
    details: "A system for school administration and information management. More details coming soon.",
    features: ["Supports school administration","Information management for school records"],
    tags: ["Business System", "Database"],
    status: "Details coming soon",
  },
];

export const services = [
  { title: "Website Development", icon: "Globe", description: "Modern, responsive websites that present your brand clearly and work well on every device." },
  { title: "Full-Stack Web Applications", icon: "Layers", description: "End-to-end applications — from interface to backend logic and data — built to be maintainable." },
  { title: "Business Management Systems", icon: "Briefcase", description: "Custom systems that organize operations, records and administrative workflows." },
  { title: "Database and API Development", icon: "Database", description: "Well-structured databases and REST APIs that connect your products and data." },
  { title: "AI-Powered Application Prototypes", icon: "Sparkles", description: "Exploratory prototypes that test how AI and automation can fit your idea." },
  { title: "Website Maintenance and Technical Support", icon: "Wrench", description: "Updates, fixes and ongoing care to keep your website running smoothly." },
] as const;

export const journey = [
  { title: "Founder", org: "MD's Software Solutions", text: "Leading a software venture that builds websites, custom software and business systems for real needs." },
  { title: "Full-Stack Software Developer", org: "Project-based work", text: "Designing and shipping production websites — including live sites for a language center, a wildlife tour company and Vibeica." },
  { title: "Business & AI Systems", org: "Ongoing projects", text: "Building management systems for hotels and schools, and collaborating on an AI-focused campus security project." },
];
