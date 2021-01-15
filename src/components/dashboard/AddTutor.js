import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { TabScrollButton } from "@material-ui/core";

const AddTutor = () => {
  return (
    <Wrapper>
      <WrapperContent>
        <Link to="/admin/manage-tutor">
          <BackButton>
            <TabScrollButton />
          </BackButton>
        </Link>
        <Title>Back to tutors</Title>
      </WrapperContent>
      <WrapperForm>
        <Heading1> Tutor form</Heading1>
        <Subtitle>
          New tutor? Fill in the form to add new tutors to the plataform by
          providing all the necessary informations.
        </Subtitle>
        <Input placeholder="First name" />
        <Input placeholder="Last Name" />
        <Input placeholder="Email " />
        <Input placeholder="Phone " />
        <Input placeholder="Country" />

        <Select>
          <option selected value="Gender" disabled>
            Gender
          </option>
          <option>Male</option>
          <option>Female</option>
        </Select>
        <Select>
          <option selected value="Ocupation" disabled>
            Ocupation
          </option>
          <option>Self Employee</option>
          <option>Student</option>
          <option>Employee</option>
        </Select>
        <Select>
          <option selected value="Subject" disabled>
            Subject of interest
          </option>
          <option>Mathematics 1</option>
          <option>Fluid Mechanics</option>
          <option>Drawing</option>
        </Select>
        <Select>
          <option selected value="Education" disabled>
            Eduaction
          </option>
          <option>University Of Cape Town</option>
          <option>University Of Pretoria</option>
          <option>University Of Johanesburg</option>
          <option>Cape Peninsula University Of Technology</option>
          <option>University Of Stelenbosh</option>
          <option>UWBC</option>
          <option>UNISA</option>
        </Select>
        <Select>
          <option selected value="Tutoring" disabled>
            Tutoring preference
          </option>
          <option>Online</option>
          <option>In Person</option>
        </Select>
        <SaveButton>Save</SaveButton>
      </WrapperForm>
    </Wrapper>
  );
};

export default AddTutor;

const Wrapper = styled.div`
  position: absolute;
  top: 78px;
  left: 440px;
`;
const WrapperContent = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  align-items: center;
  gap: 20px;
  padding: 0 0 40px 0;
`;
const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
`;
const Subtitle = styled.p`
  padding: 0px 40px 20px 40px;
  font-size: 15px;
  line-height: 22px;
`;
const Heading1 = styled.h2`
  font-size: 20px;
  font-weight: bold;
  padding: 40px 40px 20px 40px;
`;
const BackButton = styled.button`
  width: 60px;
  height: 40px;
  cursor: pointer;
  font-size: 14px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-weight: bold;
  transform: rotateY(90deg) rotateY(90deg);
`;

const WrapperForm = styled.form`
  width: 600px;
  height: 998px;
  background: white;
  border-radius: 10px;
`;

const Input = styled.input`
  padding: 0 10px 0 10px;
  margin: 10px 30px 20px 30px;
  width: 88%;
  height: 44px;
  border-radius: 5px;
  border: solid 0.5px grey;
  outline: none;
  font-size: 18px;
  color: black;

  ::placeholder {
    color: rgb(1, 1, 1, 0.5);
    font-size: 15px;
  }
`;

const Select = styled.select`
  margin: 10px 30px 20px 30px;
  width: 92%;
  height: 44px;
  border: none;
  outline: none;
  border-radius: 5px;
  border: solid 0.5px blue;
  font-size: 15px;
`;
const SaveButton = styled.button`
  margin: 10px 30px 10px 30px;
  width: 92%;
  height: 44px;
  background-color: green;
  color: white;
  font-size: 15px;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
`;
