import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MyArtCraftBox({ craft }) {
  const {
    _id,
    photo,
    item_name,
    subcategory_name,
    price,
    rating,
    customization,
    stockStatus,
  } = craft;
  return (
    <>
      <div className="card bg-rose-100 hover:bg-rose-500 transition hover:duration-1000 hover:text-white ease-in-out shadow-xl p-5">
        <img
          className="rounded-xl h-[400px] object-cover"
          src={photo}
          alt={item_name}
        />
        <div className="space-y-2 mt-3">
          <h2 className="card-title">Item Name: {item_name}</h2>
          <p>Subcategory Name: {subcategory_name}</p>
          <p>Rating: {rating}</p>
          <p>Price: {price}$</p>
          <p>Customization: {customization}</p>
          <p>Stock Status: {stockStatus}</p>
          <div className="card-actions justify-center">
            <Link to={`/craft/${_id}`} className="btn btn-primary">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

MyArtCraftBox.propTypes = {
  craft: PropTypes.object,
};

export default MyArtCraftBox;
