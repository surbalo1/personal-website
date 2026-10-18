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
};

// Short line under the name in the hero.
export const intro =
  "I help teams build on Azure and put AI to work in ways that hold up after the demo. Before the cloud, I spent years with a soldering iron in hand.";

// Little floating labels around the hero photo.
export const heroChips = ["Azure", "AI agents", "IoT", "Mexico City"];

// The "board to cloud" diagram.
export const flow = [
  { label: "Sensor", detail: "PCB & test" },
  { label: "Firmware", detail: "C, MicroPython" },
  { label: "Connectivity", detail: "MQTT, LoRa, BLE" },
  { label: "Cloud", detail: "Azure" },
  { label: "AI", detail: "LLMs, RAG, agents" },
];

// Career told as chapters.
export const journey = [
  {
    year: "2022",
    place: "Chihuahua",
    title: "Soldering IoT boards",
    text: "First job as an electronics technician at Fahr. Assembling, testing and debugging prototypes for field pilots.",
    color: "orange",
  },
  {
    year: "2023",
    place: "Chihuahua",
    title: "Learning to listen",
    text: "Sales at STEREN, then QA at GM&T with a 98% first-pass yield on automotive harnesses.",
    color: "yellow",
  },
  {
    year: "2024",
    place: "Chihuahua",
    title: "Engineer, officially",
    text: "Finished my B.Sc. in Electronic Engineering and shipped five ESP32 prototypes with LoRa and BLE as a solutions engineer.",
    color: "green",
  },
  {
    year: "2025",
    place: "Erfurt, Germany",
    title: "Working abroad",
    text: "Electrical engineering internship at Balsas GmbH, working under German DIN VDE standards.",
    color: "teal",
  },
  {
    year: "2025",
    place: "Austin, Texas",
    title: "Fulbright summer",
    text: "Big Data & AI program at UT Austin on a Fulbright COMEXUS scholarship. This is where AI clicked for me.",
    color: "blue",
  },
  {
    year: "2025",
    place: "Chihuahua",
    title: "Back home, closer to customers",
    text: "Systems integration at IMTECH: MSP430 and RSL10 platforms in C, validation workflows and mentoring junior engineers.",
    color: "pink",
  },
  {
    year: "2026",
    place: "Mexico City",
    title: "Microsoft",
    text: "Cloud Solution Architect. Helping teams design and build cloud and AI solutions on Azure.",
    color: "purple",
  },
];

export type Project = {
  title: string;
  category: "AI" | "IoT" | "Embedded";
  description: string;
  stack: string[];
  github: string;
};

export const projects: Project[] = [
  {
    title: "Pharmacy AI automation",
    category: "AI",
    description:
      "Automation for independent pharmacies across chat, SMS, email and voice. Patient data is de-identified before anything reaches the LLM.",
    stack: ["Python", "FastAPI", "LLMs"],
    github: "https://github.com/surbalo1/Pharmacy-AI-automation-system",
  },
  {
    title: "AI coaching platform",
    category: "AI",
    description: "Multi-agent workflows, a RAG knowledge base and video processing behind one dashboard.",
    stack: ["Python", "React", "RAG"],
    github: "https://github.com/surbalo1/ai-coaching-system",
  },
  {
    title: "IoT sensor pipeline",
    category: "IoT",
    description: "MQTT ingestion and live dashboards for 50+ devices. Data went from 5 minutes behind to under a second.",
    stack: ["Node.js", "MQTT", "PostgreSQL"],
    github: "https://github.com/surbalo1/iot-sensor-pipeline",
  },
  {
    title: "Board support package",
    category: "Embedded",
    description: "One API for GPIO, UART, SPI and I2C on both ESP32 and PIC18F4550, so firmware ports faster.",
    stack: ["C", "MicroPython"],
    github: "https://github.com/surbalo1/embedded-bsp-esp32-pic18f",
  },
  {
    title: "AC motor controller",
    category: "Embedded",
    description: "PID speed control on an ESP32 with encoder feedback, accurate to about ±1.5%.",
    stack: ["C++", "ESP32"],
    github: "https://github.com/surbalo1/esp32-ac-motor-controller",
  },
  {
    title: "Emotion recognition",
    category: "AI",
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
  { name: "Journey", href: "#journey" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
