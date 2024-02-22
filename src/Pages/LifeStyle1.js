import { useState, useCallback } from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";
import { Container, Input, InputTitle } from "../styles/basicStyles";
import CircleNum from "../Components/CircleNum";
function LifeStyle1() {
  const [ei, setEi] = useState("");
  const [sn, setSn] = useState("");
  const [tf, setTf] = useState("");
  const [jp, setJp] = useState("");

  const [isEiValid, setIsEiValid] = useState(false);
  const [isSnValid, setIsSnValid] = useState(false);
  const [isTfValid, setIsTfValid] = useState(false);
  const [isJpValid, setIsJpValid] = useState(false);

  const onChangeEi = useCallback(async (e) => {
    const currEi = e.target.value;
    setEi(currEi);
    setIsEiValid(true);
  });
  const onChangeSn = useCallback(async (e) => {
    const currSn = e.target.value;
    setSn(currSn);
    setIsSnValid(true);
  });
  const onChangeTf = useCallback(async (e) => {
    const currTf = e.target.value;
    setTf(currTf);
    setIsTfValid(true);
  });
  const onChangeJp = useCallback(async (e) => {
    const currJp = e.target.value;
    setJp(currJp);
    setIsJpValid(true);
  });

  const isAllValid = isEiValid && isSnValid && isTfValid && isJpValid;
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
        <form>
          <InputBox style={{ marginTop: "20px" }}>
            <RadioBtn clicked={ei === "e"}>
              <CheckBtn
                onChange={onChangeEi}
                name="ei"
                type="radio"
                value="e"
              />

              <span className="test" style={{}}>
                E{" "}
              </span>

              <span>외향</span>
            </RadioBtn>

            <RadioBtn clicked={ei === "i"}>
              <CheckBtn
                onChange={onChangeEi}
                name="ei"
                type="radio"
                value="i"
              />

              <span className="test">I </span>
              <span>내향</span>
            </RadioBtn>
          </InputBox>

          <InputBox>
            <RadioBtn clicked={sn === "s"}>
              <CheckBtn
                onChange={onChangeSn}
                name="sn"
                type="radio"
                value="s"
              />
              <span className="test">S </span>
              <span>감각</span>
            </RadioBtn>

            <RadioBtn clicked={sn === "n"}>
              <CheckBtn
                onChange={onChangeSn}
                name="sn"
                type="radio"
                value="n"
              />
              <span className="test">N </span>
              <span>직관</span>
            </RadioBtn>
          </InputBox>

          <InputBox>
            <RadioBtn clicked={tf === "t"}>
              <CheckBtn
                onChange={onChangeTf}
                name="tf"
                type="radio"
                value="t"
              />
              <span className="test">T </span>
              <span>사고</span>
            </RadioBtn>

            <RadioBtn clicked={tf === "f"}>
              <CheckBtn
                onChange={onChangeTf}
                name="tf"
                type="radio"
                value="f"
              />
              <span className="test">F </span>
              <span>감정</span>
            </RadioBtn>
          </InputBox>

          <InputBox>
            <RadioBtn clicked={jp === "j"}>
              <CheckBtn
                onChange={onChangeJp}
                name="jp"
                type="radio"
                value="j"
              />
              <span className="test">J </span>
              <span>판단</span>
            </RadioBtn>

            <RadioBtn clicked={jp === "p"}>
              <CheckBtn
                onChange={onChangeJp}
                name="jp"
                type="radio"
                value="p"
              />
              <span className="test">P </span>
              <span>인식</span>
            </RadioBtn>
          </InputBox>
        </form>
        <Btn onClick={onsubmit} disabled={!isAllValid}>
          알려주고 싶지 않아요
        </Btn>
      </Container>
    </>
  );
}
export default LifeStyle1;

const InputBox = styled.div`
  margin-bottom: 80px;
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

  padding: 30px 40px;

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
