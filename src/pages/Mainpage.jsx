import { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import MainButton from '../components/MainButton';

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const First = styled.div`
  box-shadow: 0px 0px 6px rgb(128, 128, 128);
  width: 30%;
  background-color: rgb(174, 243, 255);
  border-radius: 8px; /* % 대신 px로 수정하여 일정한 곡률 유지 */
  padding: 20px 20px;
  margin: 40px 0px; 
  /* height: 60px; -> 60px은 내부 콘텐츠(이미지, 텍스트 등)에 비해 너무 작으므로 주석 처리하거나 빼는 것을 추천합니다 */
  display: flex;
  flex-direction: column;
`;

const Second = styled.div`
  box-shadow: 0px 0px 6px gray;
  background-color: rgb(174, 243, 255);
  width: 100%;
  border-radius: 8px; /* % 대신 px로 수정 */
  padding: 35px;
  margin: 30px 0px;        
  display: flex;
  flex-direction: column;
`;

const Blue = styled.p`
  color: blue;
  margin: -3px;
  font-weight: bold;
`;

const H3 = styled.h3`
  margin-bottom: -10px;
`;

const Backpage = () => {
  const navigate = useNavigate();
  return (
    <>
      <MainButton name="뒤로가기" ClickFunction={() => navigate("/")} />
    </>
  );
};

function Mainpage() {
  // 한글 변수명을 영문으로 변경
  const [likes, setLikes] = useState(0);
 
  return (
    <>
      <Container>
        <First>
          <img 
            style={{ display: "block", margin: "0px auto" }} 
            width="80%" 
            src="https://velog.velcdn.com/images/cy123/profile/e5850b3a-2160-4ab8-ace8-1f367571bad0/image.png" 
            alt="프로필 이미지"
          />
          <h2>성아기사자</h2>
          <Blue>Frontend</Blue>
          <p>열심히 배우는 프론트엔드 개발자 입니다!</p>
          {/* 하트 클릭 시 좋아요 증가 */}
          <span style={{ cursor: 'pointer' }} onClick={() => setLikes(likes + 1)}>❤️</span> {likes}
        </First>

        <Second>
          <h1>성아기사자</h1>
          <Blue>Frontend</Blue>
          <p style={{ color: "rgb(99, 98, 98)" }}>LION TRACK</p>

          <H3>자기소개</H3>
          <p>인천대 아기사자 14기 프론트엔드 개발자입니다. 클로드 지피티 제미나이에게 감사를,.. 아시겠지만 저는 새를 좋아합니다.</p>

          <H3>연락처</H3>
          <ul>
            <li>이메일: minilion@gmail.com</li> {/* 오타 수정 (.@ -> @) */}
            <li>핸드폰: 010-1004-1004</li>
            <li>웹사이트: <a href="https://velog.io/@cy123/posts">아기사자 벨로그</a></li>
          </ul>

          <H3>관심기술</H3>
          <ul>
            <li>html</li>
            <li>css</li>
            <li>javascript</li>
          </ul>

          <H3>한마디</H3>
          <p>여러분 수고 많으셨습니다! 한학기가 끝나가네요. 힘든 만큼 재밌고 더 가까워질 수 있었던 시간이었던 것 같아요.  멋사 모두가 배울 점이 있고, 멋지고 존경스러운 분들!이셔서 제가 안주하지 않고 나아갈 동기가 되었던 것 같습니다. 감사합니다☺️ 여러분은 진짜 정말 자신이 얼마나 멋진지 알아야 합니다 빈말이 아니라😡. 모두 앞으로도 화이팅!🦆🦆🦉🦉🕊️🦤🐦🦃 </p>
        </Second>
      </Container>
      
      <Backpage />
    </>
  );
}

export default Mainpage;