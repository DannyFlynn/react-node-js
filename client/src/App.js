import Registration from './components/Registration';
import Nav from './components/Nav';
import Login from './components/Login';
import Shop from './components/Shop';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      
      <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
