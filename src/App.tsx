import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>{process.env.REACT_APP_VARIABLE}</h1>
    </div>
  );
}

export default App;
