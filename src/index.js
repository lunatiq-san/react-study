// For create element and work with VDOM import React
// In each component import React
// In React - false, null, undefined don't render

import 'modern-normalize/modern-normalize.css';
import React from 'react';
// In order to VDOM render in DOM, import packet ReactDOM
import ReactDOM from 'react-dom';
import App from './App';
// import App from "./AppSummary";
// import AppLesson from "./AppLesson";
// import report WebVitals from './reportWebVitals';
import './styles.css';

// JSX - template, which with the help Babel create React.createElement()

// Strict Mode - https://ru.reactjs.org/docs/strict-mode.html
// a tool for detecting potential problems in the application
ReactDOM.render(
  <React.StrictMode>
    {<App />}
    {/* {<AppSummary />} */}
  </React.StrictMode>,
  document.getElementById('root'),
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

// ReactDOM.render(<AppLesson />, document.getElementById("root"));

// function ListItem(props) {
// Correct! There is no need to specify the key here:
// return <li>{props.value}</li>;
// }

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) => (
//     // Correct! Key should be specified inside the array.
//     <ListItem key={number.toString()} value={number} />
//   ));
//   return <ul>{listItems}</ul>;
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById("root")
// );

// ****************************************************************
