import React from 'react';
import './App.css';
import VisitorHome from "./components/Visitor Home.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
        >
          Brew Review Mate
          <VisitorHome />
        </a>
      </header>
    </div>
  );
}

export default App;
