import React from "react";
import styled from "styled-components";
import { TutorMain } from "../../components/dashboard/StudentMain";
import Layout from "../../components/layout/layout";
import SEO from "../../components/layout/seo";
import AdminTool from "../../components/toolkit/AdminTool";

const ManageTutor = () => {
  return (
    <Wrapper>
      <SEO title="manage-tutor" />
      <Layout>
        <AdminTool />
        <TutorMain />
      </Layout>
    </Wrapper>
  );
};

export default ManageTutor;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
