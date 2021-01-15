import React from "react";
import styled from "styled-components";
import SEO from "../../components/layout/seo";

import NavContent from "../../components/tooltip/NavContent";

const ContentJob = () => {
  return (
    <Wrapper>
      <SEO title="content-job" />
      <NavContent />
    </Wrapper>
  );
};

export default ContentJob;

const Wrapper = styled.div``;
