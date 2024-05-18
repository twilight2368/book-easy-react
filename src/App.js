import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/LoginSignup/Signup";
import Login from "./pages/LoginSignup/Login";
import Forgot from "./pages/LoginSignup/Forgot";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Event from "./pages/Event";
import InterestBooks from "./pages/InterestBooks";
import MyBooks from "./pages/MyBooks";
import BookDetail from "./pages/BookDetail/BookDetail";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/welcome" element = {<WelcomePage/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path = "/login" element= {<Login/>}/>
          <Route path = "/forgotpassword" element= {<Forgot/>}/>
          <Route path="/" element={<WrapBarLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="explore" element={<Explore />} />
            <Route path="events" element={<Event />} />
            <Route path="interest" element={<InterestBooks />} />
            <Route path="mybook/:user" element={<MyBooks />} />
            <Route path="book/:id" element={<BookDetail />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
