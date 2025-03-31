import React, { useState } from 'react';
import styled from 'styled-components';

const TipsContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const TipsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const TipsTitle = styled.h2`
  color: #2D5A27;
  font-size: 1.25rem;
`;

const ShareButton = styled.button`
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

const TipsCategoryFilter = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const TipsCategoryButton = styled.button<{ isActive: boolean }>`
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

const TipsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const TipCard = styled.div`
  background: #F5F9F4;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const TipImage = styled.div`
  width: 100%;
  height: 200px;
  background: #E8F3E5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4A7B43;
  font-size: 2rem;
`;

const TipContent = styled.div`
  padding: 1rem;
`;

const TipTitle = styled.h3`
  color: #2D5A27;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const TipDescription = styled.p`
  color: #4A7B43;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TipFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: white;
  border-top: 1px solid #E8F3E5;
`;

const TipAuthor = styled.span`
  color: #A8C5A3;
  font-size: 0.875rem;
`;

const TipStats = styled.div`
  display: flex;
  gap: 1rem;
  color: #A8C5A3;
  font-size: 0.75rem;
`;

const HealthTips: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: '전체' },
    { id: 'exercise', name: '운동' },
    { id: 'diet', name: '식단' },
    { id: 'sleep', name: '수면' },
    { id: 'stress', name: '스트레스' },
    { id: 'prevention', name: '질병 예방' }
  ];

  // 임시 데이터
  const tips = [
    {
      id: 1,
      title: '아침 운동의 효과',
      description: '아침 운동은 신진대사를 활성화하고 하루의 에너지를 높여줍니다. 30분의 가벼운 유산소 운동으로 시작해보세요.',
      author: '김운동',
      date: '2024-03-20',
      likes: 128,
      comments: 32
    },
    {
      id: 2,
      title: '건강한 식단 구성법',
      description: '균형 잡힌 식단은 건강의 기본입니다. 다양한 영양소를 포함한 식단을 구성하는 방법을 알아보세요.',
      author: '이영양',
      date: '2024-03-19',
      likes: 256,
      comments: 45
    },
    {
      id: 3,
      title: '품질 좋은 수면을 위한 팁',
      description: '수면의 질을 높이기 위한 다양한 방법을 소개합니다. 규칙적인 수면 시간과 편안한 환경이 중요합니다.',
      author: '박수면',
      date: '2024-03-18',
      likes: 189,
      comments: 28
    },
    {
      id: 4,
      title: '스트레스 관리 방법',
      description: '현대인의 건강을 위협하는 스트레스. 효과적인 스트레스 관리 방법을 소개합니다.',
      author: '최심리',
      date: '2024-03-17',
      likes: 167,
      comments: 23
    }
  ];

  return (
    <TipsContainer>
      <TipsHeader>
        <TipsTitle>건강 팁</TipsTitle>
        <ShareButton>팁 공유하기</ShareButton>
      </TipsHeader>
      <TipsCategoryFilter>
        {categories.map(category => (
          <TipsCategoryButton
            key={category.id}
            isActive={selectedCategory === category.id}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </TipsCategoryButton>
        ))}
      </TipsCategoryFilter>
      <TipsList>
        {tips.map(tip => (
          <TipCard key={tip.id}>
            <TipImage>🏃‍♂️</TipImage>
            <TipContent>
              <TipTitle>{tip.title}</TipTitle>
              <TipDescription>{tip.description}</TipDescription>
              <TipFooter>
                <TipAuthor>{tip.author}</TipAuthor>
                <TipStats>
                  <span>좋아요 {tip.likes}</span>
                  <span>댓글 {tip.comments}</span>
                </TipStats>
              </TipFooter>
            </TipContent>
          </TipCard>
        ))}
      </TipsList>
    </TipsContainer>
  );
};

export default HealthTips; 