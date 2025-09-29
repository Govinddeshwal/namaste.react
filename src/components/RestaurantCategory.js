import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    // setShowItems(!showItems);
    setShowIndex();
  };
  return (
    <div>
      {/*   header  */}
      <div className="w-6/12 bg-gray-100 shadow-lg mx-auto my-3 p-4 ">
        <div
          onClick={handleClick}
          className="flex justify-between cursor-pointer"
        >
          <span className="text-md font-bold">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span className="text-xl font-bold"> ⌄ </span>
        </div>
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
