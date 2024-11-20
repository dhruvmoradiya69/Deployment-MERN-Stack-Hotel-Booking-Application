import { Link } from "react-router-dom";
import { HotelType } from "../shared/types";

type Props = {
  hotel: HotelType;
};

const LatestDestinationCard = ({ hotel }: Props) => {
  return (
    <Link
      to={`/detail/${hotel._id}`}
      className="relative cursor-pointer overflow-hidden rounded-lg transform transition-all hover:scale-105 hover:shadow-lg"
    >
      <div className="h-[300px] w-full">
        <img
          src={hotel.imageUrls[0]}
          alt={hotel.name}
          className="w-full h-full object-cover object-center transition-opacity duration-500 ease-in-out opacity-90 hover:opacity-100"
        />
      </div>

      <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 w-full rounded-b-lg">
        <span className="text-white font-semibold tracking-tight text-2xl sm:text-3xl">
          {hotel.name}
        </span>
      </div>
    </Link>
  );
};

export default LatestDestinationCard;
