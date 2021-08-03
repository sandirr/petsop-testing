import './App.css';
import {BrowserRouter as Router,
        Switch, Route, useHistory} from 'react-router-dom'

import Login from './page/Login'
import Main from './page/Main';

function App() {
  const history = useHistory()
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route path="/">
            <Main/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
