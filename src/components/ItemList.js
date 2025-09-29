import { useDispatch } from "react-redux";
import { Cart_Img_Url } from "../utils/Constants";
import { addItem } from "../utils/CartSlice";
const ItemList = (items) => {
  const Items = items.items;
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
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
                - ₹
                {item?.card?.info.price
                  ? item?.card?.info.price / 100
                  : item?.card?.info.defaultPrice / 100}
              </span>
              <div className="text-sm">{item?.card?.info?.description}</div>
            </div>
          </div>
          <div className="w-2/12 p-2 ">
            <div className="absolute">
              <button
                className="ml-8 bg-white shadow-md rounded-md p-1 text-black text-md cursor-pointer hover:bg-gray-200"
                onClick={() => handleAddItem(item)}
              >
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
