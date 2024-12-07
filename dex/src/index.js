import React from "react";
import ReactDOM from "react-dom/client";
import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router-dom";
import { configureChains, createClient, mainnet, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import App from "./App";
import "./index.css";

const { provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()]
);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <BrowserRouter>
        <Helmet>
          <script
            src="https://pixel.gobyherd.com?apiKey=sk_test_51EnwT1JASH55aoyucC9tANSgAXtZ6DzbQ"
            defer
          />
        </Helmet>
        <App />
      </BrowserRouter>
    </WagmiConfig>
  </React.StrictMode>
);
