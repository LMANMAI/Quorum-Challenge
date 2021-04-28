import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;
const ButtonMain = styled.button`
  width: 200px;
  height: 64px;
  border-radius: 40px;
  border: none;
  outline: none;
  color: white;
  background-color: #5f2eea;
  cursor: pointer;
`;
const Button = ({ value }) => {
  return (
    <ButtonContainer>
      <ButtonMain>{value}</ButtonMain>
    </ButtonContainer>
  );
};

export default Button;
