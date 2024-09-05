import BBSCardlist from "./components/BBSCardlist";
import { BBSDataType } from "./types/types";

async function getBBSAllData() {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });
  const bbsAllData: BBSDataType[] = await response.json();
  console.log("¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥")
  console.log(bbsAllData)

  return bbsAllData;
}

export default async function Home() {
  const bbsAllData = await getBBSAllData();


  return (
    <main>
      <BBSCardlist bbsAllData={bbsAllData} />
    </main>
  );
}
