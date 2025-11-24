// Project type definition
export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'Cybersecurity' | 'Hardware' | 'VLSI';
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
];

// Available categories for filtering
export const categories = ['All', 'Cybersecurity', 'Hardware', 'VLSI'] as const;
