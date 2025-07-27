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
        description: "[In Progress] Started out as a CLI-based RAG agent semantically analysing GitHub repositories using custom tokenization, attention-based clustering to generate personalized build guides. Implementing AST-based chunking using tree-sitter modules, alongside a mixture of cross-attention and graph traversal heuristics for clustering before feeding into Gemini's API. The problem with feeding repositories into general LLMs today is the lack of thorough parsing done by the LLM. I'm cutting that retrieval process for the agent.",
        image: "project_previews/git_teach_preview.png",
        tags: ["Next.js", "VectorDB", "custom AST chunking"],
        visitLink: "https://github.com/anamikararecare/git-teach-v1"
    },
    {
        id: 2,
        title: "Betting on AI",
        year: "2025",
        description: "Three-staged decision intelligence project forecasting stock performance of prominent AI companies. Trained a two-pronged model (ARIMA & LightGBM) to predict the CAGR of 5 assets -- NVIDIA, QQQ, Meta, NVIDIA, and the S&P500 -- before conducting one-way range sensitivity analysis and Monte Carlo simulations to determine risk. To model the factors determining the uncertainty of the CAGR, I conducted regression-based scenario analysis across factors including disruptor events and annual revenue growth. Spoiler: I'm placing my bets on Meta.",
        image: "project_previews/betting_on_AI_preview.png",
        tags: ["ARIMA", "LightGBM", "Monte Carlo simulations", "LSTM"],
        visitLink: "https://docs.google.com/presentation/d/1XR_auFL4JGuUxvyeITJ4kcGy1Wt9m5avV_Ye2t_3uuE/edit?slide=id.p#slide=id.p"
    },
    {
        id: 3,
        title: "Portable Solar Lights",
        year: "2025",
        description: "Built a solar light system that automatically turns on an LED in darkness and switches it off in sunlight, using a solar panel as a light sensor. Transistors control the switching, while resistors set the sensitivity through voltage division. The system operates without microcontrollers or motion sensors, meaning it can be implemented at minimal material cost. Built during my capacity as Head of Engineering Operations at NUS Engineers Without Borders to provide engineering solutions for Dang Village, Cao Bo Commune, Ha Giang Province. Alongside a 750m water channel, we built these lights to teach the youth of the village about fundamentals in Engineering.",
        image: "project_previews/solar_lights_preview.png",
        tags: ["PCB Design", "CAD SolidWorks"],
        visitLink: "https://www.instagram.com/reel/DKKL_uPNx68/?utm_source=ig_web_copy_link&igsh=eTNxbXJ0MXR6bWo0"
    },
    {
        id: 4,
        title: "Two Optimization Problems, One Excel Sheet",
        year: "2024",
        description: "Built an Excel-based solution via VBA & linear programming to simultaneously solve the transport problem (involving drone & truck routes) and the diet problem (e.g. for wartime scenarios). Employed hierarchical heuristics and Maps APIs to implement this.",
        image: "project_previews/excel_preview.png",
        tags: ["VBA", "Regression Algorithms", "Linear Programming", "Operations Research"],
        visitLink: ""
    },
    {
        id: 5,
        title: "Bumblebee: Hornet X",
        year: "2024-2025",
        description: "As part of the Electrical team in Hornet, I worked on implementing underwater communications for our autonomous underwater vehicle (AUV) to compete in the Singapore AUV Challenge 2025. This entailed cohesively programming various MCUs including the ESP32 & the Jetson Xavier NX to host I2C, SPI, and acoustic communications well. As someone with no background in electronics starting out, I gained invaluable skills in self-directed learning by doing alongside the hard skills listed above.",
        image: "project_previews/hornet_preview.png",
        tags: ["PCB Design (Altium)", "Embedded Programming", "C++", "Arduino", "CAD Fusion360"],
        visitLink: "https://www.instagram.com/p/DHdwkObTXuq/?utm_source=ig_web_copy_link&igsh=MWxxcWQzazNmaWsxMg=="
    }
]

export const skills = ["Python", "PyTorch", "Django", "NumPy", "pandas", "MatPlotLib",
    "yfinance", "JavaScript", "React.js", "C++", "HTML", "CSS", "Tailwind CSS",
    "Swift", "VBA Office"]

export const langs = ['Python', 'JavaScript', 'C++', 'CSS', 'Swift', 'VBA Office', 'HTML']

export const courses = [
    {
        id: '1',
        name: 'Searching for Best Practices in RAG',
        image: 'course_previews/RAG_paper_preview.png',
        reflection: 'I know, I might as well link Attention is All You Need while I am at it. But there is something about reading one of these and trying to apply it concurrently that gives you a whole new perspective on AI. The first paper that made me believe I could actually make something cutting-edge out of my room.',
        link: 'https://arxiv.org/pdf/2407.01219'
    },
    {
        id: '2',
        name: 'Zucks CS50 lecture',
        image: 'course_previews/cs50_zuck_preview.png',
        reflection: 'I first watched this when I was trying to understand ways around the colossally slow pace of my code the moment I tried training a medium-sized transformer on it, and stumbled upon young zuck sounding like he could be one of my coursemates while going through the early paradigms of solving web hosting issues for the world.',
        link: 'https://www.youtube.com/watch?v=xFFs9UgOAlE&t=783s'
    },
    {
        id: '3',
        name: 'No Bullshit guide to websites',
        image: 'course_previews/no_bs_guide_preview.png',
        reflection: 'Only a minute long but taught me everything I needed to know for this site - built in a week on YT speedruns like this and a dream.',
        link: 'https://www.youtube.com/watch?v=WAV66F-Zbio'
    },
    {
        id: '4',
        name: 'PPT going crazy',
        image: 'course_previews/ppt_preview.png',
        reflection: 'The Esoteric Programming Languages mod is honestly one of my dream mods to take, and this lecture was a gem. PowerPoint did not need to be doing all that, but it did anyway. For that, it has my respect.',
        link: 'https://www.youtube.com/watch?v=_3loq22TxSc&t=1020s'
    },
    {
        id: '5',
        name: 'StatQuest',
        image: 'course_previews/statquest_preview.png',
        reflection: 'I love channels that cut through the fluff around new tech for beginners. This one helped me so much with understanding AI from first principles.',
        link: 'https://www.youtube.com/@statquest'
    },
    {
        id: '6',
        name: 'n8n',
        image: 'course_previews/n8n_preview.png',
        reflection: 'I get so excited every time I see one of these things pop up - right now n8n, Claude, and GitHub Spark are the tools I find quite cool in their architecture.',
        link: 'https://www.youtube.com/watch?v=XVO3zsHdvio&t=69s'
    },
    {
        id: '7',
        name: 'gpt from scratch',
        image: 'course_previews/gpt_scratch_preview.png',
        reflection: 'Rite of passage. No words necessary.',
        link: 'https://www.youtube.com/watch?v=kCc8FmEb1nY&t=1097s'
    },
    {
        id: '8',
        name: 'ibm',
        image: 'course_previews/ibm_ai_preview.png',
        reflection: 'Another set of bite-sized reviews I love. When I was studying up on AI, I would always look up one of their chapters to understand terms I did not get when reading the big scary papers.',
        link: 'https://www.youtube.com/@IBMTechnology'
    },
    {
        id: '9',
        name: 'tokenizer from scratch',
        image: 'course_previews/tokenizer_scratch_preview.png',
        reflection: 'Rite of passage part 2. Except this one really helped with Git Teach',
        link: 'https://www.youtube.com/watch?v=zduSFxRajkE&t=2s'
    },
    {
        id: '10',
        name: 'ast chunking',
        image: 'course_previews/AST_based_chunking.png',
        reflection: 'I am really fascinated by what it means to comprehend language, so I have been using code comprehension as a microcosm of that to understand the first principles. This was a useful resource.',
        link: 'https://vxrl.medium.com/enhancing-llm-code-generation-with-rag-and-ast-based-chunking-5b81902ae9fc'
    },
    {
        id: '11',
        name: 'gsap course',
        image: 'course_previews/gsap_course_preview.png',
        reflection: 'I quite like this channel as a whole, but this tutorial was so clean and comprehensive. Plus - going to GSAP after dealing with Framer is another kind of transcendental experience.',
        link: 'https://www.youtube.com/watch?v=AW1yfBKRMKc'
    }
];

export const Tskills = ["Formal Logic", "Understanding", "Complicated Problems", "Complicated Clients", "Reading the",
    "Room", "Fine Print", "Source Code", "Language & Writing", "Problem Solving"
]

export const Tsubskills = ["Complicated Problems", "Complicated Clients", "Room", "Fine Print", "Source Code"]

export const experiences = [
    {
        id: '1',
        title: 'Sisters at Law',
        date: '2025',
        subtitle: '6 Week Summer Internship at a Human Rights Law Firm & DV Shelter in Sri Lanka',
        content: [
            'Managed the daily operations of the shelter, working towards the goal of helping the women and children get into a healthy routine and gain the hard & soft skills necessary to build their own lives outside the shelter',
            'Worked on a range of landmark human rights cases, ranging from sexual violence, defending marginalised communities, and advocating for the fundamental right to alternative care',
            'Established a streamlined case-file documentation pipeline for residents of the shelter; especially crucial for women who were prevented from holding crucial documentation, such as their passports',
            'Worked very closely with crafting strategies for and rehabilitating residents and clients of the shelter'
        ]
    },
    {
        id: '2',
        title: 'Ministry of Law, Singapore',
        date: '2025',
        subtitle: '6 Month Policy Internship',
        content: [
            'Was first stationed in the International Partnerships Office, assisting with correspondences of commercial & political significance across diverse international partners, spanning the Middle East, Asia, and Europe',
            'Drafted case studies and reports on the state of mediation & arbitration around the world, feeding into strategic partnerhsips for Singapore',
            'Automated internal checks for high-visibility events, such as the Singapore Convention Week & foreign delegation visits',
            'Supported MNC expansions in SEA through policy research with Enterprise Singapore & IPOS'
        ]
    },
    {
        id: '3',
        title: 'NUS Women in Business',
        date: '2025',
        subtitle: 'Strategic Initiatives Executive',
        content: [
            'The goal: empowering female undergraduates, especially those aspiring to break into male-dominated fields, to take on the workforce with their eyes wide open',
            'Organised university-wide networking events, professional development workshops (e.g. resume-building & case interviews), and information sessions to this end',
            'Liaised with major industry players, including Visa, Maybank, Ernst&Young, BNY'
        ]
    },
    {
        id: '4',
        title: 'SAMA: Raffles Institution Chapter',
        date: '2025',
        subtitle: 'Founder',
        content: [
            "SAMA (Student Advocates for Empowerment and Awareness) Singapore is endorsed by AWARE, Singapore's leading advocacy organisation to end violence against women",
            "'sama' in Malay stands for 'equal' - in turn, the organisation is focused on empowering Singaporean youth to advocate for gender equality",
            "Led school-wide initiatives to inspire discourse on gender issues in schools, including podcast episodes to address gender inequality in sports and letter-writing initiatives"
        ]
    },
    {
        id: '5',
        title: 'Peter Low & Choo LLC',
        date: '2021',
        subtitle: 'Legal Internship',
        content: [
            'Exactly how you would imagine a legal internship for a 16 year old to go through, but so much more',
            'Presented case strategies for landmark death penalty case (that was fueling activists and conservatives in Singapore alike) to Senior Partners, which integrated into final strategy',
            'Shadowed lawyers in preparations for various civil & corporate matters'
        ]
    },
    {
        id: '6',
        title: 'TKQP',
        date: '2021',
        subtitle: 'Legal Internship',
        content: [
            'My very first internship!',
            'Analysed fundamental case law, including the infamous Donaghue v Stevenson',
            'Assisted in various corporate matters',
            'Won in an in-house mooting competition!'
        ]
    }
];

export const dreams = [
    {
        image: "dreams/metro_train.png",
        description: "Riding in every public transport system in the world.",
        subtitle: "Image Source: Andy Lovell - Last Train South II"
    },
    {
        image: "dreams/vietnam_house.png",
        description: "Exploring green tech.",
        subtitle: "Image Source: Motorcycling around the mountains in Vietnam from my volunteering trip this year."
    },
    {
        image: "dreams/independence_square.png",
        description: "Influencing human rights policy in the right direction, in some way.",
        subtitle: "Image Source: Independence Square, Colombo; photographed by yours truly"
    },
    {
        image: "dreams/kite.png",
        description: "Working alongside people who have a crazy vision, and love what they do",
        subtitle: "Image Source: Flying a kite we paid tourist prices for at the beach."
    },
    {
        image: "dreams/lab.jpeg.jpg",
        description: "Opening a giant, open-source engineering lab with resources for everyone",
        subtitle: "Image Source: This custom PCB I purchased at one NUS's Maker's Markets; I love scrappy innovation"
    },
    {
        image: "dreams/pottery.png",
        description: "Making pottery in every country",
        subtitle: "Image Source: Me making a swan trinket tray in Sri Lanka"
    },
    {
        image: "dreams/dog_coding.jpg",
        description: "Getting so good at what I do that I can take a 2h study break and have a complete side-project MVP at the end of it (no, I'm not talking about vibe-coding)",
        subtitle: "Image Source: I love dogs and laughed out loud at this image. Credits to Golden Retriever Bailey Nebbia on Pinterest."
    }
];