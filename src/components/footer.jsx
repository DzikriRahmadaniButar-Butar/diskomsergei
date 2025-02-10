function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-10 px-5">
      <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl">
        
        {/* Bagian Atas: Logo & Informasi Kontak */}
        <div className="w-[fit-content] nuxt-link-exact-active nuxt-link-active gap-10">
          {/* Logo */}
          <div className="flex-shrink-0">
          <img src="src/assets/diskominfosergei.png" alt="diskominfo sergei" className="w-100 h-20 mr-8 mb-10" />
          </div>
          
          {/* Informasi Kontak */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 flex-grow text-gray-800">
            <div>
              <h3 className="font-bold text-lg flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="48" id="location">
                  <path d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
                DINAS KOMUNIKASI DAN INFORMATIKA SERDANG BEDAGAI
              </h3>
              <p className="text-sm">
                Jl. Negara No.300, Firdaus, Kec. Sei Rampah, Kabupaten Serdang Bedagai, Sumatera Utara, 20995
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 68" id="phone" className="w-8 h-8" >
                <path fill="#546e7a" d="M48.648 53.335a1.5 1.5 0 0 1-.814-2.761A12.083 12.083 0 0 0 51.362 47c.863-1.311 1.159-2.372.882-3.156-.563-1.594-3.594-2.745-6.171-3.57a6.477 6.477 0 0 0-6.586 1.593l-.976.977a1.5 1.5 0 0 1-.627.376c-.67.2-4.347.864-11.155-5.945a1.5 1.5 0 1 1 2.121-2.125c4.466 4.467 7.08 5.095 7.94 5.168l.576-.576a9.478 9.478 0 0 1 9.621-2.33c3.365 1.078 7.041 2.474 8.085 5.428.607 1.715.2 3.668-1.2 5.8a15.1 15.1 0 0 1-4.411 4.46 1.5 1.5 0 0 1-.813.235zm-7.207 2.012c-6.866 0-14.749-3.97-21.783-11.005a1.5 1.5 0 1 1 2.121-2.121c6.638 6.639 14.27 10.412 20.39 10.108a1.48 1.48 0 0 1 1.574 1.422 1.5 1.5 0 0 1-1.422 1.574c-.291.014-.585.022-.88.022z"></path>
                <path fill="#546e7a" d="M20.718 44.782a1.494 1.494 0 0 1-1.06-.44C12.09 36.775 8.008 27.989 8.739 20.84a14.232 14.232 0 0 1 6.617-10.71c2.137-1.4 4.09-1.807 5.8-1.2 2.954 1.044 4.351 4.72 5.428 8.085a9.471 9.471 0 0 1-2.33 9.621l-.591.592c.072.773.655 3.4 5.183 7.924a1.5 1.5 0 0 1-2.121 2.121c-6.808-6.807-6.146-10.486-5.945-11.154a1.484 1.484 0 0 1 .376-.627l.977-.977a6.482 6.482 0 0 0 1.593-6.585c-.825-2.578-1.976-5.609-3.569-6.172-.785-.277-1.847.019-3.157.881a11.18 11.18 0 0 0-5.28 8.509c-.641 6.26 3.118 14.139 10.055 21.075a1.5 1.5 0 0 1-1.061 2.561Z"></path>
              </svg>
                Telepon
              </h4>
              <p className="text-sm">Telp. 022-2502898</p>
            </div>
            <div>
            <h4 className="font-bold text-lg flex items-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="18"
                id="mail"
                className="inline-block"
              >
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M3 1h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2z"></path>
                  <path d="m21 3-10 7L1 3"></path>
                </g>
              </svg>
              Surel
            </h4>
              <p className="text-sm">diskominfo@sergei.go.id</p>
            </div>
            <div>
              <h4 className="font-bold text-lg flex items-center">
                🌐 Media Sosial
              </h4>
              <div className="flex space-x-4 mt-2 items-center">
  <a href="https://www.facebook.com/diskominfo.serdangbedagaikab" target="_blank" rel="noopener noreferrer">
    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
      <path fillRule="evenodd" clipRule="evenodd" d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H12V13H11C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11H12V9.5C12 7.567 13.567 6 15.5 6H16.1C16.6523 6 17.1 6.44772 17.1 7C17.1 7.55228 16.6523 8 16.1 8H15.5C14.6716 8 14 8.67157 14 9.5V11H16.1C16.6523 11 17.1 11.4477 17.1 12C17.1 12.5523 16.6523 13 16.1 13H14V20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6Z" fill="#000000"/>
    </svg>
  </a>

  <a href="https://www.instagram.com/diskominfoserdangbedagai/" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={34} height={34} className="cursor-pointer">
    <path fill="#222" d="M44.62 22.15a2.212 2.212 0 0 1-.77-.15 2.18 2.18 0 0 1-.34-.18 2.242 2.242 0 0 1-.31-.25 2.02 2.02 0 0 1-.58-1.42 1.702 1.702 0 0 1 .04-.39 1.567 1.567 0 0 1 .11-.37 2.237 2.237 0 0 1 .18-.35 2.39 2.39 0 0 1 .25-.3 2.257 2.257 0 0 1 .31-.25 2.179 2.179 0 0 1 .34-.181 2.449 2.449 0 0 1 .38-.12 2.003 2.003 0 0 1 1.8.551 1.817 1.817 0 0 1 .25.3 2.373 2.373 0 0 1 .19.35 2.322 2.322 0 0 1 .11.37 2.638 2.638 0 0 1 .04.39 1.988 1.988 0 0 1-.59 1.42 1.76 1.76 0 0 1-.301.25 2.237 2.237 0 0 1-.349.18 1.572 1.572 0 0 1-.37.11 1.708 1.708 0 0 1-.39.04zM32 42.934A10.935 10.935 0 1 1 42.935 32 10.947 10.947 0 0 1 32 42.935zm0-18.87A7.936 7.936 0 1 0 39.935 32 7.944 7.944 0 0 0 32 24.064z"></path>
    <path fill="#222" d="M27.564 33.5a1.5 1.5 0 0 1-1.5-1.5 5.944 5.944 0 0 1 3.971-5.6 1.5 1.5 0 1 1 .994 2.83A2.942 2.942 0 0 0 29.064 32a1.5 1.5 0 0 1-1.5 1.5Z"></path>
    <path fill="#222" d="M39 55.5H25A16.52 16.52 0 0 1 8.5 39V25A16.52 16.52 0 0 1 25 8.5h14A16.52 16.52 0 0 1 55.5 25v14A16.52 16.52 0 0 1 39 55.5Zm-14-44A13.515 13.515 0 0 0 11.5 25v14A13.515 13.515 0 0 0 25 52.5h14A13.515 13.515 0 0 0 52.5 39V25A13.515 13.515 0 0 0 39 11.5Z"></path>
    </svg>
  </a>

  <a href="https://sergaifm.serdangbedagaikab.go.id/" target="_blank" rel="noopener noreferrer" className="block">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="radio" width="28" height="28" className="cursor-pointer">
        <g>
            <path d="M27.33,31H4.67A3.67,3.67,0,0,1,1,27.33V12.67A3.67,3.67,0,0,1,4.67,9H27.33A3.67,3.67,0,0,1,31,12.67V27.33A3.67,3.67,0,0,1,27.33,31ZM4.67,11A1.67,1.67,0,0,0,3,12.67V27.33A1.67,1.67,0,0,0,4.67,29H27.33A1.67,1.67,0,0,0,29,27.33V12.67A1.67,1.67,0,0,0,27.33,11Z"></path>
            <path d="M16 10.79a2.82 2.82 0 0 1-1.76-.62L6.16 3.7A1 1 0 0 1 6 2.29H6a1 1 0 0 1 1.41-.16L15.49 8.6a.82.82 0 0 0 1 0l8.08-6.46A1 1 0 0 1 26 2.29h0a1 1 0 0 1-.16 1.41l-8.08 6.46A2.82 2.82 0 0 1 16 10.79zM21 26a6 6 0 1 1 6-6A6 6 0 0 1 21 26zm0-10a4 4 0 1 0 4 4A4 4 0 0 0 21 16z"></path>
            <rect width="4" height="2" x="7.44" y="16.88" rx="1" ry="1"></rect>
            <rect width="4" height="2" x="7.44" y="20.5" rx="1" ry="1"></rect>
        </g>
    </svg>
</a>


  <a href="https://www.youtube.com/@mediacentersergai7087" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={34} height={34} className="cursor-pointer">
    <path d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z"></path>
    </svg>
  </a>
</div>
            </div>
          </div>
        </div>

        {/* Garis Pemisah */}
        <hr className="my-8 border-gray-300" />

        {/* Bagian Sitemap */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          <FooterSection title="Berita Serdang Bedagai" links={[
            "Ekonomi", "Kesehatan", "Pendidikan", "Pemerintahan", "Infrastruktur", "Sosial", "Teknologi"
          ]} basePath="/berita?kategori=" />

          
          
          <FooterSection title="PPID" links={[
            { title: "Profil PPID", link: "/ppid/profil/" },
            { title: "Alur Layanan Informasi", link: "/ppid/alur-layanan-informasi" },
            { title: "Permohonan Informasi", link: "/ppid/permohonan-informasi" },
            { title: "Pengajuan Keberatan", link: "/ppid/pengajuan-keberatan" },
            { title: "Penyelesaian Sengketa", link: "/ppid/penyelesaian-sengketa" },
            { title: "Informasi Tersedia Setiap Saat", link: "/ppid/informasi-tersedia-setiap-saat" },
            { title: "Informasi Berkala", link: "/ppid/informasi-berkala/" },
            { title: "Informasi Dikecualikan", link: "/ppid/informasi-dikecualikan" },
            { title: "Informasi Serta Merta", link: "/ppid/informasi-serta-merta" },
            { title: "SOP PPID", link: "/ppid/sop" },
            { title: "Kontak", link: "/ppid/kontak" },
          ]} />
          
          <FooterSection title="Profil Diskominfo" links={[
            { title: "Sejarah", link: "/profil?tab=sejarah" },
            { title: "Tugas Pokok dan Fungsi", link: "/profil?tab=tugas%20pokok%20dan%20fungsi" },
            { title: "Struktur Organisasi", link: "/profil?tab=struktur%20organisasi" },
            { title: "Profil Pimpinan", link: "/profil?tab=profil%20pimpinan" }
          ]} />
        </section>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600 mt-8">
          &copy; 2025 Pemerintah Daerah Kabupaten Serdang Bedagai. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

// Komponen untuk bagian Sitemap
function FooterSection({ title, links, basePath = "" }) {
  return (
    <div>
      <h3 className="font-roboto text-base leading-6 font-bold mb-2 whitespace-nowrap">
        {title}
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-2">
        {links.map((item, index) => (
          <li key={index} className="min-w-[95px]">
            <a href={typeof item === "string" ? `${basePath}${item.toLowerCase()}` : item.link} className="text-sm font-normal leading-6">
              {typeof item === "string" ? item : item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;