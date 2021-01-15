import { Link } from "gatsby";
import React, { useState } from "react";
import SEO from "../../components/layout/seo";
import Layout from "../../components/layout/layout";
import styled from "styled-components";
import { TabScrollButton } from "@material-ui/core";
import Dialog, {
  MediumLevel,
  HighLevel,
} from "../../components/tooltip/Dialog";

export default function FileContent() {
  const [IsLowPriority, setIsLowPriority] = useState(false);
  const [isLow, setIsLow] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  const [isHigh, setIsHigh] = useState(false);

  function handleMouse(event) {
    setIsLowPriority(!IsLowPriority);
    event.preventDefault();
  }

  const [isMediumPriority, setisMediumPriority] = useState(false);
  const [isHighPriority, setisHighPriority] = useState(false);

  return (
    <Wrapper>
      <SEO title="file-content" />
      <Layout />
      <ContentWrapper>
        <Link to="/admin/file">
          <BackButton>
            <TabScrollButton />
          </BackButton>
        </Link>
        <Heading1>Back to file</Heading1>
      </ContentWrapper>
      <CardWrapper>
        <Link to="/dash/content-job">
          <ContentCard>
            <CountWrapper>
              <LowPriority onMouseOver={handleMouse} onMouseOut={handleMouse}>
                <Count>0</Count>
                {IsLowPriority ? <Dialog /> : null}
              </LowPriority>
              <MediumPriority
                onMouseOver={() => setisMediumPriority(!isMediumPriority)}
                onMouseOut={() => setisMediumPriority(!isMediumPriority)}
              >
                <Count>0</Count>
                {isMediumPriority ? <MediumLevel /> : null}
              </MediumPriority>
              <HighPriority
                onMouseOver={() => setisHighPriority(!isHighPriority)}
                onMouseOut={() => setisHighPriority(!isHighPriority)}
              >
                <Count>0</Count>
                {isHighPriority ? <HighLevel /> : null}
              </HighPriority>
            </CountWrapper>
            <IconWrapper>
              <Title>Content</Title>
              <Icon src="/images/galery/upload.svg" />
            </IconWrapper>
          </ContentCard>
        </Link>
        <Link to="/dash/memo-job">
          <MemoCard>
            <CountWrapper>
              <LowPriority
                onMouseOver={() => setIsLow(!isLow)}
                onMouseOut={() => setIsLow(!isLow)}
              >
                <Count>0</Count>
                {isLow ? <Dialog /> : null}
              </LowPriority>
              <MediumPriority
                onMouseOver={() => setIsMedium(!isMedium)}
                onMouseOut={() => setIsMedium(!isMedium)}
              >
                <Count>0</Count>
                {isMedium ? <MediumLevel /> : null}
              </MediumPriority>
              <HighPriority
                onMouseOver={() => setIsHigh(!isHigh)}
                onMouseOut={() => setIsHigh(!isHigh)}
              >
                <Count>0</Count>
                {isHigh ? <HighLevel /> : null}
              </HighPriority>
            </CountWrapper>
            <IconWrapper>
              <Title>Memo</Title>
              <Icon src="/images/galery/subjects.svg" />
            </IconWrapper>
          </MemoCard>
        </Link>
      </CardWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 80px 0 0 0;
`;
const Heading1 = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px auto;
  gap: 35px;
  align-items: center;
  @media (max-width: 648px) {
    margin: 0 0 40px 0;
  }
`;
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 240px auto;
  justify-content: center;
  gap: 20px;

  @media (max-width: 648px) {
    grid-template-columns: 240px;
  }
`;
const ContentCard = styled.div`
  height: 320px;
  width: 220px;
  background: white;
  border-radius: 10px;
  display: grid;
  cursor: pointer;
`;
const MemoCard = styled.div`
  height: 320px;
  width: 220px;
  background: white;
  border-radius: 10px;
  display: grid;
  cursor: pointer;
`;
const LowPriority = styled.div`
  height: 40px;
  width: 40px;
  background: green;
  color: white;
  border-radius: 50%;
`;
const MediumPriority = styled.div`
  height: 40px;
  width: 40px;
  background: orange;
  color: white;
  border-radius: 50%;
`;
const HighPriority = styled.div`
  height: 40px;
  width: 40px;
  background: red;
  color: white;
  border-radius: 50%;
`;
const Count = styled.p`
  margin: 10px 0 10px 0;
  display: grid;
  justify-content: center;
`;
const CountWrapper = styled.div`
  display: grid;
  grid-template-columns: 40px auto auto;
  justify-content: center;

  gap: 10px;
`;
const IconWrapper = styled.div``;
const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;
const Icon = styled.img``;

const BackButton = styled.button`
  margin: 0 20px 0 20px;
  width: 80px;
  height: 44px;
  background: orange;
  border-radius: 5px;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  transform: rotateY(90deg) rotateY(90deg);
`;
