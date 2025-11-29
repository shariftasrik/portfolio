//  ASSETS IMPORTS
import p1_cravings from "../assets/images/p1_cravings.png";
import p2_cpu_schedular from "../assets/images/p2_cpu_schedular.png";
import p3_tasrik_portfolio from "../assets/images/p3_tasrik_portfolio.png";
import p4_ml_1 from "../assets/images/p4_ml_1.png";
import p5_expense from "../assets/images/p5_expense_tracker.png";

// TECH LOGOS
import js from "../assets/tech_logos/javascript.svg";
import react from "../assets/tech_logos/react.svg";
import node from "../assets/tech_logos/nodedotjs.svg";
import express from "../assets/tech_logos/express.svg";
import angular from "../assets/tech_logos/angular.svg";
import pg from "../assets/tech_logos/postgresql.svg";
import github from "../assets/tech_logos/github.svg";
import mgbd from "../assets/tech_logos/mongodb.svg";
import tailwind from "../assets/tech_logos/tailwindcss.svg";
import html from "../assets/tech_logos/html5-color.svg";
import git from "../assets/tech_logos/git.svg";
import stripe from "../assets/tech_logos/stripe.svg";


// CERTIFICATES
import webAngela from "../assets/certificates/webdev-angela-udemy.jpg";
import sql from "../assets/certificates/sql-datacamp.png";
import shell from "../assets/certificates/shell-datacamp.png";
import java from "../assets/certificates/java-udemy.jpg";

//  NAVIGATION LINKS
export const NAVIGATION_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];


//  HERO CONTENT
export const HERO_CONTENT = {
  greeting: "I'm ",
  name: "Tasrik",
  role: "Full Stack Software Engineer",
  introduction:
    "I craft immersive, intuitive and high-performance web experiences with modern tech.",
  description:
    "Currently, I’m helping businesses bring their ideas to life through interactive digital solutions.  My work merges strategy, design, and engineering to create refined,digital experiences.",
  resumeLinkText: "Download Resume",
  resumeLink: "/resources/resume.pdf",
  skills: ["JavaScript", "Python", "C++"],
};


//  ABOUT CONTENT
export const ABOUT_CONTENT = {
  whoIAm: `
    Hi! I’m Nimur Rahman Sharif Tasrik — a Full-Stack Software Engineer passionate about building modern, and high-performance web applications. I build clean interfaces and scalable backend systems using React, Tailwind CSS, Node.js, Express, and PostgreSQL.

    I’m currently an Software Developer Intern at Dohatec New Media, where I work on enterprise-level front-end and back-end development using Angular, Spring Boot and PostgreSQL. I focus on building responsive dashboards, API integrations, authentication flows, and production-ready features that enhance user experience and reliability.

    I’m pursuing my B.Sc. in Computer Science & Engineering at AUST. Alongside software engineering, I’m exploring AI/ML for my thesis — working on model development, data processing, and applied ML techniques.`,


  techLogos: [
    html,
    tailwind,
    js,
    react,
    node,
    express,
    git,
    github,
    angular,
    pg,
    mgbd,
    stripe
  ],

  skills: [
    "Full-Stack Web Development",
    "Authentication & Authorization",
    "REST APIs & API Design",
    "Framer Motion for animation",
    "PostgreSQL, Express, React, Node",
    "PostgreSQL, Spring Boot, Angular",
    "Payment System Integration",
    "Problem Solving & Data Structures",
  ],

  certificates: [
    {
      category: "Development",
      url: webAngela,
      link: "https://www.udemy.com/certificate/UC-eb773947-12f7-42c4-9e95-0d0b6fa22059/"
    },
    {
      category: "Academic",
      url: sql,
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/f13d13dd1599d936a1376cf0c9ec9a8f5b8ecd2d"
    },
    {
      category: "Academic",
      url: shell,
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/a0e7a8f195787cf869687217d8e71902e3d5b7f8"
    },
    {
      category: "Academic",
      url: java,
      link : "https://www.udemy.com/certificate/UC-6188683a-07d0-4834-bac3-295b036f39d6/"
    },
  ],


  approachParagraphs: [
    "My work is driven by clarity, performance, and user-focused thinking. I enjoy building experiences that feel smooth, intentional, and visually refined — whether I’m engineering backend systems, designing front-end flows, or improving existing functionality.",
    "I work collaboratively and stay curious. I enjoy exploring new technologies, breaking down problems, iterating fast, and shipping solutions that balance design, functionality, and performance.",
  ],

  outsideWork: [
    "Beyond programming, I enjoy learning about AI, machine learning, and LLM development. I love exploring UI inspiration, motion design, and modern digital aesthetics.",
    "In my free time, I watch movies and series, read fiction and novels, create acrylic paintings and pencil sketches, and experiment with creative ideas that sharpen my problem-solving mindset. I also enjoy working on personal projects that challenge me and push my creativity forward.",
  ],
};


//  PROJECTS CONTENT
export const PROJECTS = [
  {
    name: "Cravings",
    category: "Development",
    shortDescription: "Full online food delivery system with ordering, cart, and admin.",
    longDescription:
      "Cravings is a fully-featured online food delivery platform with real-time ordering flow, role-based authentication, admin dashboard, and optimized UX for mobile-first customers.",
    image: p1_cravings,
    github: "https://github.com/shariftasrik/Cravings",
    preview: "https://cravings-tasrik.42web.io/",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    year: "2024",
    madeAt: "AUST Project",
  },
  {
    name: "Tasrik Portfolio",
    category: "Development",
    shortDescription: "Personal branding portfolio with animations & sections.",
    longDescription:
      "A premium developer portfolio built with React + Tailwind + Framer Motion featuring animated sections, smooth UX, and reusable components built for scalability.",
    image: p3_tasrik_portfolio,
    github: "https://github.com/shariftasrik/tasrik-portfolio",
    preview: "https://tasrik.vercel.app",
    tech: ["React", "Tailwind", "Framer Motion"],
    year: "2025",
    madeAt: "Personal Project",
  },
  {
    name: "CPU Scheduler",
    category: "Development",
    shortDescription:
      "Visualization tool for CPU scheduling algorithms like FCFS, SJF, RR, Priority.",
    longDescription:
      "An interactive OS scheduling visualizer built to help students understand CPU algorithms with step-by-step Gantt charts, burst time controls, and simulated metrics.",
    image: p2_cpu_schedular,
    github: "https://github.com/shariftasrik/cpu-scheduling-simulator",
    preview: "https://cpu-scheduling-simulator-tasrik.vercel.app/",
    tech: ["React", "JavaScript", "OS Algorithms"],
    year: "2025",
    madeAt: "Academic Project",
  },
  {
    name: "ml-binary-classification-breastcancer",
    category: "AI/ML",
    shortDescription:
      "Visualization tool for CPU scheduling algorithms like FCFS, SJF, RR, Priority.",
    longDescription:
      "A machine learning project applying Decision Tree, Naïve Bayes, and K-Nearest Neighbors (KNN) classifiers to a breast cancer healthcare dataset for binary classification. Includes data preprocessing, model training, and performance evaluation using accuracy, precision, recall, and F1-score metrics.",
    image: p4_ml_1,
    github: "https://github.com/shariftasrik/ml-binary-classification-breastcancer",
    preview: "",
    tech: ["Python", "Naive Bayes", "Decision Tree", "KNN"],
    year: "2025",
    madeAt: "Academic Project",
  },
  {
    name: "My-Finance",
    category: "Development",
    shortDescription:
      "A smart application to effortlessly record expenses, track budgets, and achieve your financial goals.",
    longDescription:
      "A smart application to effortlessly record expenses, track budgets, and achieve your financial goals.",
    image: p5_expense,
    github: "https://github.com/shariftasrik/my-finance",
    preview: "",
    tech: ["React", "TailwindCSS","Node","Express", "PostgreSQL"],
    year: "2024",
    madeAt: "Academic Project",
  },
];



//  EXPERIENCE CONTENT
export const EXPERIENCES = [
  {
    yearRange: "Nov 2025 — Present",
    title: "Software Engineer Intern",
    company: "Dohatec New Media",
    location: "Dhaka, Bangladesh",
    description: [
      "Built full-stack software projects while learning directly from senior engineers, gaining real production-level knowledge from their experience, and developing scalable frontend and backend systems under their guidance and requirements.",
    ],
    skills: ["Angular", "REST APIs", "Enterprise UI","Spring Boot", "PostgreSQL"],
  },
  {
    yearRange: "2022 — 2026",
    title: "Software Development Lab Projects",
    company: "AUST (Lab Projects)",
    location: "Dhaka, Bangladesh",
    description: [
      "Worked on a range of full-stack applications across modern frameworks, strengthened my cross-platform development abilities, multiple machine learning projects, and practiced effective collaboration through Git/GitHub workflows."
    ],
    skills: ["Flutter", "React", "Node", "Express", "Laravel", "ASP.NET", "ML Projects", "Python", "PostgreSQL", "Git/GitHub"]
  }
];


//  EDUCATION CONTENT
export const EDUCATION = [
  {
    school: "Ahsanullah University of Science and Technology (AUST)",
    degree: "B.Sc. in Computer Science and Engineering",
    period: "2022 — 2026",
    location: "Dhaka, Bangladesh",
    details:
      "Focused on AI/ML, Software Engineering, and LLM fundamentals.",
  },
  {
    school: "Rajuk Uttara Model College (RUMC)",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2019-2021",
    location: "Dhaka, Bangladesh",
    details:
      "Studied Science and achieved the Government Domestic Scholarship for academic merit.",
  },
];


//  CONTACT CONTENT
export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on impactful projects, build innovative solutions, and create meaningful digital experiences.",
  email: "shariftasrik12@gmail.com",
};


// FOOTER CONTENT
export const FOOTER_CONTENT = {

  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/nimur-rahman-sharif-946108349/",
      icon: "RiLinkedinFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/shariftasrik",
      icon: "RiGithubFill",
    },
        {
      platform: "LeetCode",
      url: "https://leetcode.com/u/nrs_tasrik/",
      icon: "SiLeetcode",
    },
    {
      platform: "Twitter",
      url: "https://x.com/tasrik_12",
      icon: "RiTwitterXFill",
    },
  ],

  footerText: `© ${new Date().getFullYear()} Tasrik. All rights reserved.`,

};
