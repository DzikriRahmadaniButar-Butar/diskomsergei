function SuratKeputusanPenetapanPPID() {
    return (
    <>
      <div className="prose lg:prose-lg prose-slate max-w-none mx-0 md:mx-4">
        <h2 className="text-xl font-bold text-blue-700">Tugas dan Fungsi</h2>
        <p className="font-lato font-semibold text-blue-gray-700 text-base leading-6">Untuk melihat Surat Keputusan Pentepan PPID Diskominfo Jabar dapat dilihat pada link di sini:</p>
        <div className="w-full p-6 rounded-[18px] bg-blue-50 flex flex-col items-center justify-between gap-2 md:flex-row">
          <p className="flex-grow text-blue-gray-700">SK Nomor 256/KPG.03.01.01.01/SEKRE</p>
          <a href="/ppid/formulir-informasi-ppid">
            <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">Ajukan</button>
          </a>
        </div>
      </div>
    </>
    );
  }
  
  export default SuratKeputusanPenetapanPPID;
  