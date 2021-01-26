import React, { useState } from "react";
import styled from "styled-components";
import SEO from "../../components/layout/seo";
import Iframe from "react-iframe";
import { content } from "../../data/contentData";
import { GlobalStyle } from "../../components/styles/GlobalStyle";

const ContentJob = () => {
  const [current, setCurrent] = useState(0);
  const length = content.length;
  console.log(length);

  function nextSlide(event) {
    event.preventDefault();
    setCurrent(current === length - 1 ? 0 : current + 1);
  }
  function prevSlide(event) {
    event.preventDefault();
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if (!Array.isArray(content) || content.length <= 0) {
    return null;
  }
  return (
    <Wrapper>
      <GlobalStyle />
      <SEO title="content-job" />
      <Header>
        <Title>TakeAnyDoubt</Title>
        <Form>
          {content.map((item, index) => (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && <Text> Subejct ID {item.subjectId}</Text>}
            </div>
          ))}
          {content.map((item, index) => (
            <div className={index === current ? "slide active" : "slide"}>
              {index === current && <Text>Content Id {item.id}</Text>}
            </div>
          ))}

          <EditButton onClick={prevSlide}>Deny</EditButton>
          <SubmitButton onClick={nextSlide}>Aprove</SubmitButton>
        </Form>
      </Header>
      <WrapperContent>
        {/* <Iframe
          // src="http://docs.google.com/gview?url=docus/certificate.pdf&embedded=true"
          src={content[0].image}
          // url="http://www.youtube.com/embed/xDMP3i36naA"
          width="1024px"
          height="550px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
          allow="fullscreen"
        /> */}
        {content.map((item, index) => (
          <div className={index === content ? "" : ""} key={index}>
            {index === current && (
              <Iframe width="1024px" height="550px" src={item.image} />
            )}
          </div>
        ))}
      </WrapperContent>
    </Wrapper>
  );
};

export default ContentJob;

const Wrapper = styled.div`
  padding: 120px 0 0 0;
  display: grid;
  justify-content: center;
`;

const WrapperContent = styled.div`
  display: block;
`;

const Header = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  padding: 10px 0 10px 0;
  background: #ffff;
  box-shadow: 0px 1px 1px #c4c4c4;
  z-index: 1;
  display: grid;
  grid-template-columns: 44px auto;
  justify-content: space-around;
`;

const Form = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  gap: 30px;
  justify-content: end;
  align-items: center;
`;
const EditButton = styled.button`
  width: 100px;
  height: 44px;
  border-radius: 5px;
  border: none;
  color: white;
  background: red;
  font-size: 14px;
  cursor: pointer;
`;
const SubmitButton = styled.button`
  width: 100px;
  height: 44px;
  border-radius: 5px;
  border: none;
  color: white;
  background: green;
  font-size: 14px;
  cursor: pointer;
`;

const Title = styled.h1`
  text-align: center;
  padding: 10px;
  width: 134px;
  height: 44px;
  background-color: green;
  /* background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%); */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: white;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: bold;
`;
