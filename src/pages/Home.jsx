function Home() {
    return(
      <>
      {/* Quick Access */}
      <section className='bg-white py-6 md:py-8 xl:py-12 md:px-4 xl:px-16'>
        <div className='container mx-auto px-6 2xl:px-0 xl:max-w-7xl'>
          <ul className='grid md:grid-cols-3 md:grid-rows-[auto,1fr] md:gap-x-6 lg:gap-x-20 gap-y-6 lg:gap-y-12'>
            <li className='md:row-start-1 md:col-start-1 md:col-end-4 lg:row-start-auto lg:col-start-auto lg:col-end-auto flex flex-col gap-2 lg:gap-6'>
              <h2 className='text-2xl text-center lg:text-left md:text-4xl font-medium leading-loose'>Quick Access!</h2>
              <p className='text-center lg:text-left text-sm text-gray-600 leading-6'>
                Dapatkan kemudahaan akses ke beberapa layanan Pemerintah Provinsi Jawa Barat untuk kebutuhan Anda.
              </p>
            </li>
            <li className='group px-4 py-3 rounded-md hover:bg-blue-50 transition-colors ease-brand duration-250'>
              <a href="#" className='flex flex-col gap-4'>
                <img src="./public/ppid.jpg" className='w-[40px] h-[40px]'  alt="PPID" />
                <p className='font-roboto font-bold group-hover:text-blue-700'>PPID</p>
                <p className='text-sm text-gray-600 leading-6 group-hover:text-blue-gray-800 focus:outline-none'>
                  Ajukan permohonan informasi kepada Pejabat Pengelola Informasi dan Dokumentasi untuk mendapatkan informasi terkini dan terakurat seputar Diskominfo Serdang Bedagai
                </p>
              </a>
            </li>
            <li className='group px-4 py-3 rounded-md hover:bg-blue-50 transition-colors ease-brand duration-250'>
              <a href="#" target="_blank" rel='noreferrer' className='flex flex-col gap-4'>
                <img src="./public/chat.jpg" alt="SP4N" className='w-[40px] h-[40px]' />
                <p className='font-roboto font-bold group-hover:text-blue-700'>SP4N Lapor</p>
                <p className='text-sm text-gray-600 leading-6 group-hover:text-blue-gray-800 focus:outline-none'>
                  Sampaikan aspirasi dan pengaduan terkait permasalahan anda melalui saluran resmi Pemerintah Pusat.
                </p>
              </a>
            </li>
            <li className='group px-4 py-3 rounded-md hover:bg-blue-50 transition-colors ease-brand duration-250'>
              <a href="" target='_blank' rel='noreferrer' className='flex flex-col gap-4'>
              <img src="./public/servicedesk.png" alt="service desk" width={40} height={40} className='w-fit h-10' />
                <p className='font-roboto font-bold group-hover:text-blue-700'>Service Desk</p>
                <p className='text-sm text-gray-600 leading-6 group-hover:text-blue-gray-800 focus:outline-none'>
                  Akses berbagai layanan Diskominfo Jabar.
                </p>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Video Profil */}
      <section className='bg-slate-100 py-6 md:py-8 xl:py-12 md:px-4 xl:px-16'>
        <div className='container mx-auto px-6 2xl:px-0 xl:max-w-7xl py-8'>
          <h2 className='text-blue-gray-800 text-lg font-bold font-roboto mb-8'>Video Profil</h2>
          <div className='flex justify-center items-center'>
            <iframe width={"100%"} height={"100%"} src="https://www.youtube.com/embed/Qw-r5FeDs9Q?si=ELT5j81X4CPUCv7_" frameBorder="0" className='rounded-xl w-full lg:w-[80%] h-[200px] sm:h-[450px] xl:h-[550px]'></iframe>
          </div>
        </div>
      </section>
      </>
    );
  }
  
  export default Home;
  