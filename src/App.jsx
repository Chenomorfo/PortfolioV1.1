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
            <Route path="/PortfolioV1.1/" element={<Biography />} />
            <Route path="/PortfolioV1.1/Projects" element={<Project />} />
            <Route path="/PortfolioV1.1/Skills" element={<Skills />} />
            <Route path="/PortfolioV1.1/Minigames" element={<MiniGames />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
