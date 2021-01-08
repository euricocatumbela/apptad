import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { studentData } from "../../data/MenuData"

export default function StudentTool() {
  return (
    <Wrapper>
      {studentData.map((item, index) => (
        <Link to={item.link} key={index}>
          <MenuItens>
            <img alt={item.title} src={item.icon} />
            {item.title}
          </MenuItens>
        </Link>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 280px;
  height: 720px;
  background: linear-gradient(180deg, #d37ee6 0%, #4926ad 100%);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 60px;
  padding: 20px;
`

const MenuItens = styled.div`
  color: rgba(255, 255, 255, 0.9);
  display: grid;
  grid-template-columns: 24px auto;
  gap: 20px;
  align-items: center;
  padding: 20px;
  transition: 0.5s ease-in-out;
  border-bottom: 1px solid rgb(255, 255, 255, 0.2);

  font-weight: normal;
  font-size: 15px;
  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }
`
