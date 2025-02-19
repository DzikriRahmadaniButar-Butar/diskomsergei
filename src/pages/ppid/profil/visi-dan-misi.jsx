function VisiMisi() {
    return (
        <div className="prose prose-slate lg:prose-lg max-w-none mx-0 md:mx-4">
        <h2 className="text-xl font-bold text-blue-700">Visi dan Misi</h2>
        <div>
            <p>Menyediakan, menyimpan, mendokumentasikan, dan mengamankan informasi.</p>
        </div>
        <h2 className="font-bold text-blue-700">Visi</h2>
        <div>
            <p>Menjadikan Jawa Barat Sebagai Provinsi yang Terbuka dan Informatif</p>
        </div>
        <h2 className="font-bold text-blue-700">Misi</h2>
        <ul className="grid grid-cols-1 gap-4">
            <li className="flex gap-4 items-center w-full p-6 rounded-[18px] bg-gray-50">
                <span className="w-7 h-7 bg-blue-700 rounded-full text-white text-sm font-bold flex items-center justify-center leading-none flex-shrink-0">1</span>
                <p className="font-lato font-bold text-blue-gray-700 text-base leading-6">Mewujudkan Pemerintahan yang Baik, Bersih, dan Bertanggung Jawab</p>
            </li>
            <li className="flex gap-4 items-center w-full p-6 rounded-[18px] bg-gray-50">
                <span className="w-7 h-7 bg-blue-700 rounded-full text-white text-sm font-bold flex items-center justify-center leading-none flex-shrink-0">1</span>
                <p className="font-lato font-bold text-blue-gray-700 text-base leading-6">Membangun Forum Koordinasi PPID Kab/Kota yang Solid</p>
            </li>
        </ul>
    </div>
    );
  }
  
  export default VisiMisi;
  