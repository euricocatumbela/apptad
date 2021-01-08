import React from "react"
import SEO from "../../components/layout/seo"
import Layout from "../../components/layout/layout"
import AdminTool from "../../components/toolkit/AdminTool"
import AddSubject from "../../components/dashboard/AddSubject"

export default function NewSubject() {
  return (
    <>
      <SEO title="new-subject" />
      <Layout>
        <AdminTool />
        <AddSubject />
      </Layout>
    </>
  )
}
