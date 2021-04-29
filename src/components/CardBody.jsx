import React from "react";
import Card from "./Card";
import Button from "./Button";
import styled from "styled-components";

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
  display: flex;
  justify-content: center;
  margin: 30px 0;
  //border: 1px solid red;
`;
const Radio = styled.input`
  //opacity: 0;
  //position: absolute;
  z-index: 1;
  width: 32px;
  height: 32px;
  background: transparent;
`;
const RadioSpan = styled.span`
  background-color: #d9dbe9;
  width: 32px;
  height: 32px;
  border: none;
  position: absolute;
  border-radius: 100%;
`;
const ButtonContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;
const CardBlock = styled.div`
  //border: 1px solid red;
  width: fit-content;
  margin: 15px;
  padding: 90px 0px 0px;
  &:first-child {
    padding-top: 0px;
    margin-top: 0px;
  }
  &:last-child {
    //border: 1px solid red;
    ${ButtonContainer} {
      display: none;
    }
  }
`;

const CardBody = ({ tittle, subtittle, number, array }) => {
  return (
    <CardBlock id={`section${number}`}>
      <Header>
        <Tittle>
          {number}. {tittle}
        </Tittle>
        <Subtittle>{subtittle}</Subtittle>
      </Header>

      <Cards>
        {React.Children.toArray(
          array.map((arr) => (
            <CardContainer>
              <Card arr={arr} />
              <InputContainer>
                <Radio type="radio" name={tittle} id="" />
                <RadioSpan></RadioSpan>
              </InputContainer>
            </CardContainer>
          ))
        )}
      </Cards>
      <ButtonContainer>
        <Button value="Next" />
      </ButtonContainer>
    </CardBlock>
  );
};

export default CardBody;
