import React from 'react';
import WelcomePage from './Pages/WelcomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';


function App() {
  return (
    
    <div className="App">
      {/* <WelcomePage/> */}
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        
      </Routes>

    </Router>
    </div>
  );
}

export default App;
