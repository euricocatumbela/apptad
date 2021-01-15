import React from "react";
import styled from "styled-components";
import AdminAccount from "../../components/dashboard/AdminAccount";
import Layout from "../../components/layout/layout";
import SEO from "../../components/layout/seo";
import AdminTool from "../../components/toolkit/AdminTool";

const Settings = () => {
  return (
    <Wrapper>
      <SEO title="settings" />
      <Layout>
        <AdminTool />
        <AdminAccount />
      </Layout>
    </Wrapper>
  );
};

export default Settings;

const Wrapper = styled.div`
  margin: 0 auto;
`;
