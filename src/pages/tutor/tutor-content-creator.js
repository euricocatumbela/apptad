import React from "react";
import styled from "styled-components";
import Global from "../../components/layout/global";
import SEO from "../../components/layout/seo";
import ContentFile from "../../components/sections/ContentCreatorFile";
import TutorTool from "../../components/toolkit/TutorTool";

const TutorContentCreator = () => {
  return (
    <Wrapper>
      <SEO title="tutor-content-creator" />
      <Global />
      <TutorTool />
      <ContentFile />
    </Wrapper>
  );
};

export default TutorContentCreator;

const Wrapper = styled.div`
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 150px;
  margin-right: 500px; */
`;
