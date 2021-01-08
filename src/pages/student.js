import React from "react"

import StudentHome from "../components/sections/StudentHome"
import styled from "styled-components"

function Student() {
  return (
    <Hero>
      <StudentHome />
    </Hero>
  )
}
export default Student

const Hero = styled.div`
  margin: 0 auto;
`
