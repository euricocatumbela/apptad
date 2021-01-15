import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

export default function ClassRoomSection() {
  return (
    <Wrapper>
      <WrapperContent>
        <Link to="https://www.whiteboard.chat/board/3dac5284-42c8-460a-93ec-bd1707866d5a-pgNum-1">
          <Option>
            <img alt="" src="/images/icons/chat.svg" />
            Start Teaching
          </Option>
        </Link>

        <Link to="https://www.whiteboard.chat/board/cb4e7e21-af94-455d-a314-f6df3f0b1993-pgNum-1">
          <Option>
            <img alt="" src="/images/icons/team.svg" />
            Start Callaborating
          </Option>
        </Link>
        <Link to="https://www.whiteboard.chat/manage">
          <Option>
            <img alt="" src="/images/icons/file.svg" />
            Manage Boards
          </Option>
        </Link>
      </WrapperContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 80px;
  left: 520px;
  border-radius: 10px;
  width: 600px;
  height: 500px;
  background: #ffffff;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
const WrapperContent = styled.div`
  margin-top: 50px;
  display: grid;
  gap: 40px;
  justify-content: center;
  align-content: center;
`;
const Option = styled.button`
  width: 550px;
  height: 80px;
  background: blue;
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  font-size: 22px;
  display: grid;
  gap: 40px;
  grid-template-columns: 24px auto;
  justify-content: center;
  align-items: center;
`;
