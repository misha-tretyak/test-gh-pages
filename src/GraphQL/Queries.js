import { gql } from '@apollo/client';

export const GET_CURRENCIES = gql`
  query getCurrencies {
    currencies {
      _id
      value
      name
      code
      badge
    }
  }
`;
