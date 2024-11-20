import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showToast } = useAppContext();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      showToast({ message: "Registration Success!", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form 
      className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg flex flex-col gap-6"
      onSubmit={onSubmit}
    >
      <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
        Create an Account
      </h2>

      {/* First and Last Name Fields */}
      <div className="flex flex-col md:flex-row gap-6">
        <label className="flex-1">
          <span className="text-gray-700 font-semibold">First Name</span>
          <input
            className="mt-1 p-3 border-2 border-gray-300 rounded-lg w-full text-gray-800 focus:ring-2 focus:ring-blue-500"
            {...register("firstName", { required: "This field is required" })}
          />
          {errors.firstName && (
            <span className="text-red-500 text-sm mt-1">{errors.firstName.message}</span>
          )}
        </label>

        <label className="flex-1">
          <span className="text-gray-700 font-semibold">Last Name</span>
          <input
            className="mt-1 p-3 border-2 border-gray-300 rounded-lg w-full text-gray-800 focus:ring-2 focus:ring-blue-500"
            {...register("lastName", { required: "This field is required" })}
          />
          {errors.lastName && (
            <span className="text-red-500 text-sm mt-1">{errors.lastName.message}</span>
          )}
        </label>
      </div>

      {/* Email Field */}
      <label className="flex flex-col">
        <span className="text-gray-700 font-semibold">Email</span>
        <input
          type="email"
          className="mt-1 p-3 border-2 border-gray-300 rounded-lg w-full text-gray-800 focus:ring-2 focus:ring-blue-500"
          {...register("email", { required: "This field is required" })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
        )}
      </label>

      {/* Password Field */}
      <label className="flex flex-col">
        <span className="text-gray-700 font-semibold">Password</span>
        <input
          type="password"
          className="mt-1 p-3 border-2 border-gray-300 rounded-lg w-full text-gray-800 focus:ring-2 focus:ring-blue-500"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500 text-sm mt-1">{errors.password.message}</span>
        )}
      </label>

      {/* Confirm Password Field */}
      <label className="flex flex-col">
        <span className="text-gray-700 font-semibold">Confirm Password</span>
        <input
          type="password"
          className="mt-1 p-3 border-2 border-gray-300 rounded-lg w-full text-gray-800 focus:ring-2 focus:ring-blue-500"
          {...register("confirmPassword", {
            validate: (val) => {
              if (!val) {
                return "This field is required";
              } else if (watch("password") !== val) {
                return "Your passwords do not match";
              }
            },
          })}
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</span>
        )}
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      >
        Create Account
      </button>
    </form>
  );
};

export default Register;
