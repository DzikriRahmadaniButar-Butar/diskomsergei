import { Outlet, Link, useLocation } from 'react-router-dom';

const tabs = [
  { id: 'tugas-dan-fungsi', name: 'Tugas dan Fungsi', path: '/ppid/profil/tugas-dan-fungsi' },
  { id: 'visi-dan-misi', name: 'Visi dan Misi', path: '/ppid/profil/visi-dan-misi' },
  { id: 'maklumat-pelayanan-informasi', name: 'Maklumat Pelayanan Informasi', path: '/ppid/profil/maklumat-pelayanan-informasi' },
  { id: 'surat-keputusan-penetapan-ppid', name: 'Surat Keputusan Penetapan PPID', path: '/ppid/profil/surat-keputusan-penetapan-ppid' },
];

function ProfilPPID() {
  const location = useLocation();

  return (
    <>
      {/* Section Header */}
      <section className="relative w-full bg-blue-700">
        <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl relative pt-24 pb-40 z-10">
          <h1 className="font-bold text-3xl text-white mb-2">Profil Pejabat Pengelola Informasi dan Dokumentasi Diskominfo Provinsi Jawa Barat</h1>
          <p className='text-white'>Setiap Badan Publik mempunyai kewajiban untuk membuka akses atas informasi publik yang berkaitan dengan Badan Publik tersebut untuk masyarakat luas. PPID Diskominfo Jabar merupakan layanan informasi satu pintu yang dimaksudkan untuk membangun mekanisme layanan informasi dengan cara melakukan interkoneksi dan sinergi dari data dan informasi yang dihasilkan masing-masing unit kerja.</p>
        </div>
      </section>

      {/* Section Content */}
      <section className="w-full bg-gray-200">
        <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl relative -top-24 z-20">
          <div className="p-3 md:p-4 lg:py-8 lg:px-10 rounded-xl bg-white min-h-[calc(100vh-300px)] w-full grid xl:grid-cols-[250px,1fr] gap-6">
            
            {/* Sidebar Menu */}
            <aside className="p-4 border border-gray-200 rounded-xl h-fit">
              <nav className="p-4 grid grid-cols-1 gap-5">
                {tabs.map((tab) => (
                  <Link 
                    key={tab.id} 
                    to={tab.path}
                    className={`text-sm cursor-pointer transition ${
                      location.pathname === tab.path ? "text-blue-600 font-bold" : "text-gray-700"
                    }`}
                  >
                    {tab.name}
                  </Link>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <div className="prose prose-blue lg:prose-lg max-w-none mx-0 md:mx-4">
              <div className="border rounded-xl border-[#DFE6F0] p-6 flex gap-4 flex-col">
                <Outlet /> {/* Ini untuk menampilkan konten halaman yang dipilih */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfilPPID;
