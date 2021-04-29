import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

const ButtonMain = styled.button`
  width: 200px;
  height: 64px;
  border-radius: 40px;
  border: none;
  outline: none;
  color: white;
  background-color: #5f2eea;
  cursor: pointer;
`;
const Button = ({ value }) => {
  // to={`section${contador}`}
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <Link
      to={`section${count}`}
      smooth={true}
      offset={105 + count}
      duration={900}
    >
      <ButtonMain onClick={() => setCount(count + 1)}>{value}</ButtonMain>
    </Link>
  );
};

export default Button;
