import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import "./App.css";
import "./index.css";
import logo from "./assets/diskominfosergei.png";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md shadow-md" : "bg-white "
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold flex items-center">
            <img src={logo} alt="Logo" className="w-auto h-10 mr-2" />
          </Link>

          {/* Navigasi */}
          <ul className="text-black flex gap-6">
            <li>
              <Link to="/profile" className=" hover:text-blue-700 transition">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-700 transition">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Routes */}
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;