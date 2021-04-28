import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  height: 450px;
  width: 276px;
  margin: 0 10px;
  border-radius: 32px;
  box-shadow: 0px 32px 54px rgba(17, 17, 17, 0.08);
  //border: 1px solid red;
  overflow: hidden;
  /* display: flex;
  flex-direction: column; */
`;

const CartTop = styled.div`
  height: 343px;
  width: 100%;
  background: linear-gradient(342.3deg, #fcfcfc 2.05%, #f7f7fc 100.21%);
  // border: 1px solid red;
`;
const CardBot = styled.div`
  height: 70px;
  background: #fff;
`;
const Card = () => {
  return (
    <>
      <CardContainer>
        <CartTop></CartTop>
        <CardBot></CardBot>
      </CardContainer>
    </>
  );
};

export default Card;
