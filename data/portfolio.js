// All portfolio content in one place.
// Only real facts about Tejas V K — nothing invented.

export const profile = {
  name: "Tejas V K",
  role: "Engineering Student & Developer",
  tagline: "Building real projects while learning — Next.js, Java, Python, and more.",
  summary:
    "I'm Tejas V K, a 3rd semester engineering student. I learnt Python, C and C++ in my first year of engineering, and I'm now building web projects with Next.js, React and Node.js. I like turning what I learn into working software — from a note-taking app for college students to a complaint management system for apartments.",
  location: "India",
  github: "https://github.com/tejasvk2007-ops",
  githubUsername: "tejasvk2007-ops",
  email: "tejasvk2007@gmail.com",
};

export const about = {
  intro:
    "I'm a 3rd semester engineering student who learns by building. In my first year I learnt Python, C and C++, and since then I've been adding Java, JavaScript, Next.js and Node.js — always with a real project to practise on.",
  interests: [
    "Building web apps with Next.js and React",
    "Problem solving in Python, C and C++",
    "Robotics and autonomous systems",
    "Learning by building real, working projects",
  ],
  careerGoal:
    "Build strong tech skills for a tech career — by shipping real projects, learning solid fundamentals, and working on problems that real users face.",
};

export const skills = [
  {
    group: "Programming Languages",
    items: [
      { name: "Python", note: "Learnt in 1st year" },
      { name: "C", note: "Learnt in 1st year" },
      { name: "C++", note: "Learnt in 1st year" },
      { name: "Java", note: "" },
      { name: "JavaScript", note: "" },
    ],
  },
  {
    group: "Web Development",
    items: [
      { name: "Next.js", note: "" },
      { name: "React", note: "" },
      { name: "HTML / CSS", note: "" },
      { name: "Tailwind CSS", note: "" },
      { name: "Node.js", note: "" },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "Git", note: "" },
      { name: "GitHub", note: "" },
      { name: "VS Code", note: "" },
    ],
  },
];

export const projects = [
  {
    title: "Smart Note Taker",
    description:
      "AI note-taking web app for college and engineering students. Upload a lecture and get a short summary with key points, then search and filter your notes. Built as a college team project (3-member team).",
    tech: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/tejasvk2007-ops/smart-notes-taker",
    liveDemo: null,
    highlight: "Main project",
  },
  {
    title: "Work Order Desk — Apartment Complaint System",
    description:
      "A complaint management system for apartment / PG residents to report issues (electricity, plumbing, water, internet, housekeeping) and track them through to resolution.",
    tech: ["Node.js", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/tejasvk2007-ops/apartment-complaint-system",
    liveDemo: null,
    highlight: "Backend with zero dependencies",
    details: [
      "Backend built with Node.js core http module only — no npm install required",
      "Vanilla HTML / CSS / JS frontend, no framework, no build step",
      "JSON file storage acting as a simple database",
      "REST API for complaints",
      "Status workflow: Open → In Progress → Resolved → Closed",
    ],
  },
];

export const moreOnGithub = {
  text: "More small practice projects are on my GitHub profile — To-do List and Product Landing Page (early HTML practice).",
  github: "https://github.com/tejasvk2007-ops",
};

export const experience = [
  {
    title: "Team Member — Autonomous Robo Racer",
    org: "Techfest 2025, IIT Bombay",
    type: "Competition / Activity",
    description:
      "Part of a 12-member team from college that built an autonomous racing robot and secured 4th place at Techfest 2025, IIT Bombay.",
  },
  {
    title: "Developer — Smart Note Taker",
    org: "College team project (3-member team)",
    type: "Team Project",
    description:
      "Built the Next.js app setup, auth UI, navbar and context. The team shipped a working MVP with summary, key points, search and filter.",
  },
  {
    title: "Developer — Apartment Complaint System",
    org: "Personal project",
    type: "Project",
    description:
      "Built a full complaint management system end to end: Node.js backend with a REST API and a vanilla HTML / CSS / JS frontend.",
  },
];

export const achievements = [
  {
    title: "Techfest 2025 — Autonomous Robo Racer, 4th Place",
    org: "Techfest 2025, IIT Bombay",
    description:
      "Secured 4th place with a 12-member team from college in the Autonomous Robo Racer competition at Techfest 2025, IIT Bombay. Certificates held.",
    icon: "trophy",
  },
  {
    title: "Smart Note Taker — College Milestone Project",
    org: "College Tech Week Sprint",
    description:
      "Built and shipped a working Next.js MVP as part of a 3-member team, with a live GitHub repository, issues and merged pull requests.",
    icon: "code",
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/tejasvk2007-ops" },
  { label: "Email", href: "mailto:tejasvk2007@gmail.com" },
];
