import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch } from 'react-icons/fa';

const PageContainer = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const HomeButton = styled(Link)`
  padding: 10px 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  text-decoration: none;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333;
    color: white;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #f0f0f0;
  padding: 10px 15px;
  border-radius: 8px;
  width: 300px;
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  outline: none;
  width: 100%;
  font-family: 'Lora', serif;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const BlogCard = styled.div`
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
`;

const BlogTitle = styled.h3`
  margin-bottom: 10px;
  font-family: 'Cinzel Decorative', cursive;
`;

const BlogDate = styled.div`
  color: #666;
  font-size: 14px;
  margin-bottom: 10px;
`;

const BlogExcerpt = styled.p`
  color: #333;
  font-size: 15px;
  line-height: 1.6;
`;

// This would typically come from your database or CMS
const blogPosts = [
  {
    id: 1,
    title: "Sample Blog Post",
    date: "March 14, 2024",
    excerpt: "This is a sample blog post excerpt...",
    content: "Full blog post content would go here..."
  },
  // Add more blog posts here
];

function Blogs() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageContainer>
      <Header>
        <HomeButton to="/">
          <FaHome /> Home
        </HomeButton>
        <SearchContainer>
          <FaSearch />
          <SearchInput 
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
      </Header>

      <BlogGrid>
        {filteredPosts.map(post => (
          <BlogCard key={post.id}>
            <BlogTitle>{post.title}</BlogTitle>
            <BlogDate>{post.date}</BlogDate>
            <BlogExcerpt>{post.excerpt}</BlogExcerpt>
          </BlogCard>
        ))}
      </BlogGrid>
    </PageContainer>
  );
}

export default Blogs; 