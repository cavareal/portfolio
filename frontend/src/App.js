import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./components/pages/Home.js";
import About from "./components/pages/About.js";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
            </Routes>
        </Router>
    )
} export default App;