import React from "react";
import styled from "styled-components";
import Global from "../../components/layout/global";
import SEO from "../../components/layout/seo";
import Questions from "../../components/quiz/Questions";

const CreateTask = () => {
  return (
    <Wrapper>
      <SEO title="create-task" />
      <Global />
      <Questions />
    </Wrapper>
  );
};

export default CreateTask;

const Wrapper = styled.div`
  padding: 120px 0;
`;
