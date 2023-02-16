import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";

import Biography from "./components/Biography";
import Project from "./components/Project";
import Skills from "./components/Skills";
import MiniGames from "./components/MiniGames";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="Container">
          <Routes>
            <Route path="/" element={<Biography />} />
            <Route path="/Projects" element={<Project />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Minigames" element={<MiniGames />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
