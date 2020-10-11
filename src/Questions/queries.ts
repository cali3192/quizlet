import gql from "graphql-tag";
// import gql from '@apollo/client'

import {
  // compose,
  graphql,
} from "react-apollo";
import Questions from "./index";

export const GET_QUESTIONS_QUERY = gql`
  query {
    questionsList {
      items {
        question
        options
        answer
        image
      }
    }
  }
`;

export default graphql<any, any, any, any>(GET_QUESTIONS_QUERY, {
  props: (result) => {
    const { data } = result;

    let items = [];

    if (data && data?.questionsList) {
      items = data.questionsList.items;
    }

    return {
      items,
      // loading,
    };
  },
})(Questions);
