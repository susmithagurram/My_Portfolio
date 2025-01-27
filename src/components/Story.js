import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';

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
  margin: 25px 0;
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
    navigator.clipboard.writeText('suhas.dasari194@gmail.com');
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
          <MenuButton to="/blogs">My Blogs</MenuButton>
          <ContactButton onClick={handleCopyEmail}>
            {copied ? 'Email copied!' : (
              <>
                Contact <FaEnvelope size={12} />
              </>
            )}
          </ContactButton>
        </ButtonGroup>
      </MenuBar>
      <StoryTitle>Forging Paths: A Curious Mind's Journey</StoryTitle>
      <StoryContent>
        <p>
          <em>"Goal - Dedicated to the betterment of mankind, I will continuously learn, innovate, and help others, regardless of whether I am a leader or a follower"</em>

          <BirthInfo>Born on 17th November 1999 in INDIA to a loving middle class family - Dad :Retired Army Soldier, Mom :housewife and a Big brother.</BirthInfo>

          <BirthInfo>
            I was an average student in school, but I was always passionate about learning new things. I was always curious about how things work and how to make them work better. I always had a dream to make a difference in the world. At my early age I wanted to become a Soldier like my father but my mind took me to a different path, arbitrating by buying cycles and selling them at a profit to other children when i was 9 years old, having my own seasonal firecracker store ar the age of 16, affiliating with upstox as a stock broker at the age of 17 - ps: it was on my brother identity as I was under age to have a stock broker account. 
            On the other hand, I was motivated by Jackie Chan, Bruce Lee, and Sylvester Stallone. I started learning martial arts like Taekwando, Kalaripayattu, Yoga, Sword fight, Stick fight, and many more for half of my life as of now. 
          </BirthInfo>

          <BirthInfo>   
            Nevertheless, I completed my schooling in 2015 from Rao's high School in Hyderabd, INDIA and completed my Bachelors in Mechanical Engineering from Malla Reddy College of Engineering in 2021 from Hyderabad, INDIA. Currently pursuing my Masters in Information Systems and working as a Student Engagement Officer in George Mason University, Fairfax, USA.
          </BirthInfo>

          <BirthInfo>   
            Here are my some of the most important milestones in my life:
          </BirthInfo>

            
          <StoryHeading>Entering the Money Markets - Stock Broker / Affiliated Partner - Mentoring</StoryHeading>

          In 2020, during my third year of my Bachelors in India, I joined as an Affiliated Partner with Upstox and Motilal Oswal. This involved mentoring clients, handling marketing efforts, engaging in cold calling to expand my client base, and conducting mentorship classes. At the peak, I managed over 5,000 active clients and a total of 14,000 clients. My responsibilities included providing comprehensive support and education to help clients navigate stocks, currency, and commodities markets, deepening my understanding of market dynamics.

          <StoryHeading>My First Job - Software Engineer - MainFrame Developer</StoryHeading>

          After graduating in 2022, I joined Zensar Technologies Limited as a Software Engineer and Mainframe Developer. My role focused on delivering timely solutions to complex queries and issues, ensuring uninterrupted automated banking processes and direct client interactions. I monitored real-time automated jobs, resolved critical queries, and mentored fellow associates. This role honed my expertise in programming languages like Java, JCL, COBOL, and SQL.

          <StoryHeading>Cryptocurrency, Blockchain, Marketing, and Community</StoryHeading>

          In 2021-2022, I started as a freelancer with Shardeum, building and managing their Discord community. This role evolved into a full-time freelance position, where I interacted with global community members, addressed queries, understood community psychology, and developed engagement ideas. I organised workshops, meet-ups, and webinars, focusing on community growth and effective Discord workflows.

          In 2023, I transitioned to DotNames as the Chief Marketing Officer. Here, I drove marketing initiatives, developing and executing strategies to enhance community growth, expand social media presence, establish partnerships, and manage brand positioning.

          <StoryHeading>Journey to US - George Mason University - Student Engagement Officer</StoryHeading>

          In 2023 I moved to US and joined GMU on F-1 student visa to do my Masters in Information Systems. And in Jan 2024 I got an on-campus part-time as a Student Engagement Officer (current profession) in Office of Advancements & Alumni Relations. This role involved meeting alumni both offline and online, managing data in the Salesforce, and cold emailing prospects. Indeed this is a very exciting job to meet alumni of your own college, learn about their life, career and converting them to donate funds to our university.

          <StoryHeading>That's just 1%!</StoryHeading>

          <BirthInfo>Best Suggestion I give myself "Learn from other people stories, keep updating new things to your life, Keep Learning, Stay Healthy, Stay Happy"</BirthInfo>

          </p>
      </StoryContent>
    </StoryContainer>
  );
}

export default Story; 