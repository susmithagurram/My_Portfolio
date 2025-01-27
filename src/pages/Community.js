import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHome, FaEnvelope } from 'react-icons/fa';
import { experience, achievements, personalInfo, socialLinks } from '../config';

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

const PageTitleHeader = styled.h1`
  color: #1a1a1a;
  font-size: 17px;
  margin: 0;
  font-family: 'Cinzel Decorative', cursive;
  padding: 0;
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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-top: 20px;
`;

const ProjectCard = styled.div`
  background-color: #fff;
  background-image: ${props => props.backgroundImage ? `url(${props.backgroundImage})` : 'none'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 15px;
  transition: all 0.3s ease;
  height: 100%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.backgroundImage ? 'rgba(255, 255, 255, 0.85)' : 'none'};
    border-radius: 8px;
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

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
  color: #2196F3;
  font-size: 15px;
  margin: 25px 0 15px;
  padding-bottom: 8px;
  border-bottom: 2px solid #eee;
`;

const PageDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 25px;
`;

// Remove all hardcoded data arrays and use the imported ones
const experiences = experience.community || [];  // Use community experiences from config
const communityAchievements = achievements.community || []; // Use community achievements from config

function Community() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageContainer>
      <MenuBar>
        <Header>
          <PageTitleHeader>Community Management</PageTitleHeader>
          <NavSection>
            <NavButton to="/">
              <FaHome /> Home
            </NavButton>
            <NavButton as="a" href={socialLinks.substack} target="_blank">
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
        Dedicated community leader with experience in student engagement, alumni relations, and social impact initiatives.
        Committed to building meaningful connections and fostering positive change in communities.
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

      {communityAchievements && communityAchievements.length > 0 && (
        <>
          <SectionTitle>Key Achievements</SectionTitle>
          {communityAchievements.map((achievement, index) => (
            <Description key={index} isAchievement>• {achievement}</Description>
          ))}
        </>
      )}
    </PageContainer>
  );
}

export default Community; 