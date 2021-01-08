import React from "react"
import SEO from "../../components/layout/seo"
import Layout from "../../components/layout/layout"
import AdminTool from "../../components/toolkit/AdminTool"
import TutorList from "../../components/table/TutorList"

export default function StudentTable() {
  return (
    <>
      <SEO title="tutor-table" />
      <Layout>
        <AdminTool />
        <TutorList />
      </Layout>
    </>
  )
}
