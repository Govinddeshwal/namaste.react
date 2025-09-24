import { Cart_Img_Url } from "../utils/Constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, costForTwo, avgRating } = resData?.info;
  return (
    <div className="m-4 p-4 w-[240px] bg-gray-200 h-[380px] break-words rounded-lg hover:bg-gray-300 ">
      <img
        className="w-[310px] h-[180px] rounded-lg"
        src={Cart_Img_Url + resData.info.cloudinaryImageId}
      />

      <h3 className="font-bold pb-1">{name}</h3>
      <h4 className="cuisines">{cuisines}</h4>
      <h4 className="costfortwo">{costForTwo}</h4>
      <h4 className="avg-rating">{avgRating}</h4>
    </div>
  );
};

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-0.5 ml-4 rounded-md">
          VEG
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
