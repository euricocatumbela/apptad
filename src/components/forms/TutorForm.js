import React from "react"
import styled from "styled-components"

const TutorForm = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <Form>
          <Field>
            <Label>First name</Label>
            <Input />
          </Field>

          <Field>
            <Label>Last name</Label>
            <Input />
          </Field>

          <Field>
            <Label>Email address</Label>
            <Input />
          </Field>

          <Field>
            <Label>Date of Birth</Label>
            <Input type="date" id="birthday" name="birthday" />
          </Field>

          <Field>
            <Label>Country of Birth</Label>
            <Input />
          </Field>
          <Field>
            <Label>Phone Number</Label>
            <Input />
          </Field>

          <Field>
            <Label>Occupation</Label>
            <select>
              <option value="select">{}</option>
              <option selected value="student">
                Student
              </option>
              <option>Self employee</option>
              <option>Employee</option>
            </select>
          </Field>

          <Field>
            <Label role="button">Subject of Interest</Label>
            <select>
              <option selected value="select">
                {}
              </option>
              <option selected value="fluid">
                Fluid Mechanics
              </option>
              <option value="maths">Engineering Mathematics</option>
              <option value="drawing">Drawing</option>
            </select>
          </Field>
          <Field>
            <Label role="button">Education </Label>
            <select>
              <option selected value="select">
                {}
              </option>
              <option selected value="cput">
                Cape Peninsula University of Technology
              </option>
              <option value="uct">University of Cape Town</option>
              <option value="up">University of Pretoria</option>
              <option value="uj">University of Johanesburg</option>
            </select>
          </Field>

          <Field>
            <Label>Gender</Label>
            <select>
              <option velue="select">{}</option>
              <option velue="male">Male</option>
              <option velue="female">Female</option>
            </select>
          </Field>

          <Field>
            <Label>Tutoring Preference</Label>
            <select>
              <option velue="select">{}</option>
              <option velue="male">Online</option>
              <option velue="female">In Person</option>
            </select>
          </Field>

          <Field>
            <Label></Label>
            <ApplyButton>+</ApplyButton>
          </Field>
        </Form>
      </FormWrapper>
    </Wrapper>
  )
}

export default TutorForm

const Wrapper = styled.div`
  width: 780px;
  height: 760px;
  margin: 40px 120px 0 0;
  background: rgb(30, 19, 87);
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 20px;
`
const FormWrapper = styled.div`
  padding: 40px 0 0 40px;
`

const Form = styled.div`
  display: grid;
  grid-template-columns: 350px 350px;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

const Field = styled.div`
  select {
    margin: 10px 0;
    width: 310px;
    height: 44px;
    outline: none;
    font-size: 15px;
    background: transparent;
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(40px);
    color: rgb(255, 255, 255, 0.9);
    ::placeholder {
      color: rgb(255, 255, 255, 0.9);
    }
  }
`
const Label = styled.label`
  color: darkgray;
  text-transform: uppercase;
`
const Input = styled.input`
  font-size: 22px;
  margin: 10px 0;
  font-size: 15px;
  width: 300px;
  height: 34px;
  outline: none;
  background: transparent;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  color: rgb(255, 255, 255, 0.9);
  ::placeholder {
    color: rgb(255, 255, 255, 0.9);
  }
`

const ApplyButton = styled.button`
  /* margin: 10px 0 0 90px; */
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background: green;
  font-size: 20px;
  color: white;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  outline: none;

  cursor: pointer;
`
