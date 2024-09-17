import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation {
    login(email: "john@mail.com", password: "changeme") {
      access_token
      refresh_token
    }
  }
`;
