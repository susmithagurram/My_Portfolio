import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import ProfileSection from './components/ProfileSection';
import Story from './components/Story';
import AI from './pages/AI';
import Crypto from './pages/Crypto';
import Software from './pages/Software';
import Community from './pages/Community';
import Blogs from './pages/Blogs';
import { personalInfo, siteConfig } from './config';

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const LeftSection = styled.div`
  width: 320px;
  padding: 20px;
  position: fixed;
  height: 100vh;
  border-right: 1px solid #e0e0e0;
  background-color: white;
  z-index: 1;
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: 320px;
  padding: 20px;
  border-left: 1px solid #e0e0e0;
  min-height: 100vh;
`;

function App() {
  useEffect(() => {
    // Handle wallet provider errors
    const handleError = (event) => {
      if (event.message?.includes('walletRouter')) {
        // Suppress the wallet provider error
        event.preventDefault();
      }
    };
    window.addEventListener('error', handleError);

    // Update document metadata
    try {
      document.title = personalInfo.name;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', siteConfig.description);
      }

      const favicon = document.querySelector('link[rel="icon"]');
      if (favicon) {
        favicon.href = personalInfo.profilePicture;
      }

      const appleIcon = document.querySelector('link[rel="apple-touch-icon"]');
      if (appleIcon) {
        appleIcon.href = personalInfo.profilePicture;
      }
    } catch (error) {
      console.warn('Error updating document metadata:', error);
    }

    // Cleanup
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <Router>
      <AppContainer>
        <LeftSection>
          <ProfileSection />
        </LeftSection>
        <MainContent>
          <Routes>
            <Route path="/" element={<Story />} />
            <Route path="/ai" element={<AI />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/software" element={<Software />} />
            <Route path="/community" element={<Community />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

export default App;
