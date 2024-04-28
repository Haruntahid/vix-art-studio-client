import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CraftCart from "./CraftCart";
import { VscTriangleRight } from "react-icons/vsc";

function SingleCategory() {
  const { name } = useParams();
  console.log(name);
  const [crafts, setCrafts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/crafts/subcategory/${name}`)
      .then((res) => res.json())
      .then((data) => setCrafts(data));
  }, [name]);
  return (
    <>
      <div className="container mx-auto">
        <div className="text-2xl font-bold mt-8">
          <ul className="flex items-center">
            <li>
              <a>Category</a>
            </li>
            <li className="mx-4">
              <VscTriangleRight size={18} />
            </li>
            <li>
              <a>{name}</a>
            </li>
          </ul>
        </div>
        <div className="grid gap-3 lg:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 lg:mt-8">
          {crafts.map((craft) => (
            <CraftCart key={craft._id} craft={craft} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SingleCategory;
