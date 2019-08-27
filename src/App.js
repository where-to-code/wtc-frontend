import React from 'react';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div>
      <Route exact path="/" render={props => <Home {...props} />} />
      <Route path="/locations" render={props => <SearchPage {...props} />} />
    </div>
  );
}

export default App;
