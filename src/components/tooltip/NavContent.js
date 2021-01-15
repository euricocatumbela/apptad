import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";

const NavContent = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Title>TakeAnyDoubt</Title>
      <Form>
        <Text>Subject ID {1}</Text>
        <Text>Content ID {3}</Text>
        <EditButton>Deny</EditButton>
        <SubmitButton>Aprove</SubmitButton>
      </Form>
    </Wrapper>
  );
};

export default NavContent;

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  padding: 10px 0 10px 0;
  background: #ffff;
  box-shadow: 0px 1px 1px #c4c4c4;
  z-index: 1;
  display: grid;
  grid-template-columns: 44px auto;
  justify-content: space-around;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  gap: 30px;
  justify-content: end;
  align-items: center;
`;
const EditButton = styled.button`
  width: 100px;
  height: 44px;
  border-radius: 5px;
  border: none;
  color: white;
  background: red;
  font-size: 14px;
  cursor: pointer;
`;
const SubmitButton = styled.button`
  width: 100px;
  height: 44px;
  border-radius: 5px;
  border: none;
  color: white;
  background: green;
  font-size: 14px;
  cursor: pointer;
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

const Text = styled.p`
  font-size: 16px;
  font-weight: bold;
`;
