import './App.css';
import Home from './Components/Home';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Home />
      </Route>
    </div>
  );
}

export default App;
