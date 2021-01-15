import React from "react";
import styled from "styled-components";
const TutorHome = () => {
  return (
    <Wrapper>
      <Announcement>
        <Title>Total content Uploaded </Title>
        <Text>The total number of contents added 10.</Text>
      </Announcement>

      <Activities>
        <Title> Total earnings</Title>
        <Text>total balance R1000</Text>
      </Activities>
      <Help>
        <Title>My Subjects</Title>
        <Text>Total number of subjects currenctly is 1 </Text>
      </Help>
      <Tasks>
        <Title>My students </Title>
        <Text>The total number of students currenctly is 2</Text>
      </Tasks>
    </Wrapper>
  );
};

export default TutorHome;

const Wrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 450px;
  display: grid;
  grid-template-columns: 402px auto;
  gap: 40px;
`;
const Announcement = styled.div`
  width: 402px;
  height: 237.5px;
  background: rgba(255, 255, 255, 0.8);
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 20px 40px rgba(34, 79, 169, 0.1);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;
`;
const Activities = styled.div`
  width: 402px;
  height: 237.5px;
  background: rgba(255, 255, 255, 0.8);
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 20px 40px rgba(34, 79, 169, 0.1);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;
`;
const Help = styled.div`
  width: 402px;
  height: 237.5px;
  background: rgba(255, 255, 255, 0.8);
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 20px 40px rgba(34, 79, 169, 0.1);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 10px;
`;
const Tasks = styled.div`
  width: 402px;
  height: 237.5px;
  background: rgba(255, 255, 255, 0.8);
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 20px 40px rgba(34, 79, 169, 0.1);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;
`;
const Title = styled.h1`
  margin-top: 30px;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
`;
const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 30px;
  text-align: center;
`;
