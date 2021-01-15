import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TabScrollButton } from "@material-ui/core";

// API imports

import { API, graphqlOperation } from "aws-amplify";
import { createSubject } from "../../graphql/mutations";
import { listSubjects } from "../../graphql/queries";
import Amplify from "aws-amplify";
import awsConfig from "../../aws-exports";

const initialState = {
  s_name: "",
  course: "",
  academic_level: "",
};

Amplify.configure(awsConfig);

const AddSubject = () => {
  const [formState, setFormState] = useState(initialState);

  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    //fetch notes
    fetchSubjects();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchSubjects() {
    try {
      const subjectData = await API.graphql(graphqlOperation(listSubjects));
      const subjects = subjectData.data.listSubjects.items;
      setSubjects(subjects);
    } catch (err) {
      console.log("Error fetching data");
    }
  }

  async function addSubejct() {
    try {
      if (!formState.s_name || !formState.course || !formState.academic_level)
        return;
      const subject = { ...formState };
      setSubjects([...subjects, subject]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createSubject, { input: subject }));
    } catch (err) {
      console.log("Error in creating subjects");
    }
  }

  return (
    <Wrapper>
      <WrapperContent>
        <Link to="/admin/manage-subject">
          <BackButton>
            <TabScrollButton />
          </BackButton>
        </Link>
        <Title>Back to subjects</Title>
      </WrapperContent>
      <WrapperForm>
        <Heading1>Subject form</Heading1>
        <Subtitle>
          New subject? Fill in the form to add new subjects to the plataform by
          providing all the necessary informations.
        </Subtitle>
        <Input
          onChange={(event) => setInput("s_name", event.target.value)}
          value={formState.s_name}
          placeholder="Subject name"
        />
        <Input
          onChange={(event) => setInput("course", event.target.value)}
          value={formState.course}
          placeholder="Course mame"
        />
        <Input
          onChange={(event) => setInput("academic_level", event.target.value)}
          value={formState.academic_level}
          placeholder="Subject level"
        />

        <SaveButton onSubmit={addSubejct}>Add</SaveButton>
      </WrapperForm>

      {subjects.map((subject, index) => (
        <div key={subject.id ? subject.id : index}>
          {subject.s_name}
          <p>{subject.course}</p>
          <p>{subject.academic_level}</p>
        </div>
      ))}
    </Wrapper>
  );
};

export default AddSubject;

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

const WrapperForm = styled.div`
  width: 600px;
  height: 490px;
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
