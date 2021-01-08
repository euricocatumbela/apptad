import React from "react"
import SEO from "../../components/layout/seo"
import Layout from "../../components/layout/layout"
import AdminTool from "../../components/toolkit/AdminTool"
import StudentList from "../../components/table/StudentList"

export default function StudentTable() {
  return (
    <>
      <SEO title="student-table" />
      <Layout>
        <AdminTool />
        <StudentList />
      </Layout>
    </>
  )
}
