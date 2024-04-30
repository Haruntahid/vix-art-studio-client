import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CategoryCart({ category }) {
  const { name, image, origins } = category;
  return (
    <>
      <div className="card bg-rose-50 hover:bg-rose-500 transition hover:duration-800 hover:text-white ease-in-out shadow-xl p-5 flex flex-col justify-between">
        <img
          className="rounded-xl h-[200px] lg:h-[300px]"
          src={image}
          alt={name}
        />
        <div className="space-y-2 mt-3">
          <h2 className="card-title">Category Name: {name}</h2>
          <p>{origins}</p>
          <div className="card-actions justify-center">
            <Link
              to={`/category/${name}`}
              className="btn mt-5 w-full  btn-primary"
            >
              View Items
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

CategoryCart.propTypes = {
  category: PropTypes.object,
};

export default CategoryCart;
