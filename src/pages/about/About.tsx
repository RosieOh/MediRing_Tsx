import React from 'react';
import styled from 'styled-components';

const AboutPage: React.FC = () => {
  return (
    <Container>
      <HeroSection>
        <HeroContent>
          <Title>회사 소개</Title>
          <Subtitle>MediRing은 의료 서비스의 혁신을 추구합니다</Subtitle>
        </HeroContent>
      </HeroSection>

      <Section>
        <SectionTitle>우리의 비전</SectionTitle>
        <SectionContent>
          <VisionCard>
            <VisionIcon>🎯</VisionIcon>
            <VisionTitle>혁신적인 의료 서비스</VisionTitle>
            <VisionText>
              MediRing은 최신 기술을 활용하여 의료 서비스의 접근성과 효율성을 높이고,
              환자와 의료진 모두에게 더 나은 의료 경험을 제공합니다.
            </VisionText>
          </VisionCard>

          <VisionCard>
            <VisionIcon>🤝</VisionIcon>
            <VisionTitle>신뢰성 있는 파트너십</VisionTitle>
            <VisionText>
              의료진, 환자, 제약회사와의 신뢰성 있는 파트너십을 통해
              지속 가능한 의료 생태계를 구축합니다.
            </VisionText>
          </VisionCard>

          <VisionCard>
            <VisionIcon>💡</VisionIcon>
            <VisionTitle>지속적인 혁신</VisionTitle>
            <VisionText>
              끊임없는 연구와 개발을 통해 의료 서비스의 새로운 가능성을
              탐구하고 실현합니다.
            </VisionText>
          </VisionCard>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>주요 서비스</SectionTitle>
        <ServiceGrid>
          <ServiceCard>
            <ServiceIcon>🏥</ServiceIcon>
            <ServiceTitle>원격 의료 상담</ServiceTitle>
            <ServiceText>
              언제 어디서나 전문의와 상담할 수 있는
              원격 의료 상담 서비스를 제공합니다.
            </ServiceText>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>📱</ServiceIcon>
            <ServiceTitle>모바일 헬스케어</ServiceTitle>
            <ServiceText>
              스마트폰을 통한 건강 모니터링과
              맞춤형 건강 관리 서비스를 제공합니다.
            </ServiceText>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>💊</ServiceIcon>
            <ServiceTitle>처방전 관리</ServiceTitle>
            <ServiceText>
              디지털 처방전 관리와 자동 복약 알림
              서비스를 제공합니다.
            </ServiceText>
          </ServiceCard>
        </ServiceGrid>
      </Section>

      <Section>
        <SectionTitle>연혁</SectionTitle>
        <Timeline>
          <TimelineItem>
            <Year>2023</Year>
            <Content>
              <h3>MediRing 서비스 런칭</h3>
              <p>스마트 헬스케어 플랫폼 MediRing 서비스 정식 런칭</p>
            </Content>
          </TimelineItem>
          <TimelineItem>
            <Year>2022</Year>
            <Content>
              <h3>시리즈 A 투자 유치</h3>
              <p>50억원 규모의 시리즈 A 투자 유치 완료</p>
            </Content>
          </TimelineItem>
          <TimelineItem>
            <Year>2021</Year>
            <Content>
              <h3>회사 설립</h3>
              <p>MediRing 주식회사 설립</p>
            </Content>
          </TimelineItem>
        </Timeline>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 64px;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #F5F9F4 0%, #E8F3E5 100%);
  padding: 4rem 2rem;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: #2D5A27;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  color: #4A7B43;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 3vw, 2.5rem);
  color: #2D5A27;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: linear-gradient(135deg, #7BC6A3 0%, #6BB592 100%);
    border-radius: 2px;
  }
`;

const SectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const VisionCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(45, 90, 39, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const VisionIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const VisionTitle = styled.h3`
  font-size: 1.5rem;
  color: #2D5A27;
  margin-bottom: 1rem;
`;

const VisionText = styled.p`
  color: #4A7B43;
  line-height: 1.6;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(45, 90, 39, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #2D5A27;
  margin-bottom: 1rem;
`;

const ServiceText = styled.p`
  color: #4A7B43;
  line-height: 1.6;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: #7BC6A3;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 3rem;
  width: 50%;
  padding-right: 2rem;
  
  &:nth-child(even) {
    margin-left: 50%;
    padding-right: 0;
    padding-left: 2rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    right: -6px;
    top: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #7BC6A3;
    border: 2px solid white;
  }
  
  &:nth-child(even)::before {
    right: auto;
    left: -6px;
  }
`;

const Year = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2D5A27;
  margin-bottom: 0.5rem;
`;

const Content = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(45, 90, 39, 0.1);
  
  h3 {
    color: #2D5A27;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #4A7B43;
  }
`;

export default AboutPage; 