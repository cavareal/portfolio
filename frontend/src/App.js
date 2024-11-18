import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./components/pages/Home.js";
import About from "./components/pages/About.js";
import Tauri from "./components/pages/Tauri.js";
import Photography from "./components/pages/Photography.js";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/tauri" element={<Tauri/>} />
                <Route path={"/photography"} element={<Photography/>}/>
            </Routes>
        </Router>
    )
} export default App;