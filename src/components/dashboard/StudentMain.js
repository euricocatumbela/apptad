import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { MediumText } from "../styles/TextStyles";

export default function StudentMain() {
  return (
    <Wrapper>
      <Title>Students</Title>
      <WrapperContent>
        <TextContent>
          <Icon src="/images/galery/students.svg" />
          <Heading>Manage student details</Heading>
          <Subtitle>
            This is where you’ll add students and manage your students. You can
            also remove and edit your students informations.
          </Subtitle>
        </TextContent>
        <GroupButton>
          <Link to="/dash/new-student">
            <AddButton>Add student</AddButton>
          </Link>
          <Link to="/dash/student-table">
            <ManageButton>Manage students</ManageButton>
          </Link>
        </GroupButton>
      </WrapperContent>
    </Wrapper>
  );
}

export const FileMain = () => {
  return (
    <Wrapper>
      <Title>Files</Title>
      <WrapperContent>
        <TextContent>
          <Icon src="/images/galery/contents.svg" />
          <Heading>Review tutor contents</Heading>
          <Subtitle>
            This is where you’ll review contents and approve or refuse them. You
            can also edit or send back to tutors in case you refuse.
          </Subtitle>
        </TextContent>
        <GroupButton>
          <Link to="/dash/file-content">
            <AddButton>Content</AddButton>
          </Link>
          <Link to="/dash/file-content">
            <ManageButton>Memo</ManageButton>
          </Link>
        </GroupButton>
      </WrapperContent>
    </Wrapper>
  );
};
export const TutorMain = () => {
  return (
    <Wrapper>
      <Title>Tutors</Title>
      <WrapperContent>
        <TextContent>
          <Icon src="/images/galery/tutors.svg" />
          <Heading>Manage tutor details</Heading>
          <Subtitle>
            This is where you’ll add tutors and manage your tutors. You can also
            remove and edit your tutors informations.
          </Subtitle>
        </TextContent>
        <GroupButton>
          <Link to="/dash/new-tutor">
            <AddButton>Add tutor</AddButton>
          </Link>
          <Link to="/dash/tutor-table">
            <ManageButton>Manage tutors</ManageButton>
          </Link>
        </GroupButton>
      </WrapperContent>
    </Wrapper>
  );
};
export const SubjectMain = () => {
  return (
    <Wrapper>
      <Title>Subjects</Title>
      <WrapperContent>
        <TextContent>
          <Icon src="/images/galery/subjects.svg" />
          <Heading>Manage subject details</Heading>
          <Subtitle>
            This is where you’ll add subjects and manage your subjects. You can
            also remove and edit your subjects informations.
          </Subtitle>
        </TextContent>
        <GroupButton>
          <Link to="/dash/new-subject">
            <AddButton>Add subject</AddButton>
          </Link>
          <Link to="/dash/subject-table">
            <ManageButton>Manage subjects</ManageButton>
          </Link>
        </GroupButton>
      </WrapperContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 80px;
  left: 280px;
`;
const Title = styled.h1`
  padding: 0 0 30px 0;
  font-size: 28px;
  font-weight: bold;
`;
const TextContent = styled.div`
  margin: 0 auto;
`;
const WrapperContent = styled.div`
  width: 98%;
  height: 500px;
  background: #ffffff;
  box-shadow: 0px 10px 20px #c4c4c4;
  border-radius: 20px;
`;
const Icon = styled.img`
  margin: 0 300px 0 430px;
`;
const Heading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding: 0 0 20px 0;
`;
const Subtitle = styled(MediumText)`
  text-align: center;
  color: rgb(1, 1, 1, 0.7);
  margin: 0 160px 0 160px;
`;
const GroupButton = styled.div`
  display: grid;
  grid-template-columns: 160px auto;
  justify-content: center;
  padding: 20px 20px;
`;
const AddButton = styled.button`
  width: 150px;
  height: 44px;
  background-color: green;
  border-radius: 5px;
  color: white;
  border: none;
  font-size: 15px;
  cursor: pointer;
`;
const ManageButton = styled.button`
  width: 180px;
  height: 44px;
  border-radius: 5px;
  border: solid 1px;
  font-size: 15px;
  font-weight: 500px;
  cursor: pointer;
  background-color: white;
`;
