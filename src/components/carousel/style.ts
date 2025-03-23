import styled from 'styled-components';

export const ReviewSection = styled.section`
  padding: 3rem 0;
  background: linear-gradient(135deg, #F5F9F4 0%, #E8F3E5 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(45, 90, 39, 0.1), transparent);
  }
`;

export const ReviewTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 700;
  color: #2D5A27;
  margin-bottom: 2rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: linear-gradient(135deg, #7BC6A3 0%, #6BB592 100%);
    border-radius: 2px;
  }
`;

export const ReviewCarousel = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;

  .slick-slide {
    padding: 0.75rem;
    opacity: 0.5;
    transition: all 0.3s ease;
    
    &.slick-active {
      opacity: 1;
    }
  }

  .slick-dots {
    bottom: -30px;
    
    li {
      width: 8px;
      height: 8px;
      margin: 0 4px;
      
      button:before {
        color: #7BC6A3;
        opacity: 0.5;
        font-size: 8px;
      }
      
      &.slick-active button:before {
        opacity: 1;
      }
    }
  }

  .slick-prev, .slick-next {
    width: 40px;
    height: 40px;
    background: white;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(45, 90, 39, 0.1);
    z-index: 1;
    
    &:before {
      color: #7BC6A3;
      font-size: 20px;
    }
    
    &:hover:before {
      color: #6BB592;
    }
  }
`;

export const ReviewCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(45, 90, 39, 0.1);
  height: 100%;
  transition: all 0.3s ease;
  position: relative;
  border: 1px solid rgba(123, 198, 163, 0.2);
  
  &::before {
    content: '"';
    position: absolute;
    top: -8px;
    left: 20px;
    font-size: 4rem;
    color: #7BC6A3;
    opacity: 0.1;
    font-family: Georgia, serif;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px -1px rgba(45, 90, 39, 0.15);
    border-color: rgba(123, 198, 163, 0.4);
  }
`;

export const ReviewText = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #4A7B43;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  font-style: italic;
`;

export const ReviewerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(123, 198, 163, 0.2);
`;

export const ReviewerImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #7BC6A3;
  padding: 2px;
`;

export const ReviewerName = styled.span`
  font-weight: 600;
  color: #2D5A27;
  font-size: 1rem;
`;

// 반응형 스타일
export const ResponsiveContainer = styled.div`
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    
    ${ReviewTitle} {
      font-size: 1.75rem;
    }
    
    ${ReviewCard} {
      padding: 1.5rem;
    }
    
    ${ReviewText} {
      font-size: 1rem;
    }

    .slick-prev, .slick-next {
      display: none;
    }
  }
`; 