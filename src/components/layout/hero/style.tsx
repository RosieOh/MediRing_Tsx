import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh; // 높이 조정
  background-image: url('https://example.com/hero-image.jpg');
  background-size: cover;
  background-position: center;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); // 배경 이미지 위에 어두운 오버레이 추가
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
`;

export const HeroText = styled.h1`
  font-size: 64px; // 큰 제목
  margin: 0;
  font-weight: bold;
  line-height: 1.2;
  animation: fadeIn 1.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 48px; // 모바일에서 폰트 크기 조정
  }
`;

export const HeroSubText = styled.p`
  font-size: 24px; // 부제목
  margin: 20px 0;
  color: rgba(255, 255, 255, 0.9);
  animation: fadeIn 2s ease-in-out;

  @media screen and (max-width: 768px) {
    font-size: 18px; // 모바일에서 폰트 크기 조정
  }
`;

export const HeroButton = styled.button`
  margin-top: 30px;
  padding: 15px 40px;
  font-size: 18px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  animation: fadeIn 2.5s ease-in-out;

  &:hover {
    background-color: #FF8C00;
    transform: scale(1.05); // 호버 시 버튼 확대
  }
`;

export const InfoCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
  animation: fadeIn 3s ease-in-out;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  width: 250px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px); // 호버 시 카드 위로 이동
  }
`;

export const InfoCardTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin: 0 0 10px;
`;

export const InfoCardText = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0;
`;