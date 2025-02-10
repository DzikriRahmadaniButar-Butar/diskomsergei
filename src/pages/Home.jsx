import React from 'react';
import Card from '../components/Card';
import ppidLogo from '../assets/ppid.jpg';
import sp4nLogo from '../assets/chat.jpg';
import serviceDeskLogo from '../assets/servicedesk.png';

function Home() {
  return (
    <section className='bg-white py-6 md:py-8 xl:py-12 md:px-4 xl:px-16'>
      <div className='container mx-auto px-6 xl:max-w-7xl'>
        <h2 className='text-2xl md:text-4xl font-medium text-center mb-4'>Quick Access!</h2>
        <p className='text-center text-sm text-gray-600 mb-8'>
          Dapatkan kemudahan akses ke layanan Pemerintah Kabupaten Serdang Bedagai.
        </p>

        <ul className='grid md:grid-cols-3 gap-6'>
          <Card
            logo={ppidLogo}
            title="PPID"
            description="Ajukan permohonan informasi kepada Pejabat Pengelola Informasi dan Dokumentasi untuk mendapatkan informasi terkini dan terakurat seputar Diskominfo Serdang Bedagai."
          />

          <Card
            logo={sp4nLogo}
            title="SP4N Lapor"
            description="Sampaikan aspirasi dan pengaduan terkait permasalahan Anda melalui saluran resmi Pemerintah Pusat."
          />

          <Card
            logo={serviceDeskLogo}
            title="Service Desk"
            description="Akses berbagai layanan Diskominfo Jabar untuk memenuhi kebutuhan informasi Anda."
          />
        </ul>
      </div>
    </section>
  );
}

export default Home;
