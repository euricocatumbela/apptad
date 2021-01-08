import React from "react"
import styled from "styled-components"
import StudentMain from "../components/dashboard/StudentMain"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import AdminTool from "../components/toolkit/AdminTool"

const ManageStudent = () => {
  return (
    <Wrapper>
      <SEO title="manage-student" />
      <Layout>
        <AdminTool />
        <StudentMain />
      </Layout>
    </Wrapper>
  )
}

export default ManageStudent

const Wrapper = styled.div`
  margin: 0 auto;
`
