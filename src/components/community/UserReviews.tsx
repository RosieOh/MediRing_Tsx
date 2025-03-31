import React, { useState } from 'react';
import type { IconType } from 'react-icons';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

const ReviewsContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const ReviewsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ReviewsTitle = styled.h2`
  color: #2D5A27;
  font-size: 1.25rem;
`;

const WriteReviewButton = styled.button`
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

const ReviewsFilter = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const FilterButton = styled.button<{ isActive: boolean }>`
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

const ReviewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ReviewCard = styled.div`
  background: #F5F9F4;
  border-radius: 8px;
  padding: 1.5rem;
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ReviewInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const HospitalName = styled.h3`
  color: #2D5A27;
  font-size: 1.1rem;
`;

const ReviewDate = styled.span`
  color: #A8C5A3;
  font-size: 0.875rem;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #FFD700;
`;

const ReviewContent = styled.p`
  color: #4A7B43;
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ReviewFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #E8F3E5;
`;

const ReviewAuthor = styled.span`
  color: #A8C5A3;
  font-size: 0.875rem;
`;

const ReviewActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #A8C5A3;
  font-size: 0.875rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: color 0.3s ease;

  &:hover {
    color: #7BC6A3;
  }
`;

const StarIcon: IconType = FaStar;

const UserReviews: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  // 임시 데이터
  const reviews = [
    {
      id: 1,
      hospitalName: '메디컬 병원',
      rating: 5,
      content: '친절한 의료진과 깨끗한 환경이 인상적이었습니다. 특히 간호사분들의 세심한 케어가 좋았어요.',
      author: '김환자',
      date: '2024-03-20',
      likes: 45,
      comments: 12
    },
    {
      id: 2,
      hospitalName: '건강 병원',
      rating: 4,
      content: '전반적으로 만족스러웠습니다. 다만 대기 시간이 조금 길었네요.',
      author: '이환자',
      date: '2024-03-19',
      likes: 32,
      comments: 8
    },
    {
      id: 3,
      hospitalName: '웰빙 병원',
      rating: 5,
      content: '최신 의료 장비와 전문적인 의료진이 있어 신뢰할 수 있었습니다.',
      author: '박환자',
      date: '2024-03-18',
      likes: 67,
      comments: 15
    }
  ];

  return (
    <ReviewsContainer>
      <ReviewsHeader>
        <ReviewsTitle>병원 리뷰</ReviewsTitle>
        <WriteReviewButton>리뷰 작성하기</WriteReviewButton>
      </ReviewsHeader>
      <ReviewsFilter>
        <FilterButton
          isActive={selectedFilter === 'all'}
          onClick={() => setSelectedFilter('all')}
        >
          전체
        </FilterButton>
        <FilterButton
          isActive={selectedFilter === 'recent'}
          onClick={() => setSelectedFilter('recent')}
        >
          최신순
        </FilterButton>
        <FilterButton
          isActive={selectedFilter === 'rating'}
          onClick={() => setSelectedFilter('rating')}
        >
          평점순
        </FilterButton>
      </ReviewsFilter>
      <ReviewsList>
        {reviews.map(review => (
          <ReviewCard key={review.id}>
            <ReviewHeader>
              <ReviewInfo>
                <HospitalName>{review.hospitalName}</HospitalName>
                <ReviewDate>{review.date}</ReviewDate>
              </ReviewInfo>
              <Rating>
                {[...Array(5)].map((_, index) => (
                  // @ts-ignore
                  <StarIcon
                    key={index}
                    size={16}
                    style={{ color: index < review.rating ? '#FFD700' : '#E8F3E5' }}
                  />
                ))}
              </Rating>
            </ReviewHeader>
            <ReviewContent>{review.content}</ReviewContent>
            <ReviewFooter>
              <ReviewAuthor>{review.author}</ReviewAuthor>
              <ReviewActions>
                <ActionButton>
                  {/* @ts-ignore */}
                  <StarIcon size={14} /> {review.likes}
                </ActionButton>
                <ActionButton>
                  💬 {review.comments}
                </ActionButton>
              </ReviewActions>
            </ReviewFooter>
          </ReviewCard>
        ))}
      </ReviewsList>
    </ReviewsContainer>
  );
};

export default UserReviews; 