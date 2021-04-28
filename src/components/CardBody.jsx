import React from "react";
import Card from "./Card";
import Button from "./Button";
import styled from "styled-components";

const CardBlock = styled.div`
  // border: 1px solid red;
  width: 65%;
  margin: 15px;
  padding: 148px 0px;
  &:first-child {
    padding-top: 10px;
  }
`;
const Cards = styled.div`
  /* height: 450px; */
  display: flex;
  justify-content: center;
`;
const Tittle = styled.h3`
  color: #5f2eea;
  font-weight: bold;
  font-size: 40px;
  margin-right: 16px;
  text-transform: capitalize;
`;
const Subtittle = styled.h4`
  color: #bca4ff;
  //line-height: 1.4;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0;
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputContainer = styled.div`
  //margin: 52px auto;
  //border: 1px solid red;
`;
const Radio = styled.input`
  opacity: 0;
  position: absolute;
  border: 1px solid red;
`;
const RadioSpan = styled.span`
  background-color: #d9dbe9;
  width: 32px;
  height: 32px;
  border: none;
  position: absolute;
  border-radius: 100%;
`;
const CardBody = ({ tittle, subtittle, number, boton }) => {
  return (
    <CardBlock>
      <Header>
        <Tittle>
          {number}. {tittle}
        </Tittle>
        <Subtittle>{subtittle}</Subtittle>
      </Header>

      <Cards>
        <CardContainer>
          <Card />
          <InputContainer>
            <Radio type="radio" name={tittle} id="" />
            <RadioSpan></RadioSpan>
          </InputContainer>
        </CardContainer>
        <CardContainer>
          <Card />
          <InputContainer>
            <Radio type="radio" name={tittle} id="" />
            <RadioSpan></RadioSpan>
          </InputContainer>
        </CardContainer>
        <CardContainer>
          <Card />
          <InputContainer>
            <Radio type="radio" name={tittle} id="" />
            <RadioSpan></RadioSpan>
          </InputContainer>
        </CardContainer>
      </Cards>
      <Button value={!boton ? "Next" : boton} />
    </CardBlock>
  );
};

export default CardBody;
