import * as S from './style';

const Hero = () => {
  return (
    <S.HeroSection>
      <S.HeroContent>
        {/* 큰 제목과 부제목 */}
        <S.HeroText>내게 맞는 건강기능식품 찾기</S.HeroText>
        <S.HeroSubText>당신의 건강을 위한 최적의 선택, 지금 시작하세요.</S.HeroSubText>

        {/* CTA 버튼 */}
        <S.HeroButton>시작하기</S.HeroButton>

        {/* 정보 카드 */}
        <S.InfoCards>
          <S.InfoCard>
            <S.InfoCardTitle>맞춤 추천</S.InfoCardTitle>
            <S.InfoCardText>나의 건강 상태에 맞는 제품을 추천받아보세요.</S.InfoCardText>
          </S.InfoCard>
          <S.InfoCard>
            <S.InfoCardTitle>전문가 검증</S.InfoCardTitle>
            <S.InfoCardText>전문가들이 검증한 제품만을 제공합니다.</S.InfoCardText>
          </S.InfoCard>
          <S.InfoCard>
            <S.InfoCardTitle>간편한 구매</S.InfoCardTitle>
            <S.InfoCardText>쉽고 빠르게 제품을 구매할 수 있습니다.</S.InfoCardText>
          </S.InfoCard>
        </S.InfoCards>
      </S.HeroContent>
    </S.HeroSection>
  );
};

export default Hero;