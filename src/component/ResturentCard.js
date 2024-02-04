import { img_cdn_url } from "../constants";
import { useContext } from "react";
import userContext from "../utils/UserContext";


//card component create
//optional chaning = ?
// react wrap up all the properies into a variable that is props
//const ResturentCard = (props) => {  // here we also wite{resturant} in the place o props and that is called as destructuring the objects.
const ResturentCard = ({name,
    cuisines,
    cloudinaryImageId,
    sla}) => {   
    // we also destructuring the resturant and we get some resturant object that is object
    //const{name, cuisines, cloudinaryImageId, lastMileTravelString} = resturant.info;

    //to ensure card not overflow due to more card
    const itemToSlice = cuisines.slice(0,5);

    const {user} = useContext(userContext);

    return (
        <div className="w-52 p-5 m-2 shadow-xl bg-black text-white h-96 rounded-lg transition-all duration-300 ease-out hover:transform hover:scale-105">
            <img src={img_cdn_url + cloudinaryImageId}/>
             <h2 className="font-bold text-2xl">{name}</h2>
            <h3 className="text-wrap truncate">{itemToSlice.join(",")}</h3>
            <h4>{sla.lastMileTravelString}</h4>
            {/* <h5 className="font-bold">{user.name} {user.email}</h5> */}
        </div>
    )
}
 
export default ResturentCard;