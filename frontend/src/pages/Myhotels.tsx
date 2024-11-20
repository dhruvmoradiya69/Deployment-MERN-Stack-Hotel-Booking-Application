import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from "../api-client";
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiMoney, BiStar } from "react-icons/bi";

const MyHotels = () => {
  const { data: hotelData } = useQuery(
    "fetchMyHotels",
    apiClient.fetchMyHotels,
    {
      onError: () => {},
    }
  );

  if (!hotelData) {
    return <span>No Hotels found</span>;
  }

  return (
    <div className="space-y-5">
      <span className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">My Hotels</h1>
        <Link
          to="/add-hotel"
          className="bg-blue-600 text-white text-xl font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-500 transition duration-200"
        >
          Add Hotel
        </Link>
      </span>
      <div className="space-y-8">
        {hotelData.map((hotel) => (
          <div
            data-testid="hotel-card"
            className="flex flex-col justify-between bg-white border border-slate-300 rounded-lg p-8 gap-5 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <h2 className="text-2xl font-bold text-gray-800">{hotel.name}</h2>
            <div className="whitespace-pre-line text-gray-600 mt-2">{hotel.description}</div>
            <div className="space-y-3 mt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                <div className="border border-slate-300 rounded-sm p-3 flex items-center space-x-2">
                  <BsMap className="text-gray-600" />
                  <span>{hotel.city}, {hotel.country}</span>
                </div>
                <div className="border border-slate-300 rounded-sm p-3 flex items-center space-x-2">
                  <BsBuilding className="text-gray-600" />
                  <span>{hotel.type}</span>
                </div>
                <div className="border border-slate-300 rounded-sm p-3 flex items-center space-x-2">
                  <BiMoney className="text-gray-600" />
                  <span>₹{hotel.pricePerNight} per night</span>
                </div>
                <div className="border border-slate-300 rounded-sm p-3 flex items-center space-x-2">
                  <BiHotel className="text-gray-600" />
                  <span>{hotel.adultCount} adults, {hotel.childCount} children</span>
                </div>
                <div className="border border-slate-300 rounded-sm p-3 flex items-center space-x-2">
                  <BiStar className="text-gray-600" />
                  <span>{hotel.starRating} Star Rating</span>
                </div>
              </div>
            </div>
            <span className="flex justify-end mt-4">
              <Link
                to={`/edit-hotel/${hotel._id}`}
                className="bg-blue-600 text-white text-lg font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-500 transition duration-200"
              >
                View Details
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyHotels;
