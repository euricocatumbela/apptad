import React from "react";
import HeaderTutor from "../sections/HeaderTutor";
import { GlobalStyle } from "../styles/GlobalStyle";

import "./layout.css";

function Global({ children }) {
  return (
    <>
      <GlobalStyle />
      <HeaderTutor />

      <main>{children}</main>
    </>
  );
}

export default Global;
