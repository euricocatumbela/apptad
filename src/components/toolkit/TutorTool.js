import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { tutorData } from "../../data/MenuData";

export default function TutorTool() {
  // const [active, setActive] = useState(false);
  return (
    <Wrapper>
      {tutorData.map((item, index) => (
        <Link to={item.link} key={index}>
          <MenuItens>
            <IconWrapper>
              <img alt={item.title} src={item.icon} />
            </IconWrapper>
            {item.title}
          </MenuItens>
        </Link>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 280px;
  height: 1168px;
  background: #ffff;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  padding: 10px 10px 0 10px;
  margin-top: 50px;
`;

const MenuItens = styled.div`
  color: black;
  display: grid;
  grid-template-columns: 24px auto;
  gap: 30px;
  align-items: center;
  padding: 14px;
  transition: 0.5s ease-in-out;
  border-bottom: 1px solid rgb(255, 255, 255, 0.2);

  font: 500 13px/1 Gotham Pro, Proxima Nova, arial, serif;
  font-size: 18px;
  :hover {
    background: lightgray;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }
  /* background: ${(props) => (props.active ? "lightgray" : "black")};*/
`;
const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background: green;
  /* background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%); */
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-items: center;
`;
