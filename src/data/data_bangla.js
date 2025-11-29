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
  { label: "হোম", href: "#hero" },
  { label: "আমার সম্পর্কে", href: "#about" },
  { label: "প্রজেক্টসমূহ", href: "#projects" },
  { label: "অভিজ্ঞতা", href: "#experience" },
  { label: "শিক্ষা", href: "#education" },
  { label: "যোগাযোগ", href: "#contact" },
];

//  HERO CONTENT
export const HERO_CONTENT = {
  greeting: "আমি ",
  name: "তাশরীক",
  role: "Full Stack Software Engineer",
  introduction:
    "আমি আধুনিক প্রযুক্তি দিয়ে ইন্টারঅ্যাকটিভ, দ্রুত এবং ব্যবহারবান্ধব ওয়েব অ্যাপ্লিকেশন তৈরি করি।",
  description:
    "বর্তমানে আমি ব্যবসা প্রতিষ্ঠানগুলোর আইডিয়া বাস্তবে রূপ দিতে ইন্টারঅ্যাকটিভ ডিজিটাল সলিউশন তৈরি করছি। আমার কাজ কৌশল, ডিজাইন এবং ইঞ্জিনিয়ারিংকে একত্রিত করে সূক্ষ্ম এবং কার্যকর ডিজিটাল অভিজ্ঞতা তৈরি করে।",
  resumeLinkText: "ডাউনলোড Resume",
  resumeLink: "/resources/resume.pdf",
  skills: ["JavaScript", "Python", "C++"],
};

//  ABOUT CONTENT
export const ABOUT_CONTENT = {
  whoIAm: `
    হ্যালো! আমি নাঈমুর রহমান শরীফ তাশরীক — একজন Full Stack Software Engineer, Modern এবং High Performance Web Application তৈরিতে আগ্রহী। আমি React, Tailwind CSS, Node.js, Express এবং PostgreSQL ব্যবহার করে clean ইন্টারফেস এবং scalable ব্যাকএন্ড সিস্টেম তৈরি করি।

    আমি বর্তমানে Dohatec New Media-তে সফটওয়্যার ডেভেলপার ইন্টার্ন হিসেবে কাজ করছি, যেখানে Angular, Spring Boot এবং PostgreSQL ব্যবহার করে এন্টারপ্রাইজ-লেভেল ফ্রন্টএন্ড ও ব্যাকএন্ড ডেভেলপমেন্টে কাজ করছি। আমি রেসপন্সিভ ড্যাশবোর্ড, এপিআই ইন্টিগ্রেশন, অথেন্টিকেশন ফ্লো এবং প্রোডাকশন-রেডি ফিচার তৈরি করি।

    আমি AUST-এ কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং-এ B.Sc. করছি। সফটওয়্যার ইঞ্জিনিয়ারিংয়ের পাশাপাশি AI/ML নিয়েও কাজ করছি — ডেটা প্রোসেসিং, মডেল ডেভেলপমেন্ট এবং বাস্তব ML টেকনিক নিয়ে পরীক্ষা-নিরীক্ষা করছি।
  `,

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
    "ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট",
    "অথেন্টিকেশন ও অথরাইজেশন",
    "REST API ও API ডিজাইন",
    "Framer Motion অ্যানিমেশন",
    "PostgreSQL, Express, React, Node",
    "PostgreSQL, Spring Boot, Angular",
    "পেমেন্ট সিস্টেম ইন্টিগ্রেশন",
    "সমস্যা সমাধান ও ডেটা স্ট্রাকচার",
  ],

  certificates: [
    {
      category: "ডেভেলপমেন্ট",
      url: webAngela,
      link: "https://www.udemy.com/certificate/UC-eb773947-12f7-42c4-9e95-0d0b6fa22059/"
    },
    {
      category: "একাডেমিক",
      url: sql,
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/f13d13dd1599d936a1376cf0c9ec9a8f5b8ecd2d"
    },
    {
      category: "একাডেমিক",
      url: shell,
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/a0e7a8f195787cf869687217d8e71902e3d5b7f8"
    },
    {
      category: "একাডেমিক",
      url: java,
      link : "https://www.udemy.com/certificate/UC-6188683a-07d0-4834-bac3-295b036f39d6/"
    },
  ],

  approachParagraphs: [
    "আমার কাজ clarity, performance এবং ব্যবহারকারীর অভিজ্ঞতা-কেন্দ্রিক চিন্তাভাবনা দ্বারা পরিচালিত। ব্যাকএন্ড সিস্টেম তৈরি, ফ্রন্টএন্ড ফ্লো ডিজাইন বা বিদ্যমান ফাংশনালিটি উন্নত করা — যাই করি না কেন, আমি মসৃণ, সুচিন্তিত এবং পরিপাটি অভিজ্ঞতা তৈরি করতে পছন্দ করি",
    "আমি collaboratively কাজ করতে পছন্দ করি এবং সবসময় কৌতূহলী থাকি। নতুন প্রযুক্তি অন্বেষণ, সমস্যা ভাঙা, দ্রুত ইটারেট করা ও ডিজাইন, ফাংশনালিটি ও পারফরম্যান্সের সমন্বয়ে সমাধান তৈরি করতে পছন্দ করি।",
  ],

  outsideWork: [
    "প্রোগ্রামিংয়ের বাইরে, আমি AI, মেশিন লার্নিং এবং LLM ডেভেলপমেন্ট সম্পর্কে জানতে পছন্দ করি। UI অনুপ্রেরণা, মোশন ডিজাইন এবং আধুনিক ডিজিটাল অ্যাস্থেটিকস নিয়ে ঘাঁটাঘাঁটি করি।",
    "ফাঁকে আমি সিনেমা-সিরিজ দেখি, ফিকশন ও উপন্যাস পড়ি, acrylic painting এবং পেন্সিল স্কেচ করি। ব্যক্তিগত প্রজেক্টে কাজ করতেও ভালোবাসি যা আমাকে চ্যালেঞ্জ করে এবং সৃজনশীলতা বাড়ায়।",
  ],
};

//  PROJECTS CONTENT
export const PROJECTS = [
  {
    name: "Cravings",
    category: "Development",
    shortDescription: "অনলাইন ফুড ডেলিভারি সিস্টেম — অর্ডার, কার্ট ও অ্যাডমিনসহ।",
    longDescription:
      "Cravings একটি পূর্ণাঙ্গ অনলাইন ফুড ডেলিভারি প্ল্যাটফর্ম যেখানে আছে রিয়েল-টাইম অর্ডারিং ফ্লো, রোল-বেসড অথেন্টিকেশন, অ্যাডমিন ড্যাশবোর্ড এবং মোবাইল-ফ্রেন্ডলি ইউএক্স।",
    image: p1_cravings,
    github: "https://github.com/shariftasrik/Cravings",
    preview: "https://cravings-tasrik.42web.io/",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    year: "২০২৪",
    madeAt: "AUST প্রজেক্ট",
  },
  {
    name: "তাশরীক পোর্টফোলিও",
    category: "Development",
    shortDescription: "মোশন-ভিত্তিক ব্যক্তিগত পোর্টফোলিও ওয়েবসাইট।",
    longDescription:
      "React + Tailwind + Framer Motion দিয়ে তৈরি ব্যক্তিগত ব্র্যান্ডিং পোর্টফোলিও, যাতে আছে উন্নত ইউএক্স, অ্যানিমেশন এবং পুনঃব্যবহারযোগ্য কম্পোনেন্ট।",
    image: p3_tasrik_portfolio,
    github: "https://github.com/shariftasrik/tasrik-portfolio",
    preview: "https://tasrik.vercel.app",
    tech: ["React", "Tailwind", "Framer Motion"],
    year: "২০২৫",
    madeAt: "ব্যক্তিগত প্রজেক্ট",
  },
  {
    name: "CPU Scheduler",
    category: "Development",
    shortDescription:
      "FCFS, SJF, RR, Priority — CPU শিডিউলিং অ্যালগরিদম ভিজ্যুয়ালাইজার।",
    longDescription:
      "অপারেটিং সিস্টেমের CPU শিডিউলিং অ্যালগরিদম শিখতে ধাপে ধাপে Gantt চার্ট, বুর্স্ট টাইম কন্ট্রোল এবং মেট্রিকস সিমুলেশনসহ তৈরি ইন্টারঅ্যাকটিভ ভিজ্যুয়ালাইজার।",
    image: p2_cpu_schedular,
    github: "https://github.com/shariftasrik/cpu-scheduling-simulator",
    preview: "https://cpu-scheduling-simulator-tasrik.vercel.app/",
    tech: ["React", "JavaScript", "OS Algorithms"],
    year: "২০২৫",
    madeAt: "একাডেমিক প্রজেক্ট",
  },
  {
    name: "ব্রেস্ট ক্যান্সার বাইনারি ক্লাসিফিকেশন (ML)",
    category: "AI/ML",
    shortDescription:
      "ডিসিশন ট্রি, নেইভ বেইস ও KNN দিয়ে ব্রেস্ট ক্যান্সার ক্লাসিফিকেশন।",
    longDescription:
      "একটি মেশিন লার্নিং প্রজেক্ট যেখানে ব্রেস্ট ক্যান্সার ডেটাসেটে Decision Tree, Naïve Bayes এবং KNN ক্লাসিফায়ার প্রয়োগ করা হয়েছে। মডেল ট্রেনিং, ডেটা প্রোসেসিং এবং অ্যাকিউরেসি, প্রিসিশন, রিকল, F1-score দিয়ে পারফরম্যান্স মূল্যায়ন করা হয়েছে।",
    image: p4_ml_1,
    github: "https://github.com/shariftasrik/ml-binary-classification-breastcancer",
    preview: "",
    tech: ["Python", "Naive Bayes", "Decision Tree", "KNN"],
    year: "২০২৫",
    madeAt: "একাডেমিক প্রজেক্ট",
  },
  {
    name: "My-Finance",
    category: "Development",
    shortDescription:
      "সহজেই খরচ নথিভুক্ত করা, বাজেট ট্র্যাক করা এবং আপনার আর্থিক লক্ষ্যে পৌঁছানোর জন্য একটি স্মার্ট অ্যাপ্লিকেশন।",
    longDescription:
      "সহজেই খরচ নথিভুক্ত করা, বাজেট ট্র্যাক করা এবং আপনার আর্থিক লক্ষ্যে পৌঁছানোর জন্য একটি স্মার্ট অ্যাপ্লিকেশন।",
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
    yearRange: "নভেম্বর ২০২৫ — বর্তমান",
    title: "সফটওয়্যার ইঞ্জিনিয়ার ইন্টার্ন",
    company: "Dohatec New Media",
    location: "ঢাকা, বাংলাদেশ",
    description: [
      "সিনিয়র ইঞ্জিনিয়ারদের কাছ থেকে শেখার পাশাপাশি ফ্রন্টএন্ড ও ব্যাকএন্ডে স্কেলেবল সফটওয়্যার তৈরি করেছি। প্রোডাকশন-লেভেল ফিচার, API ইন্টিগ্রেশন এবং এন্টারপ্রাইজ UI নিয়ে কাজ করেছি।",
    ],
    skills: ["Angular", "REST APIs", "Enterprise UI", "Spring Boot", "PostgreSQL"],
  },
  {
    yearRange: "২০২২ — ২০২৬",
    title: "সফটওয়্যার ডেভেলপমেন্ট ল্যাব প্রজেক্ট",
    company: "AUST (Lab Projects)",
    location: "ঢাকা, বাংলাদেশ",
    description: [
      "আধুনিক ফ্রেমওয়ার্ক দিয়ে ফুল-স্ট্যাক অ্যাপ্লিকেশন তৈরি, মেশিন লার্নিং প্রজেক্ট করা এবং Git/GitHub সহযোগিতায় দক্ষতা অর্জন করেছি।"
    ],
    skills: [
      "Flutter", "React", "Node", "Express", "Laravel",
      "ASP.NET", "ML Projects", "Python", "PostgreSQL", "Git/GitHub"
    ]
  }
];

//  EDUCATION CONTENT
export const EDUCATION = [
  {
    school: "AUST (Ahsanullah University of Science and Technology)",
    degree: "বি.এসসি ইন কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং",
    period: "২০২২ — ২০২৬",
    location: "ঢাকা, বাংলাদেশ",
    details: "AI/ML, সফটওয়্যার ইঞ্জিনিয়ারিং এবং LLM ফান্ডামেন্টালসে বিশেষ মনোযোগ।",
  },
  {
    school: "রাজউক উত্তরা মডেল কলেজ (RUMC)",
    degree: "এইচ.এস.সি (বিজ্ঞান)",
    period: "২০১৯ — ২০২১",
    location: "ঢাকা, বাংলাদেশ",
    details:
      "বিজ্ঞান বিভাগ থেকে অধ্যয়ন এবং মেধা তালিকায় সরকারি বৃত্তি অর্জন।",
  },
];

//  CONTACT CONTENT
export const CONTACT_CONTENT = {
  headline: "চলুন দুর্দান্ত কিছু তৈরি করি!",
  description:
    "আমি Innovative ও Impactful প্রজেক্টে কাজ করতে, নতুন কিছু তৈরি করতে এবং অসাধারণ ডিজিটাল অভিজ্ঞতা গড়তে উৎসাহী।",
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

  footerText: `© ${new Date().getFullYear()} তাশরীক. সর্বস্বত্ব সংরক্ষিত।`,
};
