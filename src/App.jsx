import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import PPID from "./pages/PPID";
import NotFound from "./pages/NotFound";
import Profil from "./pages/Profil";
import TugasDanFungsi from "./pages/ppid/profil/tugas-dan-fungsi";
import VisiDanMisi from "./pages/ppid/profil/visi-dan-misi";
import MaklumatPelayananInformasi from "./pages/ppid/profil/maklumat-pelayanan-informasi";
import SuratKeputusanPenetapanPPID from "./pages/ppid/profil/surat-keputusan-penetapan-ppid";
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
      <header className="flex items-center w-screen h-16 fixed top-0 z-50 bg-white sm:h-16 lg:h-20">
        <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl">
          <nav className={`flex items-center ${isScrolled ? "backdrop-blur-md" : "bg-white "}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
              {/* Logo */}
              <Link to="/" className="text-xl font-bold flex items-center">
                <img src={logo} alt="Logo" className="w-auto h-10 mr-2" />
              </Link>

              {/* Navigasi */}
              <ul className="text-black flex gap-6">
                <li>
                  <Link to="/profil" className=" hover:text-blue-700 transition">
                    Profil
                  </Link>
                </li>
                <li>
                  <Link to="/ppid/profil/tugas-dan-fungsi" className="hover:text-blue-700 transition">
                    PPID
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      {/* Routes */}
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ppid" element={<PPID />} />
          <Route path="/profil" element={<Profil />} />
          
          {/* Routing PPID Profil */}
          <Route path="/ppid/profil" element={<PPID />}>
            <Route path="tugas-dan-fungsi" element={<TugasDanFungsi />} />
            <Route path="visi-dan-misi" element={<VisiDanMisi />} />
            <Route path="maklumat-pelayanan-informasi" element={<MaklumatPelayananInformasi />} />
            <Route path="surat-keputusan-penetapan-ppid" element={<SuratKeputusanPenetapanPPID />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
