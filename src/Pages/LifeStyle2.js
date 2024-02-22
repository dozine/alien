import { useState, useCallback } from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";
import { Container, Input, InputTitle } from "../styles/basicStyles";
import CircleNum from "../Components/CircleNum";

function LifeStyle2() {
  const [sleepType, setSleepType] = useState("");
  const [isSleepTypeValid, setIsSleepTypeValid] = useState(false);
  const onChangeSleepType = useCallback(async (e) => {
    const currSleepType = e.target.value;
    setSleepType(currSleepType);
    setIsSleepTypeValid(true);
  });
  const isAllValid = isSleepTypeValid;
  //다음으로 이동 버튼
  const onsubmit = async () => {
    console.log();
    try {
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <GlobalStyle />
      <CircleNum />
      <Container>
        <InputBox style={{ marginTop: "20px" }}>
          <RadioBtn clicked={sleepType === "k"}>
            <CheckBtn
              onChange={onChangeSleepType}
              name="sleep"
              type="radio"
              value="k"
            />

            <span className="test">코골이형</span>
          </RadioBtn>
        </InputBox>
        <InputBox>
          <RadioBtn clicked={sleepType === "e"}>
            <CheckBtn
              onChange={onChangeSleepType}
              name="sleep"
              type="radio"
              value="e"
            />

            <span className="test">이갈이형</span>
          </RadioBtn>
        </InputBox>
        <InputBox>
          <RadioBtn clicked={sleepType === "j"}>
            <CheckBtn
              onChange={onChangeSleepType}
              name="sleep"
              type="radio"
              value="j"
            />

            <span className="test">잠꼬대형</span>
          </RadioBtn>
        </InputBox>
        <InputBox>
          <RadioBtn clicked={sleepType === "m"}>
            <CheckBtn
              onChange={onChangeSleepType}
              name="sleep"
              type="radio"
              value="m"
            />

            <span className="test">무소음형 </span>
          </RadioBtn>
        </InputBox>
        <Btn onClick={onsubmit} disabled={!isAllValid}>
          알려주고 싶지 않아요
        </Btn>
      </Container>
    </>
  );
}

export default LifeStyle2;
const InputBox = styled.div`
  margin-bottom: 50px;
`;
const RadioBtn = styled.label`
  text-align: center;
  margin-top: 20px;
  margin-right: 10px;

  border-radius: 10px;
  width: auto;

  transition: 0.3s ease;

  border: 0.794239px solid #4d5b9e;
  box-sizing: border-box;
  border-radius: 7.94239px;

  padding: 15px 80px;

  background-color: ${(props) => (props.clicked ? "#F2F2FD" : "#fff")};
  color: ${(props) => (props.clicked ? "#000" : "#000")};
  border-color: ${(props) => (props.clicked ? "#A39AEB" : "#4d5b9e")};
  cursor: pointer;
`;
const CheckBtn = styled.input`
  opacity: 0;
  position: relative;
  top: 2px;
  display: none;
`;

const Btn = styled.button`
  width: 50%;
  height: 48px;
  border: none;
  border-radius: 40px;
  color: black;
  background-color: #e7d1f5;
  font-size: 16px;
`;
