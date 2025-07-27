export const navLinks = [
    { id: 'about', title: 'About', type: 'section' },
    { id: 'projects', title: 'Projects', type: 'route' },
    { id: 'courses', title: 'Courses', type: 'route' },
    { id: 'advocacy', title: 'Advocacy', type: 'route' },
    { id: 'future', title: 'Future', type: 'route' },
    { id: 'contact', title: 'Contact', type: 'section' },
];

export const leftIcons = [
    { id: 'dark-mode', src: '/icons/dark_mode_icon.png', alt: 'Dark Mode Icon' },
    { id: '/', src: "/icons/home_icon.png", alt: 'Home Icon', type: 'route' }
]

export const identityCards = [
    { id: 'builder', src: '/cards/builder_card.png', alt: 'Builder Card', route: '/projects' },
    { id: 'learner', src: '/cards/learner_card.png', alt: 'Learner Card', route: '/courses' },
    { id: 'writer', src: '/cards/writer_card.png', alt: 'Writer Card', route: 'https://substack.com/@anamika850589' },
    { id: 'advocate', src: '/cards/advocate_card.png', alt: 'Advocate Card', route: '/advocacy' },
    { id: 'dreamer', src: '/cards/dreamer_card.png', alt: 'Dreamer Card', route: '/future' }
]

export const contactCards = [
    { id: 'builder', src: '/cards/builder_card.png', alt: 'Builder Card' },
    { id: 'learner', src: '/cards/learner_card.png', alt: 'Learner Card' },
    { id: 'writer', src: '/cards/writer_card.png', alt: 'Writer Card' },
    { id: 'advocate', src: '/cards/advocate_card.png', alt: 'Advocate Card' },
    { id: 'intern', src: '/cards/intern_card.png', alt: 'Intern Card' },
    { id: 'fullStackWebDev', src: '/cards/full_stack_web_dev_card.png', alt: 'Full-Stack Web Dev Card' },
    { id: 'aiMl', src: '/cards/ai_ml_card.png', alt: 'AI/ML Card' },
    { id: 'supplyChain', src: '/cards/supply_chain_card.png', alt: 'Supply Chain Card' },
    { id: 'appDev', src: '/cards/app_dev_card.png', alt: 'App Dev Card' },
    { id: 'dataScience', src: '/cards/data_science_card.png', alt: 'Data Science Card' },
    { id: 'dataEng', src: '/cards/data_eng_card.png', alt: 'Data Engineering Card' },
    { id: 'product', src: '/cards/product_card.png', alt: 'Product Card' },
    { id: 'robotics', src: '/cards/robotics_card.png', alt: 'Robotics Card' },
    { id: 'embeddedSystems', src: '/cards/embedded_systems_card.png', alt: 'Embedded Systems Card' },
    { id: 'fintech', src: '/cards/fintech_card.png', alt: 'FinTech Card' },
    { id: 'simulation', src: '/cards/simulation_card.png', alt: 'Simulation Card' },
    { id: 'builder2', src: '/cards/builder_card.png', alt: 'Builder Card' }
]

export const socialLinks = [
    { id: 'email', link: 'e1385499@u.nus.edu', image: '/icons/outlook_icon.png' },
    { id: 'gmail', link: 'anamika.ragu@gmail.com', image: '/icons/gmail_icon.png' },
    { id: 'github', link: 'https://github.com/anamikararecare', image: '/icons/github_icon.png' },
    { id: 'discord', link: 'https://discord.gg/anamikararecare', image: '/icons/discord_icon.png' },
    { id: 'linkedin', link: 'https://linkedin.com/in/anamika-ragu', image: '/icons/linkedin_icon.png' }
];

export const projects = [
    {
        id: 1,
        title: "GIT TEACH",
        year: "2025",
        description: "Started out as a CLI-based RAG agent semantically analysing GitHub repositories using custom tokenization, attention-based clustering to generate personalized build guides.",
        image: "project_previews/git_teach_preview.png",
        tags: ["Next.js", "VectorDB", "custom AST chunking"],
        visitLink: "https://github.com/anamikararecare/git-teach-v1"
    },
    {
        id: 2,
        title: "Betting on AI",
        year: "2025",
        description: "Three-staged decision intelligence project forecasting stock performance of prominent AI companies. Spoiler: I'm placing my bets on Meta.",
        image: "project_previews/betting_on_AI_preview.png",
        tags: ["ARIMA", "LightGBM", "Monte Carlo simulations", "LSTM"],
        visitLink: "https://docs.google.com/presentation/d/1XR_auFL4JGuUxvyeITJ4kcGy1Wt9m5avV_Ye2t_3uuE/edit?slide=id.p#slide=id.p"
    }
]

export const skills = ["Python", "PyTorch", "Django", "NumPy", "pandas", "MatPlotLib",
    "yfinance", "JavaScript", "React.js", "C++", "HTML", "CSS", "Tailwind CSS",
    "Swift", "VBA Office"]

export const langs = ['Python', 'JavaScript', 'C++', 'CSS', 'Swift', 'VBA Office', 'HTML']

export const courses = [
    {
        id: 'git',
        name: 'git teach',
        image: 'git_course.png',
        reflection: `Learning Git has been transformative for my development workflow. Understanding version control not only improved my code management but also taught me the importance of clear commit messages and collaborative development practices.`
    },
    {
        id: 'design',
        name: 'Design Systems',
        image: 'design_course.png',
        reflection: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla elementum semper. Aenean vel odio mollis, dapibus nisl sed, euismod nulla. Vivamus et feugiat lacus. Duis pulvinar velit nec lorem finibus cursus. Sed at orci vel neque semper lacinia. Aenean aliquam magna ex, eget vehicula libero tincidunt mollis. Mauris non dolor vitae justo pharetra semper sit amet sed libero.`
    },
    {
        id: 'analysis',
        name: 'Data Analysis',
        image: 'analysis_course.png',
        reflection: `Diving deep into statistical analysis and machine learning opened up new perspectives on problem-solving. The course challenged me to think critically about data interpretation and model validation, skills that extend far beyond technical applications.`
    }
];

export const Tskills = ["Formal Logic", "Understanding", "Complicated Problems", "Complicated Clients", "Reading the",
    "Room", "Fine Print", "Source Code", "Language & Writing", "Problem Solving"
]

export const Tsubskills = ["Complicated Problems", "Complicated Clients", "Room", "Fine Print", "Source Code"]

export const experiences = [
    {
        id: '1',
        title: '[Title]',
        date: '[Date]',
        subtitle: '[Subtitle]',
        content: [
            '[Point 1]',
            '[Point 2]'
        ]
    }
];

export const dreams = [
    {
        image: "/path/to/metro-image.png", // Replace with your actual image paths
        description: "trying every public transport system in the world"
    },
    {
        image: "/path/to/dream2.png",
        description: "building sustainable cities in every continent"
    },
    {
        image: "/path/to/dream3.png",
        description: "creating AI systems that understand human creativity"
    },
    {
        image: "/path/to/dream4.png",
        description: "designing interfaces that feel like magic"
    },
    {
        image: "/path/to/dream5.png",
        description: "connecting cultures through technology"
    }
];