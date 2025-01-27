import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Container = styled.div`
  padding: 20px;
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
`;

const HomeButton = styled(Link)`
  padding: 6px 15px;
  background-color: #f0f0f0;
  border-radius: 8px;
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

function PortfolioPage({ children }) {
  return (
    <Container>
      <MenuBar>
        <HomeButton to="/">
          <FaHome size={12} /> Home
        </HomeButton>
      </MenuBar>
      {children}
    </Container>
  );
}

export default PortfolioPage; 