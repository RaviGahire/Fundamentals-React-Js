import {
  IconBolt,
  IconBuildingBroadcastTower,
  IconChartLine,
  IconGrid3x3,
  IconLayoutGrid,
} from "@tabler/icons-react";
import { Button } from "./buttons";

export const Features = () => {




  return (
    <section aria-label="features-section" className="bg-zinc-900">
      <div className="py-8">
        <h2 className="text-2xl md:text-4xl text-center font-bold text-purple-500 underline underline-offset-8">
          Features
        </h2>
      </div>
      {/* content */}
      <div className="max-w-7xl mx-auto px-3 ">
        {/* top-badge  */}
        <div className="flex items-center justify-center gap-1 border border-purple-500/30 shadow-inner shadow-purple-300/40 w-fit px-8 py-1.5 text-white font-semibold text-[12px] tracking-tight rounded-full">
          <IconBolt stroke={2} size={18} />
          <span>Built for the team-up</span>
        </div>

        {/* headings */}
        <div className="my-4">
          <h1 className="text-3xl md:text-6xl text-white max-w-2xl font-semibold md:leading-16 text-pretty">
            Feature that turn attention into action
          </h1>
        </div>
        <div>
          <p className="text-white max-w-2xl text-pretty text-[14px] md:text-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            voluptatum illo, dignissimos voluptatem dicta deleniti harum officia
            corporis labore explicabo facilis maxime soluta sapiente doloribus!
            Molestias aperiam voluptatibus voluptate nulla.
          </p>
        </div>
        <div className="flex gap-2 py-4">
          <Button title="Book demo" />
          <Button title="Join now" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto md:h-150 px-3">
        {/* header */}
        <div className="flex justify-between items-center px-1 py-4">
          <div className="text-white flex gap-1.5 md:gap-3 items-center justify-center">
            <IconGrid3x3  size={20} />
            <span className=" md:text-xl font-semibold"> Feature highlights </span>
          </div>
          <div className="text-white size-fit px-4 py-2 rounded-full bg-zinc-700 border border-white/10 text-[12px] capitalize font-bold">
            live
          </div>
        </div>
        {/* body */}
        <div className="md:py-4 flex flex-col gap-6">
          {/* 1 card */}
          <div className=" p-2.5 md:p-5 rounded-2xl border border-white/20 bg-zinc-800">
            <div className="flex justify-start items-center gap-3 md:gap-6">
              <div className="p-1 md:p-0 md:size-10 bg-purple-800 rounded-md flex justify-center items-center text-white">
                {" "}
                <IconLayoutGrid size={20} stroke={2} />
              </div>
              <div>
                <h1 className="capitalize text-xl md:text-2xl font-semibold text-gray-300">
                  Instant match
                </h1>
                <p className="text-gray-500 max-w-xl font-medium tracking-tight text-pretty leading-4.5 md:leading-none">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem,
                  alias.orem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rem, alias.
                </p>
              </div>
            </div>
          </div>
          {/* 2 card */}
          <div className="p-2.5 md:p-5 rounded-2xl border border-white/20 bg-zinc-800">
            <div className="flex justify-start items-center gap-3 md:gap-6">
              <div className="p-1 md:p-0 md:size-10 bg-purple-800 rounded-md flex justify-center items-center text-white">
                {" "}
                <IconChartLine size={20} stroke={2} />
              </div>
              <div>
                <h1 className="capitalize text-xl md:text-2xl font-semibold text-gray-300">
                  Live score
                </h1>
                <p className="text-gray-500 max-w-xl font-medium tracking-tight text-pretty leading-4.5 md:leading-none">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem,
                  alias.orem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rem, alias.
                </p>
              </div>
            </div>
          </div>
          {/* 3 card */}
          <div className="p-2.5 md:p-5 rounded-2xl border border-white/20 bg-zinc-800">
            <div className="flex justify-start items-center gap-3 md:gap-6">
              <div className="p-1 md:p-0 md:size-10 bg-purple-800 rounded-md flex justify-center items-center text-white">
                {" "}
                <IconBuildingBroadcastTower size={20} stroke={2} />
              </div>
              <div>
                <h1 className="capitalize text-xl md:text-2xl font-semibold text-gray-300">
                  Live matches
                </h1>
                <p className="text-gray-500 max-w-xl font-medium tracking-tight text-pretty leading-4.5 md:leading-none">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem,
                  alias.orem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rem, alias.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="flex justify-center items-center p-8">
          <Button title="see more" />
        </div>
      </div>
    </section>
  );
};
