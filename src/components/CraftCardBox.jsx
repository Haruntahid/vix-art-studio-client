import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CraftCardBox({ craft }) {
  console.log(craft);
  const {
    _id,
    photo,
    item_name,
    processing_time,
    rating,
    subcategory_name,
    price,
  } = craft;
  return (
    <>
      <div className="flex flex-col lg:flex-row p-5 bg-rose-50 hover:bg-rose-500 transition hover:duration-800 hover:text-white ease-in-out mb-3 lg:mb-5 rounded-lg gap-3 lg:gap-6">
        <div>
          <img
            className="w-full object-cover lg:w-[300px] h-[200px] lg:h-[220px] rounded-lg"
            src={photo}
            alt={item_name}
          />
        </div>
        <div>
          <p className="text-xl lg:text-2xl">
            <span className="font-semibold">Craft Name:</span> {item_name}
          </p>
          <p className="lg:text-xl">
            <span className="font-semibold">Category Name:</span>{" "}
            {subcategory_name}
          </p>
          <p className="lg:text-xl">
            <span className="font-semibold">Processing Time:</span>{" "}
            {processing_time}
          </p>
          <p className="lg:text-xl">
            <span className="font-semibold">Rating:</span> {rating}
          </p>
          <p className="lg:text-xl">
            <span className="font-semibold">Price:</span> {price} $
          </p>
          <div className="text-center lg:text-left">
            <Link to={`/craft/${_id}`} className="btn btn-primary mt-3 lg:mt-5">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

CraftCardBox.propTypes = {
  craft: PropTypes.object,
};

export default CraftCardBox;
