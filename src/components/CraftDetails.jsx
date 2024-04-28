import { useLoaderData } from "react-router-dom";

function CraftDetails() {
  const loaderData = useLoaderData();
  const {
    name,
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
        <div className="flex p-2 flex-col lg:flex-row gap-5 lg:gap-10 mt-10">
          <div className="w-full lg:w-2/4 border-2 p-5 border-rose-500 rounded-lg">
            <img
              src={photo}
              alt={item_name}
              className="w-full lg:h-[700px] object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl lg:text-4xl">
              <span className="font-semibold">Craft Name :</span> {item_name}
            </h2>
            <h2 className="  lg:text-2xl mt-5 text-white px-6 py-1 bg-rose-500 rounded-full inline-block">
              <span className="font-semibold">Category :</span>{" "}
              {subcategory_name}
            </h2>
            <div className="divider my-8">
              <p className="text-4xl font-bold text-center">Details</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 items-center">
              <h2 className="text-2xl lg:text-4xl font-bold inline-flex flex-col-reverse items-center bg-green-400 p-5 min-h-24 lg:min-h-44 justify-center">
                <span className="font-semibold text-xl lg:text-2xl">Price</span>{" "}
                {price}$
              </h2>
              <h2 className="text-2xl lg:text-4xl font-bold inline-flex flex-col-reverse items-center bg-yellow-400 p-5 min-h-24 lg:min-h-44 justify-center">
                <span className="font-semibold text-xl lg:text-2xl">
                  Rating
                </span>{" "}
                {rating}
              </h2>
              <h2 className="text-2xl lg:text-4xl font-bold inline-flex col-span-2 lg:col-span-1 flex-col-reverse items-center bg-blue-400 p-5 min-h-24 lg:min-h-44 justify-center">
                <span className="font-semibold text-xl lg:text-2xl">
                  Processing Time
                </span>{" "}
                {processing_time}
              </h2>
            </div>
            <div className="divider"></div>
            <h2 className="text-xl lg:text-2xl text-gray-400">
              <span className="font-semibold text-black">Stock Status :</span>{" "}
              {stockStatus}
            </h2>
            {/* accrodian */}

            <section className="bg-rose-500 text-gray-100 my-4">
              <div className="flex flex-col divide-y px-4  divide-gray-700">
                <details>
                  <summary className="py-2 outline-none cursor-pointer">
                    Is it Customizable?
                  </summary>
                  <div className="px-4 pb-4">{customization}</div>
                </details>
              </div>
            </section>
            {/*  */}
            <div className="divider mt-8">
              <p className="text-4xl font-bold text-center">Artist Info</p>
            </div>
            <h2 className="text-xl text-gray-400 my-3">
              <span className="font-semibold text-black">Name :</span> {name}
            </h2>
            <h2 className="text-xl text-gray-400">
              <span className="font-semibold text-black">Email :</span> {email}
            </h2>
            <div className="divider"></div>
            <h2 className="text-xl lg:text-2xl text-gray-400">
              <span className="font-semibold text-black">Description :</span>{" "}
              {short_description}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default CraftDetails;
