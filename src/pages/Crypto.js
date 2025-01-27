import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHome, FaEthereum, FaUsers, FaEnvelope, FaGithub, FaGlobe } from 'react-icons/fa';

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
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const NavSection = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-top: 20px;
`;

const ProjectCard = styled.div`
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 15px;
  transition: all 0.3s ease;
  height: 100%;

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
  font-size: 14px;
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
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
  font-size: 13px;
  line-height: 1.4;
  margin-bottom: ${props => props.isAchievement ? '3px' : '6px'};
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
  font-size: 11px;
  color: #555;
`;

const SectionTitle = styled.h2`
  color: #1a1a1a;
  font-size: 15px;
  margin: 25px 0 15px;
  padding-bottom: 8px;
  border-bottom: 2px solid #eee;
`;

const PageTitleHeader = styled.h1`
  color: #1a1a1a;
  font-size: 17px;
  margin: 0;
  font-family: 'Cinzel Decorative', cursive;
`;

const PageDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 25px;
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
    position: "Community Manager",
    company: "Shardeum",
    from: "March 2022",
    to: "December 2023",
    icon: <FaUsers />,
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
    icon: <FaEthereum />,
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
];

const achievements = [
  "Built and managed crypto communities with over 1.5 million active members",
  "Successfully organized and executed 50+ educational events and workshops",
  "Mentored 1000+ students in blockchain technology and smart contract development",
  "Established partnerships with 7 universities for blockchain education programs",
  "Partnered with 100+ projects in the blockchain space including top Layer 1 blockchains",
  "Implemented quest campains with 200k+ participants using crew3, galxe, etc"
];

const projects = [
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

function Crypto() {
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
          <PageTitleHeader>Blockchain & Cryptocurrency</PageTitleHeader>
          <NavSection>
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
          </NavSection>
        </Header>
      </MenuBar>

      <PageDescription>
        Dedicated blockchain community leader and educator with extensive experience in growing and managing crypto communities.
        Passionate about blockchain education and fostering the next generation of Web3 developers.
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
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <div>{project.position} at {project.company}</div>
                        <div style={{ fontSize: '14px', color: '#666' }}>
                          {project.from} - {project.to}
                        </div>
                      </div>
                    </ProjectTitle>
                  </TitleContent>
                </TitleSection>
                {project.technologies && (
                  <TechList style={{ marginBottom: '15px' }}>
                    {project.technologies.map((tech, index) => (
                      <TechItem key={index}>{tech}</TechItem>
                    ))}
                  </TechList>
                )}
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
                {project.technologies && (
                  <TechList style={{ marginBottom: '15px' }}>
                    {project.technologies.map((tech, index) => (
                      <TechItem key={index}>{tech}</TechItem>
                    ))}
                  </TechList>
                )}
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

export default Crypto; 