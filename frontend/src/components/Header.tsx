import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="bg-blue-800 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <span className="text-2xl md:text-3xl text-white font-bold tracking-wide">
          <Link to="/">HotelHub</Link>
        </span>

        {/* Navigation Links */}
        <span className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <Link
                className="text-white text-sm md:text-base font-medium px-4 py-2 hover:bg-blue-500 hover:scale-105 rounded-md transition-all duration-300 ease-in-out"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="text-white text-sm md:text-base font-medium px-4 py-2 hover:bg-blue-500 hover:scale-105 rounded-md transition-all duration-300 ease-in-out"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <Link
                className="text-white text-sm md:text-base font-medium px-4 py-2 hover:bg-blue-500 hover:scale-105 rounded-md transition-all duration-300 ease-in-out"
                to="/my-profile"
              >
                My Profile
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="text-blue-800 text-sm md:text-base font-medium px-4 py-2 bg-white rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
