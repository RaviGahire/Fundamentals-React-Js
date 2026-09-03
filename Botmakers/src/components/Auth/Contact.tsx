import { IconLock, IconMail, IconPhone, IconUser } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router";

export const Contact = () => {
  const [formdata, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleForm = (e: React.ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = e.target;

    setFormData({ ...formdata, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formdata);
  };
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col pt-2 items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
  <div>
    <h1 className="text-3xl font-bold text-center">Contact Us</h1>
    {/* <p className="text-center mt-2">Loing with your email</p> */}
  </div>
  <form
    onSubmit={handleSubmit}
    className="w-full max-w-2xl flex flex-col items-center justify-center gap-y-6 border border-gray-600/30 rounded-md shadow-md p-4 sm:p-6 lg:p-8"
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
      <label htmlFor="lastName" className="text-base font-semibold">
        Last Name
      </label>
      <div className="flex items-center justify-center gap-1.5 px-3 border w-full rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
        <IconUser size={20} stroke={1.5} />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Enter your lastname"
          className="w-full py-2 outline-none"
          value={formdata?.lastName}
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
      <label htmlFor="message" className="text-base font-semibold">
        Message
      </label>
      <div className="flex items-center justify-center gap-1.5 px-3 border w-full rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
        <textarea
          name="message"
          id="message"
          placeholder="Enter your message"
          className="w-full py-2 outline-none resize-y"
          value={formdata.message}
          onChange={handleForm}
        />
      </div>
    </div>
    <div className="w-full">
      <button
        type="submit"
        className="w-full border px-6 py-2 bg-blue-600 text-white cursor-pointer font-medium rounded-md active:scale-96 transition-all duration-300 ease-in"
      >
        Send
      </button>
    </div>
  </form>
</div>
  );
};
