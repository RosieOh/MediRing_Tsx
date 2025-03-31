import React, { useState } from 'react';
import styled from 'styled-components';

const BoardContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const BoardTitle = styled.h2`
  color: #2D5A27;
  font-size: 1.25rem;
`;

const WriteButton = styled.button`
  padding: 0.5rem 1rem;
  background: #7BC6A3;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #6BB592;
  }
`;

const CategoryFilter = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const CategoryButton = styled.button<{ isActive: boolean }>`
  padding: 0.5rem 1rem;
  background: ${props => props.isActive ? '#7BC6A3' : '#E8F3E5'};
  color: ${props => props.isActive ? 'white' : '#4A7B43'};
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.isActive ? '#6BB592' : '#D8E3D5'};
  }
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PostCard = styled.div`
  padding: 1rem;
  background: #F5F9F4;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const PostTitle = styled.h3`
  color: #2D5A27;
  font-size: 1rem;
  font-weight: 600;
`;

const PostDate = styled.span`
  color: #A8C5A3;
  font-size: 0.875rem;
`;

const PostContent = styled.p`
  color: #4A7B43;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PostFooter = styled.div`
  display: flex;
  gap: 1rem;
  color: #A8C5A3;
  font-size: 0.75rem;
`;

const HealthBoard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: '전체' },
    { id: 'exercise', name: '운동' },
    { id: 'diet', name: '식단' },
    { id: 'mental', name: '정신건강' },
    { id: 'disease', name: '질병정보' }
  ];

  // 임시 데이터
  const posts = [
    {
      id: 1,
      title: '매일 30분 걷기의 효과',
      content: '규칙적인 걷기는 심장 건강을 개선하고 스트레스를 줄이는 데 도움이 됩니다. 하루 30분 걷기를 시작해보세요.',
      date: '2024-03-20',
      author: '홍길동',
      views: 128,
      likes: 32
    },
    {
      id: 2,
      title: '건강한 식단 구성 방법',
      content: '균형 잡힌 식단은 건강의 기본입니다. 다양한 영양소를 포함한 식단을 구성하는 방법을 알아보세요.',
      date: '2024-03-19',
      author: '김철수',
      views: 256,
      likes: 45
    },
    {
      id: 3,
      title: '스트레스 관리의 중요성',
      content: '현대인의 건강을 위협하는 스트레스. 효과적인 스트레스 관리 방법을 소개합니다.',
      date: '2024-03-18',
      author: '이영희',
      views: 189,
      likes: 28
    }
  ];

  return (
    <BoardContainer>
      <BoardHeader>
        <BoardTitle>건강 게시판</BoardTitle>
        <WriteButton>글쓰기</WriteButton>
      </BoardHeader>
      <CategoryFilter>
        {categories.map(category => (
          <CategoryButton
            key={category.id}
            isActive={selectedCategory === category.id}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoryFilter>
      <PostList>
        {posts.map(post => (
          <PostCard key={post.id}>
            <PostHeader>
              <PostTitle>{post.title}</PostTitle>
              <PostDate>{post.date}</PostDate>
            </PostHeader>
            <PostContent>{post.content}</PostContent>
            <PostFooter>
              <span>작성자: {post.author}</span>
              <span>조회: {post.views}</span>
              <span>좋아요: {post.likes}</span>
            </PostFooter>
          </PostCard>
        ))}
      </PostList>
    </BoardContainer>
  );
};

export default HealthBoard; 