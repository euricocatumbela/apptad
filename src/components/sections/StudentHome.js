import React from "react"
import styled from "styled-components"
import StudentTool from "../toolkit/StudentTool"
const StudentHome = () => {
  return (
    <Hero>
      <StudentTool />

      <HeroGroup>
        <Announcement>
          <Title> My Announcements</Title>
          <Text>
            No Institution Announcements have been posted in the last 7 days.
          </Text>
        </Announcement>

        <Activities>
          <Title>My activities</Title>
          <Text>Subject where you are: Student</Text>
        </Activities>
        <Help>
          <Title>Help</Title>
          <Text>Visit Blackboard Help for instructors</Text>
        </Help>
        <Tasks>
          <Title>My Tasks</Title>
          <Text>No tasks due</Text>
        </Tasks>
      </HeroGroup>
    </Hero>
  )
}

export default StudentHome

const Hero = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const HeroGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-right: 300px;
  padding: 60px;
  gap: 40px;
`
const Announcement = styled.div`
  width: 402px;
  height: 237.5px;
  background: rgba(255, 255, 255, 0.8);
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 20px 40px rgba(34, 79, 169, 0.1);
  backdrop-filter: blur(40px);
  border-radius: 20px;
`
const Activities = styled.div`
  width: 402px;
  height: 237.5px;
  background: rgba(255, 255, 255, 0.8);
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 20px 40px rgba(34, 79, 169, 0.1);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
`
const Help = styled.div`
  width: 402px;
  height: 237.5px;
  background: rgba(255, 255, 255, 0.8);
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 20px 40px rgba(34, 79, 169, 0.1);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
`
const Tasks = styled.div`
  width: 402px;
  height: 237.5px;
  background: rgba(255, 255, 255, 0.8);
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 20px 40px rgba(34, 79, 169, 0.1);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
`
const Title = styled.h1`
  margin-top: 30px;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
`
const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 30px;
  text-align: center;
`
