import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyArtCraftBox from "../components/MyArtCraftBox";

function MyArtList() {
  const { user } = useContext(AuthContext);
  const email = user.email;
  console.log(email);
  const [crafts, setCrafts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/crafts/${email}`)
      .then((res) => res.json())
      .then((data) => setCrafts(data));
  }, [email]);

  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-6xl text-amber-900 font-bold text-center my-5 lg:my-10">
          My Total Art & Crafts: {crafts.length}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
          {crafts.map((craft) => (
            <MyArtCraftBox
              key={craft._id}
              craft={craft}
              setCrafts={setCrafts}
              crafts={crafts}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MyArtList;
