import {
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";

type ProfileProps = {
  name: string;
  desc?: string;
  bgImage: string;
  profileImg: string;
  role?: string;
  empId?: number;
  rolleNo?: number;
};

export const Card = ({
  name,
  desc,
  role,
  bgImage,
  profileImg,
  empId,
  rolleNo,
}: ProfileProps) => {
  return (
    <div className="flex max-w-[480px] shadow-xl h-[300px] border border-zinc-300/50 rounded-[20px] overflow-hidden">
      <div className="w-[180px] h-auto">
        <img
          className="size-full object-cover"
          src={bgImage}
          alt="bg-image"
          loading="lazy"
        />
      </div>
      <div className="relative w-full">
        {/* Profile img */}
        <div className="absolute -left-13 top-5 size-25 overflow-hidden border-5 border-white rounded-full">
          <img
            loading="lazy"
            className="size-full object-cover"
            src={profileImg}
            alt="profile-image"
          />
        </div>

        {/* content */}
        <div className="size-full  bg-zinc-100">
          {/* profession */}
          <div className="h-1/2 flex items-center justify-center gap-2 px-1 ">
            {/* Role  */}
            {role && (
              <p className="uppercase text-[12px] text-zinc-600 font-semibold tracking-wider underline">
                {role}
              </p>
            )}
            {/* EMP ID */}
            {empId && (
              <span className="uppercase text-[12px] text-zinc-600 font-semibold tracking-wider underline">
                EMP-ID {empId}
              </span>
            )}
            {/* Rolle Number */}
            {rolleNo && (
              <span className="uppercase text-[12px] text-zinc-600 font-semibold tracking-wider underline">
                Roll-No {rolleNo}
              </span>
            )}
          </div>

          {/* Info */}
          <div className="pl-1">
            <p className="text-2xl text-zinc-700 tracking-wide font-bold text-pretty ">
              {name}
            </p>
            <p className="text-zinc-500 font-medium py-1 pr-2 text-[14px] text-pretty">
              {desc}
            </p>
          </div>

          {/* social links */}
          <div className="w-full flex items-start justify-start gap-3 p-3 ">
            <div className="size-10 rounded-full flex items-center justify-center bg-zinc-800">
              <IconBrandX size={20} className="text-blue-400 cursor-pointer" />
            </div>
            <div className="size-10 rounded-full flex items-center justify-center bg-zinc-800">
              <IconBrandInstagram
                size={20}
                className="text-blue-400 cursor-pointer"
              />
            </div>
            <div className="size-10 rounded-full flex items-center justify-center bg-zinc-800">
              <IconBrandYoutube
                size={20}
                className="text-blue-400 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
