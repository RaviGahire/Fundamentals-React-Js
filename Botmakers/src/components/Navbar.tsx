import { useState } from "react";
import Logo from "/logo.png";
import { IconMenu, IconX } from "@tabler/icons-react";
import { Button } from "./buttons";
import { NavLink, useNavigate } from "react-router";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  const navTab = [
    { title: "Home", to: "/" },
    { title: "State Examples", to: "/state" },
    { title: "Prop Examples", to: "/prop" },
    { title: "List's", to: "/lists" },
    { title: "Contact Us", to: "/contact" },
  ];

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
            {navTab.map((item) => (
              <NavLink
                to={item?.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-[14px] tracking-tight text-zinc-400"
                    : " text-[14px] tracking-tight"
                }
              >
                {item?.title}
              </NavLink>
            ))}
          </div>
          {/* btn */}
          <Button
            title="sign in"
            style="w-fit text-[8px]"
            onClick={handleClick}
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        {/* logo */}
        <div className="flex justify-between items-center">
          <a href="#" className="w-25">
            <img className="size-full" src={Logo} alt="react-logo" />
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
            {navTab.map((item) => (
              <NavLink
                key={item.title}
                to={item?.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-[14px] tracking-tight text-zinc-400"
                    : " text-[14px] tracking-tight"
                }
              >
                {item?.title}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
