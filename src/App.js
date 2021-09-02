/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';
import StatistikPage from 'pages/StatistikPage';
import FaqPage from 'pages/FaqPage';
import NotFoundPage from 'pages/NotFoundPage';

import 'assets/css/styles.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/statistik" component={StatistikPage} />
      <Route exact path="/faq" component={FaqPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  );
}

export default App;
