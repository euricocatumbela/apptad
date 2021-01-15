import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import AvatarTool from "../../components/toolkit/AvatarTool";
import { TabScrollButton } from "@material-ui/core";
const AdminAccount = () => {
  const [active, setActive] = useState(false);
  return (
    <WrapperHero>
      <WrapperContent>
        <Link to="/admin/home">
          <BackButton>
            <TabScrollButton />
          </BackButton>
        </Link>
        <Heading1>Back to dashboard</Heading1>
      </WrapperContent>

      <Wrapper>
        <TextWrapper>
          <Title>Edit Profile</Title>
          <Subtitle>Manage your TakeAnyDoubt profile and account</Subtitle>
        </TextWrapper>
        <ContentWrapper>
          <AvatarIcon>
            <img alt="" src="/images/icons/image.svg" />
          </AvatarIcon>
          <ChangeAvatar onClick={() => setActive(!active)}>
            {active ? <AvatarTool /> : null}
            <Text>Change avatar</Text>
          </ChangeAvatar>
        </ContentWrapper>
        <ContentWrapper2>
          <ProfileSetting>Profile Settings</ProfileSetting>
          <AccountSetting>Account Settings</AccountSetting>
          <InputDiv1>
            <Input placeholder="Your name"></Input>
            <Icon>
              <img alt="" src="/images/icons/image.svg" />
            </Icon>
          </InputDiv1>
          <InputDiv2>
            <Input placeholder="Email "></Input>
            <Icon>
              <img alt="" src="/images/icons/email.svg" />
            </Icon>
          </InputDiv2>
          <InputDiv3>
            <InputDescription placeholder="Your description"></InputDescription>
            <Icon>
              <img alt="" src="/images/icons/credit.svg" />
            </Icon>
          </InputDiv3>
          <InputDiv4>
            <Input placeholder="Password"></Input>
            <Icon>
              <img alt="" src="/images/icons/lock.svg" />
            </Icon>
          </InputDiv4>
          <SaveButton>Save settings</SaveButton>
          <ResetButton>Reset password</ResetButton>
        </ContentWrapper2>
      </Wrapper>
    </WrapperHero>
  );
};

export default AdminAccount;

const WrapperHero = styled.div`
  position: absolute;
  top: 80px;
  left: 380px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  /* background: grey; */
  /* background: rgb(30, 19, 87); */
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 50px 100px rgba(31, 31, 71, 0.3);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  margin-right: 200px;
`;
const Heading1 = styled.h1`
  font-size: 22px;
  font-weight: bold;
  color: black;
`;
const TextWrapper = styled.div`
  margin: 20px 0 0 20px;
  display: grid;
  gap: 10px;
`;
const Title = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 130%;
  /* color: #ffffff; */
  color: black;

  text-transform: uppercase;
`;
const Subtitle = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 130%;
  /* color: rgba(255, 255, 255, 0.7); */
  color: black;
  mix-blend-mode: normal;
`;
const ContentWrapper = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 154px 524px;
  align-items: center;
`;
const Text = styled.p`
  margin: 3px;
  color: black;
  /* color: rgb(255, 255, 255, 07); */
  text-align: center;
`;
const ContentWrapper2 = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 340px 184px;
  gap: 20px;
  margin-left: 30px;
`;
const ProfileSetting = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 130%;
  text-transform: uppercase;
  /* color: #ffffff; */
  color: black;
  mix-blend-mode: normal;
`;
const AccountSetting = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 130%;
  text-transform: uppercase;
  /* color: #ffffff; */
  color: black;
  mix-blend-mode: normal;
`;
const AvatarIcon = styled.div`
  position: relative;
  top: -10px;
  left: 30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: green;
  img {
    margin-left: 10px;
    margin-top: 10px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;
const ChangeAvatar = styled.div`
  width: 141px;
  height: 33px;
  background: linear-gradient(
    180deg,
    rgba(24, 32, 79, 0.4) 0%,
    rgba(24, 32, 79, 0.25) 100%
  );
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  border-radius: 30px;
  cursor: pointer;
`;

const InputDiv1 = styled.div`
  font-size: 15px;
  width: 320px;
  height: 46px;
  background: transparent;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  border-radius: 30px;

  img {
    position: relative;
    bottom: -4px;
    left: 5px;
    /* top: 210px; */
    height: 30px;
    width: 30px;
    border-radius: 100px;
  }
`;

const InputDiv2 = styled.div`
  font-size: 15px;
  width: 320px;
  height: 46px;
  background: transparent;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  border-radius: 30px;

  img {
    position: relative;
    bottom: -4px;
    left: 5px;
    /* top: 210px; */
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }
`;

const InputDiv3 = styled.div`
  font-size: 15px;
  width: 300px;
  height: 68px;
  background: transparent;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  border-radius: 10px;

  img {
    position: relative;
    bottom: -4px;
    left: 5px;
    /* top: 210px; */
    height: 30px;
    width: 30px;
    border-radius: 100px;
  }
`;

const InputDiv4 = styled.div`
  font-size: 15px;
  width: 320px;
  height: 46px;
  background: transparent;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  border-radius: 30px;

  img {
    position: relative;
    bottom: -4px;
    left: 5px;
    /* top: 210px; */
    height: 30px;
    width: 30px;
    border-radius: 100px;
  }
`;

const Input = styled.input`
  margin-left: 60px;

  font-weight: normal;
  font-size: 15px;
  width: 250px;
  height: 44px;
  background: transparent;
  border: none;
  border-radius: 30px;
  outline: none;
`;
const InputDescription = styled.input`
  margin-left: 60px;
  width: 300px;
  height: 58px;
  border: none;
  border-radius: 10px;
  outline: none;
  background: transparent;
  color: black;
  font-weight: normal;
  font-size: 15px;
`;

const SaveButton = styled.button`
  width: 180px;
  height: 44px;
  left: 490px;
  top: 555px;
  border: none;
  cursor: pointer;
  outline: none;
  background: green;
  color: white;
  /* background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%); */
  box-shadow: 0px 20px 40px rgba(147, 231, 221, 0.3);
  border-radius: 30px;
`;
const ResetButton = styled.button`
  width: 180px;
  height: 44px;
  left: 490px;
  top: 555px;
  border: none;
  background: green;
  border-radius: 30px;
  cursor: pointer;
  outline: none;
  color: white;
`;

const WrapperContent = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  align-items: center;
  gap: 20px;
  padding: 0 0 40px 0;
`;

const BackButton = styled.button`
  width: 60px;
  height: 40px;
  cursor: pointer;
  font-size: 14px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-weight: bold;
  transform: rotateY(90deg) rotateY(90deg);
`;
const Icon = styled.div`
  position: relative;
  bottom: 42px;
  left: 10px;
  background: green;
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;
