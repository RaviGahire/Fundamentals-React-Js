import { useState } from "react";
import { IconMinus, IconPlus } from "@tabler/icons-react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  let color = "text-green-800";
  if (count < 0) color = "text-red-500";

  return (
    <div className="size-full bg-zinc-800 p-5 rounded-md">
      <h1 className={`text-2xl font-bold tracking-tight text-center ${color}`}>Counter</h1>
      <div className="flex flex-col items-center justify-center ">
        <span className={`py-4 tabular-nums font-extrabold text-2xl ${color}`}>
          {count}
        </span>
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="cursor-pointer active:scale-96 transition-all duration-200 ease-in-out border px-4 py-1.5 rounded-md bg-red-700 border-red-700"
          >
            <IconMinus size={18} stroke={1.5} className="text-white" />
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="cursor-pointer active:scale-96 transition-all duration-200 ease-in-out border px-4 py-1.5 rounded-md bg-green-700 border-green-700"
          >
            <IconPlus size={18} stroke={1.5} className="text-white" />
          </button>
             <button
            onClick={() => setCount(0)}
            className="text-[12px] text-white cursor-pointer active:scale-96 transition-all duration-200 ease-in-out border px-4 py-1.5 rounded-md border-white/50"
          >
           Reset
          </button>
        </div>
      </div>
    </div>
  );
};
