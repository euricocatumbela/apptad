import React from "react";
import styled from "styled-components";
import BackupTwoToneIcon from "@material-ui/icons/BackupTwoTone";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import { Link } from "gatsby";

const ContentFile = () => {
  return (
    <Wrapper>
      <WrapperGroup>
        <Link to="/tutor/create-content">
          <Option>
            <AddCircleIcon style={{ color: "white" }} />
            Create content
          </Option>
        </Link>
        <Link to="/tutor/upload-memo">
          <Option>
            <BackupTwoToneIcon style={{ color: "white" }} />
            Upload memo
          </Option>
        </Link>
        <Link to="/tutor/create-task">
          <Option>
            <LibraryAddIcon style={{ color: "white" }} />
            Create task
          </Option>
        </Link>
      </WrapperGroup>
    </Wrapper>
  );
};

export default ContentFile;

const Wrapper = styled.div`
  position: absolute;
  top: 80px;
  left: 520px;
  width: 600px;
  height: 500px;
  background: #ffffff;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
const WrapperGroup = styled.div`
  margin-top: 50px;
  display: grid;
  justify-content: center;
  align-content: center;
  gap: 40px;
`;
const Option = styled.button`
  width: 550px;
  height: 80px;
  display: grid;
  grid-template-columns: 44px auto;
  justify-content: center;
  align-content: center;
  border-radius: 20px;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  background: blue;
  border: none;
  cursor: pointer;
  font-family: "Kanit", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: white;
`;
