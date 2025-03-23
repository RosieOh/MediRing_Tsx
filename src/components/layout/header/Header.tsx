import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const Header: React.FC = () => {
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

  return (
    <S.HeaderContainer className={isScrolled ? 'scrolled' : ''}>
      <S.HeaderContent>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <S.HeaderLogo>MediRing</S.HeaderLogo>
        </Link>

        <S.HeaderNav>
          <S.HeaderNavItem to="/">홈</S.HeaderNavItem>
          <S.HeaderNavItem to="/about">회사 소개</S.HeaderNavItem>
          <S.HeaderNavItem to="/services">서비스</S.HeaderNavItem>
          <S.HeaderNavItem to="/contact">문의하기</S.HeaderNavItem>
          <S.AuthButtons>
            <S.LoginButton to="/login">로그인</S.LoginButton>
            <S.SignUpButton to="/signup">회원가입</S.SignUpButton>
          </S.AuthButtons>
        </S.HeaderNav>

        <S.MobileMenuButton onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </S.MobileMenuButton>
      </S.HeaderContent>

      <S.MobileMenu isOpen={isMobileMenuOpen}>
        <S.MobileNavItem to="/" onClick={toggleMobileMenu}>홈</S.MobileNavItem>
        <S.MobileNavItem to="/about" onClick={toggleMobileMenu}>회사 소개</S.MobileNavItem>
        <S.MobileNavItem to="/services" onClick={toggleMobileMenu}>서비스</S.MobileNavItem>
        <S.MobileNavItem to="/contact" onClick={toggleMobileMenu}>문의하기</S.MobileNavItem>
        <S.MobileAuthButtons>
          <S.MobileLoginButton to="/login" onClick={toggleMobileMenu}>로그인</S.MobileLoginButton>
          <S.MobileSignUpButton to="/signup" onClick={toggleMobileMenu}>회원가입</S.MobileSignUpButton>
        </S.MobileAuthButtons>
      </S.MobileMenu>
    </S.HeaderContainer>
  );
};

export default Header;
