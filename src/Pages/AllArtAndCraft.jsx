import { useLoaderData } from "react-router-dom";
import CraftCardBox from "../components/CraftCardBox";

function AllArtAndCraft() {
  const crafts = useLoaderData();
  console.log(crafts);
  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center my-10">
          All art and crafts
        </h2>
        {crafts.map((craft) => (
          <CraftCardBox key={craft._id} craft={craft} />
        ))}
      </div>
    </>
  );
}

export default AllArtAndCraft;
