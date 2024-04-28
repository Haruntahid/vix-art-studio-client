import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

function UpdateCraft() {
  const crafts = useLoaderData();
  const {
    _id,
    photo,
    item_name,
    subcategory_name,
    short_description,
    price,
    rating,
    customization,
    processing_time,
    stockStatus,
    // email,
  } = crafts;

  //   handel Update
  const handelUpdateCraft = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const item_name = form.item_name.value;
    const subcategory_name = form.subcategory_name.value;
    const short_description = form.short_description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time = form.processing_time.value;
    const stockStatus = form.stockStatus.value;

    console.log(
      photo,
      item_name,
      subcategory_name,
      short_description,
      price,
      rating,
      customization,
      processing_time,
      stockStatus
    );

    const updateCraft = {
      photo,
      item_name,
      subcategory_name,
      short_description,
      price,
      rating,
      customization,
      processing_time,
      stockStatus,
    };

    fetch(`http://localhost:5000/craft/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Successfully Craft Updated!",
            icon: "success",
          });
        }
        console.log(data);
      });
  };

  return (
    <>
      <h2 className="text-5xl font-bold text-center mb-10">Update Craft</h2>
      <div className="container mx-auto bg-gray-800 p-5 rounded-lg">
        <form onSubmit={handelUpdateCraft} className="space-y-6">
          {/* row 1 */}
          <div className="flex gap-5">
            <div className="w-1/2">
              <label className="text-white block mb-2">PhotoURL:</label>
              <input
                type="text"
                placeholder="PhotoURL"
                name="photo"
                className="input input-bordered w-full"
                defaultValue={photo}
              />
            </div>
            <div className="w-1/2">
              <label className="text-white block mb-2">Item Name:</label>
              <input
                type="text"
                placeholder="Item Name"
                name="item_name"
                className="input input-bordered w-full"
                defaultValue={item_name}
              />
            </div>
          </div>
          {/* row 2 */}
          <div className="flex gap-5">
            <div className="w-1/2">
              <label className="text-white block mb-2">Subcategory Name:</label>
              <input
                placeholder="Subcategory Name"
                type="text"
                name="subcategory_name"
                className="input input-bordered w-full"
                defaultValue={subcategory_name}
              />
            </div>
            <div className="w-1/2">
              <label className="text-white block mb-2">Price:</label>
              <input
                placeholder="Price"
                type="text"
                name="price"
                className="input input-bordered w-full"
                defaultValue={price}
              />
            </div>
          </div>
          {/* row 3 */}
          <div className="flex gap-5">
            <div className="w-1/2">
              <label className="text-white block mb-2">Processing Time:</label>
              <input
                placeholder="Processing Time"
                type="text"
                name="processing_time"
                className="input input-bordered w-full"
                defaultValue={processing_time}
              />
            </div>
            <div className="w-1/2">
              <label className="text-white block mb-2">Rating:</label>
              <input
                placeholder="rating"
                type="text"
                name="rating"
                className="input input-bordered w-full"
                defaultValue={rating}
              />
            </div>
          </div>
          {/* row-4 */}
          <div className="flex gap-5">
            <div className="w-1/2">
              <label className="text-white block mb-2">Customization:</label>
              <select
                id="customization"
                name="customization"
                className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                defaultValue={customization}
              >
                <option value="No" className="py-2">
                  No
                </option>
                <option value="Yes" className="py-2">
                  Yes
                </option>
              </select>
            </div>
            <div className="w-1/2">
              <label className="text-white block mb-2">Stock Status:</label>
              <select
                id="stockStatus"
                name="stockStatus"
                className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                defaultValue={stockStatus}
              >
                <option value="In stock" className="py-2">
                  - In stock
                </option>
                <option value="Made to Order" className="py-2">
                  - Made to Order
                </option>
              </select>
            </div>
          </div>
          {/* row-5 */}

          <div className="w-full">
            <label className="text-white block mb-2">Short Description:</label>
            <textarea
              placeholder="Short description"
              type="text"
              name="short_description"
              className="input input-bordered w-full py-2"
              defaultValue={short_description}
            ></textarea>
          </div>

          <div className="text-center">
            <input
              className="btn px-6 py-2 rounded-lg bg-rose-600 hover:bg-inherit border border-rose-600 hover:text-white"
              type="submit"
              value="Update"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdateCraft;
