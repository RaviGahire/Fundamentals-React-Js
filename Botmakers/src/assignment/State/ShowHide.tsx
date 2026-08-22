import { useState } from "react";

export const ShowHide = () => {
  const [text, setText] = useState(false);

  return (
    <div className="h-50 ">
      <div className="relative size-full overflow-hidden">

        <img
          className="size-full object-cover"
          src={text ? "/public/4407d46b-0a3c-482b-8fd3-03830c2d9e11.jpg" : ""}
          alt=""
        />
        <div className="size-full flex justify-center items-center absolute inset-0">
            <button 
            onClick={()=>setText(!text)}
            className="cursor-pointer w-20 py-1.5 bg-yellow-600 text-white rounded-md ">{text ? "Hide" : "Show"}</button>
        </div>
      </div>
    </div>
  );
};
