import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";

function MyArtCraftBox({ craft, crafts, setCrafts }) {
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

  //   delete operation
  const handelDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/crafts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Crafts has been deleted.",
                icon: "success",
              });
            }
            const remaining = crafts.filter((cofe) => cofe._id !== _id);
            setCrafts(remaining);
            console.log(data);
          });
      }
    });
  };

  return (
    <>
      <div className="card bg-rose-100 hover:bg-rose-500 transition hover:duration-1000 hover:text-white ease-in-out shadow-xl p-5">
        <img
          className="rounded-xl h-[250px] lg:h-[400px] object-cover"
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
          <div className="card-actions">
            <Link to={`/update/${_id}`} className="btn btn-primary">
              Update
            </Link>
            <Link
              onClick={() => handelDelete(_id)}
              className="btn btn-secondary"
            >
              <MdDelete size={30} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

MyArtCraftBox.propTypes = {
  craft: PropTypes.object,
  crafts: PropTypes.array,
  setCrafts: PropTypes.func,
};

export default MyArtCraftBox;
