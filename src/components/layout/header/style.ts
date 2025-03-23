import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header<{ className?: string }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(245, 249, 244, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(45, 90, 39, 0.05);

  &.scrolled {
    background: rgba(245, 249, 244, 0.98);
    box-shadow: 0 2px 8px rgba(45, 90, 39, 0.1);
  }
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2D5A27;
  text-decoration: none;
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeaderNavItem = styled(Link)<{ to: string }>`
  font-size: 0.875rem;
  color: #4A7B43;
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: 500;

  &:hover {
    color: #2D5A27;
  }
`;

export const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 1rem;
`;

export const LoginButton = styled(Link)<{ to: string }>`
  font-size: 0.875rem;
  color: #2D5A27;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(123, 198, 163, 0.1);
  }
`;

export const SignUpButton = styled(Link)<{ to: string }>`
  font-size: 0.875rem;
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: linear-gradient(135deg, #7BC6A3 0%, #6BB592 100%);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(123, 198, 163, 0.3);
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;

  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: #4A7B43;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: none;
  background: #F5F9F4;
  padding: 1.5rem;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  box-shadow: 0 4px 6px rgba(45, 90, 39, 0.1);

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
  }
`;

export const MobileNavItem = styled(Link)<{ to: string }>`
  display: block;
  padding: 0.75rem 0;
  color: #4A7B43;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #2D5A27;
  }
`;

export const MobileAuthButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(45, 90, 39, 0.1);
`;

export const MobileLoginButton = styled(Link)<{ to: string }>`
  display: block;
  text-align: center;
  padding: 0.75rem;
  color: #2D5A27;
  text-decoration: none;
  font-weight: 500;
  border-radius: 8px;
  background: rgba(123, 198, 163, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(123, 198, 163, 0.2);
  }
`;

export const MobileSignUpButton = styled(Link)<{ to: string }>`
  display: block;
  text-align: center;
  padding: 0.75rem;
  color: white;
  text-decoration: none;
  font-weight: 500;
  border-radius: 8px;
  background: linear-gradient(135deg, #7BC6A3 0%, #6BB592 100%);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(123, 198, 163, 0.3);
  }
`;
