import React from "react";
import CardBody from "../../components/CardBody";
import styled from "styled-components";
import Progress from "../../components/Progress";
// import Button from "../../components/Button";

const Main = styled.main`
  display: flex;
`;
const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  margin-left: 25px;
  padding-left: 20px;
`;
const ArrayBread = [
  { nombre: "italian bread", img: "/assets/images//pan1.png", precio: "$20" },
  { nombre: "Oregan + Cheese", img: "/assets/images/pan2.png", precio: "$20" },
  { nombre: "Rye Bread", img: "/assets/images/pan3.png", precio: "$20" },
];
const ArrayMeat = [
  { nombre: "italian bread", img: "/assets/images/carne1.png", precio: "$20" },
  {
    nombre: "Oregan + Cheese",
    img: "/assets/images/carne2.png",
    precio: "$20",
  },
  { nombre: "Rye Bread", img: "/assets/images/carne3.png", precio: "$20" },
];
const ArrayChesse = [
  { nombre: "Danbo", img: "/assets/images/queso1.png", precio: "$20" },
  {
    nombre: "Cheddar",
    img: "/assets/images/queso2.png",
    precio: "$20",
  },
  { nombre: "none", img: "", precio: "$0" },
];
const ArrayVegetables = [
  {
    nombre: "Lettuce",
    img: "/assets/images/vegetal1.png",
    precio: "$20",
  },
  {
    nombre: "Tomato",
    img: "/assets/images/vegetal2.png",
    precio: "$20",
  },
  { nombre: "Onion", img: "/assets/images/vegetal3.png", precio: "$20" },
];
const ArrayIngredients = [
  {
    nombre: "Mayo",
    img: "/assets/images/ingrediente1.png",
    precio: "$20",
  },
  {
    nombre: "Mustard",
    img: "/assets/images/ingrediente2.png",
    precio: "$20",
  },
  { nombre: "Ketchup", img: "/assets/images/ingrediente3.png", precio: "$20" },
];
const HomePage = () => {
  return (
    <Main>
      <Container>
        <CardBody
          tittle="bread"
          subtittle="Select One"
          number="1"
          array={ArrayBread}
        />
        <CardBody
          tittle="meat"
          subtittle="Select One"
          number="2"
          array={ArrayMeat}
        />
        <CardBody
          tittle="cheese"
          subtittle="Select One"
          number="3"
          array={ArrayChesse}
        />
        <CardBody
          tittle="vegetables"
          subtittle="Select Multiple"
          number="4"
          array={ArrayVegetables}
        />
        <CardBody
          tittle="Ingredients"
          subtittle="Select Multiple"
          number="5"
          array={ArrayIngredients}
        />
      </Container>

      <Progress />
    </Main>
  );
};

export default HomePage;
