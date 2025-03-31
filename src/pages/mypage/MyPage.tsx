import React from 'react';
import styled from 'styled-components';
import HealthRecord from '../../components/mypage/HealthRecord';
import NotificationSettings from '../../components/mypage/NotificationSettings';
import PersonalInfo from '../../components/mypage/PersonalInfo';
import PrescriptionHistory from '../../components/mypage/PrescriptionHistory';
import TestResults from '../../components/mypage/TestResults';

const MyPageContainer = styled.div`
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FullWidthSection = styled.div`
  grid-column: 1 / -1;
`;

const MyPage: React.FC = () => {
  return (
    <MyPageContainer>
      <PageTitle>마이페이지</PageTitle>
      <GridLayout>
        <FullWidthSection>
          <PersonalInfo />
        </FullWidthSection>
        <FullWidthSection>
          <HealthRecord />
        </FullWidthSection>
        <FullWidthSection>
          <PrescriptionHistory />
        </FullWidthSection>
        <FullWidthSection>
          <TestResults />
        </FullWidthSection>
        <FullWidthSection>
          <NotificationSettings />
        </FullWidthSection>
      </GridLayout>
    </MyPageContainer>
  );
};

export default MyPage; 