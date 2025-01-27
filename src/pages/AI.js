import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGithub, FaGlobe, FaHome, FaEnvelope } from 'react-icons/fa';

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
  justify-content: space-between;
  gap: 15px;
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

const ProjectLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
`;

const LinkIcon = styled.a`
  color: #666;
  font-size: 20px;
  transition: color 0.2s ease;
  
  &:hover {
    color: #2196F3;
  }
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
const experiences = [];  // Empty array since we don't have AI experiences yet

const projects = [
  {
    id: 1,
    title: "Chess Battle",
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
    id: 2,
    title: "EVM based Faucet AI agent",
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

const achievements = [
];

function AI() {
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

      <PageTitle>Artificial Intelligence</PageTitle>
      <PageDescription>
        Exploring the intersection of artificial intelligence and user experience through innovative projects
        and applications. Specializing in AI integration, language models, and intelligent system development.
      </PageDescription>

      {experiences.length > 0 && (
        <>
          <SectionTitle>Professional Experience</SectionTitle>
          <ProjectGrid>
            {experiences.map(project => (
              <ProjectCard key={project.id}>
                <ProjectTitle>
                  {project.icon}
                  {project.title}
                </ProjectTitle>
                <Description>{project.description}</Description>
                {project.features && project.features.map((feature, index) => (
                  <Description key={index}>• {feature}</Description>
                ))}
                {project.technologies && (
                  <TechList>
                    {project.technologies.map((tech, index) => (
                      <TechItem key={index}>{tech}</TechItem>
                    ))}
                  </TechList>
                )}
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
                  {(project.github || project.live) && (
                    <ProjectLinks>
                      {project.github && (
                        <LinkIcon 
                          href={project.github}
                          target="_blank" 
                          rel="noopener noreferrer"
                          title="View source code on GitHub"
                        >
                          <FaGithub />
                        </LinkIcon>
                      )}
                      {project.live && (
                        <LinkIcon 
                          href={project.live}
                          target="_blank" 
                          rel="noopener noreferrer"
                          title="Visit live site"
                        >
                          <FaGlobe />
                        </LinkIcon>
                      )}
                    </ProjectLinks>
                  )}
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

export default AI; 