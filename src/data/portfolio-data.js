import { Github, Linkedin, Mail } from "lucide-react";

export const portfolioData = {
  hero: {
    name: "Qasim Mansoori",
    subtitle: "Full-Stack & AI/ML Developer",
    tagline: "building production-ready web and AI systems — learning fast, shipping faster.",
    ctas: [
      { label: "View Projects", href: "#projects", primary: true },
      { label: "GitHub", href: "https://github.com/qasimmansoori", primary: false, icon: Github },
    ],
  },
  about: {
    bio: "second-year BCA (AI/ML) student at Parul University, Vadodara; self-learner who ships deployed systems; completed WQU Applied Data Science Lab projects; seeking internships or entry-level remote roles.",
  },
  skills: {
    groups: [
      {
        category: "Languages",
        items: ["Python (Strong)", "JavaScript (Comfortable)", "SQL", "C", "C++", "PHP"],
      },
      {
        category: "Backend",
        items: ["Django", "Django REST Framework", "Websockets"],
      },
      {
        category: "Frontend",
        items: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
      },
      {
        category: "Databases",
        items: ["PostgreSQL", "Supabase"],
      },
      {
        category: "AI/ML/DL",
        items: ["PyTorch", "scikit-learn", "CNNs", "Computer Vision", "Time Series (ARMA, GARCH)"],
      },
      {
        category: "Tools",
        items: ["Streamlit", "Plotly", "Matplotlib", "Git", "VS Code"],
      },
      {
        category: "Deployment",
        items: ["Vercel", "Streamlit Cloud"],
      },
    ],
  },
  projects: [
    {
      title: "NEET Preparation Platform",
      featured: true,
      tech: ["Next.js", "Supabase", "Vercel", "LLMs"],
      live: "https://curiosity-for-neet.vercel.app/",
      description: "Full-stack platform for NEET prep with authentication, analytics, and a self-expanding question bank.",
      details: [
        "Built-in AI chatbot generates explanations and MCQs from student doubts.",
        "Auto-growing question bank from real user interactions.",
        "Detailed analytics dashboard, completely free, no ads.",
        "Built using vibe coding.",
      ],
    },
    {
      title: "CNN Visualized",
      featured: false,
      tech: ["Python", "PyTorch", "Streamlit", "Plotly"],
      github: "https://github.com/qasimmansoori/CNN-visualized",
      live: "https://cnn-visualized.streamlit.app/",
      description: "Interactive app to draw digits and visualize CNN intermediate feature maps in real-time. Educational focus.",
    },
    {
      title: "Instagram Chat Analyzer",
      featured: false,
      tech: ["Next.js", "Recharts", "Tailwind CSS", "Browser-based Processing"],
      github: "https://github.com/qasimmansoori/Insta-chat-analyzer",
      live: "https://insta-analyzer-omega.vercel.app/",
      description: "Privacy-focused web app that analyzes Instagram DM conversations from exported data. Features interactive visualizations, message patterns, emoji usage, response times, and activity trends. All processed locally in the browser - zero data sent to servers. Built using vibe coding.",
    },
    {
      title: "Tic-Tac-Toe with Unbeatable AI",
      featured: false,
      tech: ["JavaScript", "React", "Vercel"],
      github: "https://github.com/qasimmansoori/Tic-tac-toe-using-react",
      live: "https://tic-tac-toe-using-react-swart.vercel.app/",
      description: "Minimax algorithm with alpha-beta pruning guaranteeing win/draw. Clean UI.",
    },
    {
      title: "Dice Surprise (Research)",
      featured: false,
      tech: ["Python", "Matplotlib"],
      github: "https://github.com/qasimmansoori/Dice-Surprise",
      description: "Large-scale simulation study (100k+ iterations) revealing probability dynamics; MIT licensed.",
    },
    {
      title: "Neural Network Binary Classification",
      featured: false,
      tech: ["PyTorch", "OpenCV", "scikit-learn"],
      github: "https://github.com/qasimmansoori/Neural-Network-Binary-classification",
      description: "Custom ResNet-style architecture, augmentation, evaluation metrics and visualization.",
    },
    {
      title: "Linear Regression from Scratch in PyTorch",
      featured: false,
      tech: ["PyTorch", "NumPy", "Matplotlib"],
      github: "https://github.com/qasimmansoori/Linear-Regression-from-Scratch-in-PyTorch",
      description: "Implemented training loop, MSE loss, gradient descent manually; educational visuals of loss convergence.",
    },
  ],
  achievements: [
    "Top 10 out of 50 teams in university hackathon (built by my initiative)",
    "4th place in university AI/ML quiz (180+ participants)",
    "Completed WorldQuant University Applied Data Science Lab (8 projects)",
    "Enrolled in WQU Deep Learning & Computer Vision labs",
    "Python certification (TutEdu)",
  ],
  contact: {
    github: "https://github.com/qasimmansoori",
    linkedin: "https://www.linkedin.com/in/qasim-mansoori244",
    email: "qasimmansoori853@gmail.com",
    socials: [
      { label: "GitHub", href: "https://github.com/qasimmansoori", icon: Github },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/qasim-mansoori244", icon: Linkedin },
      { label: "Email", href: "mailto:qasimmansoori853@gmail.com", icon: Mail },
    ]
  },
};
