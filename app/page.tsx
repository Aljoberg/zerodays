import ImagesPage from "./ImagesPage";
export default async function Home() {
  let imageRequest = await fetch(
    "https://challenge.zerodays.dev/api/v1/photos"
  );
  let initialImages = await imageRequest.json();
  return (
    <ImagesPage initialImages={initialImages}/>
  );
}