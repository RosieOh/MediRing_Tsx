import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  padding: 15px; // 좌우 패딩을 늘려 여유 공간 추가
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff; // 배경색을 완전 불투명한 흰색으로 변경
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); // 그림자 추가로 입체감 강화
`;

export const HeaderLogo = styled.h1`
  font-size: 24px;
  color: #4CAF50; // 로고 색상 유지
  margin: 0;
  font-weight: 700; // 폰트 두께를 더 굵게
  font-family: 'Pretendard', sans-serif; // 모던한 폰트 적용 (Pretendard 또는 시스템 기본 sans-serif)
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 30px; // 네비게이션 아이템 간격을 더 넓게
  align-items: center;
`;

export const HeaderNavItem = styled.a`
  font-size: 16px;
  color: #333;
  text-decoration: none;
  font-weight: 500; // 폰트 두께 조정
  transition: color 0.2s ease-in-out; // 부드러운 색상 전환 효과
  &:hover {
    color: #FF8C00; // 호버 시 색상 변경
  }
`;

export const HeaderCTAButton = styled.button`
  background: #4CAF50; // 버튼 배경색
  color: #ffffff; // 버튼 텍스트 색상
  border: none;
  padding: 10px 20px;
  border-radius: 25px; // 둥근 모서리
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: #45a049; // 호버 시 배경색 변경
  }
`;