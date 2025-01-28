import * as S from './style';

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterContents>
        {/* 브랜드 섹션 */}
        <S.BrandSection>
          <S.Logo>내게 맞는 건강기능식품 찾기</S.Logo>
          <S.FooterSlogan>당신의 건강을 위한 최적의 선택</S.FooterSlogan>
        </S.BrandSection>

        {/* 유용한 링크 섹션 */}
        <S.LinksSection>
          <S.FooterLink href="#">이용약관</S.FooterLink>
          <S.FooterLink href="#">개인정보처리방침</S.FooterLink>
          <S.FooterLink href="#">문의하기</S.FooterLink>
        </S.LinksSection>

        {/* 소셜 미디어 섹션 */}
        <S.SocialContainer>
          <S.SocialIcon href="#" aria-label="Facebook">
            {/* <S.FaFacebook /> */}
          </S.SocialIcon>
          <S.SocialIcon href="#" aria-label="Twitter">
            {/* <S.FaTwitter /> */}
          </S.SocialIcon>
          <S.SocialIcon href="#" aria-label="Instagram">
            {/* <S.FaInstagram /> */}
          </S.SocialIcon>
        </S.SocialContainer>
      </S.FooterContents>

      {/* 저작권 정보 */}
      <S.Copyright>© 2023 건강기능식품 추천 플랫폼. All rights reserved.</S.Copyright>
    </S.FooterWrapper>
  );
};

export default Footer;