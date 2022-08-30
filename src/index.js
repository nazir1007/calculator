import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// importing App.js file from Components folder //
import App from "./Components/App";

// Rendering the React App into the HTML DOM Element "root" //
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
