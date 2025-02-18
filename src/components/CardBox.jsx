
const CardBox = ({ title, children }) => {
  return (
    <div className="bg-blue-700 rounded-xl mt-8 p-3">
      <h2 className="text-blue-100 text-center leading-9 font-semibold">
        {title}
      </h2>
      <div className="text-white text-left gap-2 mt-3">{children}</div>
    </div>
  );
};

export default CardBox;