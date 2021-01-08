import React from "react"
import styled from "styled-components"
import ContentFile from "../components/sections/ContentCreatorFile"
import TutorTool from "../components/toolkit/TutorTool"

const TutorContentCreator = () => {
  return (
    <Hero>
      <TutorTool />
      <ContentFile />
    </Hero>
  )
}

export default TutorContentCreator

const Hero = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 150px;
  margin-right: 500px;
`
