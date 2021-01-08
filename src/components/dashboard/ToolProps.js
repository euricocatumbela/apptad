import React from "react"
import styled from "styled-components"
import MainPage from "./StudentMain"

export default function ToolProps() {
  return (
    <Wrapper>
      <MainPage
        title="Students"
        icon=""
        heading="Add and manage your students"
        subtitle="This is where you’ll add students and manage your students. You can also remove and edit your students informations."
        addButton="Add student"
        manageButton="Manage students"
      />
    </Wrapper>
  )
}

const Wrapper = styled.div``
