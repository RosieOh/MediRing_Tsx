import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: linear-gradient(135deg, #2D5A27 0%, #4A7B43 100%);
  color: white;
  padding: 3rem 0 1.5rem;
  margin-top: 3rem;
`;

const FooterContents = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Logo = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const FooterSlogan = styled.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

const LinksSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.875rem;
  
  &:hover {
    color: #ffffff;
    transform: translateX(5px);
  }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
`;

const SocialIcon = styled.a`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.25rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #ffffff;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
`;

// 반응형 스타일
const ResponsiveContainer = styled.div`
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    
    ${FooterContents} {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    ${BrandSection} {
      text-align: center;
    }
    
    ${SocialContainer} {
      justify-content: center;
    }
  }
`;

export {
    BrandSection, Copyright, FooterContents, FooterLink, FooterSlogan, FooterWrapper, LinksSection, Logo, ResponsiveContainer, SocialContainer,
    SocialIcon
};
