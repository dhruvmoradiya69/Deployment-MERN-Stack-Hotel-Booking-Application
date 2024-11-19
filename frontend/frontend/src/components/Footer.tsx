import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-800 py-10">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
        <Link to="/">HotelHub</Link>
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <p className="cursor-pointer text-white px-4 py-2 rounded-md hover:bg-blue-600 hover:scale-105 transform transition-all duration-300 ease-in-out">Privacy Policy</p>
          <p className="cursor-pointer text-white px-4 py-2 rounded-md hover:bg-blue-600 hover:scale-105 transform transition-all duration-300 ease-in-out">Terms of Service</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;