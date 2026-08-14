import { useState } from "react";
import Logo from "/logo.png";
import { IconMenu, IconX } from "@tabler/icons-react";
import { Button } from "./buttons";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-100 bg-zinc-950 text-white mx-auto font-mono p-3.5 border-b border-white/50">
      {/* desktop */}
      <div className="hidden md:flex items-center justify-between px-8">
        {/* Logo */}
        <div className="w-10 md:w-40 ">
          <img className="size-full object-cover" src={Logo} alt="react-logo" />
        </div>
        {/*nav-bar*/}
        <div className="flex justify-center items-center gap-8">
          <div className="flex justify-center items-center gap-4">
            <a href="#" className="text-[14px] tracking-tight">
              Home
            </a>
            <a href="#" className="text-[14px] tracking-tight">
              About
            </a>
            <a href="#" className="text-[14px] tracking-tight">
              Services
            </a>
            <a href="#" className="text-[14px] tracking-tight">
              Contact
            </a>
          </div>
          {/* btn */}
          <Button title="sign in"  />
        </div>
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        {/* logo */}
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={Logo} alt="react-logo" />
          </a>
          <div className="pr-4" onClick={() => setOpen(!open)}>
            {open ? (
              <IconX stroke={2} className="text-gray-400" />
            ) : (
              <IconMenu stroke={2} />
            )}
          </div>
        </div>
        {/* nav-bar */}
        {open && (
          <div className="absolute h-fit bg-zinc-950 w-full left-0  top-15 flex flex-col justify-end items-center gap-4">
            <a href="" className=" px-4 w-full">
              Home
            </a>
            <a href="" className=" px-4 w-full">
              About
            </a>
            <a href="" className="px-4  w-full">
              Services
            </a>
            <a href="" className="px-4 w-full">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
