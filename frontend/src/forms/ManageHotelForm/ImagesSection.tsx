import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const ImagesSection = () => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<HotelFormData>();

  const existingImageUrls = watch("imageUrls");

  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    imageUrl: string
  ) => {
    event.preventDefault();
    setValue(
      "imageUrls",
      existingImageUrls.filter((url) => url !== imageUrl)
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Images</h2>
      <div className="border rounded p-6 flex flex-col gap-6 bg-gray-50">
        {existingImageUrls && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {existingImageUrls.map((url) => (
              <div key={url} className="relative group">
                <img
                  src={url}
                  className="min-h-full w-full object-cover rounded-md"
                  alt="uploaded"
                />
                <button
                  onClick={(event) => handleDelete(event, url)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-white text-sm font-semibold px-3 py-2 rounded-md"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4">
          <input
            type="file"
            multiple
            accept="image/*"
            className="w-full text-gray-700 font-normal border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("imageFiles", {
              validate: (imageFiles) => {
                const totalLength =
                  imageFiles.length + (existingImageUrls?.length || 0);

                if (totalLength === 0) {
                  return "At least one image should be added";
                }

                if (totalLength > 6) {
                  return "Total number of images cannot be more than 6";
                }

                return true;
              },
            })}
          />
        </div>
      </div>

      {errors.imageFiles && (
        <span className="text-red-500 text-sm font-bold mt-2 block">
          {errors.imageFiles.message}
        </span>
      )}
    </div>
  );
};

export default ImagesSection;
