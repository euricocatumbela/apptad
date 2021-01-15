import React from "react";
import styled from "styled-components";
import Global from "../../components/layout/global";
import SEO from "../../components/layout/seo";
import ContentSection from "../../components/sections/ContentSection";

const CreateContent = () => {
  return (
    <Wrapper>
      <SEO title="create-content" />
      <Global />

      <ContentSection />
    </Wrapper>
  );
};

export default CreateContent;

const Wrapper = styled.div``;
