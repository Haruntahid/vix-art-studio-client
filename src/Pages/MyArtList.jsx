import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyArtCraftBox from "../components/MyArtCraftBox";

function MyArtList() {
  const { user } = useContext(AuthContext);
  const email = user.email;
  const [crafts, setCrafts] = useState([]);
  const [filterOption, setFilterOption] = useState("all");
  const [isOpen, setIsOpen] = useState(false);

  // handle dropdown btn
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetch(`https://vix-art-studio.vercel.app/crafts/${email}`)
      .then((res) => res.json())
      .then((data) => setCrafts(data));
  }, [email]);

  // Filtered crafts based on customization status
  const filteredCrafts = crafts.filter((craft) => {
    if (filterOption === "all") {
      return true; // Show all crafts
    } else if (filterOption === "customized") {
      return craft.customization === "Yes";
    } else if (filterOption === "non-customized") {
      return craft.customization === "No";
    }
    return true;
  });

  return (
    <>
      <div className="container mx-auto min-h-[70vh] relative">
        <h2 className="text-3xl lg:text-6xl text-amber-900 font-bold text-center my-5 lg:my-10 ">
          My Total Art & Crafts: {crafts.length}
        </h2>

        {crafts.length > 0 ? (
          <>
            <div className="flex justify-center lg:justify-end lg:absolute top-12 lg:top-10 lg:right-0">
              <div className="dropdown dropdown-bottom lg:dropdown-left">
                <button
                  onClick={toggleDropdown}
                  role="button"
                  className="btn bg-rose-500 px-12 m-1"
                >
                  Filter
                </button>
                {isOpen && (
                  <ul className="dropdown-content z-[1] menu space-y-2 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                      <button
                        className={` mr-2 ${
                          filterOption === "all" ? "btn-active" : ""
                        }`}
                        onClick={() => setFilterOption("all")}
                      >
                        All
                      </button>
                    </li>
                    <li>
                      <button
                        className={`  mr-2 ${
                          filterOption === "customized" ? "btn-active" : ""
                        }`}
                        onClick={() => setFilterOption("customized")}
                      >
                        Customized
                      </button>
                    </li>
                    <li>
                      <button
                        className={` ${
                          filterOption === "non-customized" ? "btn-active" : ""
                        }`}
                        onClick={() => setFilterOption("non-customized")}
                      >
                        Non-customized
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 mt-16 lg:mt-32">
              {filteredCrafts.map((craft) => (
                <MyArtCraftBox
                  key={craft._id}
                  craft={craft}
                  setCrafts={setCrafts}
                  crafts={crafts}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="">
            <img
              src="https://i.ibb.co/F85vFW8/3009287-removebg-preview.png"
              className="w-1/2 mx-auto"
              alt=""
            />
          </div>
        )}
      </div>
    </>
  );
}

export default MyArtList;
