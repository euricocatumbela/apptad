import React from "react";
import styled from "styled-components";

export default function Dialog() {
  return (
    <Wrapper>
      <Text>Low priority</Text>
    </Wrapper>
  );
}

export const MediumLevel = () => {
  return (
    <Wrapper1>
      <Text1>Medium priority</Text1>
    </Wrapper1>
  );
};
export const HighLevel = () => {
  return (
    <Wrapper2>
      <Text2>High priority</Text2>
    </Wrapper2>
  );
};

const Wrapper = styled.div`
  margin: 40px 0px 0 -40px;
  width: 100px;
  height: 30px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  z-index: 1;
`;

const Text = styled.p`
  color: white;
  font-size: 12px;
  text-align: center;
  padding: 8px 0 8px 0;
`;
const Wrapper1 = styled.div`
  margin: 40px 0px 0 -40px;
  width: 100px;
  height: 30px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
`;

const Text1 = styled.p`
  color: white;
  font-size: 12px;
  text-align: center;
  padding: 8px 0 8px 0;
`;
const Wrapper2 = styled.div`
  margin: 40px 0px 0 -40px;
  width: 100px;
  height: 30px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
`;

const Text2 = styled.p`
  color: white;
  font-size: 12px;
  text-align: center;
  padding: 8px 0 8px 0;
`;
