import Registration from './components/Registration';
import Nav from './components/Nav';
import Login from './components/Login';
import Shop from './components/Shop';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';



function App() {

  const [logIn, setLogIn] = useState(false);

  return (
    <div className="App">
      
      <Router>
      <Nav logIn={logIn} />
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login logStatus={setLogIn} logIn={logIn} />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
