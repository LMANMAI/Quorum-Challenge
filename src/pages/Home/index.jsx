import React from "react";
import CardBody from "../../components/CardBody";
import styled from "styled-components";
import Progress from "../../components/Progress";
const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95vw;
  margin-left: 25px;
  padding-left: 20px;
`;
const HomePage = () => {
  return (
    <Container>
      <CardBody tittle="bread" subtittle="Select One" number="1" />
      <CardBody tittle="meat" subtittle="Select One" number="2" />
      <CardBody tittle="cheese" subtittle="Select One" number="3" />
      <CardBody tittle="vegetables" subtittle="Select Multiple" number="4" />
      <CardBody
        tittle="Ingredients"
        subtittle="Select Multiple"
        number="5"
        boton="Go!"
      />
      <Progress />
    </Container>
  );
};

export default HomePage;
