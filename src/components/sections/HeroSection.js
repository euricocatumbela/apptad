import React from "react"
import styled from "styled-components"
import { H1 } from "../styles/TextStyles"
import Amplify from "aws-amplify"
import awsconfig from "../../aws-exports"
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react"
Amplify.configure(awsconfig)
function HeaderSection() {
  return (
    <Wrapper>
      <AmplifyAuthenticator>
        <Title>Admin TakeAnyDoubt</Title>
        <AmplifySignOut />
      </AmplifyAuthenticator>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
`
const Title = styled(H1)`
  color: white;
  text-align: center;
`
export default HeaderSection
