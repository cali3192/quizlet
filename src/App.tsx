import React, { FC } from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import Questions from "./Questions";

import "./App.css";

const client = new ApolloClient({
  uri: process.env.REACT_API_HOST,
});

const App: FC = () => {
  const apiHost = process.env.REACT_APP_API_HOST;
  console.log("LOG: App:FC ", { apiHost });

  return (
    // provider takes in client prop - gives us access to the 8base schema
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">Main js</header>
        <Questions />
      </div>
    </ApolloProvider>
  );
};

export default App;
