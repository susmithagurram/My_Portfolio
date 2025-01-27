// Personal Information
export const personalInfo = {
  name: "Suhas Dasari",
  email: "suhas.dasari194@gmail.com",
  profilePicture: "/my-profile-picture.jpeg",
  location: "Virginia, United States",
};

// Project Images
export const projectImages = {
  chessBattle: "/chess-bg.jpg",
  faucetAgent: "/faucet.jpg",
  stepUpHealth: "/stepup.jpg",
};

// Social Links
export const socialLinks = {
  github: "https://github.com/suhas",
  linkedin: "https://linkedin.com/in/suhas",
  twitter: "https://twitter.com/suhas",
  telegram: "https://t.me/suhas",
  etherscan: "https://etherscan.io/address/suhas.eth",
  // Add more social links as needed
};

// Portfolio Sections Configuration
export const portfolioSections = [
  {
    id: "software",
    title: "Software Engineering",
    path: "/software",
    description: "Exploring the intersection of artificial intelligence and user experience through innovative projects and applications. Specializing in AI integration, language models, and intelligent system development."
  },
  {
    id: "crypto",
    title: "Blockchain & Cryptocurrency",
    path: "/crypto",
    description: "Dedicated blockchain community leader and educator with extensive experience in growing and managing crypto communities. Passionate about blockchain education and fostering the next generation of Web3 developers."
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    path: "/ai",
    description: "Experienced software engineer specializing in banking automation systems and mobile application development. Proficient in both legacy systems and modern technologies, with a focus on creating efficient, scalable solutions."
  },
  {
    id: "community",
    title: "Community Engagement & Leadership",
    path: "/community",
    description: "Dedicated community leader with experience in student engagement, alumni relations, and social impact initiatives. Committed to building meaningful connections and fostering positive change in communities."
  }
];

// Projects
export const projects = {
  software: [
    {
      id: 1,
      title: "Chess Battle",
      description: "An innovative online chess game that leverages OpenAI's Language Model API to enhance the gaming experience.",
      backgroundImage: projectImages.chessBattle,
      features: [
        "Implemented OpenAI API integration for real-time game commentary",
        "Developed intelligent move analysis system",
        "Created interactive learning features for players",
        "Deployed and maintained on Vercel platform"
      ],
      technologies: ["React.js", "OpenAI API", "JavaScript", "Web Development"],
      github: "https://github.com/suhasdasari/chessbattlefinal",
      live: "https://chessbattle-vf.vercel.app/"
    },
    {
      id: 2,
      title: "EVM based Faucet AI agent",
      description: "An AI agent with his own wallet and can send a specific amount of tokens to any address once in every 24 hours.",
      backgroundImage: projectImages.faucetAgent,
      features: [
        "Implemented OpenAI API integration",
        "used viem SDK to interact with the blockchain",
        "Created a telegram bot to interact with users in a telegram group"
      ],
      technologies: ["typescript", "viem SDK", "Telegram Bot", "OpenAI API"],
      github: "https://github.com/suhasdasari/faucets-abstract2"
    },
    {
      id: 3,
      title: "StepUp Health App",
      description: "A comprehensive health and fitness tracking mobile application for iOS and Android",
      backgroundImage: projectImages.stepUpHealth,
      features: [
        "Developed cross-platform mobile app using React Native",
        "Implemented real-time step counting and calorie tracking",
        "Created intuitive UI/UX for health activity monitoring",
        "Integrated health metrics tracking system"
      ],
      technologies: ["React Native", "JavaScript", "Mobile Development", "Health APIs"]
    }
  ],
  ai: [
    {
      id: 1,
      title: "Chess Battle",
      description: "An innovative online chess game that leverages OpenAI's Language Model API to enhance the gaming experience.",
      backgroundImage: projectImages.chessBattle,
      features: [
        "Implemented OpenAI API integration for real-time game commentary",
        "Developed intelligent move analysis system",
        "Created interactive learning features for players",
        "Deployed and maintained on Vercel platform"
      ],
      technologies: ["React.js", "OpenAI API", "JavaScript", "Web Development"],
      github: "https://github.com/suhasdasari/chessbattlefinal",
      live: "https://chessbattle-vf.vercel.app/"
    },
    {
      id: 2,
      title: "EVM based Faucet AI agent",
      description: "An AI agent with his own wallet and can send a specific amount of tokens to any address once in every 24 hours.",
      backgroundImage: projectImages.faucetAgent,
      features: [
        "Implemented OpenAI API integration",
        "used viem SDK to interact with the blockchain",
        "Created a telegram bot to interact with users in a telegram group"
      ],
      technologies: ["viem SDK", "Telegram Bot", "OpenAI API"],
      github: "https://github.com/suhasdasari/faucets-abstract2"
    }
  ],
  crypto: [
    {
      id: 1,
      title: "EVM based Faucet AI agent",
      description: "An AI agent with his own wallet and can send a specific amount of tokens to any address once in every 24 hours.",
      backgroundImage: projectImages.faucetAgent,
      features: [
        "Implemented OpenAI API integration",
        "used viem SDK to interact with the blockchain",
        "Created a telegram bot to interact with users in a telegram group"
      ],
      technologies: ["viem SDK", "Telegram Bot", "OpenAI API"],
      github: "https://github.com/suhasdasari/faucets-abstract2"
    }
  ]
};

// Professional Experience
export const experience = {
  software: [
    {
      id: 1,
      position: "Software Engineer",
      company: "Zensar Technologies",
      from: "July 2022",
      to: "Currently Working",
      description: "Led development of automated banking solutions at NedBank",
      features: [
        "Designed and implemented automated banking processes using COBOL and JCL",
        "Managed 1,000+ real-time automated jobs in the database",
        "Achieved seamless execution of critical banking processes",
        "Implemented robust monitoring system using Control-M"
      ],
      technologies: ["Mainframe", "COBOL", "JCL", "SQL", "Control-M", "SQL", "Java", "Jira"]
    },
    {
      id: 2,
      position: "Student Engagement Officer",
      company: "George Mason University",
      from: "January 2023",
      to: "Currently Working",
      description: "Managed a portfolio of local constituents and updated the Alumni Database",
      features: [
        "Reconnected 200+ alumni with the university through personalized outreach",
        "Utilized Salesforce CRM to maintain and analyze data"
      ],
      technologies: ["Salesforce", "CRM"]
    }
  ],
  crypto: [
    {
      id: 1,
      position: "Community Manager",
      company: "Shardeum",
      from: "March 2022",
      to: "December 2023",
      description: "Shardeum is a Layer 1 blockchain that is built on Ethereum Virtual Machine (EVM). I worked as a  Commmunity Manager for the discord server",
      features: [
        "Understood the community psychology, Implemented growth strategies",
        "Organized 30+ technical workshops and educational events",
        "Developed engagement strategies resulting in 500k+ member growth",
        "Created educational content for blockchain technology"
      ],
      technologies: ["Community Management", "Discord", "Organising Events"]
    },
    {
      id: 2,
      position: "Community & Marketing Manager",
      company: "DotNames",
      from: "January 2023",
      to: "Currently Working",
      description: "Shardeum is a Layer 1 blockchain that is built on Ethereum Virtual Machine (EVM). I worked as a  Commmunity Manager for the discord server",
      features: [
        "Bootstraped community and marketing strategies for twitter, discord, telegram",
        "Implemented quest campaings with 200k+ participants",
        "Created marketing content for the community",
        "Organised 20+ events, 100+ partnerships for the community",
        "Launched mutliple Name Services on EVM and Cosmos Blockchains"
      ],
      technologies: ["Community Management", "Marketing", "Partnerships", "Campaigns"]
    }
  ]
};

// Achievements
export const achievements = {
  crypto: [
    "Built and managed crypto communities with over 1.5 million active members",
    "Successfully organized and executed 50+ educational events and workshops",
    "Mentored 1000+ students in blockchain technology and smart contract development",
    "Established partnerships with 7 universities for blockchain education programs",
    "Partnered with 100+ projects in the blockchain space including top Layer 1 blockchains",
    "Implemented quest campains with 200k+ participants using crew3, galxe, etc"
  ],
  software: [],
  ai: [],
  community: []
};

// Blog Posts
export const blogPosts = [
  {
    id: 1,
    title: "Your Blog Title",
    date: "March 14, 2024",
    excerpt: "Brief summary of your blog post",
    content: `Your full blog post content here. You can use multiple lines and add paragraphs as needed.`
  }
  // Add more blog posts here
];

// Site Configuration
export const siteConfig = {
  title: "Suhas Dasari - Personal Portfolio",
  description: "Software Engineer with expertise in AI, Blockchain, and Community Management. Passionate about building innovative solutions and fostering tech communities.",
  favicon: personalInfo.profilePicture,
  showBlog: true, // Set to false if you don't want to show the blog section
  blogPath: "/blogs",
  primaryColor: "#2196F3",
  secondaryColor: "#1a1a1a",
  fonts: {
    heading: "'Cinzel Decorative', cursive",
    body: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial"
  }
};

// Story Content
export const storyContent = {
  title: "Forging Paths: A Curious Mind's Journey",
  goal: "Goal - Dedicated to the betterment of mankind, I will continuously learn, innovate, and help others, regardless of whether I am a leader or a follower",
  birthInfo: [
    "Born on 17th November 1999 in INDIA to a loving middle class family - Dad :Retired Army Soldier, Mom :housewife and a Big brother.",
    "I was an average student in school, but I was always passionate about learning new things. I was always curious about how things work and how to make them work better. I always had a dream to make a difference in the world. At my early age I wanted to become a Soldier like my father but my mind took me to a different path, arbitrating by buying cycles and selling them at a profit to other children when i was 9 years old, having my own seasonal firecracker store ar the age of 16, affiliating with upstox as a stock broker at the age of 17 - ps: it was on my brother identity as I was under age to have a stock broker account. On the other hand, I was motivated by Jackie Chan, Bruce Lee, and Sylvester Stallone. I started learning martial arts like Taekwando, Kalaripayattu, Yoga, Sword fight, Stick fight, and many more for half of my life as of now.",
    "Nevertheless, I completed my schooling in 2015 from Rao's high School in Hyderabd, INDIA and completed my Bachelors in Mechanical Engineering from Malla Reddy College of Engineering in 2021 from Hyderabad, INDIA. Currently pursuing my Masters in Information Systems and working as a Student Engagement Officer in George Mason University, Fairfax, USA.",
    "Here are my some of the most important milestones in my life:"
  ],
  milestones: [
    {
      title: "Entering the Money Markets - Stock Broker / Affiliated Partner - Mentoring",
      content: "In 2020, during my third year of my Bachelors in India, I joined as an Affiliated Partner with Upstox and Motilal Oswal. This involved mentoring clients, handling marketing efforts, engaging in cold calling to expand my client base, and conducting mentorship classes. At the peak, I managed over 5,000 active clients and a total of 14,000 clients. My responsibilities included providing comprehensive support and education to help clients navigate stocks, currency, and commodities markets, deepening my understanding of market dynamics."
    },
    {
      title: "My First Job - Software Engineer - MainFrame Developer",
      content: "After graduating in 2022, I joined Zensar Technologies Limited as a Software Engineer and Mainframe Developer. My role focused on delivering timely solutions to complex queries and issues, ensuring uninterrupted automated banking processes and direct client interactions. I monitored real-time automated jobs, resolved critical queries, and mentored fellow associates. This role honed my expertise in programming languages like Java, JCL, COBOL, and SQL."
    },
    {
      title: "Cryptocurrency, Blockchain, Marketing, and Community",
      content: "In 2021-2022, I started as a freelancer with Shardeum, building and managing their Discord community. This role evolved into a full-time freelance position, where I interacted with global community members, addressed queries, understood community psychology, and developed engagement ideas. I organised workshops, meet-ups, and webinars, focusing on community growth and effective Discord workflows.\n\nIn 2023, I transitioned to DotNames as the Chief Marketing Officer. Here, I drove marketing initiatives, developing and executing strategies to enhance community growth, expand social media presence, establish partnerships, and manage brand positioning."
    },
    {
      title: "Journey to US - George Mason University - Student Engagement Officer",
      content: "In 2023 I moved to US and joined GMU on F-1 student visa to do my Masters in Information Systems. And in Jan 2024 I got an on-campus part-time as a Student Engagement Officer (current profession) in Office of Advancements & Alumni Relations. This role involved meeting alumni both offline and online, managing data in the Salesforce, and cold emailing prospects. Indeed this is a very exciting job to meet alumni of your own college, learn about their life, career and converting them to donate funds to our university."
    }
  ],
  finalThoughts: {
    title: "That's just 1%!",
    quote: "Best Suggestion I give myself \"Learn from other people stories, keep updating new things to your life, Keep Learning, Stay Healthy, Stay Happy\""
  }
}; 