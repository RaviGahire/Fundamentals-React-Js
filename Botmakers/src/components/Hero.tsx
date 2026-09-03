import { IconDeviceMobile, IconExchange } from "@tabler/icons-react";
import { Button } from "./buttons";
import { Loader } from "../assignment/ConditionalRendering/Loader";
import { useState } from "react";

export const Hero = () => {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 2000);

  if (!loading) {
    return <Loader />;
  }

  return (
    <section
      aria-label="Hero-section"
      className="relative h-screen bg-black w-full bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-no-repeat bg-cover"
    >
      <div className="absolute inset-0 bg-black/45" />
      {/* content */}
      <div className="relative size-full flex flex-col justify-center items-center z-10 ">
        <h1 className="text-white text-3xl md:text-4xl lg:text-6xl uppercase font-sans tracking-wide font-bold">
          Botmakers
        </h1>
        <p className="text-zinc-50 max-w-3xl text-pretty text-center mt-3 md:mt-8 text-[15px] md:text-xl ">
          To bridge the gap between curiosity and creation by building a strong
          robotics and STEM ecosystem in India, where every student has the
          chance to learn, build, and compete on global platforms.
        </p>
        {/* btns */}
        <div className="flex gap-2 items-center justify-center flex-col md:flex-row mt-4 md:mt-8 text-[#d5bee9]">
          <Button
            title="explore more"
            icon={<IconExchange stroke={1} size={20} />}
          />
          <Button
            title="Contact Us"
            icon={<IconDeviceMobile stroke={1.5} size={20} />}
          />
        </div>
      </div>
    </section>
  );
};
