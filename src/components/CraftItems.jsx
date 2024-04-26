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
      <div className="container mx-auto mt-10">
        <h2 className="text-center text-5xl font-bold">Craft Items</h2>
        <div className="grid grid-cols-3 gap-6 lg:mt-16">
          {crafts.map((craft) => (
            <CraftCart key={craft._id} craft={craft} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CraftItems;
