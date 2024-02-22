import GlobalStyle from "../GlobalStyle";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GoPersonFill } from "react-icons/go";
import axios from "axios";

function Favorite(lists) {
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
        <ImgButton onClick={onClick}>
          <img
            src="../img/rioburitto.svg"
            height="100%"
            alt="best"
            style={{
              borderRadius: "16px",
            }}
          />
        </ImgButton>
        <InfoButton onClick={onClick}>
          <Info>Store Name </Info>
          <Price>절약가능비용 : 5,000원</Price>
        </InfoButton>
        <footer>
          <GoPersonFill style={{ marginBottom: 1 }} />

          <Btn>같이 배달받기</Btn>
        </footer>
      </Box>
    </>
  );
}
export default Favorite;

const Box = styled.div`
  width: 90vw;
  height: 40vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  float: left;
  margin-left: 16px;
  margin-bottom: 16px;
  background-color: #f3f5f7;
  border-radius: 16px;

  @media (min-width: 768px) {
    margin-left: 2em;
  }
`;

const ImgButton = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-right: 5px;
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
  font-size: 15px;
  font-weight: bold;
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
  color: black;
  font-size: 10px;

  @media (min-width: 768px) {
    font-size: 2em;
    font-weight: bolder;
    padding: 15px 5px 0 15px;
  }
`;

const Btn = styled.button`
  border-radius: 10px;
  color: #7f6fd8;
  width: 80px;
  height: 20px;
  font-size: 0.5em;
  margin-right: 5px;
  margin-left: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
  border: none;
  box-shadow: none;
  background-color: white;
`;
