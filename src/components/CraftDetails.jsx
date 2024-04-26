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
      <div className="flex justify-between items-center container mx-auto">
        <div>
          <img src={photo} alt={item_name} />
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
    </>
  );
}

export default CraftDetails;
