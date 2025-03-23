import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import * as S from './style';

const Footer: React.FC = () => {
  return (
    <S.FooterContainer>
      <S.FooterContents>
        <S.BrandSection>
          <S.FooterLogo>MediRing</S.FooterLogo>
          <S.FooterSlogan>
            당신의 건강한 삶을 위한 최고의 선택
          </S.FooterSlogan>
        </S.BrandSection>

        <S.LinksSection>
          <S.LinksTitle>서비스</S.LinksTitle>
          <S.FooterLink href="/about">회사 소개</S.FooterLink>
          <S.FooterLink href="/services">서비스</S.FooterLink>
          <S.FooterLink href="/contact">문의하기</S.FooterLink>
        </S.LinksSection>

        <S.LinksSection>
          <S.LinksTitle>고객지원</S.LinksTitle>
          <S.FooterLink href="/support">고객지원</S.FooterLink>
          <S.FooterLink href="/faq">자주 묻는 질문</S.FooterLink>
          <S.FooterLink href="/terms">이용약관</S.FooterLink>
        </S.LinksSection>

        <S.LinksSection>
          <S.LinksTitle>소셜 미디어</S.LinksTitle>
          <S.SocialContainer>
            <S.SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              {FaFacebook({})}
            </S.SocialIcon>
            <S.SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              {FaTwitter({})}
            </S.SocialIcon>
            <S.SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              {FaInstagram({})}
            </S.SocialIcon>
          </S.SocialContainer>
        </S.LinksSection>
      </S.FooterContents>

      <S.Copyright>
        © 2024 MediRing. All rights reserved.
      </S.Copyright>
    </S.FooterContainer>
  );
};

export default Footer;