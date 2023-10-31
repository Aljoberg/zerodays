"use client";
import { ImageObjectProps } from "./interfaces";
export default function LikeDislike({ image, onVote, id }: ImageObjectProps) {
  let vote = async (like: boolean) => {
    let resp = await fetch(`https://challenge.zerodays.dev/api/v1/photos/${id}/${like ? "like" : "dislike"}`, {
        method: "PATCH"
    });
    onVote(await resp.json());
  }
  return (
    <>
      <span 
      onClick={() => vote(true)}
      className="text-green-500 rounded hover:bg-gray-700 duration-200 p-2 cursor-pointer select-none">
        👍 {image.likes}
      </span>
      <span 
      onClick={() => vote(false)}
      className="text-red-500 rounded hover:bg-gray-700 duration-200 p-2 cursor-pointer select-none">
        👎 {image.dislikes}
      </span>
    </>
  );
}
