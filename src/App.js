import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// COMPONENTS

// PAGES
import Home from './pages/Home';


export default function App() {
  return (
    <div className="app">
      <Router>
        <div className="logo">Robert Giovinozzo</div>

        <Route path="/" exact render={() => <Home />} />
      </Router>
    </div>
  )
}