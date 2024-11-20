import { HotelType } from ".././shared/types";

type Props = {
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
  numberOfNights: number;
  hotel: HotelType;
};

const BookingDetailsSummary = ({
  checkIn,
  checkOut,
  adultCount,
  childCount,
  numberOfNights,
  hotel,
}: Props) => {
  return (
    <div className="grid gap-4 rounded-lg border border-slate-300 p-6 h-fit shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800">Your Booking Details</h2>
      
      <div className="border-b pb-2">
        <p className="text-sm text-gray-600">Location:</p>
        <div className="font-semibold text-gray-800">
          {`${hotel.name}, ${hotel.city}, ${hotel.country}`}
        </div>
      </div>

      <div className="flex justify-between py-2">
        <div className="flex flex-col items-start">
          <p className="text-sm text-gray-600">Check-in</p>
          <div className="font-semibold text-gray-800">{checkIn.toDateString()}</div>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-sm text-gray-600">Check-out</p>
          <div className="font-semibold text-gray-800">{checkOut.toDateString()}</div>
        </div>
      </div>

      <div className="border-t border-b py-2">
        <p className="text-sm text-gray-600">Total length of stay:</p>
        <div className="font-semibold text-gray-800">{numberOfNights} nights</div>
      </div>

      <div>
        <p className="text-sm text-gray-600">Guests</p>
        <div className="font-semibold text-gray-800">
          {adultCount} adults & {childCount} children
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsSummary;
