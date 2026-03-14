export const personalInfo = {
  name: "Ali Ali Al-Jasim",
  title: "Computer Engineering Student & Software Engineer",
  subtitle: "Building AI-powered solutions and digital experiences",
  description: "Computer Engineering student at Toronto Metropolitan University with hands-on internship experience in AI development, frontend engineering, and systems engineering. Passionate about building impactful tools that solve real-world problems.",
  email: "ali.ali.aljasim2005@gmail.com",
  phone: "647-904-3505",
  location: "Toronto, Ontario",
  github: "https://github.com/AliAliAljasim",
  linkedin: "https://www.linkedin.com/in/ali-ali-al-jasim/"
}

export const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "Java", level: 85 },
      { name: "Svelte", level: 90 },
      { name: "Dart", level: 90 },
      { name: "C / C++", level: 85 },
      { name: "MATLAB", level: 70 }
    ]
  },
  {
    category: "Frameworks & Tools",
    items: [
      { name: "Flutter", level: 85 },
      { name: "AWS", level: 75 },
      { name: "AutoCAD", level: 70 },
      { name: "Blender", level: 65 },
      { name: "MS Office", level: 92 },
      { name: "Google Suites", level: 92 }
    ]
  },
  {
    category: "Languages",
    items: [
      { name: "English", level: 100 },
      { name: "Arabic", level: 100 },
      { name: "French", level: 75 }
    ]
  }
]

export const projects = [
  {
    id: 1,
    title: "AI-Powered Study App",
    description: "A fully functioning Flutter study app that optimises study routines, calculates grade averages, analyses marks, and provides AI-driven suggestions for more effective study sessions.",
    technologies: ["Flutter", "Dart"],
    github: "https://github.com/AliAliAljasim/studyapp",
    live: "#",
    featured: true,
    date: "August 2025",
    image: null
  },
  {
    id: 2,
    title: "Global Climate Monitor",
    description: "A web application that transforms raw NOAA climate records into interactive visualisations — making long-term climate trends intuitive and impactful. Features global temperature anomaly charts spanning 80+ years, real-time CO₂, methane, and Arctic sea ice indicators, and historical data drawn from NASA and NOAA datasets.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/AliAliAljasim/global-climate-Monitor",
    live: "https://global-climate-monitor.vercel.app/",
    featured: true,
    date: "March 2026",
    image: "/Global-Climate-Monitor.png"
  },
  {
    id: 3,
    title: "Finance Calculator",
    description: "A Python-based calculator that handles basic arithmetic (BEDMAS) and advanced finance functions. Simplifies complex financial calculations, enhancing user efficiency by 40%.",
    technologies: ["Python"],
    github: "https://github.com/AliAliAljasim/Calculator",
    live: "#",
    featured: false,
    date: "June 2024",
    image: null
  },
  {
    id: 4,
    title: "Global Temperature Analysis",
    description: "A C-based CSV analysis program that uses Gnuplot to visualize temperature patterns across regions over centuries, computing annual and centurial averages to study Global Warming trends.",
    technologies: ["C", "Gnuplot"],
    github: "https://github.com/AliAliAljasim/globalTemperatureAnalysis",
    live: "#",
    featured: false,
    date: "October 2024",
    image: null
  }
]

export const experience = [
  {
    company: "Feranse AI Agents",
    position: "Software Engineer Intern",
    duration: "April 2025 – Present",
    location: "Montreal, Quebec",
    description: "Developing AI-powered agent tools to automate complex, repetitive tasks.",
    achievements: [
      "Automated repetitive enterprise workfl ows saving ~10–15 hours of manual work per week by developing AI-powered autonomous agents designed to solve operational tasks",
      "Improved AI agent execution speed by ~30% by building optimised Python-based interfaces and agent interaction pipelines",
      "Increased AI response accuracy by ~90% through advanced prompt engineering strategies for autonomous agent workflows"
    ]
  },
  {
    company: "AGF AI",
    position: "Frontend Software Engineer Intern",
    duration: "July 2024 – April 2025",
    location: "Longueuil, Quebec",
    description: "Developed an AI-powered tool for engineering industries with ChatGPT-level functionality.",
    achievements: [
      "Developed frontend architecture for an AI-powered engineering assistant platform supporting 800+ engineering users by building interactive components using Svelte and HTML, integrating Python backend APIs",
      "Improved application responsiveness by ~35% by reducing component render cycles and implementing lazy loading for large UI modules.",
      "Accelerated AI feature integration speed by ~40% by collaborating with backend engineers to deploy and connect machine learning models into the application"
    ]
  },
  {
    company: "AGF Groupe",
    position: "System Engineering Intern",
    duration: "April 2024 – August 2024",
    location: "Markham, Ontario",
    description: "Conducted technical repairs and maintenance on industrial equipment, large-scale servers, and corporate software systems.",
    achievements: [
      "Improved reliability of enterprise server and industrial equipment infrastructure across 10+ internal systems by diagnosing and resolving hardware and software failures using Oracle systems, proxy networks, and enterprise development tools",
      "Increased infrastructure scalability and deployment effi ciency by ~30% by assisting in the migration of 20+ enterprise server workloads to AWS cloud environments",
      "Reduced system downtime incidents by ~25% by collaborating with cross-functional engineering teams to troubleshoot and resolve complex infrastructure and networking issues"
    ]
  }
]

export const worksInProgress = [
  {
    id: 2,
    title: "Study Seas - The All in One Study App",
    description: "Converting the AI-Powered Study App into a cross-platform Native ReactJS application, enhancing accessibility and user experience across devices.",
    technologies: ["Typescript", "ReactJS"],
    progress: 95,
    github: "#",
    status : "In Progress",
  },  
  {
    id: 3,
    title: "CPU Operating System",
    description: "Designing and implementing a basic operating system in C that manages CPU processes, memory allocation, and file systems, providing a foundational understanding of OS principles.",
    technologies: ["C", "Assembly"],
    progress: 90,
    github: "#",
    status : "In Progress",
  },
  {
    id: 1,
    title: "Finance Tracker",
    description: "A comprehensive finance tracking application that allows users to monitor expenses, set budgets, and visualize Networth trends through interactive dashboards.",
    technologies: ["HTML", "JavaScript", "CSS", "Python"],
    progress: 85,
    github: "#",
    status : "In Progress",
  },
  {
    id: 7,
    title: "32 Bit CPU - FGPA Board",
    description: "Utilising the information that I have gained from designing an OS, I'm building a 32-bit CPU on an FPGA board using Verilog. This project will deepen my understanding of computer architecture and hardware design principles.",
    technologies: ["VHDL"],
    progress: 30,
    github: "#",
    status : "In Progress",
  },
  {
    id: 4,
    title: "Fitness Tracker",
    description: "Have you noticed how expensive fitness trackers can be? I'm building a cost-effective fitness tracking app that uses smartphone sensors to monitor physical activity, , providing users with insights to improve their health and wellness.",
    technologies: ["Typescript", "ReactJS"],
    progress: 0,
    github: "#",
    status : "To Be Started",
  },
  {
    id: 5,
    title: "Physics Simulation Engine",
    description: "A personal hobby project to create a physics simulation engine in C++ that models real-world physics phenomena, such as gravity, collisions, and fluid dynamics, for educational and entertainment purposes.",
    technologies: ["C++"],
    progress: 0,
    github: "#",
    status : "To Be Started",
  },
  {
    id: 6,
    title: "Ali's Programming Language",
    description: "Already working on designing an OS, why not make a language to go with it. This is a project to create my own Programming language, and create 3 games with it.",
    technologies: ["C", "Assembly"],
    progress: 0,
    github: "#",
    status : "To Be Started",
  }
]

export const education = [
  {
    degree: "Bachelor's in Computer Engineering",
    school: "Toronto Metropolitan University",
    year: "September 2023 – April 2027",
    description: "GPA: 3.10 | Dean's List | Expected Graduation: April 2027\nRelated Coursework: Digital Systems, Electronic Networks, Software Systems, Computer Programming Fundamentals, Microprocessors, Database Systems"
  }
]
