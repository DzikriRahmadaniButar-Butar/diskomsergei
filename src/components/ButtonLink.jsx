import { Link } from "react-router-dom";
import { CloudDownload } from "lucide-react";

const ButtonLink = ({ title, link, showIcon = true, buttonText = "Kunjungi disini" }) => {
  return (
    <div className="flex justify-between items-center bg-blue-100 p-4 rounded-lg">
      <span className="font-semibold text-blue-900">{title}</span>
      <Link
        to={link}
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        {showIcon && <CloudDownload size={18} />}
        {buttonText}
      </Link>
    </div>
  );
};

export default ButtonLink;
