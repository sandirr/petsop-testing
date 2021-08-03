import './App.css';
import {BrowserRouter as Router,
        Switch, Route, useHistory} from 'react-router-dom'

import Login from './page/Login'
import Main from './page/Main';

function App() {
  const history = useHistory()
  return (
    <Router >
      <div className="wrapper">
      <Switch>
        
          <Route path="/login" component={Login} />
          <Route path="/" component={Main} />
        
      </Switch>
      </div>
    </Router>
  );
}

export default App;
