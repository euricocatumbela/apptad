import React from "react";
import SEO from "../components/layout/seo";
import styled from "styled-components";
import Home from "./admin/home";
// import { withAuthenticator } from "aws-amplify-react";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { GlobalStyle } from "../components/styles/GlobalStyle";
import Layout from "../components/layout/layout";
function IndexPage() {
  return (
    <Wrapper>
      <AmplifyAuthenticator>
        <GlobalStyle />
        <SEO title="/" />
        <Layout>
          <Home />
        </Layout>
      </AmplifyAuthenticator>
    </Wrapper>
  );
}

export default IndexPage;

const Wrapper = styled.div``;
