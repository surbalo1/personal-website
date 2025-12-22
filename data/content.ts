// Centralized content for easy updates
// All data derived from Rafael's CV - problem-driven framing

export const personalInfo = {
  name: "Rafael Ignacio Gonzalez Chong",
  title: "Electronics Engineer",
  email: "rafael.glez.chong@gmail.com",
  phone: "+52 614 162 5912",
  location: "Chihuahua, Mexico",
  linkedin: "https://www.linkedin.com/in/rafael-glez-chong/",
  github: "https://github.com/surbalo1",
  resumeUrl: "/Rafael-Gonzalez-Resume.pdf",
};

// Impact-focused experience with Context → Problem → Action → Result format
// CORRECTED DATES to reflect actual timeline
export const experience = [
  {
    id: 1,
    title: "Implementation & System Integration Engineer",
    company: "IMTECH Desarrollos",
    location: "Chihuahua, Mexico",
    period: "Sep 2024 - Dec 2024",
    context: "Integration of embedded platforms for industrial applications using MSP430 and RSL10 microcontrollers.",
    problem: "No firmware-hardware validation workflows existed. Integration gaps caused delays and rework.",
    actions: [
      "Defined firmware-hardware validation workflows using PLC test benches",
      "Led integration of embedded platforms in C with proper documentation",
      "Mentored junior engineers on debugging and validation techniques",
    ],
    result: "Established repeatable validation process. Reduced integration rework by 30%.",
    tools: ["C", "MSP430", "RSL10", "UART", "SPI", "I2C", "PLC"],
  },
  {
    id: 2,
    title: "Electrical Engineer Intern",
    company: "Balsas GmbH",
    location: "Erfurt, Germany",
    period: "Jan 2024 - Jun 2024",
    context: "Residential electrical renovations requiring compliance with German DIN VDE standards.",
    problem: "On-site coordination issues caused inspection delays and budget overruns.",
    actions: [
      "Coordinated on-site teams, schedules, and materials",
      "Ensured installations met DIN VDE 0100 and 0105 standards",
      "Resolved technical issues proactively before inspections",
    ],
    result: "Maintained 100% inspection pass rate across 8 residential projects.",
    tools: ["DIN VDE 0100", "DIN VDE 0105", "Electrical Systems"],
  },
  {
    id: 3,
    title: "Hardware Implementation Engineer",
    company: "Fahr Electronic Systems",
    location: "Chihuahua, Mexico",
    period: "May 2023 - Oct 2023",
    context: "Development of IoT prototypes using ESP32 for client deployments in field environments.",
    problem: "Prototypes lacked field validation. Incomplete documentation blocked production handoff.",
    actions: [
      "Developed embedded firmware in MicroPython with LoRa, BLE, and OTA updates",
      "Performed real-time image recognition and sensor data validation",
      "Documented firmware architecture, PCB layouts, and system functionality",
    ],
    result: "Delivered 5 production-ready prototypes with complete documentation for deployment.",
    tools: ["ESP32", "MicroPython", "LoRa", "BLE", "OTA", "UART", "SPI"],
  },
  {
    id: 4,
    title: "QA Technician",
    company: "GM&T Engineering, Inc",
    location: "Chihuahua, Mexico",
    period: "Nov 2022 - May 2023",
    context: "Wiring harness testing for automotive OEM compliance at high throughput.",
    problem: "Maintaining quality at production speed while meeting strict OEM standards.",
    actions: [
      "Performed 50+ wiring harness tests daily",
      "Executed validation procedures and documented defects",
      "Maintained consistent testing methodology",
    ],
    result: "Achieved 98% first-pass yield through systematic quality assurance.",
    tools: ["Harness Testers", "Multimeter", "ISO TS 16949"],
  },
  {
    id: 5,
    title: "Electronics Technician",
    company: "Fahr Electronic Systems",
    location: "Chihuahua, Mexico",
    period: "Jan 2022 - Nov 2022",
    context: "Assembly and testing of IoT PCB prototypes for field deployment.",
    problem: "Slow debugging caused prototype delivery delays.",
    actions: [
      "Assembled and tested 10+ IoT PCB prototypes",
      "Troubleshot installations using oscilloscope and diagnostic tools",
      "Identified improvements in PCB layout and assembly processes",
    ],
    result: "Reduced debugging time by 25% through improved troubleshooting methodology.",
    tools: ["Oscilloscope", "Soldering", "IoT Sensors", "PCB Assembly"],
  },
];

// Problem-driven projects with quantified impact
export const projects = [
  {
    id: 1,
    title: "IoT Sensor Data Pipeline",
    problem: "Sensor data from 50+ devices was siloed with no unified visibility. Manual data collection took 4+ hours daily.",
    solution: "Built end-to-end pipeline: MQTT broker for ingestion, Node.js backend for processing, PostgreSQL for storage, real-time dashboard.",
    impact: "Reduced data latency from 5min to <1s. Eliminated manual collection entirely.",
    techStack: ["Node.js", "PostgreSQL", "MQTT", "Docker"],
    github: "https://github.com/surbalo1/iot-sensor-pipeline",
    category: "IoT",
  },
  {
    id: 2,
    title: "ESP32 AC Motor Controller",
    problem: "Required precise AC motor speed control with ±2% accuracy, not achievable with simple PWM.",
    solution: "Implemented PID-based control with phase-angle modulation and encoder feedback for closed-loop regulation.",
    impact: "Achieved ±1.5% speed accuracy. Controller deployed in 3 industrial applications.",
    techStack: ["C++", "ESP32", "PID Control", "Power Electronics"],
    github: "https://github.com/surbalo1/esp32-ac-motor-controller",
    category: "Embedded",
  },
  {
    id: 3,
    title: "Real-time Emotion Recognition",
    problem: "Needed local emotion detection for HCI research without cloud dependencies or latency.",
    solution: "Built processing pipeline using OpenCV for face detection and FER model for emotion classification.",
    impact: "Achieved 85% accuracy with <100ms latency. Used in university HCI research project.",
    techStack: ["Python", "OpenCV", "Streamlit", "ML"],
    github: "https://github.com/surbalo1/real-time-emotion-recognition",
    category: "AI",
  },
  {
    id: 4,
    title: "Multi-Personality Chatbot",
    problem: "Standard chatbots lack personality consistency and context awareness across sessions.",
    solution: "Developed LLM-powered chatbot with dynamic personality switching and persistent contextual memory.",
    impact: "Final project for Python course. Demonstrated memory retention across 50+ conversation turns.",
    techStack: ["Python", "Streamlit", "LLM", "NLP"],
    github: "https://github.com/surbalo1/multi-personality-chatbot",
    category: "AI",
  },
  {
    id: 5,
    title: "Embedded BSP (ESP32/PIC18F)",
    problem: "Code reuse across microcontroller platforms was difficult, doubling development time for each new platform.",
    solution: "Created Hardware Abstraction Layer providing unified APIs for GPIO, UART, SPI, and I2C.",
    impact: "Reduced firmware porting time by 40% for subsequent projects.",
    techStack: ["C", "MicroPython", "ESP32", "PIC18F"],
    github: "https://github.com/surbalo1/embedded-bsp-esp32-pic18f",
    category: "Embedded",
  },
  {
    id: 6,
    title: "UT Austin Big Data Analysis",
    problem: "Required hands-on experience with large-scale data processing for predictive analytics.",
    solution: "Completed Fulbright program: database management, statistical modeling, and predictive analytics.",
    impact: "Built models achieving 80% prediction accuracy. Presented findings to international audience.",
    techStack: ["R", "SQL", "Statistical Modeling"],
    github: "https://github.com/surbalo1/ut-austin-big-data-analysis",
    category: "Data",
  },
];

// Skills grouped by problems they solve
export const skills = {
  "Embedded & Firmware": [
    "C",
    "C++",
    "MicroPython",
    "FreeRTOS",
    "UART",
    "SPI",
    "I2C",
    "PCB Design",
  ],
  "IoT & Connectivity": [
    "MQTT",
    "HTTP REST",
    "LoRa",
    "BLE",
    "Cellular IoT",
  ],
  "Software & AI": [
    "Python",
    "TensorFlow",
    "PyTorch",
    "pandas",
    "NumPy",
    "MATLAB",
  ],
  "Tools & Platforms": [
    "Git",
    "Linux",
    "Docker",
    "VS Code",
    "Node.js",
    "PostgreSQL",
  ],
  "Testing & Debug": [
    "Oscilloscope",
    "Multimeter",
    "PLC Test Benches",
    "Field Testing",
  ],
  Languages: ["Spanish (Native)", "English (C1)", "German (A2)"],
};

export const education = [
  {
    id: 1,
    degree: "Certificate, Global Summer Institute (Big Data & AI)",
    institution: "University of Texas at Austin",
    location: "Austin, USA",
    period: "Jul 2024 - Aug 2024",
    highlights: [
      "120-hour intensive program under Fulbright COMEXUS Scholarship",
      "Built predictive analytics models achieving 80% accuracy",
      "Presented technical findings in English to international teams",
    ],
  },
  {
    id: 2,
    degree: "B.Sc. in Electronic Engineering",
    institution: "Chihuahua Institute of Technology",
    location: "Chihuahua, Mexico",
    period: "Aug 2020 - Dec 2024",
    minor: "Minor in Intelligent Embedded Systems",
    gpa: "90.83/100",
    highlights: [
      "Real-Time OS, FPGA/SoC Systems, DSP, Microcontrollers, Power Electronics",
      "IEEE Student Branch, Electronic Engineering Commission",
    ],
  },
];

export const certifications = [
  {
    category: "Cloud & AI",
    items: ["Microsoft Azure Fundamentals (AZ-900)", "Azure AI Essentials"],
  },
  {
    category: "Project Management",
    items: ["PMI Project Management Foundations", "Lean Six Sigma White Belt"],
  },
  {
    category: "Data & Analytics",
    items: ["Power BI Essentials", "Power BI Dataflows"],
  },
  {
    category: "Cybersecurity",
    items: ["CompTIA Security+ (SY0-701, in progress)"],
  },
];

export const navLinks = [
  { name: "Problems", href: "#problems" },
  { name: "Approach", href: "#approach" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
