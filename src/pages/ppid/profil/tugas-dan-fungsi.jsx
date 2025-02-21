import ButtonLink from "../../../components/ButtonLink";

function TugasDanFungsi() {
  return (
      <>
          <div className="prose lg:prose-lg prose-slate max-w-none mx-0 md:mx-4">
              <h2 className="text-xl font-bold text-blue-700">Tugas dan Fungsi</h2>
              <ButtonLink title="Formulir Permintaan Informasi PPID" link="/formulir" showIcon={false} buttonText="Ajukan" />
              <div className="bg-gray-50 rounded-lg p-3 flex flex-col gap-3">
                <h3 className="font-bold text-sm text-blue-gray-700">Tugas</h3>
                <p>Menyediakan, menyimpan, mendokumentasikan, dan mengamankan informasi.</p>
                <div className="border"></div>
                <h3 className="font-bold text-blue-gray-700">Fungsi</h3>
                <div>
                <p>Sebagai PPID Pembantu, PPID Diskominfo Jabar menpunyai fungsi:</p>
                <ol>
                  <li>Membantu PPID Utama melaksanakan tanggung jawab, tugas, dan kewenangannya;</li>
                  <li>Mengumpulkan bahan informasi dan dokumentasi pada Dinas Komunikasi dan Informatika Daerah;</li>
                  <li>Menyimpan, mendokumentasikan, menyediakan dan memberi pelayanan informasi kepada publik;</li>
                  <li>Mengkoordinasikan penyusunan dan pemutakhiran data di masing-masing unit kerja untuk ditetapkan oleh pimpinan unit kerja pada Dinas Komunikasi dan Informatika Daerah;</li>
                  <li>Menyusun laporan pengelolaan pelayanan informasi di setiap unit kerja dalam Dinas Komunikasi dan Informatika Daerah;</li>
                  <li>Membentuk petugas pelayanan informasi di unit kerja masing-masing yang meliputi pengelolaan data, kearsipan, dokumentasi serta kehumasan;</li>
                  <li>Mengkoordinasikan dan memastikan proses keberatan kepada Ketua Tim PPID Pembantu;</li>
                  <li>Menyediakan, menyimpan, mendokumentasian, dan mengamankan informasi publik di Dinas Komunikasi dan Informatika Daerah;</li>
                  <li>Memberikan pelayanan informasi publik secara cepat, tepat, dan sederhana, terkait permohonan informasi pada Dinas Komunikasi dan Informatika Daerah;</li>
                  <li>Membuat informasi yang dikecualikan yang telah habis jangka waktu pengecualiannya sebagai informasi publik yang dapat di akses pada PPID masing-masing unit kerja dan melaporkannya kepada Ketua Tim PPID Pembantu;</li>
                  <li>Membuat pertimbangan tertulis atas setiap kebijakan yang diambil untuk memenuhi hak masyarakat atas informasi publik;</li>
                  <li>Menyusun telaahan staf sebagai bahan pertimbangan pengambilan kebijakan; dan</li>
                  <li>Menyelenggarakan tugas lain, sesuai dengan tugas pokok dan fungsinya.</li>
                </ol>
                </div>
              </div>
          </div>
      </>
  );
}

export default TugasDanFungsi;
