import React from "react";
import CardBody from "../../components/CardBody";
import styled from "styled-components";
import Progress from "../../components/Progress";

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
  /* border: 1px solid red; */
`;
const ArrayBread = [
  {
    type: "bread",
    nombre: "italian bread",
    img: "/assets/images//pan1.png",
    precio: "$20",
  },
  {
    type: "bread",
    nombre: "Oregan + Cheese",
    img: "/assets/images/pan2.png",
    precio: "$20",
  },
  {
    type: "bread",
    nombre: "Rye Bread",
    img: "/assets/images/pan3.png",
    precio: "$20",
  },
];
const ArrayMeat = [
  {
    type: "meat",
    nombre: "italian bread",
    img: "/assets/images/carne1.png",
    precio: "$20",
  },
  {
    type: "meat",
    nombre: "Roast Beef",
    img: "/assets/images/carne2.png",
    precio: "$20",
  },
  {
    type: "meat",
    nombre: "Ham",
    img: "/assets/images/carne3.png",
    precio: "$20",
  },
];
const ArrayChesse = [
  {
    type: "chesse",
    nombre: "Danbo",
    img: "/assets/images/queso1.png",
    precio: "$20",
  },
  {
    type: "chesse",
    nombre: "Cheddar",
    img: "/assets/images/queso2.png",
    precio: "$20",
  },
  { type: "chesse", nombre: "none", img: "", precio: "$0" },
];
const ArrayVegetables = [
  {
    type: "vegetal",
    nombre: "Lettuce",
    img: "/assets/images/vegetal1.png",
    precio: "$20",
  },
  {
    type: "vegetal",
    nombre: "Tomato",
    img: "/assets/images/vegetal2.png",
    precio: "$20",
  },
  {
    type: "vegetal",
    nombre: "Onion",
    img: "/assets/images/vegetal3.png",
    precio: "$20",
  },
];
const ArrayIngredients = [
  {
    type: "ingredient",
    nombre: "Mayo",
    img: "/assets/images/ingrediente1.png",
    precio: "$20",
  },
  {
    type: "ingredient",
    nombre: "Mustard",
    img: "/assets/images/ingrediente2.png",
    precio: "$20",
  },
  {
    type: "ingredient",
    nombre: "Ketchup",
    img: "/assets/images/ingrediente3.png",
    precio: "$20",
  },
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
          none={true}
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
          check={true}
        />
        <CardBody
          tittle="Ingredients"
          subtittle="Select Multiple"
          number="5"
          array={ArrayIngredients}
          check={true}
          none={true}
          link={true}
        />
      </Container>
      <Progress />
    </Main>
  );
};

export default HomePage;
