import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import CategoryCart from "./CategoryCart";

function CraftItems() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-center text-3xl my-5 lg:my-10 lg:text-5xl font-bold">
          Select a Category{" "}
          <span className="text-rose-500">
            <Typewriter
              words={[
                "Landscape Painting",
                "Portrait Drawing",
                "Watercolour Painting",
                "Oil Painting!",
                "Charcoal Sketching",
                "Cartoon Drawing",
              ]}
              cursorStyle="_"
              loop={0}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mt-16">
          {categories.map((category) => (
            <CategoryCart key={category._id} category={category} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CraftItems;
