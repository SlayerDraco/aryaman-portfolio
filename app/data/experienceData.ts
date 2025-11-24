// Experience and Education data

export interface Experience {
  id: number;
  type: 'work' | 'education' | 'certification';
  title: string;
  organization: string;
  location: string;
  period: string;
  current?: boolean;
  description: string;
  achievements: string[];
  technologies?: string[];
  logo?: string;
  link?: string;
}

// Replace with your actual experience
export const experiences: Experience[] = [
  {
    id: 1,
    type: 'work',
    title: 'Security Research Intern',
    organization: 'CyberSec Labs',
    location: 'Remote',
    period: 'Jun 2024 - Present',
    current: true,
    description: 'Conducting vulnerability research and developing proof-of-concept exploits for hardware security flaws in IoT devices.',
    achievements: [
      'Discovered 3 critical vulnerabilities in popular IoT firmware',
      'Developed automated fuzzing framework reducing testing time by 60%',
      'Presented findings at DEF CON Hardware Hacking Village',
    ],
    technologies: ['C/C++', 'Python', 'IDA Pro', 'Ghidra', 'ARM Assembly'],
    link: 'https://example.com',
  },
  {
    id: 2,
    type: 'work',
    title: 'Junior Penetration Tester',
    organization: 'SecureNet Solutions',
    location: 'Hybrid',
    period: 'Jan 2024 - May 2024',
    description: 'Performed security assessments and penetration testing for enterprise clients, identifying critical vulnerabilities.',
    achievements: [
      'Conducted 15+ penetration tests for Fortune 500 companies',
      'Identified and reported 50+ high-severity vulnerabilities',
      'Developed custom exploitation scripts for web applications',
    ],
    technologies: ['Burp Suite', 'Metasploit', 'Nmap', 'Python', 'SQL Injection'],
    link: 'https://example.com',
  },
  {
    id: 3,
    type: 'education',
    title: 'B.Tech in Electronics & Communication',
    organization: 'Indian Institute of Technology',
    location: 'India',
    period: '2022 - 2026',
    current: true,
    description: 'Specializing in VLSI Design and Hardware Security with focus on secure chip architecture and side-channel analysis.',
    achievements: [
      'CGPA: 9.2/10.0',
      'Published 2 research papers on hardware trojans detection',
      'Lead of Hardware Security Research Group',
    ],
    technologies: ['Verilog', 'SystemVerilog', 'Cadence', 'Synopsis', 'MATLAB'],
  },
  {
    id: 4,
    type: 'certification',
    title: 'Offensive Security Certified Professional',
    organization: 'Offensive Security',
    location: 'Online',
    period: 'Obtained: Aug 2024',
    description: 'Hands-on certification demonstrating advanced penetration testing skills through 24-hour practical exam.',
    achievements: [
      'Passed on first attempt with 95+ points',
      'Compromised all assigned target machines',
      'Documented comprehensive penetration testing report',
    ],
    technologies: ['Kali Linux', 'Exploit Development', 'Buffer Overflow', 'Privilege Escalation'],
  },
  {
    id: 5,
    type: 'work',
    title: 'VLSI Design Intern',
    organization: 'ChipTech Industries',
    location: 'Bangalore, India',
    period: 'Jun 2023 - Aug 2023',
    description: 'Designed and verified digital circuits for secure cryptographic processors using hardware description languages.',
    achievements: [
      'Implemented AES encryption module in Verilog',
      'Reduced power consumption by 25% through optimization',
      'Contributed to 2 tape-outs for secure element chips',
    ],
    technologies: ['Verilog', 'ModelSim', 'Xilinx Vivado', 'FPGA', 'RTL Design'],
    link: 'https://example.com',
  },
  {
    id: 6,
    type: 'certification',
    title: 'Certified Ethical Hacker (CEH)',
    organization: 'EC-Council',
    location: 'Online',
    period: 'Obtained: Mar 2023',
    description: 'Comprehensive certification covering various aspects of ethical hacking and penetration testing methodologies.',
    achievements: [
      'Scored 95% on certification exam',
      'Mastered 20+ hacking techniques and tools',
      'Completed hands-on labs in vulnerable environments',
    ],
    technologies: ['Wireshark', 'Metasploit', 'Social Engineering', 'Network Security'],
  },
];

// Filter helpers
export const workExperiences = experiences.filter(e => e.type === 'work');
export const educationItems = experiences.filter(e => e.type === 'education');
export const certifications = experiences.filter(e => e.type === 'certification');
