import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import {
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
} from './style';

const Header: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer className={isScrolled ? 'scrolled' : ''}>
      <HeaderContent>
        <Logo to="/">MediRing</Logo>

        <HeaderNav>
          <HeaderNavItem to="/about">소개</HeaderNavItem>
          <HeaderNavItem to="/search">병원 검색</HeaderNavItem>
          <HeaderNavItem to="/community">커뮤니티</HeaderNavItem>
          <HeaderNavItem to="/support">고객지원</HeaderNavItem>
          {isAuthenticated && <HeaderNavItem to="/mypage">마이페이지</HeaderNavItem>}
          {isAuthenticated && user?.isAdmin && <HeaderNavItem to="/admin">관리자</HeaderNavItem>}
          <AuthButtons>
            {isAuthenticated ? (
              <WelcomeMessage>
                <UserName>{user?.name}님 환영합니다</UserName>
                <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
              </WelcomeMessage>
            ) : (
              <>
                <LoginButton to="/login">로그인</LoginButton>
                <SignUpButton to="/signup">회원가입</SignUpButton>
              </>
            )}
          </AuthButtons>
        </HeaderNav>

        <MobileMenuButton onClick={toggleMobileMenu}>
          ☰
        </MobileMenuButton>
      </HeaderContent>

      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileNavItem to="/about" onClick={toggleMobileMenu}>소개</MobileNavItem>
        <MobileNavItem to="/search" onClick={toggleMobileMenu}>병원 검색</MobileNavItem>
        <MobileNavItem to="/community" onClick={toggleMobileMenu}>커뮤니티</MobileNavItem>
        <MobileNavItem to="/support" onClick={toggleMobileMenu}>고객지원</MobileNavItem>
        {isAuthenticated && <MobileNavItem to="/mypage" onClick={toggleMobileMenu}>마이페이지</MobileNavItem>}
        {isAuthenticated && user?.isAdmin && <MobileNavItem to="/admin" onClick={toggleMobileMenu}>관리자</MobileNavItem>}
        <MobileAuthButtons>
          {isAuthenticated ? (
            <MobileWelcomeMessage>
              <MobileUserName>{user?.name}님 환영합니다</MobileUserName>
              <MobileLogoutButton onClick={handleLogout}>로그아웃</MobileLogoutButton>
            </MobileWelcomeMessage>
          ) : (
            <>
              <MobileLoginButton to="/login" onClick={toggleMobileMenu}>로그인</MobileLoginButton>
              <MobileSignUpButton to="/signup" onClick={toggleMobileMenu}>회원가입</MobileSignUpButton>
            </>
          )}
        </MobileAuthButtons>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
