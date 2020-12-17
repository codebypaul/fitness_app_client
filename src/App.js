import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Admin from './pages/Admin'
import Home from './pages/Home'
import Profile from './pages/Profile'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/admin" component={Admin}/>

      </Switch>
    </div>
  );
}

export default App;
