export const Loader = () => {
  return (
    <div className="fixed inset-0 z-1 bg-zinc-900 flex flex-col justify-center items-center ">
      <div className="flex justify-center items-center size-[50px] border-8 border-white rounded-[50%] border-b-8 border-b-[#B4D645] border-t-8 border-t-[#43A0F1] border-l-[#FF534B] border-r-8 border-r-[#FEFEFE] animate-spin" />
      <span className="text-white uppercase mt-2 tracking-widest text-[12px]">
        loading...
      </span>
    </div>
  );
};
