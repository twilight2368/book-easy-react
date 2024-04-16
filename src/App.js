import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WrapBar from "./components/WrapBar";
import Explore from "./pages/Explore";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <WrapBar>
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
        </WrapBar>
      </BrowserRouter>
    </div>
  );
}

export default App;
