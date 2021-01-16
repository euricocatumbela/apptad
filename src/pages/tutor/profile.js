import React from "react";
import styled from "styled-components";
import Global from "../../components/layout/global";

import SEO from "../../components/layout/seo";

const Profile = () => {
  return (
    <Wrapper>
      <SEO title="tutor-Profile" />
      <Global />
      <Icon src="/images/avatars/chris.png" />
      <Title>Chris Jr</Title>
      <Description>Admin</Description>
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
