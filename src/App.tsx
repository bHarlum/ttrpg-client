import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import HomePage from './pages/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
      </nav>
        <Switch>
          <Route path="/" component={HomePage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
