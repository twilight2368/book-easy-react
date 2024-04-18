import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WrapBar from "./components/WrapBar";
import Explore from "./pages/Explore";
import Event from "./pages/Event";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <WrapBar>
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/events" element={<Event />} />
          </Routes>
        </WrapBar>
      </BrowserRouter>
    </div>
  );
}

export default App;
