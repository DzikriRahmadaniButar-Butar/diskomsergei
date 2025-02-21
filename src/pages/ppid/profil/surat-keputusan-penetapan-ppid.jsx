import ButtonLink from "../../../components/ButtonLink";

function SuratKeputusanPenetapanPPID() {
    return (
    <>
      <div className="prose lg:prose-lg prose-slate max-w-none mx-0 md:mx-4">
        <h2 className="text-xl font-bold text-blue-700">Surat Keputusan Penetapan PPID</h2>
        <p className="font-lato font-semibold text-blue-gray-700 text-base leading-6">Untuk melihat Surat Keputusan Pentepan PPID Diskominfo Jabar dapat dilihat pada link di sini:</p>
        <ButtonLink title="SK Nomor 256/KPG.03.01.01.01/SEKRE" link="/formulir" showIcon={true} buttonText="Unduh" />
      </div>
    </>
    );
  }
  
  export default SuratKeputusanPenetapanPPID;
  