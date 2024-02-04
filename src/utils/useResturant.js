import { useState } from "react";
import { useEffect } from "react";
//import { fetch_menu_url } from "../constants";

const useResturant = (resId) => {  
// here we create a state varisble for hook    
const [Resturant, setResturant] = useState(null);  // the sate is updated whenever the data will be fetch from the API

// get data from API
useEffect(() => {
    getResturantInfo();
  }, []);

  async function getResturantInfo() {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.684889949661027&lng=77.2995937988162&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );  // here we pass the dynamic id.

      const json = await data.json();
      // console.log(json)
      
      setResturant( json );
      console.log(Resturant);
    } catch (error) {
      console.error("Error fetching menu:", error);
      setResturant({}); // Set an empty object in case of an error
    }
   }

//   async function getResturantInfo() {
//       const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.684889949661027&lng=77.2995937988162&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);  // here we pass the dynamic id.
//       const json = await data.json();
//        console.log(json.data)
//       console.log(Resturant);
//       setResturant(json.data);
//   }

// return resturant data
  return Resturant;
};

export default useResturant;