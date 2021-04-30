import React, { useContext, useState } from "react";
import styled from "styled-components";
import SandwichContext from "../context/sandwichContext";

const CardContainer = styled.div`
  height: 450px;
  width: 276px;
  margin: 0 10px;
  border-radius: 32px;
  box-shadow: 0px 32px 54px rgba(17, 17, 17, 0.08);
  overflow: hidden;
`;
const CartTop = styled.div`
  height: 343px;
  width: 100%;
  background: ${(props) => props.backgroundimg};
  border-radius: 32px;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const CardBot = styled.div`
  height: 70px;
  background: #fff;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
`;
const Tittle = styled.p`
  font-weight: bold;
  margin-top: 21px;
`;
const Precio = styled.span`
  margin-top: 10px;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px 0;
  // border: 1px solid red;
  position: relative;
`;
const Radio = styled.input`
  //opacity: 0;
  position: absolute;
  top: -3px;
  z-index: 1;
  width: 32px;
  height: 32px;
  /* appearance: none;
  visibility: hidden;
  position: absolute; */
`;
const RadioSpan = styled.span`
  background-color: #d9dbe9;
  width: 32px;
  height: 32px;
  border: none;
  ///position: absolute;
  border-radius: 100%;
`;

const Card = ({ arr }) => {
  const [radio, setRadio] = useState();
  const sandContext = useContext(SandwichContext);
  const { precio, setPurchase, setTotal } = sandContext;

  console.log(radio);
  setPurchase(radio);
  return (
    <>
      <CardContainer>
        <CartTop
          backgroundimg={
            !arr.img
              ? "white"
              : "linear-gradient(342.3deg, #fcfcfc 2.05%, #f7f7fc 100.21%)"
          }
        >
          <img src={arr.img} alt="" />
        </CartTop>
        <CardBot>
          <Tittle>{arr.nombre}</Tittle>
          <Precio>${precio}</Precio>
        </CardBot>
      </CardContainer>
      <InputContainer>
        <Radio
          type="radio"
          name={arr.type}
          value={arr.nombre}
          onChange={(e) => setRadio(e.target.value)}
        />
        <RadioSpan></RadioSpan>
      </InputContainer>
    </>
  );
};

export default Card;
