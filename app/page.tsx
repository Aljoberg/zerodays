import Image from "next/image";

interface ApiResponse {
  url: string;
  id: number;
  likes: number;
  dislikes: number;
}

export default async function Home() {
  let imageRequest = await fetch(
    "https://challenge.zerodays.dev/api/v1/photos"
  );
  let images = await imageRequest.json();
  return (
    <div className="container">
      {images.map((image: ApiResponse) => {
        return (
          <div key={image.id}>
            <Image src={image.url} height={300} width={500} alt="Image" />
            <div className="flex items-center justify-between">
              <span>{image.likes}</span>
              <span>{image.dislikes}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
