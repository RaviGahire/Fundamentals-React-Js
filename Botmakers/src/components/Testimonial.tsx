import { IconBolt, IconStar } from "@tabler/icons-react";
import { Button } from "./buttons";

export const Testimonial = () => {
  return (
    <section
      aria-label="testimonial-section"
      className="bg-zinc-900 h-auto lg:h-screen overflow-hidden"
    >
      {/* content */}
      <div className="max-w-7xl min-h-screen mx-auto flex flex-col lg:flex-row items-center justify-center">
        {/* Left side / Content */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-16 flex flex-col justify-center">
          {/* top-badge  */}
          <div className="flex items-center justify-center gap-1 border border-purple-500/30 shadow-inner shadow-purple-300/40 w-fit px-6 py-1.5 text-white font-semibold text-[12px] tracking-tight rounded-full mb-6">
            <IconBolt stroke={2} size={18} />
            <span>Built for the team-up</span>
          </div>

          {/* headings */}
          <div className="mb-6">
            <h1 className="antialiased text-3xl md:text-5xl lg:text-6xl text-white max-w-2xl font-semibold leading-tight text-pretty">
              2800+ customers shared their love for botmakers
            </h1>
          </div>

          <div>
            <p className="text-white antialiased font-normal max-w-xl text-pretty text-[15px] lg:text-[18px] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              voluptatum illo, dignissimos voluptatem dicta deleniti harum
              officia corporis labore explicabo facilis maxime soluta sapiente
              doloribus! Molestias aperiam voluptatibus voluptate nulla.
            </p>

            {/* rating lines */}
            <div className="py-6 md:py-8 flex flex-wrap overflow-hidden">
              {Array.from({ length: 18 }).map((_, index) => (
                <span
                  key={index}
                  className="inline-block h-4 lg:h-6 border-r border-gray-500 ml-2.5 rotate-45"
                />
              ))}
            </div>

            <div>
              {/* rating stars */}
              <div className="inline-flex gap-1.5 text-white/40">
                <IconStar size={18} className="fill-current text-yellow-500" />
                <IconStar size={18} className="fill-current text-yellow-500" />
                <IconStar size={18} className="fill-current text-yellow-500" />
                <IconStar size={18} className="fill-current text-yellow-500" />
                <IconStar size={18} className="fill-current text-yellow-500" />
              </div>
              <p className="text-white font-light mt-2">
                <span className="text-[14px] md:text-base font-bold underline underline-offset-4">
                  4.5 out of 5 stars
                </span>{" "}
                from 2.8k reviews
              </p>
            </div>
          </div>
        </div>

        {/* Right side / Image */}
        <div className="w-full lg:w-1/2 min-h-125 lg:min-h-screen relative">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
            alt="customer-image"
          />
          {/* text-content overlay */}
          <div className="absolute bottom-4 inset-x-4 lg:bottom-10 lg:inset-x-10 bg-purple-900/40 p-6 md:p-8 backdrop-blur-md rounded-2xl border border-white/10">
            <p className="antialiased md:text-xl text-white lg:leading-8 text-pretty tracking-tight italic">
              "Simply the best. Better than all the rest. I’d recommend this
              product to beginners and all users."
            </p>
            <div className="pt-4 md:pt-6">
              <h4 className="md:text-[18px] font-bold text-gray-100">
                Leslie Alexander
              </h4>
              <span className="text-sm text-gray-300 block mt-1">
                Director of Technology, CreativeGIG
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
