import monke from "../assets/monke.jpg";

function NotFound() {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-white">
      <img src={monke} alt="Monke" className="w-[400px] h-[400px]" />
      <h1 className="font-bold font-roboto text-red-500 text-2xl">
        404 - Page Not Found
      </h1>
    </div>
  );
}

export default NotFound;
