import React from "react"
import { FileMain } from "../components/dashboard/StudentMain"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import AdminTool from "../components/toolkit/AdminTool"

export default function File() {
  return (
    <>
      <SEO title="file" />
      <Layout>
        <AdminTool />
        <FileMain />
      </Layout>
    </>
  )
}
