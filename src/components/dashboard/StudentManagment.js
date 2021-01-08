import React from "react"
import styled from "styled-components"

const StudentManagment = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <Title>Manage Student</Title>
        <Subtitle>Insert student ID to Edit or Remove students.</Subtitle>
        <img alt="" width="450" src="images/galery/cover.svg" />
      </TextWrapper>
      <WrapperContent>
        <InputID placeholder="Enter ID"></InputID>
        <Input placeholder="First name"></Input>
        <Input placeholder="Last name"></Input>
        <Input placeholder="Email address"></Input>
        <Input placeholder="Cell Number"></Input>
        <InputTextArea placeholder="Address"></InputTextArea>
        <ButtonGroup>
          <AddButton>Save</AddButton>
          <EditButton>Edit</EditButton>
          <RemoveButton>Remove</RemoveButton>
        </ButtonGroup>
      </WrapperContent>
    </Wrapper>
  )
}

export default StudentManagment

const Wrapper = styled.div`
  position: relative;
  left: -100px;
  top: 50px;
  width: 900px;
  height: 640px;
  background: rgb(30, 19, 87);
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 20px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const TextWrapper = styled.div`
  margin: 20px;
`

const WrapperContent = styled.div`
  margin: 100px 0;
  display: grid;
  gap: 10px;
`
const Title = styled.h3`
  font-weight: bold;
  font-size: 40px;
  line-height: 88px;
  color: #ffffff;
  text-align: center;
`
const Subtitle = styled.p`
  font-weight: normal;
  font-size: 15px;
  line-height: 130%;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
`

const Input = styled.input`
  width: 320px;
  height: 34px;
  background: transparent;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  outline: none;
  font-size: 18px;
  color: rgb(255, 255, 255, 0.6);

  ::placeholder {
    color: rgb(255, 255, 255, 0.9);
  }
`
const InputID = styled.input`
  width: 220px;
  height: 34px;
  background: transparent;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  outline: none;
  font-size: 18px;
  color: rgb(255, 255, 255, 0.9);
  ::placeholder {
    color: rgb(255, 255, 255, 0.9);
  }
`
const InputTextArea = styled.textarea`
  width: 320px;
  height: 68px;
  background: transparent;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  border-radius: 10px;
  outline: none;
  color: rgb(255, 255, 255, 0.9);
  font-size: 18px;
  ::placeholder {
    color: rgb(255, 255, 255, 0.9);
  }
`

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 120px 115px 50px;
`
const AddButton = styled.button`
  width: 100px;
  height: 44px;
  border-radius: 10px;
  background: green;
  box-shadow: 0px 20px 40px rgba(147, 231, 221, 0.3);
  outline: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
`
const EditButton = styled.button`
  width: 100px;
  height: 44px;
  border-radius: 10px;
  background: darkcyan;
  box-shadow: 0px 20px 40px rgba(147, 231, 221, 0.3);
  outline: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
`
const RemoveButton = styled.button`
  width: 100px;
  height: 44px;
  border-radius: 10px;
  background: red;
  box-shadow: 0px 20px 40px rgba(147, 231, 221, 0.3);
  outline: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
`
