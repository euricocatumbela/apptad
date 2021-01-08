import React from "react"
import SEO from "../../components/layout/seo"
import Layout from "../../components/layout/layout"
import AdminTool from "../../components/toolkit/AdminTool"
import AddStudent from "../../components/dashboard/AddStudent"
export default function NewStudent() {
  return (
    <>
      <SEO title="new-student" />
      <Layout>
        <AdminTool />
        <AddStudent />
      </Layout>
    </>
  )
}
