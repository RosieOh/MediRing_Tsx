import styled from 'styled-components';

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 40px;
  background-color: #F5F5F5;
`;

export const ProductCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ProductName = styled.h3`
  font-size: 18px;
  margin-top: 10px;
  color: #333;
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  color: #FF8C00;
  margin-top: 5px;
`;

export { };
