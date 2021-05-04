import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import SandwichContext from "../context/sandwichContext";

const ButtonMain = styled.button`
  width: 200px;
  height: 64px;
  border-radius: 40px;
  border: ${(props) => (props.dobutton ? "3px solid #5f2eea" : "none")};
  outline: none;
  color: ${(props) => (props.dobutton ? "#5f2eea" : "white")};
  background-color: ${(props) => (props.dobutton ? "transparent" : "#5f2eea")};
  cursor: pointer;
  margin: 16px 0;
  font-weight: 600;
  text-transform: uppercase;
`;
const Button = ({ value, submit, dobutton }) => {
  const sandContext = useContext(SandwichContext);
  const { count, setCount } = sandContext;

  return (
    <Link
      to={`section${count}`}
      spy={true}
      smooth={true}
      offset={80}
      duration={500}
    >
      <ButtonMain
        type={!submit ? "submit" : "button"}
        onClick={() => setCount()}
        dobutton={dobutton}
      >
        {value}
      </ButtonMain>
    </Link>
  );
};

export default Button;
