import { useLoaderData } from "react-router-dom";
import CraftCardBox from "../components/CraftCardBox";

function AllArtAndCraft() {
  const crafts = useLoaderData();
  console.log(crafts);
  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-6xl text-amber-900 font-bold text-center my-5 lg:my-10">
          All art and crafts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-5">
          {crafts.map((craft) => (
            <CraftCardBox key={craft._id} craft={craft} />
          ))}
        </div>
      </div>
    </>
  );
}

export default AllArtAndCraft;
