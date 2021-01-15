import React from "react";
import styled from "styled-components";
import Global from "../../components/layout/global";
import SEO from "../../components/layout/seo";
import UploadSection from "../../components/sections/UploadSection";

const UploadMemo = () => {
  return (
    <Wrapper>
      <SEO title="upload-memo" />
      <Global />
      <UploadSection />
    </Wrapper>
  );
};

export default UploadMemo;

const Wrapper = styled.div`
  padding: 120px 0 0 0;
`;
