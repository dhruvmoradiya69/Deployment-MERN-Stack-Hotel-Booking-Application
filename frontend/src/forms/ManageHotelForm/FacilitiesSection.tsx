import { useFormContext } from "react-hook-form";
import { hotelFacilities } from "../../config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";

const FacilitiesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Facilities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {hotelFacilities.map((facility) => (
          <label
            key={facility}
            className="text-sm flex items-center gap-2 text-gray-700 cursor-pointer"
          >
            <input
              type="checkbox"
              value={facility}
              className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              {...register("facilities", {
                validate: (facilities) => {
                  if (facilities && facilities.length > 0) {
                    return true;
                  } else {
                    return "At least one facility is required";
                  }
                },
              })}
              aria-label={`Select ${facility}`}
            />
            {facility}
          </label>
        ))}
      </div>

      {errors.facilities && (
        <span className="text-red-500 text-sm font-bold mt-2">
          {errors.facilities.message}
        </span>
      )}
    </div>
  );
};

export default FacilitiesSection;
