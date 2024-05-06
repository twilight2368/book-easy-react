import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WrapBar from "./components/WrapBar";
import Explore from "./pages/Explore";
import Event from "./pages/Event";
import InterestBooks from "./pages/InterestBooks";
import BookDetail from "./components/BookDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <WrapBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/events" element={<Event />} />
            <Route path="/interest" element={<InterestBooks />} />
            <Route path="/book/:id" element={<BookDetail />} />
          </Routes>
        </WrapBar>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
