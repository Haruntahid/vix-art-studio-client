import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CraftCart({ craft }) {
  console.log(craft);
  const { _id, photo, item_name, subcategory_name, price, rating } = craft;
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt={item_name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Item Name: {item_name}</h2>
          <p>Subcategory Name: {subcategory_name}</p>
          <p>Price: {price}</p>
          <p>Rating: {rating}</p>
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

CraftCart.propTypes = {
  craft: PropTypes.object,
};

export default CraftCart;
