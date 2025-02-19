import { NavLink, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Sejarah from '../tabs/Sejarah';
import TugasPokokFungsi from '../tabs/TugasPokokFungsi';
import StrukturOrganisasi from '../tabs/StrukturOrganisasi';
import ProfilPemimpin from '../tabs/ProfilPimpinan';
import Swiper from 'swiper';
import 'swiper/css'; // Import Swiper CSS

function Profil() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab') || 'sejarah';
  const [activeTab, setActiveTab] = useState(tabParam);

  const tabs = [
    { id: "sejarah", name: 'Sejarah', path: 'sejarah', component: <Sejarah /> },
    { id: "tugas-pokok-fungsi", name: 'Tugas Pokok dan Fungsi', path: 'tugas-pokok-fungsi', component: <TugasPokokFungsi /> },
    { id: "struktur-organisasi", name: 'Struktur Organisasi', path: 'struktur-organisasi', component: <StrukturOrganisasi /> },
    { id: "profil-pimpinan", name: 'Profil Pimpinan', path: 'profil-pimpinan', component: <ProfilPemimpin /> }
  ];

  useEffect(() => {
    setActiveTab(tabParam);
  }, [tabParam]);

  // Inisialisasi Swiper untuk tab geser
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      freeMode: true,
      spaceBetween: 10,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      mousewheel: true,
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <>
      <section className="relative w-full bg-blue-700">
        <div className='overlay'></div>
        <div className='container mx-auto px-6 2xl:px-0 xl:max-w-7xl relative pt-24 pb-40 z-10'>
          <section className='breadcrumb mb-6'>
            <nav className='hidden md:inline-flex'>
              <a href="/" className='breadcrumb__item text-blue-50'>Beranda</a>
              <a href="/profil" className='breadcrumb__item font-bold text-gray-50'>Profil</a>
            </nav>
            <h1 className='font-bold text-3xl text-white mb-2'>Profil Diskominfo Provinsi Jawa Barat</h1>
            <h2 className='text-sm text-white sm:col-span-4'>Selayang pandang Diskominfo Jabar</h2>
          </section>
        </div>
      </section>

      <section className="w-full bg-gray-200">
        <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl relative -top-24 z-20">
          <div className="p-3 md:p-4 lg:py-8 lg:px-10 rounded-xl bg-white min-h-[calc(100vh-300px)] w-full xl:grid xl:grid-cols-[268px,1fr] xl:grid-rows-[1fr,auto] lg:gap-6">
            
            {/* SWIPER UNTUK MOBILE */}
            <div className='h-[42px] overflow-hidden xl:hidden mb-6'>
              <div className="swiper-container w-full">
                <div className="swiper-wrapper flex overflow-x-auto whitespace-nowrap">
                  {tabs.map((tab) => (
                    <div key={tab.id} className="swiper-slide w-fit">
                      <a 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          setSearchParams({ tab: tab.path });
                        }}
                        className={`relative min-w-fit h-[42px] px-4 flex items-center border-b-2 transition-all ${
                          activeTab === tab.path ? "border-blue-700 text-blue-700 font-bold" : "border-transparent text-gray-500"
                        }`}
                      >
                        {tab.name}
                      </a>
                    </div>
                  ))}
                </div>
                {/* Scrollbar */}
                <div className="swiper-scrollbar"></div>
              </div>
            </div>

            {/* MENU UNTUK DESKTOP */}
            <aside className='hidden xl:block p-4 border border-gray-200 rounded-xl h-[fit-content]'>
              <section className="p-4 grid grid-cols-1 gap-5">
                {tabs.map((tab) => (
                  <div className="flex items-center" key={tab.id}>
                    <input
                      type="radio"
                      id={tab.id}
                      name="profil"
                      value={tab.path}
                      checked={activeTab === tab.path}
                      onChange={() => setSearchParams({ tab: tab.path })}
                      className="hidden peer"
                    />
                    <label
                      htmlFor={tab.id}
                      className="font-normal text-sm text-gray-700 cursor-pointer peer-checked:font-bold peer-checked:text-blue-600"
                    >
                      {tab.name}
                    </label>
                  </div>
                ))}
              </section>
            </aside>
            
            {/* KONTEN TAB */}
            <section className='Tabs'>
              {tabs.find((tab) => tab.path === activeTab)?.component || <Sejarah />}
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profil;
