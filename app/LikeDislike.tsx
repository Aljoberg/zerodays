"use client";
import Loading from "./Loading";
import { ImageObjectProps } from "./interfaces";
import { useState } from "react";
export default function LikeDislike({ image, onVote, id }: ImageObjectProps) {
  let [loading, setLoading] = useState([false]);
  let vote = async (like: boolean) => {
    setLoading([like, true]);
    let resp = await fetch(`https://challenge.zerodays.dev/api/v1/photos/${id}/${like ? "like" : "dislike"}`, {
        method: "PATCH"
    });
    onVote(await resp.json());
    setLoading([like, false]);
  }
  return (
      <>
      <span 
      onClick={() => vote(true)}
      className="text-green-500 rounded hover:bg-gray-700 duration-200 p-2 cursor-pointer select-none">
        {loading[1] && loading[0] ? <Loading/> : `👍 ${image.likes}`}
      </span>
      <span 
      onClick={() => vote(false)}
      className="text-red-500 rounded hover:bg-gray-700 duration-200 p-2 cursor-pointer select-none">
        {loading[1] && !loading[0] ? <Loading/> : `👎 ${image.dislikes}`}
      </span>
      </>
    );
}
