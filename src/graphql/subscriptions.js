/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSubject = /* GraphQL */ `
  subscription OnCreateSubject($owner: String!) {
    onCreateSubject(owner: $owner) {
      id
      name
      course
      academic_level
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateSubject = /* GraphQL */ `
  subscription OnUpdateSubject($owner: String!) {
    onUpdateSubject(owner: $owner) {
      id
      name
      course
      academic_level
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteSubject = /* GraphQL */ `
  subscription OnDeleteSubject($owner: String!) {
    onDeleteSubject(owner: $owner) {
      id
      name
      course
      academic_level
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($owner: String!) {
    onCreateTodo(owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($owner: String!) {
    onUpdateTodo(owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($owner: String!) {
    onDeleteTodo(owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
