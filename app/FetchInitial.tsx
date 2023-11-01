import Error from "./Error";
import ImagesPage from "./ImagesPage";

export default async function FetchInitial() {
  let imageRequest = await fetch(
    "https://challenge.zerodays.dev/api/v1/photos",
    {cache: "no-store"}
  );
  if(!imageRequest.ok) return (
    <Error/>
  )
  let initialImages = await imageRequest.json();
  return (
    <ImagesPage initialImages={initialImages}/>
  );
}