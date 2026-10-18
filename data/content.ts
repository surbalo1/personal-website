// All site content lives here. Edit this file to update the website.

export const personalInfo = {
  name: "Rafael Ignacio Gonzalez Chong",
  shortName: "Rafael Gonzalez",
  title: "Cloud Solution Architect",
  company: "Microsoft",
  email: "rafael.glez.chong@gmail.com",
  location: "Mexico City",
  linkedin: "https://www.linkedin.com/in/rafael-glez-chong/",
  github: "https://github.com/surbalo1",
  resumeUrl: "/Rafael-Gonzalez-Resume.pdf",
};

// Short bio, written in first person. Each string is one paragraph.
export const bio = [
  "I work with teams that are building on Azure, mostly helping them figure out how to put AI to use in a way that holds up after the demo.",
  "I didn't start in the cloud. My first job was as an electronics technician in Chihuahua, assembling and debugging IoT boards. From there I moved into firmware, QA, sales, field engineering in Germany, and systems integration. That path is why I still care about how things behave all the way down.",
  "Outside of work I build small projects, mostly AI tools and the occasional piece of hardware.",
];

export type Role = {
  title: string;
  company: string;
  location?: string;
  period: string;
  current?: boolean;
  summary: string;
  tags: string[];
};

export const experience: Role[] = [
  {
    title: "Cloud Solution Architect",
    company: "Microsoft",
    location: "Mexico City",
    period: "2026 – now",
    current: true,
    summary:
      "Helping customers design and build cloud and AI solutions on Azure, through architecture reviews, workshops and proofs of concept.",
    tags: ["Azure", "AI", "Architecture"],
  },
  {
    title: "Systems Integration Engineer",
    company: "IMTECH Desarrollos",
    location: "Chihuahua",
    period: "2025",
    summary:
      "Integrated MSP430 and RSL10 platforms into customer systems in C, set up validation workflows and helped onboard junior engineers.",
    tags: ["C", "MSP430", "RSL10"],
  },
  {
    title: "Electrical Engineer Intern",
    company: "Balsas GmbH",
    location: "Erfurt, Germany",
    period: "2025",
    summary:
      "Residential electrical renovations under DIN VDE rules. Lots of coordination with customers, inspectors and contractors.",
    tags: ["DIN VDE"],
  },
  {
    title: "Solutions Engineer",
    company: "Fahr Electronic Systems",
    location: "Chihuahua",
    period: "2024 – 2025",
    summary:
      "Built ESP32 devices with LoRa, BLE and OTA updates, ran customer demos and shipped 5 prototypes with full documentation.",
    tags: ["ESP32", "MicroPython", "LoRa", "BLE"],
  },
  {
    title: "QA Technician",
    company: "GM&T Engineering",
    location: "Chihuahua",
    period: "2023 – 2024",
    summary: "Validated automotive wiring harnesses to OEM and ISO TS 16949 standards, with a 98% first-pass yield.",
    tags: ["ISO TS 16949"],
  },
  {
    title: "Sales Executive",
    company: "STEREN",
    location: "Chihuahua",
    period: "2023",
    summary: "Helped customers pick the right electronics for what they were building. Repeat purchases went up about 8%.",
    tags: ["Pre-sales"],
  },
  {
    title: "Electronics Technician",
    company: "Fahr Electronic Systems",
    location: "Chihuahua",
    period: "2022 – 2023",
    summary: "Assembled and tested IoT prototypes for field pilots and cut debugging time on installs by about 25%.",
    tags: ["PCB", "IoT"],
  },
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  github: string;
};

export const projects: Project[] = [
  {
    title: "Pharmacy AI automation",
    description:
      "Automation for independent pharmacies across chat, SMS, email and voice. Patient data is de-identified before anything reaches the LLM.",
    stack: ["Python", "FastAPI", "LLMs"],
    github: "https://github.com/surbalo1/Pharmacy-AI-automation-system",
  },
  {
    title: "AI coaching platform",
    description: "Multi-agent workflows, a RAG knowledge base and video processing behind one dashboard.",
    stack: ["Python", "React", "RAG"],
    github: "https://github.com/surbalo1/ai-coaching-system",
  },
  {
    title: "IoT sensor pipeline",
    description: "MQTT ingestion and live dashboards for 50+ devices. Data went from 5 minutes behind to under a second.",
    stack: ["Node.js", "MQTT", "PostgreSQL"],
    github: "https://github.com/surbalo1/iot-sensor-pipeline",
  },
  {
    title: "Board support package",
    description: "One API for GPIO, UART, SPI and I2C on both ESP32 and PIC18F4550, so firmware ports faster.",
    stack: ["C", "MicroPython"],
    github: "https://github.com/surbalo1/embedded-bsp-esp32-pic18f",
  },
  {
    title: "AC motor controller",
    description: "PID speed control on an ESP32 with encoder feedback, accurate to about ±1.5%.",
    stack: ["C++", "ESP32"],
    github: "https://github.com/surbalo1/esp32-ac-motor-controller",
  },
  {
    title: "Emotion recognition",
    description: "Real-time facial emotion detection that runs locally, built for a university HCI project.",
    stack: ["Python", "OpenCV"],
    github: "https://github.com/surbalo1/real-time-emotion-recognition",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Cloud & AI", items: ["Azure", "Azure AI Foundry", "Azure OpenAI", "RAG", "Agents"] },
  { group: "Software", items: ["Python", "FastAPI", "Node.js", "PostgreSQL", "Docker", "Git", "Linux"] },
  { group: "Hardware", items: ["C", "MicroPython", "FreeRTOS", "UART / SPI / I2C", "PCB design", "MQTT", "LoRa", "BLE"] },
  { group: "Languages", items: ["Spanish", "English (C1)", "German (A2)"] },
];

export const education = [
  {
    degree: "B.Sc. Electronic Engineering",
    institution: "Instituto Tecnológico de Chihuahua",
    period: "2020 – 2024",
    note: "Minor in intelligent embedded systems. IEEE student branch.",
  },
  {
    degree: "Global Summer Institute, Big Data & AI",
    institution: "University of Texas at Austin",
    period: "2025",
    note: "Fulbright COMEXUS scholarship.",
  },
];

export const certifications = [
  "Azure Fundamentals (AZ-900)",
  "Azure AI Essentials",
  "Power BI Essentials",
  "PMI Project Management Foundations",
  "Lean Six Sigma White Belt",
];

export const testimonial = {
  quote:
    "Rafael is a skilled and reliable professional who consistently showed dedication and teamwork during our time working together.",
  author: "Alfredo Luna Luis",
  role: "Mechanical and Electrical Engineer",
  linkedin: "https://www.linkedin.com/in/alfredo-luna-luis-691740223/",
};

export const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
