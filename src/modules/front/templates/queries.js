import gql from 'graphql-tag';

export const GET_COUNTER = gql`
  query GET_COUNTER {
    counter {
      value
    }
  }
`;

export const MODIFY_COUNTER = gql`
  mutation MODIFY_COUNTER($amount: Int!) {
    modifyCounter(amount: $amount) @client {
      value
    }
  }
`;
