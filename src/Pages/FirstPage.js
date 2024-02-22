import React from "react";
import GlobalStyle from "../GlobalStyle";
import { Container } from "../styles/basicStyles";
import styled from "styled-components";

function FirstPage() {
  return (
    <>
      <GlobalStyle />
      <BackGround>
        <Container>
          <Circle1 />

          <Logo src="../img/alien_title.svg" />
          <Circle2 />
        </Container>
      </BackGround>
    </>
  );
}
export default FirstPage;

const BackGround = styled.div`
  background: linear-gradient(180deg, #8a7ff9 0%, #d2a7d8 100%);
  position: relative;
  width: "100%";
  height: 900px;
`;
const Logo = styled.img`
  width: "100%";
  text-align: center;
`;

const Circle1 = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #7f6fd8;
  margin-right: 450px;
  margin-top: 100px;
`;

const Circle2 = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #2d64a0;
  margin-left: 350px;
  margin-top: 100px;
`;
