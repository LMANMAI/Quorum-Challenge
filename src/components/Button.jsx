import React, { useState, useEffect } from "react";
import styled from "styled-components";
//import { Link, animateScroll as scroll } from "react-scroll";

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
  // to={`section${contador}`}
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <ButtonMain
      type={submit ? "submit" : "button"}
      onClick={() => setCount(count + 1)}
      dobutton={dobutton}
    >
      {value}
    </ButtonMain>
  );
};

export default Button;
