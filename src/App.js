import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Signup from "./pages/LoginSignup/Signup";
import Login from "./pages/LoginSignup/Login";
import Forgot from "./pages/LoginSignup/Forgot";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Events from "./pages/Events";
import InterestBooks from "./pages/InterestBooks";
import MyBooks from "./pages/MyBooks";
import BookDetail from "./pages/BookDetail/BookDetail";
import SettingPage from "./pages/setting-user/SettingPage";
import EventDetails from "./pages/EventDetails";
import Notfound from "./pages/Notfound/Notfound";
import UserProfile from "./pages/UserProfile/UserProfile";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>  
            <Route path = "/welcome" element = {<WelcomePage/>}/>
            <Route path="/signup" element={<Signup />} />
            <Route path = "/login" element= {<Login/>}/>
            <Route path = "/forgotpassword" element= {<Forgot/>}/>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="explore" element={<Explore />} />
            <Route path="events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="interest" element={<InterestBooks />} />
            <Route path="mybook/:user" element={<MyBooks />} />
            <Route path="book/:id" element={<BookDetail />} />
            <Route path="/setting" element={<SettingPage />} />
            <Route path="*" element={<Notfound />} />
            <Route path = "/profile" element = {<UserProfile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
