import * as React from "react"
import { DataGrid } from "@material-ui/data-grid"
import styled from "styled-components"

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "email",
    headerName: "Email address",
    width: 180,
  },
  {
    field: "phone",
    headerName: "Cell Number",
    width: 160,
  },
  {
    field: "address",
    headerName: "Address",
    width: 180,
  },
]

const rows = [
  {
    id: 1,
    firstName: "Eurico",
    lastName: "Catumbela",
    email: "eurico@icould.com",
    phone: "0614483647",
    address: "16 Cheviot Road",
  },
  {
    id: 2,
    firstName: "Alberto",
    lastName: "Almeida",
    email: "alberto@gmail.com",
    phone: "0623322345",
    address: "2 Goodwood",
  },
  {
    id: 3,
    firstName: "Celso",
    lastName: "Dealer",
    email: "celso@gmail.com",
    phone: "0623322345",
    address: "2 Sea Point",
  },
]

export default function Candidate() {
  return (
    <Wrapper>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 400px;
  width: 900px;
  background: white;
  position: relative;
  left: -20px;
  top: 50px;
`
