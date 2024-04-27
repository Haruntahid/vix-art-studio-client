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
      <div className="flex p-5 bg-rose-400 mb-5 rounded-lg gap-6">
        <div>
          <img
            className="w-[300px] h-[200px] rounded-lg"
            src={photo}
            alt={item_name}
          />
        </div>
        <div>
          <p className="text-2xl">
            <span className="font-semibold">Craft Name:</span> {item_name}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Category Name:</span>{" "}
            {subcategory_name}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Processing Time:</span>{" "}
            {processing_time}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Rating:</span> {rating}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Price:</span> {price} $
          </p>
          <Link to={`/craft/${_id}`} className="btn">
            View Details
          </Link>
        </div>
      </div>
    </>
  );
}

CraftCardBox.propTypes = {
  craft: PropTypes.object,
};

export default CraftCardBox;
