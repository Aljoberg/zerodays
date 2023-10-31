import Image from "next/image";

export default async function Home() {
  let imageRequest = await fetch(
    "https://challenge.zerodays.dev/api/v1/photos"
  );
  let images = await imageRequest.json();
  return (
    <div className="container">
      {images.map((image) => {
        return (
          <div key={image.id}>
            <Image src={image.url} height={300} width={500} alt="Image" />
          </div>
        );
      })}
    </div>
  );
}
