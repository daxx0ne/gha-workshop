// src/App.js
import React from 'react';

function App() {
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <div className="App">
      <h1>Simple List Example</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;