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
    type: 'education',
    title: 'B.Tech in Electronics & Communication',
    organization: 'Thapar Institute of Engineering and Technology',
    location: 'India',
    period: '2024 - 2028',
    current: true,
    description: 'Specializing in ECE and Hardware Security with focus on secure chip architecture and side-channel analysis.',
    achievements: [
      'Organized CTF with 500+ Active Members',
      // 'Published 2 research papers on hardware trojans detection',
      'Was Core Member of OWASP ',
    ],
    technologies: ['Verilog', 'SystemVerilog', 'Cadence', 'Synopsis', 'MATLAB'],
  },
  {
    id: 2,
    type: 'certification',
    title: 'Certified Ethical Hacker (CEH)',
    organization: 'NIELIT Haridwar',
    location: 'Haridwar, India',
    period: 'June 2024',
    description: 'Comprehensive ethical hacking certification covering penetration testing methodologies, vulnerability assessment, and security testing techniques.',
    achievements: [
      'Mastered network scanning and enumeration techniques',
      'Learned advanced exploitation and post-exploitation strategies',
      'Gained expertise in web application security testing',
      'Studied malware analysis and reverse engineering fundamentals',
    ],
    technologies: ['Kali Linux', 'Metasploit', 'Nmap', 'Burp Suite', 'Wireshark', 'SQLMap'],
  },
  {
    id: 3,
    type: 'certification',
    title: 'Certified Python Programmer',
    organization: 'Professional Certification',
    location: 'Online',
    period: 'June 2025',
    description: 'Advanced Python programming certification demonstrating proficiency in Python development, automation, and scripting for cybersecurity applications.',
    achievements: [
      'Developed automated security tools and scripts',
      'Built vulnerability scanners and exploit frameworks',
      'Created network automation and monitoring solutions',
      'Implemented data analysis and threat intelligence tools',
    ],
    technologies: ['Python', 'Scapy', 'Requests', 'BeautifulSoup', 'Pandas', 'Socket Programming'],
  },
];

// Filter helpers
export const workExperiences = experiences.filter(e => e.type === 'work');
export const educationItems = experiences.filter(e => e.type === 'education');
export const certifications = experiences.filter(e => e.type === 'certification');
