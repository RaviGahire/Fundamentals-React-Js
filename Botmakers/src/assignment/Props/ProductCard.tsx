type ProductProps = {
    name:string;
    price:number;
    updateDate: string;
    decs:string;
    img:string; 
}



export const ProductCard = ({name,updateDate,decs,img,price}:ProductProps) => {
  return (
    <div className="w-[340px] h-[480px] rounded-md bg-zinc-950 p-4 flex flex-col gap-3 shadow-lg">
  {/* card-header */}
  <div className="flex flex-col justify-between border-b border-white/20 pb-2">
    <h4 className="text-xl font-bold capitalize text-white leading-tight">
      {name}
    </h4>
    <span className="text-gray-500 text-[10px] uppercase mt-1">
      Last update <span>{updateDate}</span>
    </span>
  </div>

  {/* card-body */}
  <div className="flex-1 flex flex-col gap-3">
    <div className="w-full h-[220px] border border-white/15 overflow-hidden rounded-lg">
      <img className="w-full h-full object-cover" src={img} alt={name} />
    </div>

    <p className="text-white text-[14px] leading-5 text-pretty font-normal line-clamp-4">
      {decs}
    </p>
  </div>

  {/* card-footer */}
  <div className="flex flex-col text-white border-t border-white/15 pt-3 mt-auto">
    <span className="text-[14px] capitalize">Price: {price}</span>

    <div className="flex gap-2 items-center mt-3">
      <button className="flex-1 cursor-pointer active:scale-95 transition-all duration-200 px-4 py-2 rounded-md text-[12px] capitalize border border-white">
        Buy now
      </button>
      <button className="flex-1 cursor-pointer active:scale-95 transition-all duration-200 px-4 py-2 rounded-md text-[12px] capitalize border border-white">
        Add to cart
      </button>
    </div>
  </div>
</div>
  );
};
