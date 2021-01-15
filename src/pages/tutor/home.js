import React from "react";
import SEO from "../../components/layout/seo";
import styled from "styled-components";
import TutorHome from "../../components/sections/TutorHome";
import TutorTool from "../../components/toolkit/TutorTool";
import Global from "../../components/layout/global";

function Home() {
  return (
    <Hero>
      <SEO title="home" />
      <Global />
      <TutorTool />
      <TutorHome />
    </Hero>
  );
}
export default Home;

const Hero = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;
