import React, { useState } from "react"
import styled from "styled-components"
import TutorForm from "../forms/TutorForm"
import Candidate from "./Candidate"
import TutorTable from "./TutorTable"

const TutorKit = () => {
  const options = ["All tutors", "Add tutor", "Candidate", "Manage tutors"]
  const [userOption, setUserOption] = useState("All tutors")
  return (
    <Wrapper>
      <WrapperButton>
        {options.map(option => (
          <WrapperButtonContent>
            <OptionButton
              type="button"
              key={option}
              onClick={() => setUserOption(option)}
            >
              {option}
            </OptionButton>
          </WrapperButtonContent>
        ))}
      </WrapperButton>

      <Page>
        <Title>{userOption === "All tutors" && "Tutor List"}</Title>
        {userOption === "All tutors" && <TutorTable />}
      </Page>
      <Page>
        {" "}
        <Title>{userOption === "Add tutor" && "New tutor"}</Title>
        {userOption === "Add tutor" && <TutorForm />}
      </Page>

      <Page>
        <Title>{userOption === "Candidate" && "New Candidate"}</Title>
        {userOption === "Candidate" && <Candidate />}
      </Page>
      <Page>
        {" "}
        <Title>{userOption === "Manage tutors" && "Manage Tutor"}</Title>
        {userOption === "Manage tutors" && <TutorForm />}
      </Page>
    </Wrapper>
  )
}

export default TutorKit

const Wrapper = styled.div`
  margin: 40px 100px 0 0;
`
const WrapperButton = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px 200px;
  gap: 10px;
`
const WrapperButtonContent = styled.div`
  background: rgb(30, 19, 87);
  display: grid;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`
const OptionButton = styled.button`
  background: linear-gradient(180deg, #d37ee6 0%, #4926ad 100%);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  width: 200px;
  height: 80px;
  font-size: 18px;
  outline: none;
  cursor: pointer;
  border-radius: 20px;
  color: #d5d6d7;
  border: none;
  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }
`

const Page = styled.div``
const Title = styled.h1`
  margin: 50px auto;
  font-size: 34px;
  font-weight: bold;
  color: white;
  text-align: center;
`
