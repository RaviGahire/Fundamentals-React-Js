import {
  IconBrandFacebook,
  IconBrandGoogle,
  IconLock,
  IconMail,
} from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

export const Login = ({}) => {
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formdata, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let userEmail = localStorage.getItem("email");
    let userPassword = localStorage.getItem("password");

    if (!userEmail) {
      alert("Invalid credential");
      navigate("/signup");
    }

    if (userEmail === formdata.email && userPassword === formdata.password) {
      alert("Successfully Logged In");
      navigate("/profile");
    } else {
      alert("Please check your email and password");
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-y-8 items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <p className="text-center mt-2">Loing with your email</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col items-center justify-center gap-y-6 border border-gray-600/30 rounded-md shadow-md p-4 sm:p-6 lg:p-8"
      >
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="password" className="text-base font-semibold">
            Email
          </label>
          <div className="flex items-center justify-center gap-1.5 px-3 border w-full rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
            <IconMail size={20} stroke={1.5} />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full py-2 outline-none"
              value={formdata?.email}
              onChange={handleForm}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="password" className="text-base font-semibold">
            Password
          </label>
          <div className="flex items-center justify-center gap-1.5 px-3 border w-full rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
            <IconLock size={20} stroke={1.5} />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full py-2 outline-none"
              value={formdata.password}
              onChange={handleForm}
            />
          </div>
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="w-full border px-6 py-2 bg-blue-600 text-white cursor-pointer font-medium rounded-md active:scale-96 transition-all duration-300 ease-in"
          >
            Login
          </button>
        </div>
        <span className="leading-0">OR</span>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 w-full">
          <button
            type="button"
            className="flex items-center justify-center gap-1.5 border px-6 py-1.5 bg-blue-600 text-white cursor-pointer font-medium rounded-md active:scale-96 transition-all duration-300 ease-in w-full sm:w-auto"
          >
            <IconBrandGoogle stroke={1.5} size={18} />
            Google
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-1.5 border px-6 py-1.5 bg-[#355DFF] text-white cursor-pointer font-medium rounded-md active:scale-96 transition-all duration-300 ease-in w-full sm:w-auto"
          >
            <IconBrandFacebook stroke={1.5} size={18} />
            Facebook
          </button>
        </div>
        <div className="text-center">
          <Link to={"/signup"} className="text-[14px] text-gray-600">
            Dont have an account{" "}
            <span className="text-blue-500 underline font-semibold">
              create account
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};
