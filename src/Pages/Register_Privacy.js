import { useCallback, useState } from "react";
import GlobalStyle from "../GlobalStyle";
import { Container, Input, InputTitle } from "../styles/basicStyles";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register_Privacy() {
  // 입력값 상태값

  const [gender, setGender] = useState("");
  const [number, setNumber] = useState("");
  const [major, setMajor] = useState("");

  // 생년월일
  const [birth, setBirth] = useState({
    year: "",
    month: "",
    day: "",
  });

  // 메시지
  const [idMsg, setIdMsg] = useState("");
  const [nameMsg, setNameMsg] = useState("");

  // 유효성 검사 함수로 정리하기
  const [isIdValid, setIsIDValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isGenderValid, setIsGenderValid] = useState(false);
  const [isNumberValid, setIsNumberValid] = useState(false);

  //성별
  const onChangeGender = useCallback(async (e) => {
    const currGender = e.target.value;
    setGender(currGender);
    setIsGenderValid(true);
  });

  //학번
  const onChangeNumber = useCallback(async (e) => {
    const currNumber = e.target.value;
    setNumber(currNumber);
    setIsNumberValid(true);
  });

  const onChangeMajor = useCallback(async (e) => {});

  //생일
  const onChangeBirth = (e) => {
    const { name, value } = e.target;
    setBirth({ ...birth, [name]: value });
  };

  const YEAR = [];
  const nowYear = new Date().getFullYear();
  for (let i = 1910; i <= nowYear; i++) {
    YEAR.push(i);
  }

  const MONTH = [];
  for (let i = 1; i <= 12; i++) {
    let m = String(i).padStart(2, "0");
    MONTH.push(m);
  }

  const DAY = [];
  for (let i = 1; i <= 31; i++) {
    let d = String(i).padStart(2, "0");
    DAY.push(d);
  }

  // 가입 버튼 활성화
  const isAllValid = isGenderValid && isNumberValid;

  // 제출버튼
  const navigate = useNavigate();
  const onsubmit = async () => {
    try {
      //     console.log("try!")
      //     const res = await axios.post(
      //         'http://127.0.0.1:8000/api/accounts/signup/',
      //         {
      //             username: id,
      //             email: email,
      //             password: pw,
      //             phone: phone,
      //             address: addr
      //         }
      //     );
      //     console.log(res.data);
    } catch (e) {
      console.error(e);
    }
    alert("설정이 완료되었습니다.");
    navigate("/login");
  };

  //회원가입 버튼 색상
  const [color, setColor] = useState("");
  const Btn = styled.button`
    width: 40%;
    height: 48px;
    border: none;
    background: ${isAllValid ? "#EBDBFF" : "#E7D1F5"};
    border-radius: 40px;
    color: black;
    font-size: 16px;
    margin-bottom: 50px;
  `;

  return (
    <>
      <GlobalStyle />

      <Container style={{ paddingTop: "50%" }}>
        <form>
          <InputBox style={{ height: 80 }}>
            <InputTitle>성별</InputTitle>
            <RadioBtn clicked={gender === "man"}>
              <CheckBtn
                onChange={onChangeGender}
                name="gender"
                type="radio"
                value="man"
              />
              <span className="test">남성 </span>
            </RadioBtn>

            <RadioBtn clicked={gender === "woman"}>
              <CheckBtn
                onChange={onChangeGender}
                name="gender"
                type="radio"
                value="woman"
              />
              <span className="test">여성 </span>
            </RadioBtn>
          </InputBox>

          <InputBox style={{ height: 70, marginBottom: "30px" }}>
            <InputTitle>학번</InputTitle>
            <div>
              <RadioBtn
                clicked={number === "24"}
                style={{ margin: 5, padding: 4 }}
              >
                <CheckBtn
                  onChange={onChangeNumber}
                  name="number"
                  type="radio"
                  value="24"
                />
                <span className="test">24학번 </span>
              </RadioBtn>
              <RadioBtn
                clicked={number === "23"}
                style={{ padding: 4, margin: 5 }}
              >
                <CheckBtn
                  onChange={onChangeNumber}
                  name="number"
                  type="radio"
                  value="23"
                />
                <span className="test">23학번 </span>
              </RadioBtn>
              <RadioBtn
                clicked={number === "22"}
                style={{ padding: 4, margin: 5 }}
              >
                <CheckBtn
                  onChange={onChangeNumber}
                  name="number"
                  type="radio"
                  value="22"
                />
                <span className="test">22학번 </span>
              </RadioBtn>
              <RadioBtn
                clicked={number === "21"}
                style={{ padding: 4, margin: 5 }}
              >
                <CheckBtn
                  onChange={onChangeNumber}
                  name="number"
                  type="radio"
                  value="21"
                />
                <span className="test">21학번 </span>
              </RadioBtn>
              <RadioBtn
                clicked={number === "20"}
                style={{ padding: 4, margin: 5 }}
              >
                <CheckBtn
                  onChange={onChangeNumber}
                  name="number"
                  type="radio"
                  value="20"
                />
                <span className="test">20학번 </span>
              </RadioBtn>
            </div>
            <br />
            <div>
              <RadioBtn
                clicked={number === "19"}
                style={{ margin: 5, padding: 4 }}
              >
                <CheckBtn
                  onChange={onChangeNumber}
                  name="number"
                  type="radio"
                  value="19"
                />
                <span className="test">19학번 </span>
              </RadioBtn>
              <RadioBtn
                clicked={number === "28"}
                style={{ padding: 4, margin: 5 }}
              >
                <CheckBtn
                  onChange={onChangeNumber}
                  name="number"
                  type="radio"
                  value="18"
                />
                <span className="test">18학번 </span>
              </RadioBtn>
              <RadioBtn
                clicked={number === "17"}
                style={{ padding: 4, margin: 5 }}
              >
                <CheckBtn
                  onChange={onChangeNumber}
                  name="number"
                  type="radio"
                  value="22"
                />
                <span className="test">17학번 </span>
              </RadioBtn>
              <RadioBtn
                clicked={number === "16"}
                style={{ padding: 4, margin: 5 }}
              >
                <CheckBtn
                  onChange={onChangeNumber}
                  name="number"
                  type="radio"
                  value="16"
                />
                <span className="test">16학번 </span>
              </RadioBtn>
              <RadioBtn
                clicked={number === "15"}
                style={{ padding: 4, margin: 5 }}
              >
                <CheckBtn
                  onChange={onChangeNumber}
                  name="number"
                  type="radio"
                  value="15"
                />
                <span className="test">15학번 </span>
              </RadioBtn>
            </div>
          </InputBox>

          <InputBox>
            <InputTitle>전공 </InputTitle>
            <Select className="select" name="major">
              <option>AI융합전공</option>
            </Select>
          </InputBox>

          <InputBox style={{ marginBottom: "30px" }}>
            <InputTitle>생년월일</InputTitle>
            <Input
              type="text"
              style={{ width: "40px", height: "20px", marginRight: "10px" }}
            />

            <span>년 </span>
            <Input
              type="text"
              style={{ width: "40px", height: "20px", marginRight: "10px" }}
            />
            <span>월 </span>

            <Input
              type="text"
              style={{ width: "40px", height: "20px", marginRight: "10px" }}
            />
            <span>일 </span>
          </InputBox>

          <InputBox style={{ height: 70 }}>
            <InputTitle>기숙사</InputTitle>
            <RadioBtn
              clicked={number === "A"}
              style={{ margin: 5, padding: 4 }}
            >
              <CheckBtn
                onChange={onChangeNumber}
                name="number"
                type="radio"
                value="A"
              />
              <span className="test">A동</span>
            </RadioBtn>
            <RadioBtn
              clicked={number === "B"}
              style={{ padding: 4, margin: 5 }}
            >
              <CheckBtn
                onChange={onChangeNumber}
                name="number"
                type="radio"
                value="B"
              />
              <span className="test">B동</span>
            </RadioBtn>
            <RadioBtn
              clicked={number === "C"}
              style={{ padding: 4, margin: 5 }}
            >
              <CheckBtn
                onChange={onChangeNumber}
                name="number"
                type="radio"
                value="C"
              />
              <span className="test">C동</span>
            </RadioBtn>
            <RadioBtn
              clicked={number === "D"}
              style={{ padding: 4, margin: 5 }}
            >
              <CheckBtn
                onChange={onChangeNumber}
                name="number"
                type="radio"
                value="D"
              />
              <span className="test">D동</span>
            </RadioBtn>
            <RadioBtn
              clicked={number === "E"}
              style={{ padding: 4, margin: 5 }}
            >
              <CheckBtn
                onChange={onChangeNumber}
                name="number"
                type="radio"
                value="E"
              />
              <span className="test">E동</span>
            </RadioBtn>
          </InputBox>
        </form>
        <Btn onClick={onsubmit} disabled={!isAllValid}>
          설정완료
        </Btn>
      </Container>
    </>
  );
}

export default Register_Privacy;

const InputBox = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`;

const P = styled.p`
  font-size: 0.85rem;
  color: red;
`;

const Select = styled.select`
  margin-top: 10px;
  margin-right: 10px;
  border-radius: 10px;

  transition: 0.3s ease;

  border: 1.5px solid #bcc6bf;
  box-sizing: border-box;
  border-radius: 7.94239px;
  padding: 10px 70px;
  &:focus {
    border-color: #ebdbff;
    outline: none;
  }
`;

const RadioBtn = styled.label`
  text-align: center;
  margin-top: 20px;
  margin-right: 10px;

  border-radius: 10px;
  width: auto;

  transition: 0.3s ease;
  font-size: 10px;
  border: 0.794239px solid #4d5b9e;
  box-sizing: border-box;
  border-radius: 7.94239px;
  padding: 12px 40px;

  background-color: ${(props) => (props.clicked ? "fff" : "#fff")};
  color: ${(props) => (props.clicked ? "#A39AEB" : "#000")};
  border-color: ${(props) => (props.clicked ? "#A39AEB" : "#4d5b9e")};
  cursor: pointer;
`;
const CheckBtn = styled.input`
  opacity: 0;
  position: relative;
  top: 1px;
  display: none;
`;

const AgeRange = styled.input``;
