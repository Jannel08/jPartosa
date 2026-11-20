const dev = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const toolCategories = [
  {
    name: "Development",
    tools: [
      {
        title: "VS Code",
        icon: `${dev}/vscode/vscode-original.svg`,
        desc: "Primary IDE configured with ESLint, Prettier, Live Server, and Git integration for streamlined code formatting, fast execution, and rapid frontend development.",
      },
      {
        title: "Git",
        icon: `${dev}/git/git-original.svg`,
        desc: "Utilized for version control, managing clean repository histories, branching strategy for feature releases, and command-line version tracking.",
      },
      {
        title: "GitHub Pages",
        icon: `${dev}/github/github-original.svg`,
        desc: "Used for continuous deployment and hosting static web applications directly from GitHub repository source files.",
      },
      {
        title: "Netlify",
        icon: `${dev}/netlify/netlify-original.svg`,
        desc: "Preferred deployment platform for automated continuous integration, custom domain routing, SSL management, and staging environments.",
      },
    ],
  },
  {
    name: "Design",
    tools: [
      {
        title: "Figma",
        icon: `${dev}/figma/figma-original.svg`,
        desc: "Core design platform used for high-fidelity UI wireframing, creating component systems, auto-layout design setups, and developer handoffs.",
      },
      {
        title: "Canva",
        icon: `${dev}/canva/canva-original.svg`,
        desc: "Utilized for fast visual marketing assets, presentation slides, quick graphics generation, and social media branding support.",
      },
      {
        title: "Adobe XD",
        icon: `${dev}/xd/xd-plain.svg`,
        desc: "Secondary design tool used for creating interactive web prototypes, micro-animation design, and vector UI asset export.",
      },
    ],
  },
  {
    name: "AI & Optimization",
    tools: [
      {
        title: "ChatGPT",
        icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
        desc: "Used as a coding assistant to accelerate logic refactoring, troubleshoot complex bugs, write clean documentation, and brainstorm UI variations.",
      },
    ],
  },
];
