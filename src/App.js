import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Location from './views/Location';
import SearchPage from './views/SearchPage';
import Login from './views/Login';
import Registration from './views/Registration';
import GitHub from './views/GitHubAuth';
import FindAccount from './views/FindAccount';
import ResetPassword from './views/ResetPassword';
import EmailConfirmationMessage from './views/EmailConfirmationMessage';
import NotFound from './views/404';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route
          exact
          path="/location/:id"
          render={props => <Location {...props} />}
        />
        <Route
          exact
          path="/locations"
          render={props => <SearchPage {...props} />}
        />
        <Route exact path="/login" render={props => <Login {...props} />} />
        <Route
          exact
          path="/account"
          render={props => <FindAccount {...props} />}
        />
        <Route
          exact
          path="/signup"
          render={props => <Registration {...props} />}
        />
        <Route exact path="/gitAuth" render={props => <GitHub {...props} />} />
        <Route
          exact
          path="/reset"
          render={props => <ResetPassword {...props} />}
        />
        <Route
          exact
          path="/email-message"
          render={props => <EmailConfirmationMessage {...props} />}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
