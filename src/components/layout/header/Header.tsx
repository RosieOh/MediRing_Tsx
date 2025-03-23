import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Link 컴포넌트 import
import * as S from "./style";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <S.HeaderContainer className={isScrolled ? "scrolled" : ""}>
      <S.HeaderContent>
        <Link to="/">
          <S.HeaderLogo>MediRing</S.HeaderLogo>
        </Link>
        <S.HeaderNav>
          <S.HeaderNavItem to="/about">회사 소개</S.HeaderNavItem>
          <S.HeaderNavItem to="/services">서비스</S.HeaderNavItem>
          <S.HeaderNavItem to="/contact">문의하기</S.HeaderNavItem>
        </S.HeaderNav>
        <S.MobileMenuButton onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </S.MobileMenuButton>
      </S.HeaderContent>
      <S.MobileMenu isOpen={isMobileMenuOpen}>
        <S.MobileNavItem to="/about" onClick={() => setIsMobileMenuOpen(false)}>회사 소개</S.MobileNavItem>
        <S.MobileNavItem to="/services" onClick={() => setIsMobileMenuOpen(false)}>서비스</S.MobileNavItem>
        <S.MobileNavItem to="/contact" onClick={() => setIsMobileMenuOpen(false)}>문의하기</S.MobileNavItem>
      </S.MobileMenu>
    </S.HeaderContainer>
  );
};

export default Header;
