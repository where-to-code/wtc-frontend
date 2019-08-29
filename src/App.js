import React from 'react';
import { Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Home from './views/Home';
import Location from './views/Location';
import SearchPage from './components/SearchPage';
import Login from './components/Login';
import Registration from './components/Registration';



library.add(fab)
const App = () => {
  return (
    <div>
      <Route exact path="/" render={props => <Home {...props} />} />
      <Route path="/location/:id" render={props => <Location {...props} />} />
      <Route path="/locations" render={props => <SearchPage {...props} />} />
      <Route path="/login" render={props => <Login {...props} />} />
      <Route path="/signup" render={props => <Registration {...props} />} />
    </div>
  );
}

export default App;
