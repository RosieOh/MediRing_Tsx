import React from 'react';
import * as S from "./style";

const ProductList: React.FC = () => {
  return (
    <S.ProductGrid>
      <S.ProductCard>
        <S.ProductImage src="https://example.com/product1.jpg" alt="Product 1" />
        <S.ProductName>제품 이름 1</S.ProductName>
        <S.ProductPrice>₩ 25,000</S.ProductPrice>
      </S.ProductCard>
      <S.ProductCard>
        <S.ProductImage src="https://example.com/product2.jpg" alt="Product 2" />
        <S.ProductName>제품 이름 2</S.ProductName>
        <S.ProductPrice>₩ 18,000</S.ProductPrice>
      </S.ProductCard>
      <S.ProductCard>
        <S.ProductImage src="https://example.com/product3.jpg" alt="Product 3" />
        <S.ProductName>제품 이름 3</S.ProductName>
        <S.ProductPrice>₩ 30,000</S.ProductPrice>
      </S.ProductCard>
      <S.ProductCard>
        <S.ProductImage src="https://example.com/product4.jpg" alt="Product 4" />
        <S.ProductName>제품 이름 4</S.ProductName>
        <S.ProductPrice>₩ 22,000</S.ProductPrice>
      </S.ProductCard>
    </S.ProductGrid>
  );
}

export default ProductList;
