import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function CircleNum() {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <StepWrapper>
          <StepStyle>
            <StepCount>1</StepCount>
          </StepStyle>
          <StepsLabelContainer>
            <StepLabel>LifeStyle</StepLabel>
          </StepsLabelContainer>
        </StepWrapper>

        <StepWord>나의 MBTI를 입력해주세요</StepWord>
        <Image />
      </MainContainer>
    </>
  );
}
export default CircleNum;

const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
`;
const StepStyle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e7d1f5;

  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StepCount = styled.span`
  font-size: 19px;
  color: #000000;
`;
const StepsLabelContainer = styled.div`
  position: absolute;
  top: 66px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StepLabel = styled.span`
  font-size: 15px;
  color: #4a154b;
`;

const StepWord = styled.div`
  position: absolute;
  margin-top: 80px;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const MainContainer = styled.div`
  width: 100%;
  height: 200px;
  max-width: 50px;
  margin: 20px auto;
  margin-top: 80px;
  padding: 10px;
`;

const Image = styled.div`
  margin-top: 40px;
`;
