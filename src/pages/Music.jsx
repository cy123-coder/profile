import React from "react";
import styled from "styled-components";
// Swiper 핵심 컴포넌트와 스타일 가져오기
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow"; // 입체적인 효과를 원할 때 사용

// 1. 전체 페이지 배경 및 레이아웃
const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(90deg, #18c6c6, #0f0f1a);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 30px;
  font-weight: bold;
  letter-spacing: 2px;
  background: linear-gradient(to right,#21ffff, #dbfffb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

// 2. Swiper 컨테이너 스타일 커스텀
const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;

  /* 네비게이션 화살표 색상 변경 */
  .swiper-button-next, .swiper-button-prev {
    color: #faffff;
  }
  /* 하단 페이지네이션 점 색상 변경 */
  .swiper-pagination-bullet-active {
    background: #21ffff;
  }
`;

// 3. 노래 카드 스타일
const MusicCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s;

  img {
    width: 100%;
    aspect-ratio: 1 / 1; /* 정사각형 유지 */
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  h3 {
    margin: 10px 0 5px 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    color: #b3b3b3;
    font-size: 0.9rem;
  }
`;

// 더미 음악 데이터
const musicList = [
  { id: 1, title: "괴수의 꽃노래", artist: "Vaundy", cover: "/괴수의 꽃노래.png" , content: "다시 듣고 싶어, 너의 노래가"},
  { id: 2, title: "나라는 것", artist: "Mrs.Green Apple", cover: "/나라는 것.png" ,content: "좁고 넓은 세계에서 기적을 노래해"},
  { id: 3, title: "수평선", artist: "back number", cover: "/수평선.png" ,content: "삶을 걸어가는 너에게"},
  { id: 4, title: "청춘만화", artist: "이무진", cover: "/청춘만화.png" ,content: "우리가 기다린 미래도 우릴 기다릴까"},
  { id: 5, title: "넛맥", artist: "PURPLE BUBBLE", cover: "/넛맥.png" ,content: "산다는 건 내 자신을 사랑해 가는 것"},
];

function Music() {
  return (
    <PageContainer>
      <Title>🎵 MY PLAYLIST</Title>

      {/* Swiper 설정 구역 */}
      <StyledSwiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        effect={"coverflow"} // 입체적으로 회전하며 넘어가는 효과
        grabCursor={true} // 마우스 커서를 손모양으로 변경
        centeredSlides={true} // 현재 슬라이드를 가운데 정렬
        slidesPerView={3} // 한 화면에 보여줄 슬라이드 개수 (모바일은 1~2개로 조절 가능)
        coverflowEffect={{
          rotate: 20, // 회전 각도
          stretch: 0, // 슬라이드 간의 간격
          depth: 100, // 깊이감 (원근감)
          modifier: 1,
          slideShadows: true, // 양 옆 슬라이드에 그림자 효과
        }}
        navigation={true} // 좌우 화살표 버튼 활성화
        pagination={{ clickable: true }} // 하단 점 표시 활성화
        breakpoints={{
          // 반응형 설정 (화면 너비에 따라 슬라이드 개수 조절)
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {musicList.map((music) => (
          <SwiperSlide key={music.id}>
            <MusicCard>
              <img src={music.cover} alt={music.title} />
              <h3>{music.title}</h3>
              <p>{music.artist}</p>
              <p>{music.content}</p>
            </MusicCard>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </PageContainer>
  );
}

export default Music;