import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #2D5A27 0%, #4A7B43 100%);
  color: white;
  padding: 3rem 0 1.5rem;
  margin-top: auto;
`;

export const FooterContents = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

export const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const FooterLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
`;

export const FooterSlogan = styled.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

export const LinksSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const LinksTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
`;

export const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const SocialIcon = styled.a`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.25rem;
  transition: all 0.3s ease;

  &:hover {
    color: white;
    transform: translateY(-2px);
  }
`;

export const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
`;

