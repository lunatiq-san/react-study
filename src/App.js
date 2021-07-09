// Application - main component our app
// Component - it's function (кинул в неё настройки, она вернула VDOM)
// Components must be named with a capital letter
// 1 file - 1 component
// In each component import React
// import React from "react";
import Logo from './components/Logo';
// import Painting for 1 element
import Painting from './components/Painting';
import PaintingList from './components/PaintingList';
import Panel from './components/Panel';
import paintings from './paintings.json';
import ColorPicker from './components/ColorPicker/ColorPicker';

const colors = ['blue', 'red', 'green'];
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const App = () => {
  return (
    <div>
      <ColorPicker options={colorPickerOptions} />
      <Panel title="Panel">
        {/* children */}
        <p>Hello</p>
        <a href="https://google.com">link</a>
      </Panel>
      <Panel>
        {/* children */}
        <p>Good bye</p>
        <p>Some text</p>
      </Panel>
      <Logo text="Main app component-container" />
      {/* Painting url, title etc. (any name) -> props */}
      <Painting
        url={paintings[0].url}
        title={paintings[0].title}
        price={paintings[0].price}
        profileUrl={paintings[0].author.url}
        tag={paintings[0].author.tag}
        target="_blank"
        quantity={paintings[0].quantity}
      />
      {/* Collection render */}
      <ul>
        {colors.map(color => (
          // Static collection. We can add key={item}
          <li key={color}>{color}</li>
        ))}
      </ul>

      <PaintingList items={paintings} />
    </div>
  );
};

export default App;
