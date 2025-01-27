import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import ProfileSection from './components/ProfileSection';
import Story from './components/Story';
import AI from './pages/AI';
import Crypto from './pages/Crypto';
import Software from './pages/Software';
import Community from './pages/Community';
import Blogs from './pages/Blogs';

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
