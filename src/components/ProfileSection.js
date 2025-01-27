import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaGithub, FaLinkedin, FaTelegram, FaEthereum } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { personalInfo, socialLinks } from '../config';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 85vh;
  padding-top: 30px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
  object-fit: cover;
`;

const Name = styled.h2`
  margin: 10px 0;
  font-size: 22px;
`;

const Location = styled.div`
  color: #888;
  font-size: 13px;
  margin-bottom: 10px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin: 12px 0;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333;
    color: white;
  }
`;

const PortfolioSection = styled.div`
  width: 100%;
  margin-top: 15px;
  max-width: 280px;
`;

const PortfolioTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 18px;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
`;

const PortfolioItem = styled(Link)`
  padding: 15px;
  background-color: #f0f0f0;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  word-break: break-word;
  width: 100%;
  font-size: 12px;
  line-height: 1.2;
  padding: 10px;

  &:hover {
    background-color: #333;
    color: white;
  }
`;

function ProfileSection() {
  return (
    <ProfileContainer>
      <ProfileImage src={personalInfo.profilePicture} alt={personalInfo.name} />
      <Name>{personalInfo.name}</Name>
      <Location>{personalInfo.location}</Location>
      
      <SocialIcons>
        {socialLinks.twitter && (
          <SocialIcon href={socialLinks.twitter} target="_blank">
            <FaTwitter size={20} />
          </SocialIcon>
        )}
        {socialLinks.github && (
          <SocialIcon href={socialLinks.github} target="_blank">
            <FaGithub size={20} />
          </SocialIcon>
        )}
        {socialLinks.linkedin && (
          <SocialIcon href={socialLinks.linkedin} target="_blank">
            <FaLinkedin size={20} />
          </SocialIcon>
        )}
        {socialLinks.telegram && (
          <SocialIcon href={socialLinks.telegram} target="_blank">
            <FaTelegram size={20} />
          </SocialIcon>
        )}
        {socialLinks.etherscan && (
          <SocialIcon href={socialLinks.etherscan} target="_blank">
            <FaEthereum size={20} />
          </SocialIcon>
        )}
      </SocialIcons>

      <PortfolioSection>
        <PortfolioTitle>Portfolio's</PortfolioTitle>
        <PortfolioGrid>
          <PortfolioItem to="/software">Software<br/>Engineering</PortfolioItem>
          <PortfolioItem to="/crypto">Crypto/<br/>Blockchain</PortfolioItem>
          <PortfolioItem to="/ai">AI</PortfolioItem>
          <PortfolioItem to="/community">Community<br/>Management</PortfolioItem>
        </PortfolioGrid>
      </PortfolioSection>
    </ProfileContainer>
  );
}

export default ProfileSection; 