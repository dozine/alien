import { useNavigate } from "react-router-dom";
import GlobalStyle from "../GlobalStyle";
import { styled } from "styled-components";

function CategoryList(lists) {
  const navigation = useNavigate();

  const onClick = () => {
    alert("클릭!");
    navigation("/categoryList", lists);
  };

  return (
    <>
      <GlobalStyle />
      <Box onClick={onClick}>
        <GrayBox>
          <Gray>
            <img src={lists.icon} width="50%" height="50%" alt="category" />
          </Gray>
        </GrayBox>
        <Text>{lists.name}</Text>
      </Box>
    </>
  );
}

export default CategoryList;

const Box = styled.button`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  margin-bottom: 20px;
`;

const GrayBox = styled.div`
  width: 73px;
  height: 73px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 9em;
    height: 9em;
  }
`;

const Gray = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f3f5f7;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Text = styled.p`
  color: #06161c;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 1.9em;
  }
`;
