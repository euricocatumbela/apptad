import React from "react"
import Header from "../sections/Header"
// import HeroSection from "../sections/HeroSection"
import { GlobalStyle } from "../styles/GlobalStyle"

import "./layout.css"

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      {/* <HeroSection /> */}
      <main>{children}</main>
    </>
  )
}

export default Layout
