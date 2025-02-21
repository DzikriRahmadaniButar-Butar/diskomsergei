import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import PPID from "./pages/PPID";
import NotFound from "./pages/NotFound";
import Profil from "./pages/Profil";
import TugasDanFungsi from "./pages/ppid/profil/tugas-dan-fungsi";
import VisiDanMisi from "./pages/ppid/profil/visi-dan-misi";
import MaklumatPelayananInformasi from "./pages/ppid/profil/maklumat-pelayanan-informasi";
import SuratKeputusanPenetapanPPID from "./pages/ppid/profil/surat-keputusan-penetapan-ppid";
import PengajuanKeberatan from "./pages/ppid/pengajuan-keberatan";
import AlurLayananInformasi from "./pages/ppid/alur-layanan-informasi";
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
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-sm bg-white/70 shadow-md" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-10 w-auto mr-2" />
            </Link>

            {/* Navigasi */}
            <ul className="text-black flex gap-6">
              <li>
                <Link to="/profil" className="hover:text-blue-700 transition">
                  Profil
                </Link>
              </li>
              <li>
                <Link to="/ppid/profil/tugas-dan-fungsi" className="hover:text-blue-700 transition">
                  PPID
                </Link>
              </li>
            </ul>
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
            <Route index element={<TugasDanFungsi />} /> {/* Default page untuk /ppid/profil */}
            <Route path="tugas-dan-fungsi" element={<TugasDanFungsi />} />
            <Route path="visi-dan-misi" element={<VisiDanMisi />} />
            <Route path="maklumat-pelayanan-informasi" element={<MaklumatPelayananInformasi />} />
            <Route path="surat-keputusan-penetapan-ppid" element={<SuratKeputusanPenetapanPPID />} />
          </Route>

          {/* Pengajuan Keberatan tidak boleh nested dalam PPID */}
          <Route path="/ppid/pengajuan-keberatan" element={<PengajuanKeberatan />} />
          <Route path="/ppid/alur-layanan-informasi" element={<AlurLayananInformasi />} />

          {/* Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
  