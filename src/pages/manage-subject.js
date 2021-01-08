import React from "react"
import styled from "styled-components"
import { SubjectMain } from "../components/dashboard/StudentMain"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import AdminTool from "../components/toolkit/AdminTool"

const ManageSubject = () => {
  return (
    <Wrapper>
      <Layout>
        <SEO title="manage-subject" />
        <AdminTool />
        <SubjectMain />
      </Layout>
    </Wrapper>
  )
}

export default ManageSubject

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
