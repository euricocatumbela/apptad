import React from "react";
import SEO from "../components/layout/seo";
import styled from "styled-components";
import { GlobalStyle } from "../components/styles/GlobalStyle";
import Layout from "../components/layout/layout";
import HeroSection from "../components/sections/HeroSection";
function IndexPage() {
  return (
    <Wrapper>
      <GlobalStyle />
      <SEO title="welcome" />
      <Layout>
        <HeroSection />
      </Layout>
    </Wrapper>
  );
}

export default IndexPage;

const Wrapper = styled.div`
  padding: 320px 0 600px 0;
  background: linear-gradient(180deg, #491eb8 0%, #dc6969 97.82%);
`;
