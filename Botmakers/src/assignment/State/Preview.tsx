import { IconUpload } from "@tabler/icons-react";
import { useState } from "react";

export const Preview = () => {
  const [preview, setPreview] = useState("");

  console.log(preview);
  const handleAvatar = (e: any) => {
    const file = e.target.files?.[0];

    if (!file) return;
    const image = URL.createObjectURL(file);
    setPreview(image);
  };

  return (
    <div className=" flex flex-col justify-between p-5 items-center size-full">
      <div className="size-25 rounded-2xl overflow-hidden border">
        {preview ? (
          <img
            className="size-full object-cover"
            src={preview}
            alt="user-avatar"
          />
        ) : (
          <img
            className="size-full object-cover"
            src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
            alt="user-avatar"
          />
        )}
      </div>
      <label className="border border-yellow-400 cursor-pointer p-2 rounded-lg mt-4">
        <input
          className="hidden"
          type="file"
          onChange={handleAvatar}
          accept="image/*"
        />
        <IconUpload className="text-white" size={18}/>
      </label>
    </div>
  );
};
