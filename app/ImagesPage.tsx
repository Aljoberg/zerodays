"use client";
import React, { useState } from "react";
import { ImageObject, ImagesPageProps } from "./interfaces";
import Image from "next/image";
import LikeDislike from "./LikeDislike";


export default function ImagesPage({initialImages}: ImagesPageProps) {

  let [images, setImages] = useState(initialImages);

  let updateImages = (updatedImage: ImageObject) => {
    let updatedImages = images.map((image: ImageObject) => image.id == updatedImage.id ? updatedImage : image);
    setImages(updatedImages);
  }

  return (
    <div className="container mx-auto p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      {images.map((image: ImageObject) => {
        let totalVotes = image.likes + image.dislikes;
        let likePercentage = (image.likes / totalVotes) * 100;

        return (
          <div key={image.id}>
            <div className="inset-0 overflow-hidden rounded-lg shadow-lg">
              <Image src={image.url} height={300} width={500} alt="Image" />
            </div>
            <div className="mt-2 flex items-center justify-between">
              <LikeDislike image={image} onVote={updateImages} id={image.id}/>
            </div>
            <div className="flex mt-2 h-2 rounded-full bg-gray-300">
              <div
                style={{ width: `${likePercentage}%` }}
                className="h-full rounded-full bg-green-500"
              ></div>
              <div
                style={{ width: `${100 - likePercentage}%` }}
                className="h-full rounded-full bg-red-500"
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}