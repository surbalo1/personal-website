// All site content lives here. Edit this file to update the website.

export const personalInfo = {
  name: "Rafael Ignacio Gonzalez Chong",
  shortName: "Rafael Gonzalez",
  title: "Cloud Solution Architect",
  company: "Microsoft",
  email: "rafael.glez.chong@gmail.com",
  location: "Chihuahua, Mexico",
  linkedin: "https://www.linkedin.com/in/rafael-glez-chong/",
  github: "https://github.com/surbalo1",
  resumeUrl: "/Rafael-Gonzalez-Resume.pdf",
};

export const hero = {
  eyebrow: "Cloud Solution Architect at Microsoft",
  headline: "Cloud and AI.",
  headlineMuted: "From the sensor to the model.",
  intro:
    "I help organizations turn business goals into secure, scalable solutions on Azure, with a focus on AI. Years of hands-on electronics and embedded work mean I understand the whole stack.",
};

// The path from hardware to cloud.
export const signalPath = [
  { label: "Hardware", detail: "PCB, test, QA" },
  { label: "Firmware", detail: "C, MicroPython" },
  { label: "IoT", detail: "MQTT, LoRa, BLE" },
  { label: "Cloud", detail: "Microsoft Azure" },
  { label: "AI", detail: "LLMs, RAG, agents" },
];

export const focusAreas = [
  {
    title: "Cloud architecture",
    text: "Azure designs built for security, reliability and cost, following the Well-Architected Framework.",
  },
  {
    title: "AI solutions",
    text: "Taking generative AI from demo to production: RAG, agents and responsible AI on Azure.",
  },
  {
    title: "Technical advisory",
    text: "Workshops, architecture reviews and proofs of concept that help teams decide and deliver.",
  },
  {
    title: "Edge to cloud",
    text: "Connecting devices, data and the cloud, drawing on years of hands-on IoT and embedded work.",
  },
];

export const stats = [
  { value: "7", label: "technical roles, from the lab bench to the cloud" },
  { value: "3", label: "countries where I have worked and studied: Mexico, Germany and the U.S." },
];

export type Role = {
  title: string;
  company: string;
  location?: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  tags: string[];
};

export const experience: Role[] = [
  {
    title: "Cloud Solution Architect",
    company: "Microsoft",
    period: "2026 - Present",
    current: true,
    summary: "Helping customers design, build and scale cloud and AI solutions on Azure.",
    highlights: [
      "Design Azure architectures aligned with customer business goals",
      "Guide teams adopting generative AI, from proof of concept to production",
      "Lead technical workshops, architecture reviews and enablement sessions",
    ],
    tags: ["Azure", "AI", "Solution Architecture"],
  },
  {
    title: "Systems Integration Engineer",
    company: "IMTECH Desarrollos",
    location: "Chihuahua, Mexico",
    period: "Sep 2025 - Dec 2025",
    summary: "Integrated embedded platforms (MSP430, RSL10) into customer-facing systems.",
    highlights: [
      "Turned customer and business needs into validation workflows and KPIs",
      "Supported delivery and onboarding of junior engineers",
    ],
    tags: ["C", "MSP430", "RSL10", "UART / SPI / I2C"],
  },
  {
    title: "Electrical Engineer Intern",
    company: "Balsas GmbH",
    location: "Erfurt, Germany",
    period: "Jun 2025 - Jul 2025",
    summary: "Residential electrical renovation projects under DIN VDE regulations.",
    highlights: [
      "Coordinated on-site work with customers, inspectors and contractors",
      "Kept documentation and compliance ready for handover",
    ],
    tags: ["DIN VDE 0100", "DIN VDE 0105"],
  },
  {
    title: "Solutions Engineer",
    company: "Fahr Electronic Systems",
    location: "Chihuahua, Mexico",
    period: "May 2024 - Jan 2025",
    summary: "Built ESP32 IoT solutions with LoRa, BLE and OTA updates.",
    highlights: [
      "Delivered 5 production-ready prototypes with full documentation",
      "Ran customer demos and turned requirements into working solutions",
    ],
    tags: ["ESP32", "MicroPython", "LoRa", "BLE", "OTA"],
  },
  {
    title: "QA Technician",
    company: "GM&T Engineering",
    location: "Chihuahua, Mexico",
    period: "Nov 2023 - May 2024",
    summary: "Wiring harness validation to OEM and ISO TS 16949 standards.",
    highlights: ["Kept a 98% first-pass yield", "Supported root-cause analysis with manufacturing"],
    tags: ["ISO TS 16949", "Harness testing"],
  },
  {
    title: "Sales Executive",
    company: "STEREN Mexico",
    location: "Chihuahua, Mexico",
    period: "Jan 2023 - Nov 2023",
    summary: "Advised customers on electronic products based on their technical needs.",
    highlights: ["Raised repeat purchases by about 8% through consultative selling"],
    tags: ["Consultative selling", "Pre-sales"],
  },
  {
    title: "Electronics Technician",
    company: "Fahr Electronic Systems",
    location: "Chihuahua, Mexico",
    period: "Jan 2022 - Jun 2023",
    summary: "Assembled and tested IoT PCB prototypes for field deployments.",
    highlights: ["Cut field debugging time by 25%"],
    tags: ["PCB", "Oscilloscope", "IoT"],
  },
];

export type Project = {
  title: string;
  category: "AI" | "IoT" | "Embedded";
  description: string;
  impact: string;
  stack: string[];
  github: string;
};

export const projects: Project[] = [
  {
    title: "Pharmacy AI Automation",
    category: "AI",
    description:
      "HIPAA-aware automation platform for independent pharmacies. Patient data is de-identified before any LLM call, and requests are routed by intent across chat, SMS, email and voice.",
    impact: "Multi-channel intake with a full audit trail",
    stack: ["Python", "FastAPI", "LLMs", "Webhooks"],
    github: "https://github.com/surbalo1/Pharmacy-AI-automation-system",
  },
  {
    title: "AI Coaching Ecosystem",
    category: "AI",
    description:
      "Full-stack platform combining multi-agent workflows, a RAG knowledge base, video processing and CRM automation behind one dashboard.",
    impact: "Six modules, from outreach to a 24/7 RAG assistant",
    stack: ["Python", "FastAPI", "React", "RAG", "Agents"],
    github: "https://github.com/surbalo1/ai-coaching-system",
  },
  {
    title: "IoT Sensor Data Pipeline",
    category: "IoT",
    description:
      "End-to-end pipeline for 50+ devices: MQTT ingestion, backend services and real-time dashboards.",
    impact: "Latency from 5 min to under 1 s; no more manual collection",
    stack: ["Node.js", "MQTT", "PostgreSQL", "Docker"],
    github: "https://github.com/surbalo1/iot-sensor-pipeline",
  },
  {
    title: "Board Support Package",
    category: "Embedded",
    description:
      "Hardware abstraction layer with one API for GPIO, UART, SPI and I2C across ESP32 and PIC18F4550.",
    impact: "Firmware porting time cut by 40%",
    stack: ["C", "MicroPython", "ESP32", "PIC18F"],
    github: "https://github.com/surbalo1/embedded-bsp-esp32-pic18f",
  },
  {
    title: "ESP32 AC Motor Controller",
    category: "Embedded",
    description: "PID-based AC motor speed control with encoder feedback.",
    impact: "±1.5% speed accuracy",
    stack: ["C++", "ESP32", "PID", "Power electronics"],
    github: "https://github.com/surbalo1/esp32-ac-motor-controller",
  },
  {
    title: "Real-time Emotion Recognition",
    category: "AI",
    description: "Local facial emotion detection with no cloud dependency, built for HCI research.",
    impact: "85% accuracy at under 100 ms",
    stack: ["Python", "OpenCV", "Streamlit"],
    github: "https://github.com/surbalo1/real-time-emotion-recognition",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Cloud & AI",
    items: ["Microsoft Azure", "Azure AI Foundry", "Azure OpenAI", "RAG", "AI agents", "Well-Architected Framework"],
  },
  {
    group: "Software & data",
    items: ["Python", "FastAPI", "Node.js", "PostgreSQL", "Docker", "Git", "Linux", "pandas", "PyTorch", "TensorFlow"],
  },
  {
    group: "IoT & connectivity",
    items: ["MQTT", "REST APIs", "LoRa", "BLE", "OTA", "Cellular IoT"],
  },
  {
    group: "Embedded & hardware",
    items: ["C", "MicroPython", "FreeRTOS", "UART / SPI / I2C", "PCB & schematics", "Oscilloscope", "PLC test benches"],
  },
  {
    group: "Ways of working",
    items: ["Solution architecture", "Technical workshops", "Pre-sales", "Documentation", "Agile"],
  },
  {
    group: "Languages",
    items: ["Spanish (native)", "English (C1)", "German (A2)"],
  },
];

export const education = [
  {
    degree: "Global Summer Institute, Big Data & AI",
    institution: "University of Texas at Austin",
    period: "2025",
    note: "120-hour program under a Fulbright COMEXUS scholarship.",
  },
  {
    degree: "B.Sc. Electronic Engineering, minor in Intelligent Embedded Systems",
    institution: "Chihuahua Institute of Technology",
    period: "2020 - 2024",
    note: "GPA 90.83/100. IEEE Student Branch and student society.",
  },
];

export const certifications = [
  "Microsoft Azure Fundamentals (AZ-900)",
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
  { name: "About", href: "#focus" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];
