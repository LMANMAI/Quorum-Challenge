import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 276px;
  height: 400px;

  position: fixed;
  right: 100px;
  top: 100px;
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
    <Container>
      <Sandwich></Sandwich>
      <Total></Total>
    </Container>
  );
};

export default Progress;
