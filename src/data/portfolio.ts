export const experience = [
  {
    company: "Geotab Inc.",
    role: "Software Engineer",
    period: "Jun 2025 – Present",
    location: "Waterloo, ON",
    description:
      "Returned full-time to Geotab's OEM team after my co-op. I own and extend the cloud pipelines that bring manufacturer-native vehicle data into MyGeotab, so fleets can see OEM signals (battery state, charging, diagnostics, location) alongside the rest of their telematics in real time.",
    bullets: [],
  },
  {
    company: "Geotab Inc.",
    role: "Software Engineer Intern",
    period: "Jan 2024 – Apr 2024",
    location: "Waterloo, ON",
    description:
      "Joined the OEM team as a co-op and shipped the integrations that pull manufacturer vehicle APIs into MyGeotab, including the end-to-end webhook flow for the Hyundai partnership.",
    bullets: [
      "Deployed automated CI/CD pipelines with GitLab to streamline builds, tests, and deployments.",
      "Built Mappers that fetch data from OEM APIs and route it into MyGeotab via Pub/Sub.",
      "Wrote Terraform IaC to automate cloud resources and shipped a Webhook endpoint for the Hyundai OEM integration.",
      "Migrated legacy services from Virtual Machines to Kubernetes for higher throughput and cleaner code.",
    ],
  },
  {
    company: "Motive Technologies Inc.",
    role: "Software Engineer Intern",
    period: "Jan 2023 – Apr 2023",
    location: "San Francisco, CA",
    description:
      "Worked on the Motive Mobile Platform — the driver-facing app used across Motive's commercial fleet customers for hours-of-service, vehicle inspection, and dispatch. Focused on the core libraries that keep the app reliable in poor connectivity.",
    bullets: [
      "Integrated code analysis tools into Jenkins pipelines, increasing coverage from 25% to 34%.",
      "Resolved concurrency and multithreading bugs in the Motive Mobile Platform, improving background service reliability and reducing crashes.",
    ],
  },
  {
    company: "Swift Medical Inc.",
    role: "Software Engineer Intern",
    period: "May 2022 – Oct 2022",
    location: "Toronto, ON",
    description:
      "Worked on the iOS app behind Swift Medical's wound-imaging platform — the capture and processing pipeline that clinicians use to image and track chronic wounds over time, including a custom hyperspectral camera attachment.",
    bullets: [
      "Built an iOS app to capture and process hyperspectral images of chronic wounds.",
      "Wrote OpenCV2 contour algorithms to detect bacteria and hemoglobin levels in wounds.",
      "Implemented the Bluetooth command layer between the hyperspectral imaging device and the iOS app.",
    ],
  },
];

export const projects = [
  {
    title: "Get a Grip on Reality",
    subtitle: "Capstone — Force-feedback VR Gloves",
    description:
      "Force-feedback VR gloves that apply pressure when grabbing virtual objects. Custom ESP32-S3 PCB drives servos, hall-effect sensors, IR sensors, and an IMU; custom power board outputs 5V @ 10A from a pair of Li-Ion cells.",
    tags: ["ESP32-S3", "PCB Design", "VR", "IMU", "Power Electronics"],
    accent: "from-indigo-500/30 to-fuchsia-500/30",
    glyph: "🧤",
    image: "/projects/get-a-grip.png",
    href: "https://github.com/sherwinchiu/get-a-grip-on-reality",
  },
  {
    title: "Arcane Clap Light",
    subtitle: "Sound-reactive prop",
    description:
      "Replica of the glowing mushrooms from Arcane that light up and play audio on a loud sound. ESP32-C3 Super Mini with a sound sensor, I2S DAC, and PWM-driven RGB LEDs; PCM audio stored in onboard flash.",
    tags: ["ESP32-C3", "I2S DAC", "PWM", "3D Printing"],
    accent: "from-cyan-400/30 to-blue-500/30",
    glyph: "💡",
    image: "/projects/arcane-clap.png",
  },
  {
    title: "Electrium Mobility",
    subtitle: "Founder — UWaterloo Design Team",
    description:
      "Founded a student design team building custom electric vehicles. Mentored 500+ engineering students, led hardware / firmware / software sub-teams, and shipped 8+ EVs along with ESCs, precharge circuits, and BLE remotes.",
    tags: ["Leadership", "EV", "Firmware", "Hardware"],
    accent: "from-emerald-400/30 to-lime-400/30",
    glyph: "⚡",
    image: "/projects/electrium.png",
    href: "https://electriummobility.com",
    linkLabel: "electriummobility.com",
  },
  {
    title: "Pixplay",
    subtitle: "Wireless image display",
    description:
      "A 240×320 wireless picture frame that fetches images from a GCP-hosted server and renders them on an ST7789 LCD. ESP32-C3 client written in Arduino; web client on Netlify; storage on Google Cloud Run + Bucket.",
    tags: ["ESP32-C3", "GCP", "ST7789", "Arduino"],
    accent: "from-rose-400/30 to-orange-400/30",
    glyph: "🖼️",
    image: "/projects/pixplay.png",
    href: "https://github.com/sherwinchiu/wireless-display",
  },
  {
    title: "ELECTREX-32",
    subtitle: "Custom ESP32-S3 Dev Board",
    description:
      "Custom ESP32-S3 development board using castellated PCB edges. Simulated the onboard antenna geometry to hit target WiFi and BLE performance.",
    tags: ["ESP32-S3", "PCB", "Antenna Design", "RF"],
    accent: "from-violet-500/30 to-purple-500/30",
    glyph: "📡",
    image: "/projects/electrex-32.png",
    href: "https://github.com/Electrium-Mobility",
  },
  {
    title: "ElectriCITY",
    subtitle: "Bigmode Game Jam 2025",
    description:
      "A strategy game where you build transmission towers to connect energy producers and consumers, balancing a live grid as it grows. Built in GameMaker during the jam.",
    tags: ["GameMaker", "Game Design", "Game Jam"],
    accent: "from-amber-400/30 to-yellow-500/30",
    glyph: "🎮",
    href: "https://github.com/sherwinchiu/bigmode-gamejam",
  },
];

export const skills: Record<string, string[]> = {
  Languages: [
    "C++",
    "C",
    "C#",
    "Rust",
    "TypeScript",
    "Python",
    "Java",
    "Objective-C",
    "ARM / RISC-V",
    "SQL",
    "MATLAB",
  ],
  "Cloud & Infra": [
    "GCP",
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Jenkins",
    "GitLab CI",
    "Pub/Sub",
  ],
  "Embedded & Hardware": [
    "ESP32 / S3 / C3",
    "PlatformIO",
    "KiCad",
    "Cadence Virtuoso",
    "OpenCV",
    "Bluetooth / BLE",
    "RTOS",
  ],
  Tools: [".NET", "Git", "Bitbucket", "Jira", "Confluence", "Firebase"],
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
