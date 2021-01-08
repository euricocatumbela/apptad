import React from "react"
import SEO from "../components/layout/seo"
import styled from "styled-components"
import TutorHome from "../components/sections/TutorHome"
import TutorTool from "../components/toolkit/TutorTool"

function Tutor() {
  return (
    <Hero>
      <SEO title="tutor" />
      <TutorTool />
      <TutorHome />
    </Hero>
  )
}
export default Tutor

const Hero = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 300px;
`
