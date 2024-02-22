import { useState, useCallback } from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";
import { Container, Input, InputTitle } from "../styles/basicStyles";
import CircleNum from "../Components/CircleNum";

function LifeStyle5() {
  const [cleanType, setCleanType] = useState("");
  const [isCleanTypeValid, setIsCleanTypeValid] = useState(false);
  const onChangeCleanType = useCallback(async (e) => {
    const currCleanType = e.target.value;
    setCleanType(currCleanType);
    setIsCleanTypeValid(true);
  });
  const isAllValid = isCleanTypeValid;
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
          <RadioBtn clicked={cleanType === "daily"}>
            <CheckBtn
              onChange={onChangeCleanType}
              name="clean"
              type="radio"
              value="daily"
            />

            <span className="test"> 매일 </span>
          </RadioBtn>
        </InputBox>
        <InputBox>
          <RadioBtn clicked={cleanType === "week"}>
            <CheckBtn
              onChange={onChangeCleanType}
              name="sleep"
              type="radio"
              value="week"
            />

            <span className="test">주 1회 이상</span>
          </RadioBtn>
        </InputBox>
        <InputBox>
          <RadioBtn clicked={cleanType === "month"}>
            <CheckBtn
              onChange={onChangeCleanType}
              name="sleep"
              type="radio"
              value="month"
            />

            <span className="test">월 1회 이상</span>
          </RadioBtn>
        </InputBox>
        <InputBox>
          <RadioBtn clicked={cleanType === "sometimes"}>
            <CheckBtn
              onChange={onChangeCleanType}
              name="sleep"
              type="radio"
              value="sometimes"
            />

            <span className="test">생각날 때 가끔 </span>
          </RadioBtn>
        </InputBox>
        <Btn onClick={onsubmit} disabled={!isAllValid}>
          알려주고 싶지 않아요
        </Btn>
      </Container>
    </>
  );
}

export default LifeStyle5;
const InputBox = styled.div`
  margin-bottom: 50px;
`;
const RadioBtn = styled.label`
  text-align: center;
  margin-top: 20px;

  border-radius: 10px;

  transition: 0.3s ease;

  border: 0.794239px solid #4d5b9e;
  box-sizing: border-box;
  border-radius: 7.94239px;

  padding: 15px 100px;

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
