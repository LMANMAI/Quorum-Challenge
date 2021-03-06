import React, { useContext } from "react";
import styled from "styled-components";
import SandwichContext from "../context/sandwichContext";

const Main = styled.div`
  width: 100%;
  max-height: 100vh;
  display: flex;

  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  position: fixed;
  right: 95px;
  width: 276px;
  height: 400px;
  border-radius: 32px;
  transform: ${(props) => (props.mov ? `translateY(${props.mov}px)` : "none")};
`;
const Sandwich = styled.div`
  height: 305px;
  background: linear-gradient(342.3deg, #ffffff 2.05%, #fff4e0 100.21%);
  border-radius: 24px;
  display: grid;
  place-items: center;
`;
const Total = styled.div`
  height: 79px;
  background: #ffd789;
  border-radius: 16px;
  margin-top: 15px;
  display: grid;
  place-items: center;
  font-weight: bold;
  font-size: 24px;
`;
const SandwichContent = styled.div`
  width: 148.6px;
`;
const PanSuperior = styled.div`
  height: 32.37px;
  background: #ffd789;
  border: 6px solid #ffd789;
  box-sizing: border-box;
  margin-bottom: 8.98px;
  border-radius: 28.738px 28.738px 7.18449px 7.18449px;
`;
const Vegetal = styled.div`
  height: 21.92px;
  background: #34eab9;
  border: 6px solid #34eab9;
  box-sizing: border-box;
  margin-bottom: 8.98px;
  border-radius: 28.738px;
`;
const Ingrediente = styled.div`
  height: 21.92px;
  background: #f4b740;
  border: 6px solid #f4b740;
  box-sizing: border-box;
  margin-bottom: 8.98px;
  border-radius: 28.738px;
`;
const Carne = styled.div`
  height: 32.87px;
  background: #ed2e7e;
  border: 6px solid #ed2e7e;
  box-sizing: border-box;
  margin-bottom: 8.98px;
  border-radius: 28.738px;
`;
const PanInferior = styled.div`
  height: 32.37px;
  background: #ffd789;
  border: 6px solid #ffd789;
  box-sizing: border-box;
  margin-bottom: 8.98px;
  border-radius: 7.18449px 7.18449px 28.738px 28.738px;
`;
const Progress = () => {
  const sandContext = useContext(SandwichContext);
  const { total } = sandContext;
  // console.log(`${mov}vh`);
  return (
    <Main>
      <Container>
        <Sandwich>
          <SandwichContent>
            <PanSuperior />
            <Vegetal />
            <Ingrediente />
            <Carne />
            <PanInferior />
          </SandwichContent>
        </Sandwich>

        <Total>${total}</Total>
      </Container>
    </Main>
  );
};

export default Progress;
