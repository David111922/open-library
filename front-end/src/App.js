import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import SearchBooks from './SearchBooks';
import SignUp from './SignUp';
function App() {
  return (
    <Router> {/* Wrap everything in the Router */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/searchBooks" element={<SearchBooks />} />
        <Route path="/signUp" element={<SignUp />} /> {/* SignUp route */}
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
