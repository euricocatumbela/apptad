import React from "react";
import styled from "styled-components";
import Global from "../../components/layout/global";
import SEO from "../../components/layout/seo";
import TutorTool from "../../components/toolkit/TutorTool";
import ClassRoomSection from "../../components/whitheboard/ClassRoomSection";

const ClassRoom = () => {
  return (
    <Wrapper>
      <SEO title="tutor-ClassRoom" />
      <Global />
      <TutorTool />
      <ClassRoomSection />
    </Wrapper>
  );
};

export default ClassRoom;

const Wrapper = styled.div``;
