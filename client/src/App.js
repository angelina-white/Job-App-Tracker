import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import { Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Signup />
      <Login />
      <ul className="linkClass">
        <li><Link to='/'>Home</Link></li>
      </ul>
      <Route path="/"> <Home /> </Route>
    </div>
  );
}

export default App;
