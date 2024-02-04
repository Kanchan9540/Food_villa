import { img_cdn_url } from "../constants";


const FoodItem = ({name,imageId, category, price, description}) => {   
  

    return (
        <div className="w-52 p-2 m-2 shadow-xl bg-black text-white h-96 rounded-lg transition-all duration-300 ease-out hover:transform hover:scale-105">
            <img src={img_cdn_url + imageId}/>
             <h2 className="font-bold text-2xl">{name}</h2>
            {/* <h3 className="text-wrap truncate">{itemToSlice.join(",")}</h3> */}
            <h3>{category}</h3>
            <h4>{description}</h4>
            <h4>Rupees:{price/100}</h4>
        </div>
    )
}
 
export default FoodItem;