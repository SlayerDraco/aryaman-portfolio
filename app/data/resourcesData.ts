// Resource type definition
export interface Resource {
  id: number;
  title: string;
  fileUrl: string; // Path to PDF in public folder
  uploadDate: string;
  size: string; // File size (e.g., "2.5 MB")
}

// Resources data - Add your PDFs here
export const resources: Resource[] = [
  {
    id: 1,
    title: "Complete Ethical Hacking Guide",
    fileUrl: "/resources/ethical-hacking-guide.pdf",
    uploadDate: "2025-01-15",
    size: "5.2 MB",
  },
  {
    id: 2,
    title: "Python for Security Automation",
    fileUrl: "/resources/python-security-automation.pdf",
    uploadDate: "2025-02-10",
    size: "3.8 MB",
  },
  {
    id: 3,
    title: "CTF Writeups Collection 2024",
    fileUrl: "/resources/ctf-writeups-2024.pdf",
    uploadDate: "2025-03-05",
    size: "7.1 MB",
  },
  {
    id: 4,
    title: "Network Security Fundamentals",
    fileUrl: "/resources/network-security-fundamentals.pdf",
    uploadDate: "2025-04-20",
    size: "4.5 MB",
  },
  {
    id: 5,
    title: "Web Application Security Checklist",
    fileUrl: "/resources/web-app-security-checklist.pdf",
    uploadDate: "2025-05-12",
    size: "2.3 MB",
  },
  {
    id: 6,
    title: "Hardware Security Essentials",
    fileUrl: "/resources/hardware-security-essentials.pdf",
    uploadDate: "2025-06-08",
    size: "6.0 MB",
  },
];
