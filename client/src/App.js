import './App.css';
import Auth from './Components/Auth';
import Home from './Components/Home';
import { Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Auth />
      <ul className="linkClass">
        <li><Link to='/'>Home</Link></li>
      </ul>
      <Route path="/"> <Home /> </Route>
    </div>
  );
}

export default App;
