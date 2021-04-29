import React from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 276px;
  height: 400px;
  border-radius: 32px;
`;
const Sandwich = styled.div`
  height: 305px;
  background: linear-gradient(342.3deg, #ffffff 2.05%, #fff4e0 100.21%);
`;
const Total = styled.div`
  height: 79px;
  background: #ffd789;
  border-radius: 16px;
  margin-top: 15px;
`;
const Progress = () => {
  return (
    <Main>
      <Container>
        <Sandwich></Sandwich>
        <Total></Total>
      </Container>
    </Main>
  );
};

export default Progress;
