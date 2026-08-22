import { IconThumbUp } from "@tabler/icons-react"
import { useState } from "react"

export const LikeButton = () => {
const [like,setLike] = useState(0)

  return (
    <div className="size-full flex justify-center items-center bg-zinc-200">

    <button
    onClick={()=>setLike(like + 1)}
        className="flex items-center justify-center gap-1 border px-3 py-1 cursor-pointer rounded-full">
        <IconThumbUp size={16} stroke={1} />
        <span className="text-[12px] font-bold tabular-nums">{like}</span>
    </button>
    </div>
  )
}
