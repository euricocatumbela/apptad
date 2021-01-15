import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { MenuItemAdmin } from "../../data/MenuData";

export default function MenuTutor(props) {
  const { toolRef, ref } = props;

  return (
    <Wrapper ref={ref}>
      {MenuItemAdmin.map((item, index) => (
        <Link ref={toolRef} key={item.title} to={item.link}>
          <MenuItems ref={toolRef}>
            <img alt={item.title} src={item.icon} />
            {item.title}
          </MenuItems>
        </Link>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  right: 5px;
  top: 60px;

  height: 200px;
  background: #16145a;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  padding: 20px;
  display: grid;
  gap: 10px;
  grid-template-columns: 150px;
  z-index: 1;
`;
const MenuItems = styled.div`
  display: grid;
  grid-template-columns: 24px auto;
  align-items: center;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  gap: 20px;
  color: rgb(255, 255, 255);
  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }
`;
