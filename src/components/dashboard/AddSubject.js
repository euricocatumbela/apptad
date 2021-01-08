import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { TabScrollButton } from "@material-ui/core"

const AddSubject = () => {
  return (
    <Wrapper>
      <WrapperContent>
        <Link to="/manage-subject">
          <BackButton>
            <TabScrollButton />
          </BackButton>
        </Link>
        <Title>Back to subjects</Title>
      </WrapperContent>
      <WrapperForm>
        <Heading1>Subject form</Heading1>
        <Subtitle>
          New subject? Fill in the form to add new subjects to the plataform by
          providing all the necessary informations.
        </Subtitle>
        <Input placeholder="Subject name" />
        <Input placeholder="Course mame" />
        <Input placeholder="Subject level" />

        <SaveButton>Save</SaveButton>
      </WrapperForm>
    </Wrapper>
  )
}

export default AddSubject

const Wrapper = styled.div`
  position: absolute;
  top: 78px;
  left: 440px;
`
const WrapperContent = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  align-items: center;
  gap: 20px;
  padding: 0 0 40px 0;
`
const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
`
const Subtitle = styled.p`
  padding: 0px 40px 20px 40px;
  font-size: 15px;
  line-height: 22px;
`
const Heading1 = styled.h2`
  font-size: 20px;
  font-weight: bold;
  padding: 40px 40px 20px 40px;
`
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
`

const WrapperForm = styled.form`
  width: 600px;
  height: 490px;
  background: white;
  border-radius: 10px;
`

const Input = styled.input`
  padding: 0 10px 0 10px;
  margin: 10px 30px 20px 30px;
  width: 88%;
  height: 44px;
  border-radius: 5px;
  border: solid 0.5px grey;
  outline: none;
  font-size: 18px;
  color: black;

  ::placeholder {
    color: rgb(1, 1, 1, 0.5);
    font-size: 15px;
  }
`

const SaveButton = styled.button`
  margin: 10px 30px 10px 30px;
  width: 92%;
  height: 44px;
  background-color: green;
  color: white;
  font-size: 15px;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
`
