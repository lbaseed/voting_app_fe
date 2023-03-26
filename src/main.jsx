import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { MaterialTailwindControllerProvider } from "@/context";
import "../public/css/tailwind.css";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client"

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_KEY,
  cache: new InMemoryCache,
  headers: {
    authorization: localStorage.getItem('token'),
    'client-name': 'WidgetX Ecom [web]',
    'client-version': '1.0.0'
  }
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
        <ApolloProvider client={client}>
          <ThemeProvider>
            <MaterialTailwindControllerProvider>
              <App />
            </MaterialTailwindControllerProvider>
          </ThemeProvider>
        </ApolloProvider>
    </HashRouter>
  </React.StrictMode>
);
