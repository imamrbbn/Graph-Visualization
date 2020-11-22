import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
          <Switch>
            <Route exact path = "/" component={Home} />
            <Route path = "/dashboard" component={Home} />
            <Route path = "/people-list" component={Home} />
          </Switch>
      </div>
    </Router>
    
  );
}

export default App;
