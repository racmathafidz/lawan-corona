import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LandingPage from 'pages/LandingPage'

import 'assets/css/styles.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage}/>
    </Switch>
  );
}

export default App;
