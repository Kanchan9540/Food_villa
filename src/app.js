import React, {lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import Title from "./component/Header.js"   // import bydefult 
import {Header} from "./component/Header"  // import by name or export using export keyword............ .js file name is also worked
//import {Header, Title} from "./component/Title"  // import both at a one tym in one file
//import Title ,{Header} from "./component/Title"  // here we also change the  name of the title but its not good ractice.
import * as obj from "./component/Header.js" // here we import everything inside the file and we also use obj.title.
import Body from "./component/Body";
import Footer from "./component/Footer";
import About from "./component/About.js";
import Error from "./component/Error.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./component/Contact.js";
//import ContactDetails from "./component/ContactDetails.js";
import ResturantMenu from "./component/ResturantMenu.js";
import Profile from "./component/Profile.js";
import Shimmer from "./component/Shimmer.js";
import userContext from "./utils/UserContext.js";
import { Provider } from "react-redux";  // this provider is used for connect redux store to  the react
import store from "./utils/store.js"; 
import Cart from "./component/Cart.js";
//import Instamart from "./component/Instamart.js";

//Dynamic importing - lazy import due to this chunking is done
const Instamart = lazy(() => import("./component/Instamart")); // its not a normal import
//upon the on demand loading -> upon rendor -> suspend loading ( because the code is not there or its take tym to load)

//chuking
//code splitting
//dynamic bundling
//lazy loading
//on demand loading
//dynamic import

const AppLayout = () => {
    const[user, setUser] = useState({
        name: "Kanchan",
        email: "kanchandev@gmail.com",
    })

    return (
        <Provider store={store}> {/* that is used for redux provider. here we passinga store into a react application*/}
            {/* // you can modified your userContext using provider. */}
        <userContext.Provider
        value = {{
            user : user,  // overwrite the dafult value
        }}>
            <Header/>
            {/*outlet*/}
            <Outlet/>
            <Footer/>
        </userContext.Provider> 
        </Provider>  
         );
};

//creating a router
const appRouter = createBrowserRouter([   // this creaeBrowserRouter take some configuration or a path and each path is a object.
    {
        path: "/",      // select the path
        element: <AppLayout/>,   //component is load when we write"/"."
        errorElement: <Error/>,  // this is  errror component
        children: [
        {
        path: "/about",  //parentPath/{path} => localhost:1234/about.   "/" means from the root 
        element: <About/>, 
        children: [
        {
         path: "profile",  //parentPath/{path} => localhost:1234/about/profile.  here we passing relative path w.r.t prent
         element: <Profile/>,
        }
    ],
    },
    {
        path: "/contact",      
        element: <Contact/>,   
    },
    {
        path: "/",      
        element: <Body/>,   
    },
    {
        path: "/Resturant/:resId", 
        element: <ResturantMenu/>, 
    },
    {
        path: "/instamart",// react waits to resolve this promises. 
        element: <Suspense fallback = {<Shimmer/>}><Instamart/></Suspense>, // wrap inside the suspense because the error will be occur in the render tym.
        // due to suspense react take care of this component in a different manner/fashion react knows this is a lszy loading so its take a tym to load.
        // fallback is the props due to this we anything in the loading tym.
    },
    {
        path: "/cart", 
        element: <Cart/>, 
    },


        ],
    },
]);

//passing a react element inside a root
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter} />);  //  we need to render according to the configuration or router.