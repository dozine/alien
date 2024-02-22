import React from "react";
import GlobalStyle from "../GlobalStyle";
import { styled } from "styled-components";
import CategoryList from "../Components/CategoryList";
import Footer from "../Components/Footer";
import { Container, Title, Center } from "../styles/basicStyles.js";
import BestProduct from "../Components/BestProduct";
import DeliveryStore from "../Components/DeliveyStore.js";
import Favorite from "../Components/Favorite.js";
const profile =
  "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg";

function Mypage() {
  const lists1 = [
    [1, "INFJ", "../img/fruit.svg"],
    [2, "잠꼬대형", "../img/vegetable.svg"],
    [3, "아침형", "../img/diary.svg"],
    [4, "비흡연", "../img/meat.svg"],
  ];
  const lists2 = [
    [1, "매일 청소", "../img/fruit.svg"],
    [2, "집순이", "../img/vegetable.svg"],
    [3, "청각예민형", "../img/diary.svg"],
    [4],
  ];
  const CateList1 = lists1.map((v) => (
    <CategoryList name={v[1]} icon={v[2]} cate={v[4]} price={v[3]} id={v[0]} />
  ));
  const CateList2 = lists2.map((v) => (
    <CategoryList name={v[1]} icon={v[2]} cate={v[4]} price={v[3]} id={v[0]} />
  ));

  return (
    <>
      <GlobalStyle />
      <div
        style={{
          width: "100%",
          backgroundColor: "#A39AEB",
          height: "300px",
          position: "relative",
          borderTopLeftRadius: "0",
          borderTopRightRadius: "0",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <Container>
          <Container>
            <TitleName>
              <Host>차은우</Host>&nbsp;님의 마이페이지
            </TitleName>
            <Greeting>" 맛집 투어 좋아해요 "</Greeting>
          </Container>
        </Container>

        <Container>
          <ProfleImage src="../img/chaeunwoo.svg" />
        </Container>
        <Container>
          <p>차은우 님의 룸메 평점 </p>
          <span>4</span>
          <div>✩ ✩ ✩ ✩ ✩ </div>
        </Container>
        <Container>
          <Center style={{ flexDirection: "column" }}>
            <Center className="CategoryBox">
              <Title>
                <Ttitle>기본 정보</Ttitle>
                <More> 기본정보 수정하기＞ </More>
              </Title>
            </Center>
          </Center>
        </Container>
        <hr />
        <Container>
          <Center style={{ flexDirection: "column" }}>
            <Center className="CategoryBox">
              <Title>
                <Ttitle>성향 및 라이프 스타일 </Ttitle>
              </Title>
            </Center>
            <Center
              className="Category"
              style={{ justifyContent: "space-around" }}
            >
              {CateList1}
            </Center>
            <Center
              className="Category"
              style={{ justifyContent: "space-around" }}
            >
              {CateList2}
            </Center>
          </Center>
        </Container>
        <Container>
          <Center style={{ flexDirection: "column" }}>
            <Center className="CategoryBox">
              <Title>
                <Ttitle>룸메이트 신청 현황</Ttitle>
              </Title>
            </Center>
          </Center>
        </Container>

        <BestProduct />
        <BestProduct />

        <Container>
          <Center style={{ flexDirection: "column" }}>
            <Center className="CategoryBox">
              <Title>
                <Ttitle>공동배달 현황</Ttitle>
              </Title>
            </Center>
          </Center>
        </Container>
        <DeliveryStore />
        <DeliveryStore />
        <Container>
          <Center style={{ flexDirection: "column" }}>
            <Center className="CategoryBox">
              <Title>
                <Ttitle>나의 즐겨찾기</Ttitle>
              </Title>
            </Center>
          </Center>
        </Container>
        <Favorite />
        <Container>
          <Center style={{ flexDirection: "column" }}>
            <Center className="CategoryBox">
              <Title>
                <Ttitle>받은 룸메이트 후기</Ttitle>
              </Title>
            </Center>
          </Center>
        </Container>

        <Container style={{ height: 100 }} />
      </div>
      <Footer />
    </>
  );
}

export default Mypage;

const TitleName = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 63px;
  color: white;
`;

const Host = styled.p`
  font-weight: bold;
  font-size: 25px;
`;

const Greeting = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  height: 63px;
  width: 90%;
`;

const Ttitle = styled.p`
  font-size: 18px;
  font-weight: bolder;
  color: #06161c;

  @media (min-width: 768px) {
    font-size: 1.7em;
  }
`;

const More = styled.a`
  font-size: 15px;
  color: #000000;
  text-decoration: none;

  @media (min-width: 768px) {
    font-size: 1.3em;
  }
`;

const ProfleImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 40px;
  border: 5px solid #ebdbff;
`;
