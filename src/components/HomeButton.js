import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const StyledHomeButton = styled(Link)`
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

function HomeButton() {
  return (
    <StyledHomeButton to="/">
      <FaHome size={12} /> Home
    </StyledHomeButton>
  );
}

export default HomeButton; 