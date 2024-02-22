import { useCallback, useState } from "react";
import GlobalStyle from "../GlobalStyle";
import { Container, InputTitle, LineInput } from "../styles/basicStyles";

import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register_NickName() {
  const [nickname, setNickname] = useState("");
  const [nicknameMsg, setNicknameMsg] = useState("");
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  // 닉네임
  const onChangeNickname = useCallback(async (e) => {
    const currNickname = e.target.value;
    setNickname(currNickname);
    const nicknameRegExp = /^(?=.*[a-zA-Z0-9\W_]).{8,}$/;

    if (!nicknameRegExp.test(currNickname)) {
      setNicknameMsg("영문, 숫자의 구성으로 8자 이상 입력해주세요.");
      setIsNicknameValid(false);
    } else {
      setNicknameMsg("");
      setIsNicknameValid(true);
    }
  });
  // 아이디 중복 확인
  const [checkNickname, setCheckNickname] = useState(false);
  const onCheckNickname = useCallback(async (e) => {
    if (!isNicknameValid) {
      alert("닉네임을 올바르게 입력해주세요.");
    } else {
      setCheckNickname(true);
      console.log(checkNickname);
      alert("사용 가능한 닉네임입니다!");
    }
  });
  // 아이디 중복 버튼 색상
  const ConfirmBtn = styled.button`
    width: 60px;
    padding: 8px;
    font-size: 10px;
    align-items: center;
    background-color: ${isNicknameValid ? "#978EF3" : "#E7D1F5"};
    color: black;
    border-radius: 20px;
    border: none;
    margin-bottom: 10px;
  `;

  return (
    <>
      <GlobalStyle />
      <Container style={{ paddingTop: "70%" }}>
        <InputBox>
          <InputTitle htmlFor="id">닉네임</InputTitle>
          <div>
            <LineInput
              onChange={onChangeNickname}
              className="inputNickname"
              name="nickname"
              type="text"
              placeholder="ex) boo"
            />
            <ConfirmBtn
              onClick={onCheckNickname}
              type="button"
              disabled={!isNicknameValid}
            >
              중복 확인
            </ConfirmBtn>
          </div>
          <P>{nicknameMsg}</P>
        </InputBox>
      </Container>
    </>
  );
}
export default Register_NickName;

const InputBox = styled.div`
  margin-top: 0px;
`;

const P = styled.p`
  font-size: 0.85rem;
  color: red;
`;
