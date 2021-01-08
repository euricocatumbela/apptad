import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import StudentContentPage from "../components/sections/StudentContent"
import StudentTool from "../components/toolkit/StudentTool"

const StudentContent = () => {
  return (
    <Hero>
      <Layout>
        <SEO title="student-content" />
        <StudentTool />
        <StudentContentPage />
      </Layout>
    </Hero>
  )
}

export default StudentContent

const Hero = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  padding-bottom: 300px;
`
