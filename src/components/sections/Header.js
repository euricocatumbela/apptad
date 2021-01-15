import { Link } from "gatsby";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { headerLinks } from "../../data/MenuData";
import Menu from "../tooltip/Menu";

export default function Header() {
  const [active, setActive] = useState(false);
  const ref = useRef();
  const toolRef = useRef();

  function handleClick(event) {
    setActive(!active);
    event.preventDefault();
  }
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      console.log("Document is clicked");
      setActive(false);
    } else if (toolRef.current && !toolRef.current.contains(event.target)) {
      console.log("Document is clicked");
      setActive(false);
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <Wrapper ref={ref}>
      <Link to="/admin/home">
        <Title>Dashboard</Title>
      </Link>
      <ItemGroup>
        {headerLinks.map((items) => (
          <Items key={items.title} onClick={handleClick}>
            {active ? <Menu ref={toolRef} /> : ""}
            <img alt={items.title} src={items.icon} />
            {items.title}
          </Items>
        ))}
      </ItemGroup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  display: grid;
  grid-template-columns: 44px auto;
  justify-content: space-between;
  padding: 5px 5px;
  @media (max-width: 648px) {
    grid-template-columns: 100px 100px;
  }
  background: #ffff;
  box-shadow: 0px 1px 1px #c4c4c4;
  z-index: 1;
`;
const ItemGroup = styled.div`
  display: grid;
  justify-content: center;
  margin: 0 auto;
  width: 144px;
  cursor: pointer;

  :hover {
    border-radius: 5px;
    height: 44px;
    background: lightgrey;
    width: 144px;
  }
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: 40px auto;
  align-items: center;
  color: black;

  img {
    width: 30px;
    height: 30px;
  }
`;
const Title = styled.h1`
  text-align: center;
  padding: 10px;
  width: 134px;
  height: 44px;
  background-color: green;
  /* background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%); */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: white;
`;

// const Icon = styled.img`
//   width: 100px;
//   height: 100px;
// `
