import React from 'react';
import styled from 'styled-components';
import HealthBoard from '../../components/community/HealthBoard';
import HealthTips from '../../components/community/HealthTips';
import MedicalQA from '../../components/community/MedicalQA';
import UserReviews from '../../components/community/UserReviews';

const CommunityContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageTitle = styled.h1`
  color: #2D5A27;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CommunityPage: React.FC = () => {
  return (
    <CommunityContainer>
      <PageTitle>커뮤니티</PageTitle>
      <GridLayout>
        <HealthBoard />
        <MedicalQA />
        <HealthTips />
        <UserReviews />
      </GridLayout>
    </CommunityContainer>
  );
};

export default CommunityPage; 