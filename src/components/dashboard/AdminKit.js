import React, { useState } from "react"
import styled from "styled-components"
import AddStudent from "./AddStudent"
import StudentManagment from "./StudentManagment"
import StudentTable from "./studentTable"

const AdminKit = () => {
  const options = ["All students", "Add student", "Manage student"]
  const [userOption, setUserOption] = useState("All students")
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

      <Page>{userOption === "All students" && <StudentTable />}</Page>
      <Page>{userOption === "Add student" && <AddStudent />}</Page>
      <Page>{userOption === "Manage student" && <StudentManagment />}</Page>
    </Wrapper>
  )
}

export default AdminKit

const Wrapper = styled.div`
  margin: 40px auto;
`
const WrapperButton = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px;
  gap: 20px;
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

const Page = styled.div`
  margin: 0;
`
