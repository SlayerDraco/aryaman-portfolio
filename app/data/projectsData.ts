// Project type definition
export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'Cybersecurity' | 'Hardware' | 'VLSI' | 'Web Development';
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
    title: "Mines Game (Stake-Inspired)",
    description: "Interactive web-based mines game inspired by Stake casino. Features a dynamic grid system with randomized mine placement and strategic gameplay mechanics.",
    category: "Web Development",
    tags: ["HTML", "CSS", "JavaScript", "Game Logic", "DOM Manipulation"],
    image: "/projects/mines-game.jpg",
    github: "https://github.com/SlayerDraco/Mines-Game",
    demo: "https://slayerdraco.github.io/Mines-Game/",
    year: "2025"
  },
];

// Available categories for filtering
export const categories = ['All','Web Development'] as const;
