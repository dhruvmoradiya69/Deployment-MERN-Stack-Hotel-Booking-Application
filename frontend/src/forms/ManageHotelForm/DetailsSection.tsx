import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const DetailsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="flex flex-col gap-6 md:px-52 px-6"> {/* Added padding for both sides */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Add Hotel</h1>
      <label className="text-gray-700 text-sm font-semibold">
        Name
        <input
          type="text"
          className="border rounded-lg w-full py-2 px-3 mt-1 text-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
          {...register("name", { required: "This field is required" })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </label>

      <div className="flex gap-6 md:gap-8">
        <label className="text-gray-700 text-sm font-semibold flex-1">
          City
          <input
            type="text"
            className="border rounded-lg w-full py-2 px-3 mt-1 text-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
            {...register("city", { required: "This field is required" })}
          />
          {errors.city && (
            <span className="text-red-500 text-sm">{errors.city.message}</span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-semibold flex-1">
          Country
          <input
            type="text"
            className="border rounded-lg w-full py-2 px-3 mt-1 text-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
            {...register("country", { required: "This field is required" })}
          />
          {errors.country && (
            <span className="text-red-500 text-sm">{errors.country.message}</span>
          )}
        </label>
      </div>

      <label className="text-gray-700 text-sm font-semibold">
        Description
        <textarea
          rows={6}
          className="border rounded-lg w-full py-2 px-3 mt-1 text-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
          {...register("description", { required: "This field is required" })}
        />
        {errors.description && (
          <span className="text-red-500 text-sm">{errors.description.message}</span>
        )}
      </label>

      <div className="flex gap-6 md:gap-8">
        <label className="text-gray-700 text-sm font-semibold flex-1">
          Price Per Night
          <input
            type="number"
            min={1}
            className="border rounded-lg w-full py-2 px-3 mt-1 text-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
            {...register("pricePerNight", { required: "This field is required" })}
          />
          {errors.pricePerNight && (
            <span className="text-red-500 text-sm">{errors.pricePerNight.message}</span>
          )}
        </label>

        <label className="text-gray-700 text-sm font-semibold flex-1">
          Star Rating
          <select
            {...register("starRating", { required: "This field is required" })}
            className="border rounded-lg w-full py-2 px-3 mt-1 text-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
          >
            <option value="" className="text-sm font-bold">Select a Rating</option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option value={num} key={num}>{num}</option>
            ))}
          </select>
          {errors.starRating && (
            <span className="text-red-500 text-sm">{errors.starRating.message}</span>
          )}
        </label>
      </div>
    </div>
  );
};

export default DetailsSection;
