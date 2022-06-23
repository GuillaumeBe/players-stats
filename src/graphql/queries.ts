import { gql } from "@apollo/client";

const PLAYERS = gql`
  query players {
    players {
      id
      firstname
      lastname
      sex
      picture {
        url
      }
      country {
        picture {
          url
        }
        code
      }
      stats {
        rank
        points
        weight
        height
        age
      }
    }
  }
`;

export default PLAYERS;
