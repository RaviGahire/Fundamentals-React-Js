import React, { useState } from "react";

export const ColorChanger = () => {
  const [color, setColor] = useState("");

  const changeColor = () => {
    let val = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
    setColor(val);
  };

  return (
    <div className="size-full border-white/30 p-5 bg-zinc-800 rounded-md ">
      <div className="w-full h-40 rounded-sm"
      style={{backgroundColor:`#${color}`}}
      ></div>

      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={changeColor}
          className="cursor-pointer border border-white/40 bg-amber-950 text-white text-[14px] rounded-sm px-4 py-2"
        >
          Change Color
        </button>

        <button 
        onClick={()=> setColor("ffffff")}
        className="cursor-pointer border border-white/40 bg-amber-950 text-white text-[14px] rounded-sm px-4 py-2">
          Reset Color
        </button>
        
      </div>
    </div>
  );
};
