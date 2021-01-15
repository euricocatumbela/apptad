import React from "react";
import styled from "styled-components";

import Global from "../../components/layout/global";
import SEO from "../../components/layout/seo";

const Calendar = () => {
  return (
    <Wrapper>
      <SEO title="tutor-calendar" />
      <Global />
      <h1>Hello</h1>
    </Wrapper>
  );
};

export default Calendar;

const Wrapper = styled.div``;
