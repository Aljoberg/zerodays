"use client";
import Loading from "./Loading";
import { ImageObjectProps } from "./interfaces";
import { useState } from "react";
export default function LikeDislike({ image, onVote, id }: ImageObjectProps) {
  let [loading, setLoading] = useState([false]);
  let [error, setError] = useState([true, false]);
  let vote = async (like: boolean) => {
    setLoading([like, true]);
    setError([like, false]);
    let resp = await fetch(`https://challenge.zerodays.dev/api/v1/photos/${id}/${like ? "like" : "dislike"}`, {
        method: "PATCH"
    });
    if(!resp.ok) setError([like, true]);
    onVote(await resp.json());
    setLoading([like, false]);
  }
  return (
      <>
      <span 
      onClick={() => vote(true)}
      className="text-green-500 rounded hover:bg-gray-700 duration-200 p-2 cursor-pointer select-none">
        {error[0] && error[1] 
	  ? <p className="text-red-500">⚠️ Error</p> 
	  : loading[1] && loading[0] 
          ? (
	    <div className="w-6 h-6">
	      <Loading/>
	    </div>
	  )
	  : `👍 ${image.likes}`}
      </span>
      <span 
      onClick={() => vote(false)}
      className="text-red-500 rounded hover:bg-gray-700 duration-200 p-2 cursor-pointer select-none">
        {!error[0] && error[1] 
	  ? <p className="text-red-500">⚠️ Error</p> 
	  : loading[1] && !loading[0] 
	  ? (
	    <div className="w-6 h-6">
	      <Loading/>
            </div>
	  )
	  : `👎 ${image.dislikes}`}
      </span>
      </>
    );
}
