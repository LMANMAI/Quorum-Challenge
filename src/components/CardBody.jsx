import React from "react";
import Card from "./Card";
import Button from "./Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
  margin: 10px 0;
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
  /* border: 1px solid red; */
  width: fit-content;
  margin: 15px;
  padding: 90px 50px 0px;
  &:first-child {
    padding-top: 0px;
    margin-top: 0px;
  }
`;
const CardBot = styled.div`
  height: 70px;
  background: #fff;
  margin-left: 1rem;

  box-shadow: 0px 32px 64px rgba(17, 17, 17, 0.08);
  border-radius: 32px;
  width: 276px;
  margin: 36px auto;
  margin-top: 72px;
  div {
    padding: 16px;
    display: flex;
    flex-direction: column;
  }
  p {
    font-weight: bold;
  }
  span {
    margin-top: 10px;
  }
`;
const ButtonFoward = styled.button`
  width: 200px;
  height: 64px;
  border-radius: 40px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: #5f2eea;
  color: white;
`;
const CardBody = ({ tittle, subtittle, number, array, none, check, link }) => {
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
                {check ? (
                  <>
                    <Radio type="checkbox" name={tittle} id="" />
                    <RadioSpan></RadioSpan>
                  </>
                ) : (
                  <>
                    <Radio type="radio" name={tittle} id="" />
                    <RadioSpan></RadioSpan>
                  </>
                )}
              </InputContainer>
            </CardContainer>
          ))
        )}
      </Cards>
      {none && (
        <>
          <CardBot>
            <div>
              <p>None</p>
              <span>$0</span>
            </div>
          </CardBot>
          <InputContainer>
            <Radio type="radio" name={tittle} id="" />
            <RadioSpan></RadioSpan>
          </InputContainer>
        </>
      )}
      {link ? (
        <>
          <ButtonContainer>
            <Link to="/detail">
              <ButtonFoward>Go!</ButtonFoward>
            </Link>
          </ButtonContainer>
        </>
      ) : (
        <>
          <ButtonContainer>
            <Button value="Next" submit={true} />
          </ButtonContainer>
        </>
      )}
    </CardBlock>
  );
};

export default CardBody;
