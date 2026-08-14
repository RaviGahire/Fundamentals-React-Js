export const Services = () => {
  const service = [
    {
      title: "ROBO PLAYZONE",
      desc: "RoboplayZone is our experiential vertical designed to spark",
    },
    {
      title: "MakersNext",
      desc: "MakersNext is our dedicated vertical focused on providing hands-on experience in Robotics",
    },
    {
      title: "BOTLEAGUE",
      desc: "BOTLEAGUE is our competitive vertical, dedicated to fostering innovation and excellence",
    },
    {
      title: "ROBO PLAYZONE",
      desc: "RoboplayZone is our experiential vertical designed to spark",
    },
    {
      title: "ROBO PLAYZONE",
      desc: "RoboplayZone is our experiential vertical designed to spark",
    },
    {
      title: "ROBO PLAYZONE",
      desc: "RoboplayZone is our experiential vertical designed to spark",
    },
  ];

  return (
    <section
      aria-label="services-section"
      className="bg-zinc-900 h-auto lg:h-screen"
    >
      <div className="pt-8">
        <h2 className=" text-2xl md:text-4xl text-center font-bold text-purple-500 underline underline-offset-8">
          Services
        </h2>
      </div>
      <div className="grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 pt-6  md:p-8">
        {service.map((val, index) => (
          <div
            key={index}
            className="p-2 text-center min-h-40 border border-white/5 rounded-[20px] bg-[url('/thao-nguyen.jpg')] bg-no-repeat bg-center bg-cover h-full"
          >
            <div className="border border-purple-500/15 rounded-xl bg-zinc-900/95 h-full flex flex-col justify-center">
              <h3 className=" md:text-2xl text-zinc-300 mt-8 mb-4 font-bold uppercase">
                {val.title}
              </h3>
              {/* Note: px-15 and mb-15 are not standard Tailwind classes. You might want px-14/16 or px-[60px] */}
              <p className="px-15 text-[13px] md:text-base text-zinc-500 mb-15">{val.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
