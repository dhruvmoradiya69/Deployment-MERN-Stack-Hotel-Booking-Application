import { useFormContext } from "react-hook-form";
import { hotelTypes } from "../../config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";

const TypeSection = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  const typeWatch = watch("type");

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Type</h2>
      <div className="grid grid-cols-3 grid-rows-4 gap-4">
        {hotelTypes.map((type) => (
          <label
            key={type}
            className={`cursor-pointer text-sm font-semibold rounded-full px-6 py-3 transition duration-300 ${
              typeWatch === type
                ? "bg-blue-300 text-white ring-2 ring-blue-500"
                : "bg-gray-200 text-gray-800 hover:bg-blue-100 hover:ring-2 hover:ring-blue-400"
            }`}
          >
            <input
              type="radio"
              value={type}
              {...register("type", {
                required: "This field is required",
              })}
              className="hidden"
            />
            <span>{type}</span>
          </label>
        ))}
      </div>
      {errors.type && (
        <span className="text-red-500 text-sm font-semibold mt-2">
          {errors.type.message}
        </span>
      )}
    </div>
  );
};

export default TypeSection;
