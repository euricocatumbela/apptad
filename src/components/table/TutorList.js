import React, { forwardRef } from "react";
import MaterialTable from "material-table";
import { TabScrollButton } from "@material-ui/core";
import styled from "styled-components";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { Link } from "gatsby";

export default function TutorList() {
  const [state, setState] = React.useState({
    columns: [
      {
        id: "1",
        title: "FirstName",
        field: "firstName",
      },
      {
        title: "LastName",
        field: "lastName",
      },
      {
        title: "Email",
        field: "emailAddress",
      },
      {
        title: "PhoneNumber",
        field: "phoneNumber",
      },
      {
        title: "address",
        field: "address",
      },
      {
        title: "City",
        field: "city",
      },
      {
        title: "State",
        field: "state",
      },
      {
        title: "PostalCode",
        field: "postCode",
      },
    ],

    data: [
      {
        id: 1,
        firstName: "Eurico",
        lastName: "Catumbela",
        emailAddress: "erick@ejctechnology.co.za",
        phoneNumber: "0622575680",
        address: "16 Cheviot",
        city: "Cape Town",
        state: "Western Cape",
        postCode: "8000",
      },
      {
        id: 2,
        firstName: "Wilson",
        lastName: "Catumbela",
        emailAddress: "wilson@ejctechnology.co.za",
        phoneNumber: "931543419",
        address: "Tundavala",
        city: "Lubango",
        state: "Huila",
        postCode: "111",
      },
      {
        id: 3,
        firstName: "Valentim",
        lastName: "Catumbela",
        emailAddress: "valentin@ejctechnology.co.za",
        phoneNumber: "924922672",
        address: "Comercial",
        city: "Lubango",
        state: "Huila",
        postCode: "111",
      },
      {
        id: 4,
        firstName: "Edilson",
        lastName: "Catumbela",
        emailAddress: "edilson@ejctechnology.co.za",
        phoneNumber: "937435527",
        address: "Comercial",
        city: "Lubango",
        state: "Huila",
        postCode: "111",
      },
      {
        id: 5,
        firstName: "Abednego",
        lastName: "Catumbela",
        emailAddress: "Abednego@ejctechnology.co.za",
        phoneNumber: "925423854",
        address: "Comercial",
        city: "Lubango",
        state: "Huila",
        postCode: "111",
      },
      {
        id: 6,
        firstName: "Agustinho",
        lastName: "Nangolo",
        emailAddress: "agustinho@ejctechnology.co.za",
        phoneNumber: "933108123",
        address: "Comercial",
        city: "Lubango",
        state: "Huila",
        postCode: "111",
      },
      {
        id: 7,
        firstName: "Marciana",
        lastName: "Tchipela",
        emailAddress: "marciana@ejctechnology.co.za",
        phoneNumber: "926199227",
        address: "Comercial",
        city: "Lubango",
        state: "Huila",
        postCode: "111",
      },
      {
        id: 8,
        firstName: "Marcia",
        lastName: "Catumbela",
        emailAddress: "marcia@ejctechnology.co.za",
        phoneNumber: "931543419",
        address: "Tundavala",
        city: "Lubango",
        state: "Huila",
        postCode: "111",
      },
      {
        id: 8,
        firstName: "Marcia",
        lastName: "Catumbela",
        emailAddress: "marcia@ejctechnology.co.za",
        phoneNumber: "931543419",
        address: "Tundavala",
        city: "Lubango",
        state: "Huila",
        postCode: "111",
      },
    ],
  });

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  return (
    <Wrapper>
      <WrapperContent>
        <Link to="/admin/manage-tutor">
          <BackButton>
            <TabScrollButton />
          </BackButton>
        </Link>
        <Title>Back to tutors</Title>
      </WrapperContent>
      <MaterialTable
        title="Manage tutor"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
        icons={tableIcons}
      ></MaterialTable>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  width: 78%;
  top: 88px;
  left: 280px;
`;
const WrapperContent = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  align-items: center;
  gap: 20px;
  padding: 0 0 40px 0;
`;
const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
`;
const BackButton = styled.button`
  width: 60px;
  height: 40px;
  cursor: pointer;
  font-size: 14px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-weight: bold;
  transform: rotateY(90deg) rotateY(90deg);
`;
