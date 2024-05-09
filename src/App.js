import "./App.css";
import LoginSignup from "./pages/LoginSignup/LoginSignup";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookDetail from "./pages/BookDetail/BookDetail"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/login" element = {<LoginSignup/>}/>
        <Route path = "/book/:id" element = {<BookDetail />}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
