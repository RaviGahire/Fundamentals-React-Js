import { IconLock, IconMail, IconPhone, IconUser } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

export const SignUp = () => {
  const [formdata, setFormData] = useState({
    name:"",
    mobileNo: "",
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

    alert("Account created succesfully");
    const  {name, email ,password,mobileNo} = formdata
    localStorage.setItem("email", email);
    localStorage.setItem("name", name);
    localStorage.setItem("mobile", mobileNo);
    localStorage.setItem("password", password);
    alert("User saved successfully");
    navigate("/login");
  };
  
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-y-8 items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
  <div>
    <h1 className="text-3xl font-bold text-center">Sign Up</h1>
    {/* <p className="text-center mt-2">Loing with your email</p> */}
  </div>
  <form
    onSubmit={handleSubmit}
    className="w-full max-w-md flex flex-col items-center justify-center gap-y-6 border border-gray-600/30 rounded-md shadow-md p-4 sm:p-6 lg:p-8"
  >
 <div className="w-full flex flex-col gap-2">
      <label htmlFor="name" className="text-base font-semibold">
        Name
      </label>
      <div className="flex items-center justify-center gap-1.5 px-3 border w-full rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
        <IconUser size={20} stroke={1.5} />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          className="w-full py-2 outline-none"
          value={formdata?.name}
          onChange={handleForm}
        />
      </div>
    </div>

    <div className="w-full flex flex-col gap-2">
      <label htmlFor="mobileNo" className="text-base font-semibold">
        Mobile Number
      </label>
      <div className="flex items-center justify-center gap-1.5 px-3 border w-full rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
        <IconPhone size={20} stroke={1.5} />
        <input
          type="number"
          name="mobileNo"
          id="mobileNo"
          placeholder="Enter your mobile number"
          className="w-full py-2 outline-none"
          value={formdata?.mobileNo}
          min={10}
          onChange={handleForm}
        />
      </div>
    </div>

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
        SignUp
      </button>
    </div>
    <span className="leading-0">OR</span>

    <Link to={"/login"} className="text-[14px] text-center">
      Already have an account{" "}
      <span className="text-blue-500 underline font-semibold">Login</span>
    </Link>
  </form>
</div>
  );
};
