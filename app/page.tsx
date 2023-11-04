import { Suspense } from "react";
import FetchInitial from "./FetchInitial";
import loadingSvg from "./loading.svg";
import Image from "next/image";
import Loading from "./Loading";
export default async function Home() {
  return (
    <Suspense fallback={(
      <div role="status" className="flex justify-center items-center h-screen">
        <div className="w-9 h-9">
          <Loading/>
	</div>
      </div>
    )}>
      <FetchInitial/>
    </Suspense>
  );
}
