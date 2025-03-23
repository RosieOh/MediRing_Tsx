import styled from 'styled-components';

export const HeroSection = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #F5F9F4 0%, #E8F3E5 100%);
  position: relative;
  overflow: hidden;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: url('/hero-pattern.svg') no-repeat center center;
    background-size: cover;
    opacity: 0.05;
  }
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 1;
`;

export const HeroText = styled.h1`
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  color: #2D5A27;
  margin-bottom: 1rem;
  line-height: 1.2;
  background: linear-gradient(135deg, #2D5A27 0%, #4A7B43 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const HeroSubText = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #4A7B43;
  margin-bottom: 2rem;
  max-width: 600px;
`;

export const HeroButton = styled.button`
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #7BC6A3 0%, #6BB592 100%);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(45, 90, 39, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px -1px rgba(45, 90, 39, 0.3);
  }
`;

export const InfoCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

export const InfoCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(45, 90, 39, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px -1px rgba(45, 90, 39, 0.15);
  }
`;

export const InfoCardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #2D5A27;
  margin-bottom: 0.75rem;
`;

export const InfoCardText = styled.p`
  font-size: 0.875rem;
  color: #4A7B43;
  line-height: 1.6;
`;

// 반응형 스타일
export const ResponsiveContainer = styled.div`
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    
    ${HeroText} {
      font-size: 2rem;
    }
    
    ${HeroSubText} {
      font-size: 1rem;
    }
    
    ${InfoCards} {
      grid-template-columns: 1fr;
    }
  }
`; 