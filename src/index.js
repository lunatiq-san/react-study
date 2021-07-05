// For create element and work with VDOM import React
// In each component import React
import React from "react";
// In order to VDOM render in DOM, import packet ReactDOM
import ReactDOM from "react-dom";
import App from "./App";
// import reportWebVitals from './reportWebVitals';

// JSX - template, which with the help Babel create React.createElement()

// Strict Mode - https://ru.reactjs.org/docs/strict-mode.html
// a tool for detecting potential problems in the application
ReactDOM.render(
  <React.StrictMode>{<App />}</React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(template, document.getElementById("root"));
// render принимает то, что я хочу зарендерить -> и куда
// ReactDOM.render(link, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// ***************************************************
// Test
// ****************************************************************
