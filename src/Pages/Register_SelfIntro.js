import { useCallback, useState } from "react";
import GlobalStyle from "../GlobalStyle";

import { styled } from "styled-components";
import { Container, Input, InputTitle, LineInput } from "../styles/basicStyles";
function Register_SelfIntro() {
  const [intro, setIntro] = useState("");
  const [introMsg, setIntroMsg] = useState("");
  const [isIntroValid, setIsIntroValid] = useState(false);
  const onChangeIntro = useCallback(async (e) => {
    const currIntro = e.target.value;
    setIntro(currIntro);

    if (currIntro.length < 2 || currIntro.length > 20) {
      setIntroMsg("글자 이상 9글자 미만으로 입력해주세요.");
      setIsIntroValid(false);
    } else {
      setIntroMsg("");
      setIsIntroValid(true);
    }
  });

  return (
    <>
      <GlobalStyle />
      <Container style={{ paddingTop: "70%" }}>
        <InputBox>
          <InputTitle htmlFor="name">한줄소개</InputTitle>
          <LineInput
            onChange={onChangeIntro}
            className="inputIntro"
            name="Intro"
            type="text"
            placeholder="자기소개를 해주세요"
          />
          <P>{introMsg}</P>
        </InputBox>
      </Container>
    </>
  );
}
export default Register_SelfIntro;
const InputBox = styled.div`
  margin-bottom: 15px;
`;

const P = styled.p`
  font-size: 0.6rem;
  color: red;
  margin-top: 3px;
`;
