import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../../components/layout/layout";
import SEO from "../../components/layout/seo";
import AdminTool from "../../components/toolkit/AdminTool";
//API Gateaway
import { API, graphqlOperation } from "aws-amplify";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { listSubjects } from "../../graphql/queries";

var date = new Date();
var currentDate = date.getFullYear();
var currentDay = date.getDate();

const CountDash = () => {
  const [subjects, setSubjects] = useState([listSubjects]);

  useEffect(() => {
    //fetch notes
    fetchSubjects();
  }, []);

  async function fetchSubjects() {
    try {
      const subjectData = await API.graphql(graphqlOperation(listSubjects));
      const subjects = subjectData.data.listSubjects.items;
      setSubjects(subjects);
    } catch (err) {
      console.log("error fetching subjects");
    }
  }
  const length = subjects.length;
  var percentage = 100;
  let total = length / percentage;
  console.log(total);

  console.log(length);
  return (
    <WrapperTitle>
      <h1>Overview dashboard</h1>

      <Text>
        Today - {currentDay}/{currentDate}
      </Text>
      <HomeMain>
        <VerticalLine1>
          <h3>Balance</h3>
          <h2> R 0,00</h2>
          <p>0%</p>
        </VerticalLine1>
        <VerticalLine2>
          <h3>Students</h3>
          <h2>0</h2>
          <p>0%</p>
        </VerticalLine2>
        <VerticalLine3>
          <h3>Tutors</h3>
          <h2>0</h2>
          <p>0%</p>
        </VerticalLine3>
        <VerticalLine4>
          <h3>Courses</h3>
          <h2>0</h2>
          <p>0%</p>
        </VerticalLine4>
        <VerticalLine5>
          <h3>Level</h3>
          <h2>4</h2>
          <p>0%</p>
        </VerticalLine5>
        <VerticalLine6>
          <h3>Subjects</h3>
          <h2>{length}</h2>
          <p>{total}</p>
        </VerticalLine6>
      </HomeMain>
    </WrapperTitle>
  );
};

const Home = () => {
  return (
    <HomeStyle>
      <AmplifyAuthenticator>
        <SEO title="admin" />
        <Layout>
          <AdminTool />
          <CountDash />
        </Layout>
      </AmplifyAuthenticator>
    </HomeStyle>
  );
};

export default Home;

const WrapperTitle = styled.div`
  position: absolute;
  top: 80px;
  left: 350px;
  h1 {
    font-size: 28px;
    font-weight: 400;
    padding: 0 0 10px 0;
  }
`;

const Text = styled.p`
  border-radius: 5px;
  border: solid 0.5px black;
  padding: 10px 0 10px 0;
  font-weight: 400;
  width: 150px;
  height: 40px;
  background: white;
  text-align: center;
`;

const HomeStyle = styled.div`
  margin: 0 auto;
`;
const HomeMain = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-top: 60px;
  margin-bottom: 60px;
  margin-right: 200px;
  width: 100%;
  height: 250px;
  background-color: green;
  /* background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%); */
  border-radius: 10px;
`;
const VerticalLine1 = styled.div`
  margin-top: 10px;
  margin-left: 30px;
  border-right: 6px #ffffff solid;
  height: 180px;

  /* background-color: #00b712; */
  h2 {
    color: white;
    line-height: 40px;
    font-size: 28px;
    font-weight: bold;
  }
  h3 {
    color: white;
    line-height: 40px;
    font-size: 22px;
    font-weight: bold;
  }
  p {
    color: white;
    /* color: #00b712; */
    line-height: 40px;
    font-size: 18px;
  }
`;
const VerticalLine2 = styled.div`
  margin-top: 10px;
  margin-left: 30px;
  border-right: 6px #ffffff solid;
  height: 210px;

  h2 {
    color: white;
    line-height: 40px;
    font-size: 28px;
    font-weight: bold;
  }
  h3 {
    color: white;
    line-height: 40px;
    font-size: 22px;
    font-weight: bold;
  }
  p {
    color: white;
    /* color: #00b712; */
    line-height: 40px;
    font-size: 18px;
  }
`;
const VerticalLine3 = styled.div`
  margin-top: 10px;
  margin-left: 30px;
  border-right: 6px #ffffff solid;
  height: 180px;
  h2 {
    color: white;
    line-height: 40px;
    font-size: 28px;
    font-weight: bold;
  }
  h3 {
    color: white;
    line-height: 40px;
    font-size: 22px;
    font-weight: bold;
  }
  p {
    color: white;
    /* color: #00b712; */
    line-height: 40px;
    font-size: 18px;
  }
`;
const VerticalLine4 = styled.div`
  margin-top: 10px;
  margin-bottom: 128px;
  margin-left: 30px;
  border-right: 6px #ffffff solid;
  height: 210px;

  h2 {
    color: white;
    line-height: 40px;
    font-size: 28px;
    font-weight: bold;
  }
  h3 {
    color: white;
    line-height: 40px;
    font-size: 22px;
    font-weight: bold;
  }
  p {
    color: white;
    /* color: #00b712; */
    line-height: 40px;
    font-size: 18px;
  }
`;
const VerticalLine5 = styled.div`
  margin-top: 10px;
  margin-bottom: 128px;
  margin-left: 30px;
  border-right: 6px #ffffff solid;
  height: 180px;

  h2 {
    color: white;
    line-height: 40px;
    font-size: 28px;
    font-weight: bold;
  }
  h3 {
    color: white;
    line-height: 40px;
    font-size: 22px;
    font-weight: bold;
  }
  p {
    color: white;
    /* color: #00b712; */
    line-height: 40px;
    font-size: 18px;
  }
`;
const VerticalLine6 = styled.div`
  margin-top: 10px;
  margin-bottom: 128px;
  margin-left: 30px;

  h2 {
    color: white;
    line-height: 40px;
    font-size: 28px;
    font-weight: bold;
  }
  h3 {
    color: white;
    line-height: 40px;
    font-size: 22px;
    font-weight: bold;
  }
  p {
    color: white;
    /* color: #00b712; */
    line-height: 40px;
    font-size: 18px;
  }
`;

// const NewGraph = styled.div`
//   h1 {
//     color: white;
//     line-height: 40px;
//     font-size: 22px;
//     font-weight: bold;
//   }
//   position: absolute;
//   top: 300px;
//   left: 520px;
// `;
