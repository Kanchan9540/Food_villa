import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // this is the routing perameters or used to read the url which is given at atime of search.
import { img_cdn_url } from "../constants";
import Shimmer from "./Shimmer";
import useResturant from "../utils/useResturant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

// this can only show the resturant menu on the screen or UI
const ResturantMenu = () => {
  //const params =useParams();   // its give me id which we give at a search time.
  //how to read a dynamical url params
  const { resId } = useParams(); // destructuring is done here.

  //const [Resturant, setResturant] = useState(null);

  // create a Hook by urself
  const Resturant = useResturant(resId);

  const dispatch = useDispatch();

  // //function create
  // const handleAddItem = () => {
  //   dispatch(addItem("Grapes"));  // dispatch and action and grspes is a action.payload
  //}

  const addFooodItem = (item) => {
     dispatch(addItem(item));
  };

  return (
    <>
      {Resturant ? (
        <div className="flex">
          <div>
          <h1 className="font-bold m-2">Resturant id: {resId}</h1>
          <h2 className="font-bold m-2">Name - {Resturant?.data?.cards[0]?.card?.card?.info?.name}</h2>
          <h2 className="font-bold m-2">Id - {Resturant?.data?.cards[0]?.card?.card?.info?.id}</h2>
          <img className="m-2 border-2 border-black" src={img_cdn_url+ Resturant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId}/>
          <h3 className="m-2">Location - {Resturant?.data?.cards[0]?.card?.card?.info?.city}</h3>
          <h3 className="m-2"> Area - {Resturant?.data?.cards[0]?.card?.card?.info?.areaName}</h3>
          <h3 className="m-2"> Rating - {Resturant?.data?.cards[0]?.card?.card?.info?.avgRating} star</h3>
          <h3 className="m-2">Rupees - {Resturant?.data?.cards[0]?.card?.card?.info?.costForTwo} Rs</h3>
          </div>

          <div className="p-20">
            <h1 className="font-bold underline text-2xl">Menu</h1>
            <ul>
              {Resturant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
                ?.card?.itemCards?.map((item) => {
                console.log(item);
                console.log(item?.card?.info?.name);
                return <li key={item?.card?.info?.id}>{item?.card?.info?.name} - 
                 <button className="m-1 rounded-xl bg-black text-white p-1" onClick={() => 
                   addFooodItem(item?.card?.info)
                 }>Add</button></li>;
              })}
            </ul>
          </div>
        </div>
      ) : (
        <Shimmer />
      )}
    </>
  );
};

export default ResturantMenu;
