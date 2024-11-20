import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const location = useLocation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      showToast({ message: "Sign in Successful!", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate(location.state?.from?.pathname || "/");
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
      className="max-w-md mx-auto mt-12 p-8 bg-white shadow-lg rounded-lg space-y-6"
      onSubmit={onSubmit}
    >
      <h2 className="text-3xl font-semibold text-center text-gray-900">Sign In</h2>

      {/* Email Field */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          className="border-2 border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("email", { required: "This field is required" })}
        />
        {errors.email && (
          <p className="text-red-600 text-xs mt-2">{errors.email.message}</p>
        )}
      </div>

      {/* Password Field */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
        <input
          type="password"
          className="border-2 border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("password", {
            required: "This field is required",
            minLength: { value: 6, message: "Password must be at least 6 characters" },
          })}
        />
        {errors.password && (
          <p className="text-red-600 text-xs mt-2">{errors.password.message}</p>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">
          Not Registered?{" "}
          <Link className="underline text-blue-600 hover:text-blue-700" to="/register">
            Create account
          </Link>
        </span>

        <button
          type="submit"
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default SignIn;
