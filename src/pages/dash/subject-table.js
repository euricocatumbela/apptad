import React from "react"
import SEO from "../../components/layout/seo"
import Layout from "../../components/layout/layout"
import AdminTool from "../../components/toolkit/AdminTool"
import SubjectList from "../../components/table/SubjectList"

export default function SubejctTable() {
  return (
    <>
      <SEO title="student-table" />
      <Layout>
        <AdminTool />
        <SubjectList />
      </Layout>
    </>
  )
}
