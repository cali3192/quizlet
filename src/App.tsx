import React, { FC } from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import "./App.css";

const client = new ApolloClient({
  uri: process.env.REACT_API_HOST,
});

const App: FC = () => {
  const apiHost = process.env.REACT_APP_API_HOST;
  console.log("LOG: App:FC ", { apiHost });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">testing</header>
      </div>
    </ApolloProvider>
  );
};

export default App;
