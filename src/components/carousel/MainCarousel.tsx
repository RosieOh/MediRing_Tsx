import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import * as S from './style';

const reviews = [
    {
      text: '이 플랫폼 덕분에 정말 맞는 제품을 찾았어요! 건강이 좋아졌습니다.',
      name: '김유저',
      image: 'https://via.placeholder.com/50',
    },
    {
      text: '전문가 추천 제품이라 믿고 구매했어요. 만족스럽습니다.',
      name: '이사용자',
      image: 'https://via.placeholder.com/50',
    },
    {
      text: '간편하게 구매하고 빠르게 배송받았어요. 추천합니다!',
      name: '박고객',
      image: 'https://via.placeholder.com/50',
    },
    {
      text: '다양한 제품을 비교할 수 있어서 좋았어요.',
      name: '최리뷰어',
      image: 'https://via.placeholder.com/50',
    },
  ];
  
  const MainCarousel = () => {
    const settings = {
      dots: true, // 캐러셀 하단에 점 표시
      infinite: true, // 무한 반복
      speed: 500, // 전환 속도
      slidesToShow: 3, // 한 번에 보여질 슬라이드 수
      slidesToScroll: 1, // 한 번에 스크롤될 슬라이드 수
      autoplay: true, // 자동 재생
      autoplaySpeed: 3000, // 자동 재생 속도 (3초)
      responsive: [
        {
          breakpoint: 768, // 모바일 화면
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    return (
      <S.ReviewSection>
        <S.ReviewTitle>사용자 리뷰</S.ReviewTitle>
        <S.ReviewCarousel>
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <S.ReviewCard key={index}>
                <S.ReviewText>"{review.text}"</S.ReviewText>
                <S.ReviewerInfo>
                  <S.ReviewerImage src={review.image} alt={review.name} />
                  <S.ReviewerName>{review.name}</S.ReviewerName>
                </S.ReviewerInfo>
              </S.ReviewCard>
            ))}
          </Slider>
        </S.ReviewCarousel>
      </S.ReviewSection>
    );
  };
  
  export default MainCarousel;
  

