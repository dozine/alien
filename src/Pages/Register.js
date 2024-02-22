import styled from "styled-components";
import Register_NickName from "./Register_NickName";
import Register_Privacy from "./Register_Privacy";
import { useState } from "react";
import { Container } from "../styles/basicStyles";
import GlobalStyle from "../GlobalStyle";
import Register_SelfIntro from "./Register_SelfIntro";

const MainContainer = styled.div`
  width: 100%;
  max-width: 250px;
  margin: 0 auto;
  padding: 0 16px;
`;

const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  position: relative;
  :before {
    content: "";
    position: absolute;
    background: #f3e7f3;
    height: 4px;
    width: 0%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }

  :after {
    content: "";
    position: absolute;
    background: #4a154b;
    height: 4px;
    width: ${({ width }) => width};
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 0;
  }
`;

const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
`;
const StepStyle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ebdbff;
  border: 2px solid
    ${({ step }) => (step === "completed" ? "#4A154B" : "#F3E7F3")};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StepCount = styled.span`
  font-size: 19px;
  color: black;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;
const StepsLabelContainer = styled.div`
  position: absolute;
  top: 66px;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const StepLabel = styled.span`
  font-size: 10px;

  color: #4a154b;
  @media (max-width: 1000px) {
    font-size: 7px;
  }
`;

const StepWord = styled.div`
  position: absolute;
  margin-top: 150px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 15px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -15px;
  margin-top: 100px;
`;

const ButtonStyle = styled.button`
  border-radius: 20px;
  border: 0;
  background: #e7d1f5;
  color: #000000;
  cursor: pointer;
  padding: 8px;
  width: 90px;
  :active {
    transform: scale(0.98);
  }
  :disabled {
    background: #f3e7f3;
    color: #000000;
    cursor: not-allowed;
  }
`;

const CheckMark = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: #4a154b;
  -ms-transform: scaleX(-1) rotate(-46deg); /* IE 9 */
  -webkit-transform: scaleX(-1) rotate(-46deg); /* Chrome, Safari, Opera */
  transform: scaleX(-1) rotate(-46deg);
`;

const steps = [
  {
    label: "닉네임",
    step: 1,
    word: "닉네임을 입력해주세요",
  },
  {
    label: "프로필",
    step: 2,
    word: "프로필을 완성해주세요",
  },
  {
    label: "소개",
    step: 3,
    word: "나를 한줄로 소개해주세요",
  },
];

const Register = () => {
  const [activeStep, setActiveStep] = useState(1);
  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };

  const totalSteps = steps.length;

  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;

  function getSectionComponent() {
    switch (activeStep) {
      case 1:
        return <Register_NickName />;
      case 2:
        return <Register_Privacy />;
      case 3:
        return <Register_SelfIntro />;
      default:
        return null;
    }
  }
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <StepContainer>
          {steps.map(({ step, label }) => (
            <StepWrapper key={step}>
              <StepStyle step={activeStep >= step ? "completed" : "incomplete"}>
                {activeStep > step ? (
                  <CheckMark>L</CheckMark>
                ) : (
                  <StepCount>{step}</StepCount>
                )}
              </StepStyle>
              <StepsLabelContainer>
                <StepLabel key={step}>{label}</StepLabel>
              </StepsLabelContainer>
            </StepWrapper>
          ))}

          <StepWord>내용을 입력해주세요</StepWord>
        </StepContainer>

        <Container>{getSectionComponent()}</Container>
        <ButtonsContainer>
          <ButtonStyle onClick={prevStep} disabled={activeStep === 1}>
            Previous
          </ButtonStyle>
          <ButtonStyle onClick={nextStep} disabled={activeStep === totalSteps}>
            Next
          </ButtonStyle>
        </ButtonsContainer>
      </MainContainer>
    </>
  );
};

export default Register;
