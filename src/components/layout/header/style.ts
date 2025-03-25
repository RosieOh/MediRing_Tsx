import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
`;

const HeaderNav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeaderNavItem = styled(Link)`
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: #3498db;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LoginButton = styled(Link)`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #3498db;
  }
`;

const SignUpButton = styled(Link)`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  background: #3498db;
  color: white;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background: #2980b9;
  }
`;

const WelcomeMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UserName = styled.span`
  color: #2c3e50;
  font-weight: 500;
`;

const LogoutButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  background: #e74c3c;
  color: white;
  transition: background 0.2s;

  &:hover {
    background: #c0392b;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #2c3e50;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background: white;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
  }
`;

const MobileNavItem = styled(Link)`
  display: block;
  padding: 0.5rem 0;
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: #3498db;
  }
`;

const MobileAuthButtons = styled.div`
  display: none;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileLoginButton = styled(Link)`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  color: #2c3e50;
  text-decoration: none;
  text-align: center;
  transition: color 0.2s;

  &:hover {
    color: #3498db;
  }
`;

const MobileSignUpButton = styled(Link)`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  background: #3498db;
  color: white;
  text-decoration: none;
  text-align: center;
  transition: background 0.2s;

  &:hover {
    background: #2980b9;
  }
`;

const MobileWelcomeMessage = styled.div`
  display: none;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileUserName = styled.span`
  color: #2c3e50;
  font-weight: 500;
  text-align: center;
`;

const MobileLogoutButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  background: #e74c3c;
  color: white;
  transition: background 0.2s;

  &:hover {
    background: #c0392b;
  }
`;

export {
  AuthButtons,
  HeaderContainer,
  HeaderContent,
  HeaderNav,
  HeaderNavItem,
  LoginButton,
  Logo,
  LogoutButton,
  MobileAuthButtons,
  MobileLoginButton,
  MobileLogoutButton,
  MobileMenu,
  MobileMenuButton,
  MobileNavItem,
  MobileSignUpButton,
  MobileUserName,
  MobileWelcomeMessage,
  SignUpButton,
  UserName,
  WelcomeMessage
};

