import { useState, useCallback } from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";
import { Container, Input, InputTitle } from "../styles/basicStyles";
import CircleNum from "../Components/CircleNum";
function LifeStyle4() {
  const [smoking, setSmoking] = useState("");

  const [isSmokingValid, setIsSmokingValid] = useState(false);

  const onChangeSmoking = useCallback(async (e) => {
    const currSmoking = e.target.value;
    setSmoking(currSmoking);
    setIsSmokingValid(true);
  });

  const isAllValid = isSmokingValid;
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
        <InputBox style={{ marginTop: "90px" }}>
          <RadioBtn clicked={smoking === "yes"}>
            <CheckBtn
              onChange={onChangeSmoking}
              name="smoking"
              type="radio"
              value="yes"
            />

            <span className="test">흡연자</span>
          </RadioBtn>

          <RadioBtn clicked={smoking === "no"}>
            <CheckBtn
              onChange={onChangeSmoking}
              name="smoking"
              type="radio"
              value="no"
            />

            <span className="test">비흡연</span>
          </RadioBtn>
        </InputBox>

        <Btn onClick={onsubmit} disabled={!isAllValid}>
          알려주고 싶지 않아요
        </Btn>
      </Container>
    </>
  );
}
export default LifeStyle4;

const InputBox = styled.div`
  margin-bottom: 200px;
  margin-top: 100px;
`;
const RadioBtn = styled.label`
  text-align: center;
  margin-top: 20px;
  margin-right: 10px;

  border-radius: 10px;

  transition: 0.3s ease;

  border: 0.794239px solid #4d5b9e;
  box-sizing: border-box;
  border-radius: 7.94239px;

  height: 100px;
  padding: 100px 40px;
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
