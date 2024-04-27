import { useLoaderData } from "react-router-dom";

function CraftDetails() {
  const loaderData = useLoaderData();
  const {
    photo,
    item_name,
    subcategory_name,
    short_description,
    price,
    rating,
    customization,
    processing_time,
    stockStatus,
    email,
  } = loaderData;
  return (
    <>
      <div className="container mx-auto">
        <div className="flex gap-10 mt-10">
          <div className="w-full lg:w-2/4 border-2 p-5 border-rose-500 rounded-lg">
            <img
              src={photo}
              alt={item_name}
              className="w-full lg:h-[700px] object-cover rounded-lg"
            />
          </div>
          <div>
            <h2>Details of {item_name}</h2>
            <h2>subcategory_name {subcategory_name}</h2>
            <h2>short_description {short_description}</h2>
            <h2>price {price}</h2>
            <h2>rating {rating}</h2>
            <h2>customization {customization}</h2>
            <h2>processing_time {processing_time}</h2>
            <h2>stockStatus {stockStatus}</h2>
            <h2>email {email}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default CraftDetails;
