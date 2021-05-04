import React, { useContext } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Progress from "../../components/Progress";
import { Link } from "react-router-dom";
import sandwichContext from "../../context/sandwichContext";

const Main = styled.div`
  display: flex;
  flex-direction: row;
`;
const Container = styled.div`
  width: fit-content;
  padding: 15px;
  margin: 90px 120px;
`;
const Head = styled.div`
  display: flex;
  margin: 32px 0;
`;
const Tittle = styled.h3`
  color: #5f2eea;
  font-weight: bold;
  font-size: 40px;
  line-height: 32px;
  margin-right: 16px;
`;
const SubTittle = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #bca4ff;
`;
const Table = styled.div`
  width: 892px;
  height: 296px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Column = styled.div`
  display: grid;
  grid-template-rows: 56px repeat(5, 1fr);
`;
const Row = styled.div`
  border: 1px solid #d9dbe9;
  text-align: center;
  line-height: 46px;
  background-color: ${(props) => (props.background ? "#EFF0F6" : "white")};
  padding-top: ${(props) => (props.background ? "6px" : null)};
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 32px 0;
`;
const ButtonBack = styled.button`
  width: 200px;
  height: 64px;
  border-radius: 40px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  border: 3px solid #5f2eea;
  outline: none;
  color: #5f2eea;
  background-color: transparent;
`;

const DetailPage = () => {
  const sandContext = useContext(sandwichContext);
  const { restart } = sandContext;
  return (
    <Main>
      <Container>
        <Head>
          <Tittle>Detail </Tittle>
          <SubTittle>Here's your purchase</SubTittle>
        </Head>
        <Table>
          <Column>
            <Row background={true}>What?</Row>
            <Row>“Bread”</Row>
            <Row>“Meat”</Row>
            <Row>“Cheese”</Row>
            <Row>“Vegetables”</Row>
            <Row>“Ingredients”</Row>
          </Column>
          <Column>
            <Row background={true}>How Much?</Row>
            <Row>$ xx</Row>
            <Row>$ xx</Row>
            <Row>$ xx</Row>
            <Row>$ xx</Row>
            <Row>$ xx</Row>
          </Column>
        </Table>
        <ButtonsContainer>
          <Button value="Give Me!" />

          <Link to="/">
            <ButtonBack onClick={() => restart()}>Do It again</ButtonBack>
          </Link>
        </ButtonsContainer>
      </Container>
      <Progress />
    </Main>
  );
};

export default DetailPage;
