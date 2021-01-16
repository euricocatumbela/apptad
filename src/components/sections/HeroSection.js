import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

export default function HeroSection() {
  return (
    <Wrapper>
      <WrapperContent>
        <Link to="/">
          <Option>Welcome Admin</Option>
        </Link>

        <Link to="/admin/home">
          <Option>Visit your Dashoard</Option>
        </Link>
        <Link to="https://www.takeanydoubt.com">
          <Option>Visit official Website</Option>
        </Link>
      </WrapperContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 220px;
  left: 420px;
  border-radius: 10px;
  width: 600px;
  height: 500px;
  background: #ffffff;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
const WrapperContent = styled.div`
  margin-top: 50px;
  display: grid;
  gap: 40px;
  justify-content: center;
  align-content: center;
`;
const Option = styled.button`
  width: 550px;
  height: 80px;
  background: blue;
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  font-size: 22px;
  display: grid;
  gap: 40px;
  /* grid-template-columns: 24px auto; */
  justify-content: center;
  align-items: center;
`;
