import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';
import { personalInfo, storyContent, socialLinks } from '../config';

const StoryContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
  padding-right: 20px;
`;

const MenuBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 20px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #e0e0e0;
  position: sticky;
  top: 0;
  z-index: 10;
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  transform: translateY(${props => props.show ? '0' : '-100%'});
  transition: all 0.3s ease;
`;

const StoryTitle = styled.h1`
  margin-bottom: 30px;
  text-align: center;
  font-size: 32px;
  margin-top: 15px;
`;

const StoryContent = styled.div`
  line-height: 1.6;
  font-size: 15px;
  p {
    white-space: pre-line;
    text-transform: none;
    font-family: 'Lora', serif;
  }
`;

const StoryHeading = styled.span`
  font-family: 'Cinzel Decorative', cursive;
  font-weight: 700;
  display: block;
  margin-top: 25px;
  margin-bottom: 15px;
`;

const BirthInfo = styled.div`
  margin: 15px 0;
  font-style: italic;
  color: #666;
`;

const MenuButton = styled(Link)`
  padding: 6px 15px;
  background-color: #f0f0f0;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    background-color: #333;
    color: white;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const ContactButton = styled.button`
  padding: 6px 15px;
  background-color: #f0f0f0;
  border-radius: 8px;
  border: none;
  text-align: center;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: #333;
    color: white;
  }
`;

function Story() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false); 
      } else {
        setShow(true);  
      }
      setLastScrollY(window.scrollY); 
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <StoryContainer>
      <MenuBar show={show}>
        <ButtonGroup>
          <MenuButton as="a" href={socialLinks.substack} target="_blank">My Blogs</MenuButton>
          <ContactButton onClick={handleCopyEmail}>
            {copied ? 'Email copied!' : (
              <>
                Contact <FaEnvelope size={12} />
              </>
            )}
          </ContactButton>
        </ButtonGroup>
      </MenuBar>
      <StoryTitle>{storyContent.title}</StoryTitle>
      <StoryContent>
        <p>
          <em><strong>"{storyContent.goal}"</strong></em>

          {storyContent.birthInfo.map((info, index) => (
            <BirthInfo key={index}>{info}</BirthInfo>
          ))}
            
          {storyContent.milestones.map((milestone, index) => (
            <React.Fragment key={index}>
              <StoryHeading>{milestone.title}</StoryHeading>
              {milestone.content}
            </React.Fragment>
          ))}

          <StoryHeading>{storyContent.finalThoughts.title}</StoryHeading>
          <BirthInfo>{storyContent.finalThoughts.quote}</BirthInfo>
        </p>
      </StoryContent>
    </StoryContainer>
  );
}

export default Story; 