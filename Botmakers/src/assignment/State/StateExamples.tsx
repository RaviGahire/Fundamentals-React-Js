import { useState } from "react";
import { CharacterCounter } from "./CharacterCounter";
import { ColorChanger } from "./ColorChanger";
import { Counter } from "./Counter";
import { LikeButton } from "./LikeButton";
import { Preview } from "./Preview";
import { ShowHide } from "./ShowHide";
import { ToggleButton } from "./ToggleButton";

export const StateExamples = () => {

  const [color,setColor] = useState(false)

  return (
    <div className="h-auto w-full pt-18 bg-zinc-900">
      <div className="flex items-center justify-around px-5 py-4 ">
        <h1 className={color  ? `text-2xl text-red-500 font-extrabold font-mono` : `text-2xl text-white font-extrabold font-mono`}>
          State Practical{" "}
        </h1>
        <ToggleButton fontColor={setColor} />
      </div>
      <div className="h-screen grid place-items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border border-rose-500 p-4 rounded-lg">
            <Counter />
          </div>
          <div className="border border-rose-500 p-4 rounded-lg">
            <CharacterCounter />
          </div>
          <div className="border border-rose-500 p-4 rounded-lg">
            <ColorChanger />
          </div>
          <div className="border border-rose-500 p-4 rounded-lg">
            <LikeButton />
          </div>
          <div className="border border-rose-500 p-4 rounded-lg">
            <Preview />
          </div>
          <div className="border border-rose-500 p-4 rounded-lg">
            <ShowHide />
          </div>
        </div>
      </div>
    </div>
  );
};
