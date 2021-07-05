// Application - main component our app
// Component - it's function (кинул в неё настройки, она вернула VDOM)
// Components must be named with a capital letter
// 1 file - 1 component
// In each component import React
import React from "react";
import Painting from "./components/Paintings";
import paintings from "./paintings.json";

const App = () => {
  return (
    <div>
      <h1>Main app component-container</h1>
      <a href="https://ru.reactjs.org/docs/strict-mode.html" target="_blank">
        StrictMode
      </a>
      {/* Painting src, title -> props */}
      <Painting
        url={paintings[0].url}
        title={paintings[0].title}
        price={paintings[0].price}
        profileUrl={paintings[0].author.url}
        tag={paintings[0].author.tag}
        target="_blank"
        quantity={paintings[0].quantity}
      />
      <Painting
        url="https://cdn.pixabay.com/photo/2017/08/02/22/38/bird-2573779_1280.jpg"
        title="Bird. Animal art abstract"
        price={300}
        profileUrl="https://pixabay.com/users/ractapopulous-24766/"
        tag="ractapopulous"
        quantity={paintings[2].quantity}
      />
    </div>
  );
};

export default App;
