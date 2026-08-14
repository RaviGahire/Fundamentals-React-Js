import { IconX, IconBrandFacebook, IconBrandYoutube, IconBrandInstagram } from "@tabler/icons-react"; // Assuming you are using Tabler Icons

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 py-8 px-6 lg:px-8 bg-zinc-950 bg-linear-to-r from-zinc-800 to-zinc-900 backdrop-blur-md text-center lg:text-left">
      
      {/* Logo */}
      <div className="w-32 lg:w-40 order-1 lg:order-0">
        <img className="w-full h-auto object-cover" src="/public/logo.png" alt="logo" />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8 text-white/50 font-light lg:border-r lg:border-white/20 lg:pr-6 order-2 lg:order-none">
        <a href="#" className="hover:text-white transition-colors duration-200">About</a>
        <a href="#" className="hover:text-white transition-colors duration-200">Services</a>
        <a href="#" className="hover:text-white transition-colors duration-200">Privacy & policy</a>
        <a href="#" className="hover:text-white transition-colors duration-200">Terms & Conditions</a>
        <a href="#" className="hover:text-white transition-colors duration-200">Support</a>
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-4 text-gray-400 order-3 lg:order-0">
        <IconX size={20} stroke={2} className="hover:text-purple-500 transition-colors duration-200 ease-linear cursor-pointer" />
        <IconBrandFacebook size={20} stroke={1.5} className="hover:text-purple-500 transition-colors duration-200 ease-linear cursor-pointer" />
        <IconBrandYoutube size={20} stroke={1.5} className="hover:text-purple-500 transition-colors duration-200 ease-linear cursor-pointer" />
        <IconBrandInstagram size={20} stroke={1.5} className="hover:text-purple-500 transition-colors duration-200 ease-linear cursor-pointer" />
      </div>

      {/* Copyrights */}
      <div className="order-4 lg:order-0 w-full lg:w-auto border-t border-white/10 lg:border-none pt-6 lg:pt-0">
        <p className="text-white/50 text-sm lg:text-base">© Copyright 2021 Botmakers</p>
      </div>

    </footer>
  );
}