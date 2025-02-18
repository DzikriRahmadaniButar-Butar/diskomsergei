import CardBox from '../components/CardBox';

const ProfileImage = () => {
  return (
    <CardBox title="Ingan Malem Tarigan, SE">
      <div className="flex justify-center items-center">
        <img src="src/assets/kadissergei.png" alt="Foto Kepala Dinas Diskominfo Sergai" className="h-[200px]"/>
      </div>
    </CardBox>
  );
};

const EducationHistory = () => {
  const education = [
    "S1 - Ilmu Pemerintahan Universitas Padjadjaran",
    "S2 - Ilmu Sosial Pasca Sarjana Universitas Padjadjaran",
    "S3 - Ilmu Administrasi Universitas Padjadjaran",
  ];

  return (
    <CardBox title="Riwayat Pendidikan">
      <ul className="list-disc list-inside">
        {education.map((edu, index) => (
          <li key={index} className="mt-1">{edu}</li>
        ))}
      </ul>
    </CardBox>
  );
};

const JobHistory = () => {
  const jobs = [
    "Kepala Balai LPSE Dinas Komunikasi dan Informatika Provinsi Jawa Barat (2010-2017)",
    "Kepala Bidang Komunikasi dan Informasi Publik Dinas Komunikasi dan Informatika Provinsi Jawa Barat (2017-2018)",
    "Kepala Bidang e-Government Dinas Komunikasi dan Informatika Provinsi Jawa Barat (2018-2019)",
    "Kepala Biro Pengadaan Barang dan Jasa Sekretariat Daerah Provinsi Jawa Barat (2019-2022)",
    "Kepala Dinas Komunikasi dan Informatika Provinsi Jawa Barat (2022 - sekarang)",
  ];

  return (
    <CardBox title="Riwayat Jabatan">
      <ul className="list-disc list-inside">
        {jobs.map((job, index) => (
          <li key={index} className="mt-1">{job}</li>
        ))}
      </ul>
    </CardBox>
  );
};

const AwardHistory = () => {
  const awards = [
    "Satyalancana Karya Satya 10 Tahun",
    "Satyalancana Karya Satya 20 Tahun",
    "Penghargaan Gubernur Jawa Barat sebagai PNS Teladan Terbaik I Kategori Pejabat Struktural Eselon III Tahun 2014",
    "e-Procurement Award 2016 dari LKPP sebagai Pejuang LPSE yang Konsisten Sejak Awal",
  ];

  return (
    <CardBox title="Riwayat Penghargaan">
      <ul className="list-inside">
        {awards.map((award, index) => (
          <li key={index} className="mt-1">{award}</li>
        ))}
      </ul>
    </CardBox>
  );
};

const ProfileSection = () => {
  return (
    <div>
      <h1 className="font-bold text-blue-700 text-4xl text-center md:text-left leading-9 md:leading-[56px] mb-8">
        Profil Pimpinan
      </h1>
      <div className="bg-blue-500 rounded-xl p-8 prose lg:prose-lg max-w-none mx-0 md:mx-4 text-center">
        <h2 className="text-white">
          Kepala Dinas Komunikasi dan Informatika Kabupaten Serdang Bedagai
        </h2>
        <h3 className="text-blue-50">Periode 2023 - Sekarang</h3>
        <ProfileImage />
        <EducationHistory />
        <JobHistory />
        <AwardHistory />
      </div>
    </div>
  );
};

export default ProfileSection;
export { CardBox, ProfileImage, EducationHistory, JobHistory, AwardHistory };