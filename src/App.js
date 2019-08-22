import React from 'react';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import Map from './components/Map';

function App() {
  return (
    <div>
      <Route exact path="/" render={props => <Home {...props} />} />
      <Route path="/locations" render={props => <Map {...props} />} />
    </div>
  );
}

export default App;

