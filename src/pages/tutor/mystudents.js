import React from "react";
import styled from "styled-components";
import Global from "../../components/layout/global";
import SEO from "../../components/layout/seo";
import TutorTool from "../../components/toolkit/TutorTool";

const MyStudents = () => {
  return (
    <Wrapper>
      <SEO title="tutor-MyStudents" />
      <Global />
      <TutorTool />
    </Wrapper>
  );
};

export default MyStudents;

const Wrapper = styled.div`
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 150px;
  margin-right: 500px; */
`;
