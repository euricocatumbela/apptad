import React from "react"
import styled from "styled-components"

const AvatarTool = () => {
  return (
    <Wrapper>
      <Option>Upload new avatar</Option>
      <Option>Delete avatar</Option>
    </Wrapper>
  )
}

export default AvatarTool

const Wrapper = styled.div`
  position: absolute;
  top: 10px;
  width: 220px;
  height: 100px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  display: grid;
  /* z-index: 1; */
`
const Option = styled.div`
  color: rgb(255, 255, 255, 0.7);
  border-bottom: solid 1px rgb(255, 255, 255, 0.2);
  text-align: center;
  margin: 10px;
  :hover {
    background: rgba(255, 255, 255, 0.1);
    background-blend-mode: overlay;
    mix-blend-mode: normal;
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 10px;
  }
`
