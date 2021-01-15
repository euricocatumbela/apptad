import React from "react";
import styled from "styled-components";
import TutorAccount from "../../components/dashboard/TutorAccount";
import Global from "../../components/layout/global";
import SEO from "../../components/layout/seo";
import TutorTool from "../../components/toolkit/TutorTool";

const Settings = () => {
  return (
    <Wrapper>
      <SEO title="tutor-settings" />
      <TutorTool />
      <TutorAccount />
      <Global />
    </Wrapper>
  );
};

export default Settings;

const Wrapper = styled.div`
  margin: 0 auto;
`;
