import React from "react";
import styled from "styled-components";
import SEO from "../../components/layout/seo";
import NavMemo from "../../components/tooltip/NavMemo";

const MemoJob = () => {
  return (
    <Wrapper>
      <SEO title="memo-job" />
      <NavMemo />
    </Wrapper>
  );
};

export default MemoJob;

const Wrapper = styled.div``;
