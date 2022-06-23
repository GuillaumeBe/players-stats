import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";

import App from "./components/App";
import GlobalStyles from "./components/GlobalStyles";
import theme from "./theme";
import reportWebVitals from "./reportWebVitals";

const client = new ApolloClient({
  uri: "https://kf9p4bkih6.execute-api.eu-west-1.amazonaws.com/dev/",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
