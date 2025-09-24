import { Cart_Img_Url } from "../utils/Constants";
const ItemList = (items) => {
  console.log(items);
  const Items = items.items;
  return (
    <div>
      {Items.map((item) => (
        <div
          key={item?.card?.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-10/12">
            <div className="py-2">
              <span>{item?.card?.info.name}</span>
              <span>
                - ₹{" "}
                {item?.card?.info.price
                  ? item?.card?.info.price / 100
                  : item?.card?.info.defaultPrice / 100}
              </span>
              <div className="text-sm">{item?.card?.info?.description}</div>
            </div>
          </div>
          <div className="w-2/12 p-2 ">
            <div className="absolute">
              <button className="ml-8 bg-black shadow-md rounded-md p-0.5 text-white text-sm ">
                Add+
              </button>
            </div>
            <img
              src={Cart_Img_Url + item?.card?.info?.imageId}
              className="w-full  rounded-lg shadow-xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
