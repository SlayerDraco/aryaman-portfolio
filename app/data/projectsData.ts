// Project type definition
export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'Cybersecurity' | 'Hardware' | 'VLSI' | 'Full-Stack' | 'Research';
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  year: string;
}

// Projects data - Replace with your actual projects
export const projects: Project[] = [
  {
    id: 1,
    title: "Hardware-Based Rootkit Detection",
    description: "A novel approach to detecting kernel-level rootkits using FPGA-based hardware monitoring to bypass software-level evasion techniques.",
    category: "Cybersecurity",
    tags: ["FPGA", "Kernel Security", "Hardware Security", "Verilog"],
    image: "/projects/rootkit-detection.jpg",
    github: "https://github.com/yourusername/rootkit-detection",
    year: "2025"
  },
  {
    id: 2,
    title: "Side-Channel Attack Framework",
    description: "Comprehensive framework for power analysis attacks on cryptographic implementations, featuring real-time oscilloscope integration.",
    category: "Hardware",
    tags: ["Side-Channel", "Cryptography", "Power Analysis", "Python"],
    image: "/projects/side-channel.jpg",
    github: "https://github.com/yourusername/side-channel",
    demo: "https://demo.example.com",
    year: "2024"
  },
  {
    id: 3,
    title: "RISC-V Secure Processor",
    description: "Custom RISC-V processor core with hardware-based security extensions including secure boot and encrypted memory access.",
    category: "VLSI",
    tags: ["RISC-V", "SystemVerilog", "Security", "ASIC Design"],
    image: "/projects/riscv-processor.jpg",
    github: "https://github.com/yourusername/riscv-secure",
    year: "2024"
  },
  {
    id: 4,
    title: "Automated Penetration Testing Suite",
    description: "AI-powered penetration testing tool that automates vulnerability discovery and exploitation chain development.",
    category: "Cybersecurity",
    tags: ["Python", "AI/ML", "Pentesting", "Automation"],
    image: "/projects/pentest-suite.jpg",
    github: "https://github.com/yourusername/pentest-suite",
    year: "2024"
  },
  {
    id: 5,
    title: "Hardware Trojan Detection",
    description: "Machine learning-based approach to detect hardware trojans in third-party IP cores using golden-free detection methods.",
    category: "Research",
    tags: ["ML", "Hardware Security", "IC Design", "TensorFlow"],
    image: "/projects/trojan-detection.jpg",
    year: "2023"
  },
  {
    id: 6,
    title: "Secure IoT Gateway",
    description: "Full-stack IoT security gateway with hardware-accelerated encryption and real-time threat detection capabilities.",
    category: "Full-Stack",
    tags: ["IoT", "React", "Node.js", "Embedded Systems"],
    image: "/projects/iot-gateway.jpg",
    github: "https://github.com/yourusername/iot-gateway",
    demo: "https://demo.example.com",
    year: "2023"
  }
];

// Available categories for filtering
export const categories = ['All', 'Cybersecurity', 'Hardware', 'VLSI', 'Full-Stack', 'Research'] as const;
