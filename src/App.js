import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
//import VisitorHome from "./components/Visitor Home.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
        >
          Brew Review Mate
          <Router>
            <Navigation />
          </Router>
        </a>
      </header>
    </div>
  );
}

export default App;
