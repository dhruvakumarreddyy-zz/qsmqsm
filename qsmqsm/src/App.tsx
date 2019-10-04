import React from 'react';
import Qsm from './components/Qsm'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Analytics from './components/Analytics';
import {BrowserRouter as Router,Switch,Route,} from 'react-router-dom';
import {Link} from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
   <div>
 <Route path = "/" exact component = {Home}/>
 <Route path = "/qsm" component = {Qsm}  /> 
 <Route path ="/analytics" component = {Analytics}/>

   </div>
   </Switch>
   </Router>
  );
}

const Home = () => (
  <div>
    <h1>home page</h1>
    <Link to="/qsm">
    <p>qsm</p>
    </Link>
    <Link to="/analytics">
    <p>analytics</p>
    </Link> 
  </div>
)

export default App;
