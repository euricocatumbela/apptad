import React from "react"
import SEO from "../../components/layout/seo"
import Layout from "../../components/layout/layout"
import AdminTool from "../../components/toolkit/AdminTool"
import AddTutor from "../../components/dashboard/AddTutor"
export default function NewTutor() {
  return (
    <>
      <SEO title="new-tutor" />
      <Layout>
        <AdminTool />
        <AddTutor />
      </Layout>
    </>
  )
}
