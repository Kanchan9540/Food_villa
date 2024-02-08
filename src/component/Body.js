import {ResturentList} from "../constants";
import ResturentCard from "./ResturentCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { NavLink } from "react-router-dom"; 
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

// body
// here we pass a resturent that is a props here we pass a some data or properties to my functional components
//if pass the data from parent to child component so in my child component i will pass data like this and this is called props. 
// map is te best way to do the functional programming
 
const Body = () => {

   // searchText ia a local state variable
   const[AllResturants, setAllResturants] = useState([]);
   const[FilteredResturants, setFilteredResturants] = useState([]);
   const[searchInput, setSearchInput] = useState();  //here we will give the dafault value that is a kfc. return[variable name, functionto the updated variable]

  //  const [filtereResturants,setFilteredResturants]=useState([])
    //useEffect hook
    //empty dependency array => once after render
    //dep arry[searchInput] => once after intial render + everytime re-render after when my earch text will change
     
    useEffect(() => {
      //API call
      getResturants(); // call the API
    }, []); // thats mean your useEffect is depend on a searchInput. if thses are not dependent on anything in that case it just call at once.


    // async function getResturants(){
    //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.684889949661027&lng=77.2995937988162&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //   const json = await data.json();
    //   console.log(json);
    //   // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //   // data.cards[2].card.card.gridElements.infoWithStyle.restaurants 
    //   setAllResturants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  //optional chaning
    //   setFilteredResturants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // }  

    async function getResturants(){
      try{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.684889949661027&lng=77.2995937988162&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        if(!data.ok){
          throw new Error( `Failed to Fetch data: ${data.status}`)
        }
        const json = await data.json();
        //console.log(json);
  
         // optional chaining
         setAllResturants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
         setFilteredResturants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        //console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      }
      catch(error){
        console.error("Error Fetchning Data", error.message);
      }
  
    }

  //online offline features
  const isOnline = useOnline();
  
  if(!isOnline){
    return <h1>Offline.... Plese check your Internet Connection !!!!</h1>
  }
   

  // conditional Rendering
  // if my resturant is empty => simmer UI
  // if my resturant has data => load actual data UI  
  console.log(AllResturants);

  //not rendered component(early return)
  if(!AllResturants) return null;
 
      return AllResturants?.length === 0 ? <Shimmer/> : (
        //search bar
        <>
        
        <div className = "p-5 bg-black my-4 text-white text-center">
            <input type="text" 
            className="search-input rounded-lg text-black cursor-text p-1 m-1"
             placeholder="Search"
              value= {searchInput}
              //e.target.value whatever you write in input goes iside the variable
                onChange = {(e) => {setSearchInput(e.target.value)}}
              />
             
           <button className="p-2 m-1 bg-white hover:bg-gray-500 text-black hover:text-white rounded-full"
           onClick={() =>{
             // need to filter the data
             const data = filterData(searchInput, AllResturants); // search the input text into the resturants and give my filter data.
             // update the state - resturants
             setFilteredResturants(data);

           }}>Search</button>
        </div>
      
        <div className="flex flex-wrap mx-4 items-center justify-center">
         {
           //map using here that is a good way
           // no key(not acceptable) <<<<<< idex key(use only if ypu don't have anythng) << unique key(best practice)
            FilteredResturants.map((Resturant) => {  // take a call back fuction
            return(
               <NavLink
                to = {"/resturant/" + Resturant.info.id} key={Resturant.info.id}>
            <ResturentCard {...Resturant.info}/>
            </NavLink>  // return some piece of jsx
            );
           })
           
         }
            {/* <ResturentCard {...ResturentList[0].info}/>  
            <ResturentCard {...ResturentList[1].info}/>  // here we spread resturant object
            <ResturentCard {...ResturentList[2].info}/>
            <ResturentCard {...ResturentList[3].info}/>
            <ResturentCard {...ResturentList[4].info}/> */}
            {/* <ResturentCard resturant = {ResturentList[5]}/>
            <ResturentCard resturant = {ResturentList[6]}/>
            <ResturentCard resturant = {ResturentList[7]}/>
            <ResturentCard resturant = {ResturentList[8]}/> */}
        </div> 
        </>
    )
};
 export default Body;