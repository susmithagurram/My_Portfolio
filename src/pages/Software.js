import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHome, FaDatabase, FaMobile, FaDesktop, FaEthereum, FaEnvelope } from 'react-icons/fa';

const PageContainer = styled.div`
  padding: 0 0 20px 0;
`;

const MenuBar = styled.div`
  background-color: #f8f9fa;
  padding: 10px 20px;
  border-bottom: 1px solid #e0e0e0;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  max-width: 1200px;
  margin: 0 auto;
`;

const NavButton = styled(Link)`
  padding: 5px 10px;
  background-color: #e9ecef;
  border-radius: 4px;
  text-decoration: none;
  color: #495057;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.85rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: #dee2e6;
    color: #212529;
  }
`;

const ProjectGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`;

const ProjectCard = styled.div`
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
`;

const ProjectTitle = styled.h3`
  margin-bottom: 0;
  font-family: 'Cinzel Decorative', cursive;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
`;

const TitleContent = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Description = styled.p`
  color: #333;
  font-size: 15px;
  line-height: 1.4;
  margin-bottom: ${props => props.isAchievement ? '4px' : '8px'};
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const TechItem = styled.span`
  background: #f0f0f0;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 13px;
  color: #555;
`;

const SectionTitle = styled.h2`
  color: #2196F3;
  font-size: 16px;
  margin: 40px 0 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #eee;
`;

const PageTitle = styled.h1`
  color: #1a1a1a;
  font-size: 18px;
  margin-bottom: 20px;
  font-family: 'Cinzel Decorative', cursive;
`;

const PageDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 40px;
`;

const ContactButton = styled.button`
  padding: 5px 10px;
  background-color: #e9ecef;
  border-radius: 4px;
  border: none;
  text-decoration: none;
  color: #495057;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.85rem;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #dee2e6;
    color: #212529;
  }
`;

// Data
const experiences = [
  {
    id: 1,
    title: "Software Engineer at Zensar Technologies",
    icon: <FaDatabase />,
    description: "Led development of automated banking solutions at NedBank",
    features: [
      "Designed and implemented automated banking processes using COBOL and JCL",
      "Managed 1,000+ real-time automated jobs in the database",
      "Achieved seamless execution of critical banking processes",
      "Implemented robust monitoring system using Control-M"
    ],
    technologies: ["COBOL", "JCL", "SQL", "Control-M", "SQL", "Java", "Jira"]
  },
  {
    id: 2,
    title: "Student Engagement Officer at George Mason University",
    icon: <FaDatabase />,
    description: "Managed a portfolio of local constituents and updated the Alumni Database",
    features: [
      "Reconnected 200+ alumni with the university through personalized outreach",
      "Utilized Salesforce CRM to maintain and analyze data"
    ],
    technologies: ["Salesforce", "CRM"]
  }
];

const achievements = [
];

const projects = [
  {
    id: 1,
    title: "StepUp Health App",
    icon: <FaMobile />,
    description: "A comprehensive health and fitness tracking mobile application for iOS and Android",
    features: [
      "Developed cross-platform mobile app using React Native",
      "Implemented real-time step counting and calorie tracking",
      "Created intuitive UI/UX for health activity monitoring",
      "Integrated health metrics tracking system"
    ],
    technologies: ["React Native", "JavaScript", "Mobile Development", "Health APIs"]
  },
  {
    id: 2,
    title: "Chess Battle",
    icon: <FaDesktop />,
    description: "An innovative online chess game that leverages OpenAI's Language Model API to enhance the gaming experience.",
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
    title: "EVM based Faucet AI agent",
    icon: <FaEthereum />,
    description: "An Ai agent with his own wallet and can send a specific amount of tokens to any address once in every 24 hours.",
    features: [
      "Implemented OpenAI API integration",
      "used viem SDK to interact with the blockchain",
      "Created a telegram bot to interact with users in a telegram group"
    ],
    technologies: ["viem SDK", "Telegram Bot", "OpenAI API"],
    github: "https://github.com/suhasdasari/faucets-abstract2"
  }
];

function Software() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('suhas.dasari194@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageContainer>
      <MenuBar>
        <Header>
          <NavButton to="/">
            <FaHome /> Home
          </NavButton>
          <NavButton to="/blogs">
            My Blogs
          </NavButton>
          <ContactButton onClick={handleCopyEmail}>
            {copied ? 'Email copied!' : (
              <>
                Contact <FaEnvelope />
              </>
            )}
          </ContactButton>
        </Header>
      </MenuBar>

      <PageTitle>Software Engineering</PageTitle>
      <PageDescription>
        Experienced software engineer specializing in banking automation systems and mobile application development.
        Proficient in both legacy systems and modern technologies, with a focus on creating efficient, scalable solutions.
      </PageDescription>

      {experiences.length > 0 && (
        <>
          <SectionTitle>Professional Experience</SectionTitle>
          <ProjectGrid>
            {experiences.map(project => (
              <ProjectCard key={project.id}>
                <TitleSection>
                  <TitleContent>
                    <ProjectTitle>
                      {project.icon}
                      {project.title}
                    </ProjectTitle>
                    {project.technologies && (
                      <TechList>
                        {project.technologies.map((tech, index) => (
                          <TechItem key={index}>{tech}</TechItem>
                        ))}
                      </TechList>
                    )}
                  </TitleContent>
                </TitleSection>
                <Description>{project.description}</Description>
                {project.features && project.features.map((feature, index) => (
                  <Description key={index}>• {feature}</Description>
                ))}
              </ProjectCard>
            ))}
          </ProjectGrid>
        </>
      )}

      {projects.length > 0 && (
        <>
          <SectionTitle>Projects</SectionTitle>
          <ProjectGrid>
            {projects.map(project => (
              <ProjectCard key={project.id}>
                <TitleSection>
                  <TitleContent>
                    <ProjectTitle>
                      {project.icon}
                      {project.title}
                    </ProjectTitle>
                    {project.technologies && (
                      <TechList>
                        {project.technologies.map((tech, index) => (
                          <TechItem key={index}>{tech}</TechItem>
                        ))}
                      </TechList>
                    )}
                  </TitleContent>
                </TitleSection>
                <Description>{project.description}</Description>
                {project.features && project.features.map((feature, index) => (
                  <Description key={index}>• {feature}</Description>
                ))}
              </ProjectCard>
            ))}
          </ProjectGrid>
        </>
      )}

      {achievements && achievements.length > 0 && (
        <>
          <SectionTitle>Key Achievements</SectionTitle>
          {achievements.map((achievement, index) => (
            <Description key={index} isAchievement>• {achievement}</Description>
          ))}
        </>
      )}
    </PageContainer>
  );
}

export default Software; 