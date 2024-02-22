import GlobalStyle from "../GlobalStyle";
import { styled } from "styled-components";
import { Title, Center } from "../styles/basicStyles.js";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BestProduct(lists) {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  useEffect(() => {
    setId(lists.id);
  }, []);

  const onClick = () => {
    setId(lists.id);
    navigate("/detail", {
      state: { id },
    });
  };

  return (
    <>
      <GlobalStyle />
      <Box>
        <Head>
          <Percent>매칭률 80%</Percent>
          <Dday>D-7</Dday>
        </Head>
        <BoxTitle>마음 잘 맞는 룸메 구해요!</BoxTitle>
        <Profile>
          <Avatar src="logo192.png" />

          <aside>
            <Name>유재석</Name>
            <Major>컴퓨터 공학과</Major>
          </aside>
        </Profile>
        <footer>
          <Btn style={{ color: "#707070" }}>패스하기</Btn>
          <Btn style={{ color: "#7F6FD8" }}>매칭신청</Btn>
        </footer>
      </Box>
    </>
  );
}
export default BestProduct;

const Box = styled.div`
  width: 45vw;
  height: 45vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  float: left;
  margin-left: 16px;
  margin-bottom: 16px;
  background-color: #f3f5f7;
  border-radius: 20px;

  @media (min-width: 768px) {
    margin-left: 2em;
  }
`;

const ImgButton = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  overflow: hidden;
  object-fit: cover;
`;

const InfoButton = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
`;

const Info = styled.p`
  margin-bottom: 3px;
  font-size: 16px;
  font-weight: bolder;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding: 3px 5px 0 0px;
  word-break: keep-all;
  line-height: 110%;

  @media (min-width: 768px) {
    font-size: 1.7em;
    padding: 15px 5px 0 15px;
  }
`;

const Price = styled.p`
  color: #ff324b;
  font-size: 19px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 2em;
    font-weight: bolder;
    padding: 15px 5px 0 15px;
  }
`;

const Percent = styled.p`
  font-size: 18px;

  color: #7f6fd8;

  @media (min-width: 768px) {
    font-size: 1.7em;
  }
`;

const Dday = styled.a`
  font-size: 15px;
  color: #bebbcf;
  text-decoration: none;
`;

const Profile = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  overflow: hidden;
  object-fit: cover;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 55px;
  height: 55px;
  padding-right: 15px;
`;

const Name = styled.h2`
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: 300;
`;
const Major = styled.span`
  display: block;
  font-size: 0.5em;
  color: #2980b9;
`;
const Head = styled.div`
  justify-content: space-between;
  flex-direction: row;
  padding-left: 15px;
  padding-right: 15px;
  width: 85%;
  height: 35%;
  display: flex;
  margin-top: 20px;
`;
const BoxTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 63px;
`;
const Btn = styled.button`
  border-radius: 10px;
  width: 60px;
  height: 20px;
  font-size: 0.5em;
  margin-right: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
  border: none;
  box-shadow: none;
  background-color: white;
`;
