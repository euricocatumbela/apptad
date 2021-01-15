import React, { useState } from "react";
import styled from "styled-components";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  TabScrollButton,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import { Link } from "gatsby";

const ContentSection = () => {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  return (
    <Container>
      <Link to="/tutor/tutor-content-creator">
        <BackButton>
          <TabScrollButton />
        </BackButton>
      </Link>

      <Wrapper>
        <WrapperGroup>
          <InputLabel id="demo-controlled-open-select-label">
            Create new content
          </InputLabel>
          <TextField name="title" label="Title" variant="filled"></TextField>
          <TextareaAutosize
            aria-label="minimum height"
            rowsMin={3}
            placeholder="Description"
          />
          <Select
            variant="filled"
            type="subject"
            required=""
            open={open}
            onOpen={handleOpen}
            onClose={handleClose}
          >
            <MenuItem value="">
              <em>Subject</em>
            </MenuItem>
            <MenuItem value={1}>Maths</MenuItem>
            <MenuItem value={2}>Physics</MenuItem>
          </Select>
          <CloudUploadIcon style={{ color: "green" }} />
          <TextField variant="filled" type="file" />
          <Button style={{ background: "green", color: "white" }}>
            Submit
          </Button>
        </WrapperGroup>
      </Wrapper>
    </Container>
  );
};

export default ContentSection;

const Container = styled.div`
  position: absolute;
  top: 10px;
  left: 450px;
`;
const Wrapper = styled.div`
  margin-top: 150px;

  width: 700px;
  height: 700px;
  background: #ffffff;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
const WrapperGroup = styled.form`
  margin-top: 50px;
  margin-right: 20px;
  margin-left: 20px;
  display: grid;
  gap: 30px;
  padding: 40px;
`;
const BackButton = styled.button`
  position: absolute;
  left: 0px;
  top: 80px;
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
