import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// COMPONENTS
import LoadingSpinner from './components/Loading';
// PAGES
import Home from './pages/Home';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // count is 0 here
    }, 1200);
  }, []);

  return (
    <div className="app">
      <LoadingSpinner loading={loading}/>
      <Router>
        <Route path="/" exact render={() => <Home loading={loading}/>} />
      </Router>
    </div>
  )
}