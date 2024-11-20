import { Link } from "react-router-dom";
import { HotelType } from "../shared/types";
import { AiFillStar } from "react-icons/ai";

type Props = {
  hotel: HotelType;
};

const SearchResultsCard = ({ hotel }: Props) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] border border-slate-300 rounded-lg p-8 gap-8 hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="w-full h-[300px] rounded-lg overflow-hidden">
        <img
          src={hotel.imageUrls[0]}
          alt={`Image of ${hotel.name}`}
          className="w-full h-full object-cover object-center transition-transform duration-300 transform hover:scale-102"
        />
      </div>
      <div className="grid grid-rows-[1fr_2fr_1fr]">
        <div>
          <div className="flex items-center">
            <span className="flex">
              {Array.from({ length: hotel.starRating }).map((_, index) => (
                <AiFillStar key={index} className="fill-yellow-400" />
              ))}
            </span>
            <span className="ml-1 text-sm text-gray-600">{hotel.type}</span>
          </div>
          <Link
            to={`/detail/${hotel._id}`}
            className="text-2xl font-bold text-gray-800 cursor-pointer hover:text-blue-600 transition-colors duration-300"
          >
            {hotel.name}
          </Link>
        </div>

        <div>
          <div className="line-clamp-4 text-gray-600">{hotel.description}</div>
        </div>

        <div className="grid grid-cols-2 items-end mt-4 whitespace-nowrap">
          <div className="flex gap-2 items-center">
            {hotel.facilities.slice(0, 3).map((facility, index) => (
              <span
                key={index}
                className="bg-slate-200 p-2 rounded-lg font-bold text-xs text-gray-700 flex items-center gap-1"
              >
                {facility}
              </span>
            ))}
            {hotel.facilities.length > 3 && (
              <span className="text-sm text-gray-500">+{hotel.facilities.length - 3} more</span>
            )}
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="font-bold text-xl text-gray-900">
              ₹{hotel.pricePerNight} <span className="text-sm">per night</span>
            </span>
            <Link
              to={`/detail/${hotel._id}`}
              className="bg-blue-600 text-white h-full p-2 font-bold text-xl max-w-fit hover:bg-blue-500 transition-colors duration-300 rounded-lg"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsCard;
