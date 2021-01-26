import React from "react";
import styled from "styled-components";

import SEO from "../../components/layout/seo";
import { GlobalStyle } from "../../components/styles/GlobalStyle";

const Profile = () => {
  return (
    <Wrapper>
      <SEO title="profile" />
      <GlobalStyle />
      <Icon src="/images/avatars/chris.png" />
      <Title>Crish Jr</Title>
      <Description>Mathematics 1 Tutor</Description>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  padding: 120px 0 500px 0;
  background: linear-gradient(180deg, #491eb8 0%, #dc6969 97.82%);
`;
const Icon = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px 100px 0 100px;
`;
const Title = styled.p`
  font-size: 18px;
  padding: 20px 80px 0px 80px;
  color: rgb(255, 255, 255, 0.7);
`;
const Description = styled.h1`
  font-size: 32px;
  padding: 20px 80px 0px 80px;
  color: rgb(255, 255, 255, 0.7);
  font-weight: bold;
`;
