// Project type definition
export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'Cybersecurity' | 'Hardware' | 'AI' | 'Web Development';
  tags: string[];
  image: string;
  github?: string;
  year: string;
}

// Projects data - Replace with your actual projects
export const projects: Project[] = [
  {
    id: 1,
    title: "Mines Game (Stake-Inspired)",
    description: "Interactive web-based mines game inspired by Stake casino. Features a dynamic grid system with randomized mine placement and strategic gameplay mechanics.",
    category: "Web Development",
    tags: ["HTML", "CSS", "JavaScript", "Game Logic"],
    image: "/projects/mines-game.jpg",
    github: "https://github.com/SlayerDraco/Mines-Game",
    year: "2024"
  },

  {
    id: 2,
    title: "Prompt Enhancer",
    description: "Interactive web-based mines game inspired by Stake casino. Features a dynamic grid system with randomized mine placement and strategic gameplay mechanics.",
    category: "AI",
    tags: ["Python"],
    image: "/projects/prompt_enhancer.png",
    github: "https://github.com/SlayerDraco/pr0mp7_3nh4nc3r",
    year: "2025"
  },
];

// Available categories for filtering
export const categories = ['All','Web Development','AI','Cybersecurity','Hardware'] as const;
