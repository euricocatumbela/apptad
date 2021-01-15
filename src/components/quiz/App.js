import React, { useEffect, useState } from "react";
import styled from "styled-components";

const API_URL =
  "https://opentdb.com/api.php?amount=4&category=21&difficulty=easy&type=multiple";
export default function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);

  return questions.length > 0 ? (
    <Wrapper>
      <WrapperContent>
        <Title dangerouslySetInnerHTML={{ __html: questions[0].question }} />
      </WrapperContent>
      <GroupContent>
        <Answer>{questions[0].correct_answer}</Answer>
        <Answer>{questions[0].incorrect_answers[0]}</Answer>
        <Answer>{questions[0].correct_answer[1]}</Answer>
        <Answer>{questions[0].incorrect_answers[2]}</Answer>
      </GroupContent>
    </Wrapper>
  ) : (
    <h1>Hello bro... We loading</h1>
  );
}

const Wrapper = styled.div`
  padding: 120px 0 120px 0;
  display: grid;
  justify-content: center;
`;

const WrapperContent = styled.div`
  margin: 20px 0 20px 0;
  background: white;
  padding: 50px;
  border-radius: 5px;
`;
const Title = styled.h2`
  color: purple;
`;

const GroupContent = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const Answer = styled.button`
  font-size: 15px;
  background: white;
  padding: 20px;
  color: purple;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
