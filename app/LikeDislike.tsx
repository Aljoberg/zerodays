"use client";
import { ImageObjectProps } from "./interfaces";
export default function LikeDislike({ image }: ImageObjectProps) {
  return (
    <>
      <span 
      onClick={() => {
            
      }}
      className="text-green-500 rounded hover:bg-gray-700 duration-200 p-2 cursor-pointer select-none">
        👍 {image.likes}
      </span>
      <span className="text-red-500 rounded hover:bg-gray-700 duration-200 p-2 cursor-pointer select-none">
        👎 {image.dislikes}
      </span>
    </>
  );
}
