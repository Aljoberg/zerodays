import Image from "next/image";

interface ApiResponse {
  url: string;
  id: number;
  likes: number;
  dislikes: number;
  difference: number;
}

export default async function Home() {
  let imageRequest = await fetch(
    "https://challenge.zerodays.dev/api/v1/photos"
  );
  let images = await imageRequest.json();
  return (
    <div className="container mx-auto p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      {images.map((image: ApiResponse) => {
        let totalVotes = image.likes + image.dislikes;
        let likePercentage = (image.likes / totalVotes) * 100;

        return (
          <div key={image.id}>
            <div className="inset-0 overflow-hidden rounded-lg shadow-lg">
              <Image src={image.url} height={300} width={500} alt="Image" />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-green-500 rounded hover:bg-gray-700 duration-200 p-2 cursor-pointer select-none">
                👍 {image.likes}
              </span>
              <span className="text-red-500 rounded hover:bg-gray-700 duration-200 p-2 cursor-pointer select-none">
                👎 {image.dislikes}
              </span>
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