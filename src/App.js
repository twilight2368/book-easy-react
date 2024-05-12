import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import WrapBar from "./components/WrapBar";
import Explore from "./pages/Explore";
import Events from "./pages/Events";
import InterestBooks from "./pages/InterestBooks";
import BookDetail from "./components/BookDetail";
import Footer from "./components/Footer";
import MyBooks from "./pages/MyBooks";
import EventDetails from "./pages/EventDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <WrapBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/events" element={<Events />} />
            <Route path="/interest" element={<InterestBooks />} />
            <Route path="/mybook/:user" element={<MyBooks />}></Route>
            <Route path="/book/:id" element={<BookDetail />} />
            <Route path="/events/:id" element={<EventDetails />} />
          </Routes>
        </WrapBar>
      </BrowserRouter>
    </div>
  );
}

export default App;
