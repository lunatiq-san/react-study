// Для создания элемента и работы с VDOM импортирую React
import React from "react";
// Для того, чтобы VDOM зарендерил в DOM, импортирую пакет ReactDOM
import ReactDOM from "react-dom";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// JSX - шаблонизатор, который при помощи Babel создает React.createElement()

const painting = {
  id: "id-1",
  url: "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
  title: "Feathers. Art abstract",
  price: 500,
  author: {
    tag: "ractapopulous",
    url: "https://pixabay.com/users/ractapopulous-24766/",
  },
  quantity: 10,
};

const painting2 = {
  id: "id-2",
  url: "https://cdn.pixabay.com/photo/2017/08/02/22/38/bird-2573779_1280.jpg",
  title: "Bird. Animal art abstract",
  price: 400,
  author: {
    tag: "ractapopulous",
    url: "https://pixabay.com/users/ractapopulous-24766/",
  },
  quantity: 15,
};

const template = (
  <div>
    <img src={painting.url} alt={painting.title} width="120" />
    <h2>{painting.title}</h2>
    <p>
      Author: <a href={painting.author.url}>{painting.author.tag}</a>
    </p>
    <p>Price: {painting.price} credits</p>
    <button type="button">Add in basket</button>
  </div>
);

ReactDOM.render(template, document.getElementById("root"));
// render принимает то, что я хочу зарендерить -> и куда
// ReactDOM.render(link, document.getElementById("root"));
// ReactDOM.render(
//   <React.StrictMode>{<App />}</React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// ***************************************************
// Test
// ****************************************************************
