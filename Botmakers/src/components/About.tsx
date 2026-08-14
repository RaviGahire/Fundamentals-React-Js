import { IconBulb, IconTarget, IconUsers, IconWorldMap } from "@tabler/icons-react";
import { Button } from "./buttons";

export const About = () => {
  return (
    <section className="h-auto lg:h-screen bg-zinc-900">
      {/* Heading */}
      <h2 className="text-purple-400 text-2xl md:text-4xl capitalize font-semibold tracking-tight text-center pt-4 md:pt-8 underline underline-offset-8">
        About Us
      </h2>

      {/* content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-2 mt-4 px-3">
        {/* image-side */}
        <div className="w-full lg:w-1/3 md:h-150 rounded-[20px] grow p-2 border border-purple-600/20">
          <img
            className="size-full rounded-xl object-cover mask-b-from-50 border border-purple-400/30"
            src="https://images.unsplash.com/photo-1657641898365-48ae7d64e676?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHJvYm90fGVufDB8fDB8fHww"
            alt="image"
          />
        </div>
        {/*  card */}
        <div className="w-full h-auto lg:w-1/2 lg:pl-8">
          {/* header */}
          <div className="flex justify-between items-center px-1 py-2 md:py-4">
            <div className="text-white flex gap-1.5 md:gap-3 items-center justify-center">
              <IconUsers size={20} stroke={1} />
              <span className=" md:text-xl font-semibold">Who we are</span>
            </div>
            <div className="text-white size-fit px-4 py-1.5 md:py-2 rounded-full bg-zinc-700 border border-white/10 text-[10px] md:text-[12px] capitalize font-bold">
              trusted
            </div>
          </div>
          {/* body */}
          <div className="py-4 flex flex-col gap-6">
            {/* 1 card */}
            <div className="p-2.5 md:p-5 rounded-2xl border border-white/20 bg-zinc-800">
              <div className="flex justify-start items-start gap-3 md:gap-6">
                <div className="p-1 md:py-3 md:px-1 bg-purple-800 rounded-full flex justify-center items-center text-white">
                  {" "}
                  <IconTarget size={20} stroke={2} />
                </div>
                <div>
                  <h1 className="capitalize md:text-2xl font-semibold text-gray-300">
                    mission driven
                  </h1>
                  <p className="lowercase md:text-base text-[14px] md:text-base antialiased max-w-xl text-gray-500 font-medium tracking-tight text-pretty">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Rem, alias.orem ipsum dolor, sit amet consectetur
                    adipisicing elit. Rem, alias.
                  </p>
                </div>
              </div>
            </div>
            {/* 2 card */}
            <div className="p-2.5 md:p-5 rounded-2xl border border-white/20 bg-zinc-800">
              <div className="flex justify-start items-start gap-3 md:gap-6">
                <div className="p-1 md:py-3 md:px-1 bg-purple-200 rounded-full flex justify-center items-center text-gray-800">
                  {" "}
                <IconBulb size={20} stroke={2} />
                </div>
                <div>
                  <h1 className="capitalize md:text-2xl font-semibold text-gray-300">
                    Product-frist thinking
                  </h1>
                  <p className="lowercase antialiased text-[14px] md:text-base max-w-xl text-gray-500 font-medium tracking-tight text-pretty">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Rem, alias.orem ipsum dolor, sit amet consectetur
                    adipisicing elit. Rem, alias.
                  </p>
                </div>
              </div>
            </div>
            {/* 3 card */}
            <div className="p-2.5 md:p-5 rounded-2xl border border-white/20 bg-zinc-800">
              <div className="flex justify-start items-start gap-3 md:gap-6">
                <div className="p-1 md:py-3 md:px-1 bg-purple-100 rounded-full flex justify-center items-center text-gray-800">
                  {" "}
                  <IconWorldMap size={20} stroke={2} />
                </div>
                <div>
                  <h1 className="capitalize md:text-2xl font-semibold text-gray-300">
                    Built for modern era
                  </h1>
                  <p className="antialiased text-[14px] md:text-base max-w-xl text-gray-500 font-medium tracking-tight text-pretty">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Rem, alias.orem ipsum dolor, sit amet consectetur
                    adipisicing elit. Rem, alias.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* footer */}
          <div className="flex justify-center items-center p-4 md:p-8">
            <Button title="explore more" />
          </div>
        </div>
      </div>
    </section>
  );
};
