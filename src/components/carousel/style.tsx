import styled from 'styled-components';

export const ReviewSection = styled.section`
  padding: 60px 20px;
  background: #f9f9f9; // 배경색 설정
  text-align: center;
`;

export const ReviewTitle = styled.h2`
  font-size: 36px;
  color: #333;
  margin-bottom: 40px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const ReviewCarousel = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const ReviewCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 0 15px;
`;

export const ReviewText = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export const ReviewerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ReviewerImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ReviewerName = styled.p`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  margin: 0;
`;