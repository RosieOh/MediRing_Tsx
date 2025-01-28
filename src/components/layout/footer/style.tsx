import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  background: #ffffff; // 배경색을 흰색으로 설정
  border-top: 1px solid #e0e0e0; // 상단 테두리 색상 조정
  padding: 40px 20px; // 패딩 조정
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px; // 요소 간 간격 조정
  max-width: 1200px; // 최대 너비 설정
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0;
  }
`;

export const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const Logo = styled.h2`
  font-size: 24px;
  color: #4CAF50; // 로고 색상
  margin: 0;
  font-weight: 700;
`;

export const FooterSlogan = styled.h3`
  color: #666666; // 텍스트 색상 조정
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const LinksSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const FooterLink = styled.a`
  color: #333333; // 링크 색상
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #007bff; // 호버 시 색상 변경
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 20px; // 소셜 아이콘 간 간격 조정
`;

export const SocialIcon = styled.a`
  color: #666666; // 아이콘 기본 색상
  text-decoration: none;
  font-size: 24px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #007bff; // 호버 시 색상 변경
  }
`;

export const Copyright = styled.p`
  color: #999999; // 저작권 텍스트 색상
  font-size: 14px;
  margin: 20px 0 0;
  text-align: center;
  width: 100%;
`;