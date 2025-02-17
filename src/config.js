// Personal Information
export const personalInfo = {
  name: "Susmitha Gurram",
  email: "gurramsusmithareddy8979@gmail.com",
  profilePicture: "/my-profile-picture.jpg",
  location: "Virginia, United States",
};

// Project Images - all the images are uploaded in the public
export const projectImages = {
  chessBattle: "/chess-bg.jpg",
  faucetAgent: "/faucet.jpg",
  stepUpHealth: "/stepup.jpg",
};

// Social Links
export const socialLinks = {
  github: "https://github.com/susmithagurram",
  linkedin: "https://www.linkedin.com/in/susmithagurram/",
  twitter: "https://x.com/Susmitha1399",
  telegram: "https://t.me/SusmithaGurram",
  etherscan: "https://etherscan.io/address/susmithagurram.eth",
  substack: "https://susmithagurram.substack.com/",
  // Add more social links as needed
};

// Portfolio Sections Configuration
export const portfolioSections = [
  {
    id: "software",
    title: "Software Engineering",
    path: "/software",
    description: "Where there's a null, there's a way"
  },
  {
    id: "crypto",
    title: "Blockchain & Cryptocurrency",
    path: "/crypto",
    description: "Dedicated blockchain community leader and educator with extensive experience in growing and managing crypto communities. Passionate about blockchain education and fostering the next generation of Web3 developers."
  },
  {
    id: "ai",
    title: "LLM's / Artificial Intelligence",
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
      title: "REMO - Personal AI Assistant",
      description: "Remo is a Personal AI Assistant that can be hired by every human in the planet. Personal Assistant is not only for Rich! Remo helps make users' lives easier through seamless task management, informed recommendations, and efficient problem-solving.",
      features: [
        "Implemented Privy for auth and EVM wallet creation",
        "Developed Viem based for Blockchain interactions on Ethereum Virtual Machines",
        "Uses AWS Bedrock for LLM inference and AWS DynomoDB for storying data",
        "Built self orchestrated multi agent collaboration between ai agents"
      ],
      technologies: ["React", "Typescript", "Viem", "Solidity", "AWS Bedrock", "DynomoDB"],
      github: "https://github.com/susmithagurram/Remo"
    },
    {
      id: 2,
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
      title: "REMO - Personal AI Assistant",
      description: "Remo is a Personal AI Assistant that can be hired by every human in the planet. Personal Assistant is not only for Rich! Remo helps make users' lives easier through seamless task management, informed recommendations, and efficient problem-solving.",
      features: [
        "Implemented Privy for auth and EVM wallet creation",
        "Developed Viem based for Blockchain interactions on Ethereum Virtual Machines",
        "Uses AWS Bedrock for LLM inference and AWS DynomoDB for storying data",
        "Built self orchestrated multi agent collaboration between ai agents"
      ],
      technologies: ["React", "Typescript", "Viem", "Solidity", "AWS Bedrock", "DynomoDB"],
      github: "https://github.com/susmithagurram/Remo"
    },
    {
      id: 2,
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
  ],
  crypto: [
        {
      id: 1,
      title: "REMO - Personal AI Assistant",
      description: "Remo is a Personal AI Assistant that can be hired by every human in the planet. Personal Assistant is not only for Rich! Remo helps make users' lives easier through seamless task management, informed recommendations, and efficient problem-solving.",
      features: [
        "Implemented Privy for auth and EVM wallet creation",
        "Developed Viem based for Blockchain interactions on Ethereum Virtual Machines",
        "Uses AWS Bedrock for LLM inference and AWS DynomoDB for storying data",
        "Built self orchestrated multi agent collaboration between ai agents"
      ],
      technologies: ["React", "Typescript", "Viem", "Solidity", "AWS Bedrock", "DynomoDB"],
      github: "https://github.com/susmithagurram/Remo"
    }
  ]
};

// Professional Experience
export const experience = {
  software: [
    {
      id: 1,
      position: "Graduate Teaching Assistant",
      company: "George Mason University",
      from: "January 2025",
      to: "Present",
      description: "Graduate Teaching Assistant",
      features: [
        "Responsibilities include weekly announcements, Grading, Hands-on sessions and supporting, guiding students with their projects.",
        "Utilized Canvas LMS, Blackboard LMS and Microsoft Outlook to manage the course content and student interactions.",      
      ],
      technologies: ["Canvas LMS", "Blackboard LMS", "Microsoft Outlook"]
    },
    {
      id: 2,
      position: "Student Engagement Officer",
      company: "George Mason University",
      from: "January 2024",
      to: "January 2025",
      description: "Managed a portfolio of local constituents and updated the Alumni Database",
      features: [
        "Reconnected 200+ alumni with the university through personalized outreach",
        "Utilized Salesforce CRM to maintain and analyze data",
        "Communicates the strategic vision of George Mason and our commitment to developing innovative programs to advance and support our students and graduates."
      ],
      technologies: ["Salesforce", "CRM"]
    },
    {
      id: 3,
      position: "Software Engineer",
      company: "Tata Consultancy Services",
      from: "December 2021",
      to: "July 2023",
      description: "Systems Operations Analyst - IAM",
      features: [
        "Responsibilities include protecting the data from internal and external Cyber attacks.",
        "Worked with the Soc tools. Worked with Operation, Application and identity and Access management. Solved 1000+ incidents, tickets and requests.",
        "Worked with the Soc tools like Qrador, Crowdstrike, Salesforce, Nexpose Scan, Azure AD and also with security tools.",
        "Maintaining Excel reports of the data, managing,updating and storing them accordingly.",
        "Worked as Team Lead for Soc Department where I have managed team of 11 members",
        "Expertise in Cyber Security Domain, Java, Python programming and Worked with Data bases Oracle and MySQL"
      ],
      technologies: ["Cybersecurity", "SOC Tools", "Operations Management", "Application Management", "Identity and Access Management","Security Operations",  "SQL", "Java", "Python"]
    }
  ],
  crypto: [
    {
      id: 1,
      position: "Graduate Teaching Assistant",
      company: "George Mason University",
      from: "January 2025",
      to: "Present",
      description: "Graduate Teaching Assistant",
      features: [
        "Responsibilities include weekly announcements, Grading, Hands-on sessions and supporting, guiding students with their projects.",
        "Utilized Canvas LMS, Blackboard LMS and Microsoft Outlook to manage the course content and student interactions.",      
      ],
      technologies: ["Canvas LMS", "Blackboard LMS", "Microsoft Outlook"]
    },
    {
      id: 2,
      position: "Community Manager",
      company: "Simba Exchange",
      from: "February 2023",
      to: "July 2023",
      description: "Simba Exchange is a crypto exchange platform that provides a secure and easy-to-use platform for trading, buying and selling cryptocurrencies.",
      features: [
        "Developing comprehensive marketing plans targeting diverse audiences",
        "Contributing innovative ideas and insights to product development discussions",
        "Developed engagement strategies resulting in 300k+ member growth",
        "Forging partnerships with Dapps, facilitating collaboration for community-driven projects, and fostering a culture of openness across multiple initiatives."
      ],
      technologies: ["Community Management", "Discord", "Organising Events"]
    },
    {
      id: 3,
      position: "Community & Marketing Manager",
      company: "Blazpay",
      from: "August 2023",
      to: "May 2024",
      description: "Blazpay is a payment gateway",
      features: [
        "Applied principles of community psychology to engage and empower local communities, organizing events, and collaborating with stakeholder",
        "Planned and executed offline and online events to foster community engagement, curating content and evaluating effectiveness for improvement",
        "Created marketing content for the community",
        "Generated content against various platforms to drive community engagement.",
        "Built 500k+ users Community"
      ],
      technologies: ["Community Management", "Marketing", "Partnerships", "Campaigns"]
    },
    {
      id: 4,
      position: "Contributor, Community Outreach",
      company: "Shardeum",
      from: "November 2022",
      to: "July 2023",
      description: "Shardeum is a Layer 1 blockchain that is built on Ethereum Virtual Machine (EVM). I worked as a Community Manager for the discord server",
      features: [
        "Organized 30+ technical workshops and educational events",
        "Responsibilities are conducting events at colleges, private spaces and also virtual events providing basic knowledge about blockchain to students Crypto, web 3 enthusiasts. "
      ],
      technologies: ["Contributor", "Community Outreach", "Discord", "Organising Events"]
    }
  
  ],
  community: [
    {
      id: 1,
      position: "Graduate Teaching Assistant",
      company: "George Mason University",
      from: "January 2025",
      to: "Present",
      description: "Graduate Teaching Assistant",
      features: [
        "Responsibilities include weekly announcements, Grading, Hands-on sessions and supporting, guiding students with their projects.",
        "Utilized Canvas LMS, Blackboard LMS and Microsoft Outlook to manage the course content and student interactions.",      
      ],
      technologies: ["Canvas LMS", "Blackboard LMS", "Microsoft Outlook"]
    },
    {
      id: 2,
      position: "Community Manager",
      company: "Simba Exchange",
      from: "February 2023",
      to: "July 2023",
      description: "Simba Exchange is a crypto exchange platform that provides a secure and easy-to-use platform for trading, buying and selling cryptocurrencies.",
      features: [
        "Developing comprehensive marketing plans targeting diverse audiences",
        "Contributing innovative ideas and insights to product development discussions",
        "Developed engagement strategies resulting in 300k+ member growth",
        "Forging partnerships with Dapps, facilitating collaboration for community-driven projects, and fostering a culture of openness across multiple initiatives."
      ],
      technologies: ["Community Management", "Discord", "Organising Events"]
    },
    {
      id: 3,
      position: "Community & Marketing Manager",
      company: "Blazpay",
      from: "August 2023",
      to: "May 2024",
      description: "Blazpay is a payment gateway",
      features: [
        "Applied principles of community psychology to engage and empower local communities, organizing events, and collaborating with stakeholder",
        "Planned and executed offline and online events to foster community engagement, curating content and evaluating effectiveness for improvement",
        "Created marketing content for the community",
        "Generated content against various platforms to drive community engagement.",
        "Built 500k+ users Community"
      ],
      technologies: ["Community Management", "Marketing", "Partnerships", "Campaigns"]
    },
    {
      id: 4,
      position: "Contributor, Community Outreach",
      company: "Shardeum",
      from: "November 2022",
      to: "July 2023",
      description: "Shardeum is a Layer 1 blockchain that is built on Ethereum Virtual Machine (EVM). I worked as a Community Manager for the discord server",
      features: [
        "Organized 30+ technical workshops and educational events",
        "Responsibilities are conducting events at colleges, private spaces and also virtual events providing basic knowledge about blockchain to students Crypto, web 3 enthusiasts. "
      ],
      technologies: ["Contributor", "Community Outreach", "Discord", "Organising Events"]
    }
  ]
};

// Achievements
export const achievements = {
  crypto: [
    "Built and managed crypto communities with over 1 million active members",
    "Successfully organized and executed 50+ educational events and workshops",
    "Mentored 1000+ students in blockchain technology and smart contract development",
    "Established partnerships with 7 universities for blockchain education programs",
  ],
  software: [],
  ai: [],
  community: [
    "Successfully managed and grew online communities exceeding 1.5 million members",
    "Organized and executed 50+ educational events and workshops",
    "Achieved 200% increase in alumni engagement through targeted outreach programs",
    "Developed and implemented successful community growth strategies",
    "Created and maintained strong partnerships with educational institutions",
    "Mentored over 1000 community members in various technical and professional skills"
  ]
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
  title: "Susmitha Gurram - Personal Portfolio",
  description: "Software Engineer with expertise in Cybersecurity, AI, Blockchain. Passionate about building innovative solutions and fostering tech communities.",
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
  title: "Its My Journey",
  goal: "GOAL : Continuously learn and adapt to new technologies by building and growing sustainability. ",
  birthInfo: [
    "My journey began in India where I was born to a loving middle class family on 13th August 1999. Father :Entrepreneur, Mother :Homemaker, and an Elder brother..",
    "After many fights and thoughts my parents named me Susmitha and there started me, building my own identity. As everyone I was also a girl with many goals, dreams and  passion towards my journey. I am that person who is very passionate about both studies and extracurricular activities. Since childhood I was brought up with a saying by my father that \"Education is the only way to see yourself somewhere else.\" and this completely fixed in my mind where I have been a first class student. I used to learn sangeetham and classical dance when i was 10 yrs old and one more thing even my parents do not know till now that I went to martial arts for a month with my friend(Top secret Haha).When I was in 7th standard I decided to become a doctor but unfortunately my 10th class results changed this to becoming an engineer. I did not argue about taking or either be forced to do so but after my 10th results I lost my confidence to become a doctor. Apart from what my dream was I worked very hard in my engineering and there goes my journey with lots of professional and personal experiences.",
    "Nonetheless, I completed my schooling in 2015 at St. Alphonsa's High School in Hyderabad, INDIA. I have completed my 12th grade in 2017 at Narayana Junior College, Hyderabad and completed my bachelors in Mechanical Engineering at Malla Reddy Engineering College and graduated in 2021. Currently I am pursuing a Master's in Information Systems at George Mason University, USA.",
    "Here are some of my professional experiences in my journey till now:"
  ],
  milestones: [
    {
      title: "MY FIRST JOB - SOFTWARE ENGINEER - CYBER SECURITY DOMAIN",
      content: "After my graduation in September 2021, I received my first offer letter as a Software Engineer at Tata Consultancy services and joined on 23rd December 2021. The first job is always a special one and it makes us start, learn and think about finding our career paths. Even my first job made me do the same. After joining I was allocated to a project which comes under the cyber security domain. The project and my learning skills were completely different but I didn't give up, started learning about it and all thanks to my team who are wonderful. I was an SOC analyst for Operations Segment. My work is to monitor, solve incidents and raise tickets based on the incidents. Worked with many soc tools, been a team lead for 11 members, certified with TCS badge."
    },
    {
      title: "FREELANCING - COMMUNITY MANAGER - BLOCKCHAIN",
      content: "In 2023, I worked as a Community Manager at Simba Exchange and Blazpay. I conjured communities of over 300k users.From November 2022 to July 2023, I worked as a Contributor and Web3 Educator at Shardeum to over 1000 students across 10+ colleges."
    },
    {
      title: "STUDENT ENGAGEMENT OFFICER - GEORGE MASON UNIVERSITY",
    content: "In December 2023, I worked as a Student Engagement Officer in the Office of Advancement and Alumni Relations at George Mason University. My responsibilities involved meeting with alumni, both offline and online, managing data in the Salesforce, and cold emailing prospects. Indeed this is a very exciting job to meet alumni of your own college, learn about their life, career and convert them to donate funds to our university."    
  },
    {
      title: "GRADUATE TEACHING ASSISTANT - GEORGE MASON UNIVERSITY",
    content: "In Jan 2025, I got an opportunity as a Graduate Teaching Assistant (current profession) at George Mason University. I work as a GTA for two applied information technology subjects where my responsibilities include weekly announcements, Grading, Hands-on sessions and supporting, guiding students with their projects."    
  },
    {
      title: "Hobbies:",
      content: "Reading Books (especially psychology), trekking, painting, shopping"
    }
  ],
  finalThoughts: {
    quote: "Self Suggestion: Practice making more decisions based on logic rather than emotion"
    }
}; 
