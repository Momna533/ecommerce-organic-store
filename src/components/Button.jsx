import { Link } from "react-router-dom";

const Button = ({ varient, to, className, onClick, text }) => {
  if (varient === "link") {
    return (
      <Link
        className={`flex items-center justify-center bg-btnBg p-4 text-white rounded text-sm uppercase font-bold ${className}`}
        to={to}
        onClick={onClick}
      >
        {text}
      </Link>
    );
  }
  return (
    <button
      className={`flex items-center justify-center bg-btnBg p-4 text-white rounded text-sm uppercase font-bold ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
