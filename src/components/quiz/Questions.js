import React, { useState } from "react";
import { Link } from "gatsby";
import {
  Container,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import styled from "styled-components";
import { TabScrollButton } from "@material-ui/core";

export default function Questions() {
  const lists = [
    {
      name: "Mathematics 1",
    },
    {
      name: "Mathematics 2",
    },
  ];
  const [open, setOpen] = useState(false);

  const [inputFields, setInputFields] = useState([
    {
      subject: "",
      question: "",
      correct_answer: "",
      incorrect_answers: "",
      incorrect_answers_1: "",
      correct_answers_1: "",
    },
  ]);

  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  const handleChange = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    console.log(index, event.target.name);
    setInputFields(values);
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Fields", inputFields);
  }

  function handleAddFields() {
    setInputFields([
      ...inputFields,
      {
        subject: "",
        question: "",
        correct_answer: "",
        incorrect_answers: "",
        incorrect_answers_1: "",
        incorrect_answers_2: "",
      },
    ]);
  }
  function handleRemoveFields(index) {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  }
  return (
    <Container>
      <Link to="/tutor/tutor-content-creator">
        <BackButton>
          <TabScrollButton />
        </BackButton>
      </Link>
      <Title>Add mew question</Title>

      <form onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => (
          <WrapperContent key={index}>
            <InputLabel id="demo-controlled-open-select-label">
              Subject
            </InputLabel>
            <Select
              type="subject"
              required=""
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              name="subject"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={inputField.subject}
              onChange={(event) => handleChange(index, event)}
              variant="filled"
              style={{ background: "lightblue" }}
            >
              <MenuItem value="">
                <em>Subject</em>
              </MenuItem>
              {lists.map((list, index) => (
                <MenuItem key={index} value={list.name}>
                  {list.name}
                </MenuItem>
              ))}
            </Select>

            <TextField
              type="question"
              required=""
              name="question"
              label="Question"
              variant="filled"
              value={inputField.question}
              onChange={(event) => handleChange(index, event)}
              style={{ background: "orange" }}
            />
            <TextField
              type="correct_answer"
              required=""
              name="correct_answer"
              label="Correct Answer"
              variant="filled"
              value={inputField.correct_answer}
              onChange={(event) => handleChange(index, event)}
              style={{ background: "lightgreen" }}
            />
            <TextField
              type="incorrect_answers"
              required=""
              name="incorrect_answers"
              label="Incorrect answer #1"
              variant="filled"
              value={inputField.incorrect_answers}
              onChange={(event) => handleChange(index, event)}
              style={{ background: "violet" }}
            />
            <TextField
              type="incorrect_answers_1"
              required=""
              name="incorrect_answers_1"
              label="Incorrect answer #2"
              variant="filled"
              value={inputField.incorrect_answers_1}
              onChange={(event) => handleChange(index, event)}
              style={{ background: "violet" }}
            />
            <TextField
              type="incorrect_answers_2"
              required=""
              name="incorrect_answers_2"
              label="Incorrect answer #3"
              variant="filled"
              value={inputField.incorrect_answers_2}
              onChange={(event) => handleChange(index, event)}
              style={{ background: "violet" }}
            />
            <GroupButton>
              <RemoveButton onClick={handleRemoveFields}>-</RemoveButton>
              <AddButton onClick={handleAddFields}>+</AddButton>
            </GroupButton>
          </WrapperContent>
        ))}
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </form>
    </Container>
  );
}

const WrapperContent = styled.div`
  margin: 20px 0 0 0;
  display: grid;
  gap: 20px;
`;

const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 22px;
`;
const GroupButton = styled.div`
  display: grid;
  grid-template-columns: 60px 60px;
  gap: 20px;
`;
const AddButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  font-size: 15px;
  color: white;
  background: green;
  cursor: pointer;
`;
const RemoveButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;

  font-size: 14px;
  color: white;
  background: red;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  margin: 20px 0px 0 0px;
  padding: 18px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  color: white;
  background: green;
  cursor: pointer;
`;

const BackButton = styled.button`
  position: absolute;
  left: 50px;
  top: 80px;
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
