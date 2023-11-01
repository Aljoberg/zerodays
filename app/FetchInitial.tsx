import ImagesPage from "./ImagesPage";

export default async function FetchInitial() {
  let imageRequest = await fetch(
    "https://challenge.zerodays.dev/api/v1/photos",
    {cache: "no-store"}
  );
  let initialImages = await imageRequest.json();
  // await (new Promise<void>(res => setTimeout(() => res(), 30000)))
  return (
    <ImagesPage initialImages={initialImages}/>
  );
}