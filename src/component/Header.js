import { useState, useContext } from "react";
import useOnline from "../utils/useOnline";
import { Link } from "react-router-dom";  // named import for preventing the reloading 
//import Logo from "./assests/img/food_villa.png";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";

//SPA -Single page application
// client side routing
//JSX 
const Title = () => (    // here we can't use HTML here we use only Html like syntax.
<a href="/">
<img 
alt="logo" 
className="h-28 p-2"
src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4">
{/*  src= {Logo} */}
</img>
</a>
);


export const Header = () => {   // React component - its returns a react element
    const[isLoggedIn, setIsLoggedIn] = useState(false);

    // const isOnline = useOnline();
    const {user} = useContext(userContext); // its giving the whole object and extracting user from it
    const cartItem = useSelector(store => store.cart.items); // useSelector is a bridge b|w the redux store and component
    console.log(cartItem);

    return (
        <div className="flex justify-between bg-black text-white shadow-lg">  
        {<Title/>} 
            <div className="nav-items">
            
                <ul className="flex py-10">
                {/* // create a route */}
                    <Link to = "/"><li className="px-2 underline hover:text-gray-400">Home</li></Link>
                    <Link to = "/about"><li className="px-2 underline hover:text-gray-400">About Us</li></Link>
                    <Link to = "/contact"><li className="px-2 underline hover:text-gray-400">Contact</li></Link>
                    <Link to = "/instamart"><li className="px-2 underline hover:text-gray-400">Instamart</li></Link>
                    <Link to = "/cart"><li className="px-2 underline hover:text-gray-400">Cart-{cartItem.length} item</li></Link>
                    
                </ul>
            </div>

             {/*login or logout button*/}
             {/* <h1>{isOnline ? " yes": "no"}</h1> */}
            {/* <span className="p-10 font-bold text-white">{user.name}</span> */}
            {isLoggedIn ? <button onClick={() => { setIsLoggedIn(false)}} className="bg-white text-black rounded-l-full ml-2 p-2 underline hover:bg-gray-500">Login</button> 
            : <button className="bg-green-500 text-white rounded-l-full ml-2 p-2 underline" onClick={() => { setIsLoggedIn(true)}}>Logout</button>}
        </div>
    );
}

export default Header;