import React, { useState } from "react";
import styled from "styled-components";

export function CreateQuiz() {
  const subjects = [
    "Engineering Mathematics",
    "Mechatronics",
    "Physics",
    "Sociology",
  ];

  return (
    <Wrapper>
      <ContentWrapper>
        <Label>Subject</Label>
        <Select>
          {subjects.map((subject, index) => (
            <option>{subject}</option>
          ))}
        </Select>
        <Label>Question 1</Label>
        <Input />
        <Label>Correct Answer</Label>
        <Input />
        <Label>Incorrect Answer #1</Label>
        <Input />
        <Label>Incorrect Answer #2</Label>
        <Input />
        <Label>Incorrect Answer #3</Label>
        <Input />
        <Label>Question 2</Label>
        <Input />
        <Label>Correct Answer</Label>
        <Input />
        <Label>Incorrect Answer #1</Label>
        <Input />
        <Label>Incorrect Answer #2</Label>
        <Input />
        <Label>Incorrect Answer #3</Label>
        <Input />
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 120px;
  left: 400px;
`;

const ContentWrapper = styled.div`
  background-color: green;
  display: grid;
  gap: 10px;
  padding: 80px;
  border-radius: 5px;
`;
const Label = styled.label`
  padding: 10px 0 10px 0;
  font-size: 18px;
  font-weight: bold;
  color: white;
`;
const Select = styled.select`
  width: 400px;
  height: 44px;

  border: none;
  font-size: 18px;
`;

const Input = styled.input`
  width: 400px;
  height: 44px;
`;
