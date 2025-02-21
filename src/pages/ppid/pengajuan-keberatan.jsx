import ButtonLink from "../../components/ButtonLink";

const pengajuanItems = [
  { title: "Pengajuan Keberatan", link: "/ppid/pengajuan-keberatan" },
  { title: "Pengajuan Keberatan ke PTUN", link: "/ppid/pengajuan-keberatan-ptun" },
  { title: "Pengajuan Keberatan ke Mahkamah Agung", link: "/ppid/pengajuan-keberatan-ma" },
];

function PengajuanKeberatan() {
    return (
    <>
      <section className="relative w-full bg-blue-700 prose prose-slate lg:prose-lg max-w-none">
        <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl relative pt-24 pb-40 z-10">
          <h1 className="font-bold text-3xl text-white mb-2">Pengajuan Keberatan</h1>
          <p className='text-white'>Berdasarkan Pasal 35 UU No. 14 Tahun 2008 Tentang Keterbukaan Informasi Publik , Setiap pemohon informasi publik dapat mengajukan keberatan secara tertulis kepada atasan Pejabat PPID</p>
        </div>
      </section>

      <section className="w-full bg-gray-100 prose prose-slate lg:prose-lg max-w-none">
        <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl relative -top-24 z-20">
          <div className="p-6 md:p-8 lg:py-10 lg:px-12 rounded-xl bg-white shadow-md min-h-[calc(100vh-300px)] w-full">
            <h2 className="text-blue-700 text-2xl md:text-4xl font-bold leading-tight mb-6">
              Alasan Pemohon Mengajukan Keberatan
            </h2>

            <div className="space-y-4">
              <div className="p-6 rounded-[18px] bg-gray-50">
                <div className="flex gap-4 items-center mb-2">
                  <span className="w-7 h-7 bg-blue-700 rounded-full text-white text-sm font-bold flex items-center justify-center leading-none flex-shrink-0">1</span>
                  <p className="font-lato font-bold text-blue-gray-700 text-base leading-6">Setiap Pemohon Informasi Publik dapat mengajukan keberatan secara tertulis kepada atasan Pejabat Pengelola Informasi dan Dokumentasi berdasarkan berikut:</p>
                </div>
                <ul className="list-disc pl-8 text-gray-700 space-y-2 marker:text-black">
                  <li>Penolakan atas permintaan informasi berdasarkan alasan pengecualian sebagaimana dimaksud dalam Pasal 17;</li>
                  <li>Tidak disediakannya informasi berkala sebagaimana dimaksud dalam Pasal 9;</li>
                  <li>Tidak ditanggapinya permintaan informasi;</li>
                  <li>Permintaan informasi ditanggapi tidak sebagaimana yang diminta;</li>
                  <li>Tidak dipenuhinya permintaan informasi;</li>
                  <li>Pengenaan biaya yang tidak wajar; dan/atau</li>
                  <li>Penyampaian informasi yang melebihi waktu yang diatur dalam Undang-Undang ini.</li>
                </ul>
              </div>
              <div className="p-6 rounded-[18px] bg-gray-50 flex gap-4 items-center">
                <span className="w-7 h-7 bg-blue-700 rounded-full text-white text-sm font-bold flex items-center justify-center leading-none flex-shrink-0">2</span>
                <p className="font-lato font-bold text-blue-gray-700 text-base leading-6">Alasan sebagaimana dimaksud pada ayat (1) huruf b sampai dengan huruf g dapat diselesaikan secara musyawarah oleh kedua belah pihak.</p>
              </div>
            </div>

            <h2 className="text-blue-700 text-2xl md:text-4xl font-bold leading-tight mb-6">
              Alasan Pemohon Mengajukan Keberatan
            </h2>

            <div className="space-y-4">
              <div className="p-6 rounded-[18px] bg-gray-50">
                <div className="flex gap-4 items-center mb-2">
                  <span className="w-7 h-7 bg-blue-700 rounded-full text-white text-sm font-bold flex items-center justify-center leading-none flex-shrink-0">1</span>
                  <p className="font-lato font-bold text-blue-gray-700 text-base leading-6">Langkah 1:</p>
                </div>
                <ul className="list-disc pl-8 text-gray-700 space-y-2 marker:text-black">
                  <li>Pengaju keberatan mempersiapkan berkas-berkas permohonan informasi yang diajukan sebelumnya apabila alasan keberatan pemohon didasarkan pada Pasal 35 Huruf a, c, d, e, f, dan g Undang-undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik;</li>
                  <li>Pengaju keberatan mempersiapkan salinan/ photocopy identitas pemohon & pengguna informasi yang terdiri dari :</li>
                  <li>Individu : KTP/ SIM/ Paspor</li>
                  <li>Kelompok Orang :</li>
                  <li>KTP/ SIM/ Paspor seluruh anggota kelompok pemohon</li>
                  <li>Surat kuasa kepada perwakilan kelompok pemohon</li>
                  <li>Lembar Pengesahan Badan Hukum oleh Menteri Hukum dan HAM</li>
                  <li>KTP/ SIM/ Paspor perwakilan pengurus/ anggota Badan Hukum</li>
                  <li>AD/ART Organisasi</li>
                </ul>
                <p>Apabila alasan keberatan pemohon didasarkan pada Pasal 35 Huruf b Undang-undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik.<br/><br/>
                Pengajuan keberatan dapat diajukan paling lambat 30 (tiga puluh) Hari Kerja setelah diterimanya jawaban atas permohonan informasi sebagaimana dimaksud dalam poin 1 (satu)</p>
              </div>
              <div className="p-6 rounded-[18px] bg-gray-50 flex gap-4 items-center">
                <span className="w-7 h-7 bg-blue-700 rounded-full text-white text-sm font-bold flex items-center justify-center leading-none flex-shrink-0">2</span>
                <p className="font-lato font-bold text-blue-gray-700 text-base leading-6">Pemohon Informasi Publik mendatangi desk layanan PPID dan mengisi Formulir Keberatan.</p>
              </div>
              <div className="p-6 rounded-[18px] bg-gray-50 flex gap-4 items-center">
                <span className="w-7 h-7 bg-blue-700 rounded-full text-white text-sm font-bold flex items-center justify-center leading-none flex-shrink-0">3</span>
                <p className="font-lato font-bold text-blue-gray-700 text-base leading-6">Desk Layanan PPID menerima dan memverifikasi kelengkapan administrasi berkas pengajuan keberatan.</p>
              </div><div className="p-6 rounded-[18px] bg-gray-50 flex gap-4 items-center">
                <span className="w-7 h-7 bg-blue-700 rounded-full text-white text-sm font-bold flex items-center justify-center leading-none flex-shrink-0">4</span>
                <p className="font-lato font-bold text-blue-gray-700 text-base leading-6">Pemohon menunggu jawaban atas pengajuan keberatan paling lama 30 (tiga puluh) hari kerja sejak diterimanya keberatan atas permohonan informasi publik.</p>
              </div>
              <div className="p-6 rounded-[18px] bg-gray-50 flex gap-4 items-center">
                <span className="w-7 h-7 bg-blue-700 rounded-full text-white text-sm font-bold flex items-center justify-center leading-none flex-shrink-0">5</span>
                <p className="font-lato font-bold text-blue-gray-700 text-base leading-6">Pengaju keberatan mendapatkan jawaban atas keberatan dari Atasan PPID.</p>
              </div>
            </div><br/>

            <h4>Untuk melihat Surat Keputusan Pentepan PPID Diskominfo Jabar dapat dilihat pada link di sini;</h4>

            <div className="container mx-auto p-6 space-y-4">
              {pengajuanItems.map((item, index) => (
                <ButtonLink key={index} title={item.title} link={item.link} buttonText="Ajukan" showIcon={true} />
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
    );
  }
  
  export default PengajuanKeberatan;