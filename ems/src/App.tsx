import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,
  Route,
  Switch,} from 'react-router-dom'
import Login from './pages/Login/Login'
import MainPage from './pages/mainPage/MainPage'

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/' component={MainPage}></Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
