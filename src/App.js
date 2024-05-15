import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup/LoginSignup";
import Home from "./pages/Home";
import WrapBar from "./components/WrapBar";
import Explore from "./pages/Explore";
import Event from "./pages/Event";
import InterestBooks from "./pages/InterestBooks";
import MyBooks from "./pages/MyBooks";
import BookDetail from "./pages/BookDetail/BookDetail";
import SettingPage from "./pages/setting-user/SettingPage";
import Notfound from "./pages/Notfound/Notfound";
import UserProfile from "./pages/UserProfile/UserProfile";
import { useState, React } from "react";
import { createContext } from "react";

export const MyThemeContext = createContext(false);

function App() {
 
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <MyThemeContext.Provider value={[darkMode, setDarkMode]}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginSignup />} />
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/events" element={<Event />} />
            <Route path="/interest" element={<InterestBooks />} />
            <Route path="/mybook/:user" element={<MyBooks />} />
            <Route path="/book/:id" element={<BookDetail />} />
            <Route path="/user/:id" element={<UserProfile />} />
            <Route path="/setting" element={<SettingPage />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </MyThemeContext.Provider>
    </div>
  );
}
export default App;
