import { useEffect, useState } from "react";
import CraftCart from "./CraftCart";

function CraftItems() {
  const [crafts, setCrafts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/crafts")
      .then((res) => res.json())
      .then((data) => setCrafts(data));
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-center text-3xl my-5 lg:my-10 lg:text-5xl font-bold">
          Craft Items
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mt-16">
          {crafts.slice(0, 6).map((craft) => (
            <CraftCart key={craft._id} craft={craft} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CraftItems;
