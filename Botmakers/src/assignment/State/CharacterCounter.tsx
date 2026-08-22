import { useState } from "react";

export const CharacterCounter = () => {
    const [char,setChar] = useState(0)
  return (
    <div className="flex flex-col items-center justify-center size-full bg-zinc-700 text-white p-5 rounded-md">
      <label htmlFor="char" className="text-[18px] tracking-tighter font-semibold inline-flex justify-between w-full items-center"><span>Character Counter</span> <span className="tabular-nums">Count {char} </span></label>

      <textarea name="char" id="char" onChange={(e)=> setChar(e.target.value.replace(/\s/g, "").length)}
        className="border border-gray-600 rounded-md w-full "
        >
      </textarea>
    </div>
  );
};
