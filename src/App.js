import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookDetail from "./components/BookDetail"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        
        <Route path = "/book/:id" element = {<BookDetail />}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
