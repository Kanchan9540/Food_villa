import { Outlet, json } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";  //we also import the profile here or also import as a outlet
// import React from "react";
import { Component } from "react";
import userContext from "../utils/UserContext";  // here we dont have useCotext hook here. so its userContext used as a component

//shotform to create the component is => rafce
//functional based component
// const About2 = () =>{
//     return(
//         <div>
//             <h1>About us page</h1>
//             <p>This is Food villa App</p>
//             {/* <Outlet/> */}
//             <ProfileFunctionalComponent name = {"Kanchan"}/>  {/* here we passing the props*/}
//             <Profile name = {"KachanClass"}/>
//         </div>
//     )
// }

// create a class base component
class About extends Component{
    constructor(props){
        super(props);

        console.log("Parent-constrctor");
    }

      componentDidMount(){
        //best palce for API call
        console.log("Parent-componentDidMount");
    }
    render(){
        console.log("Parent-render"); 

        return(

            <div className="text-center">
                <h1 className="font-bold text-3xl underline text-center p-6">About us page</h1>
                {/*Here we use a useContext as a component*/}
                {/* this takes a jsx and its take a function and this function  have a value of whatever the value the context hold*/}
                
                <div className="border border-black h-90 w-90 bg-black text-white p-6 items-center">
                <userContext.Consumer>  
                    {({user}) => <h4 className="font-bold text-md ">{user.name} - {user.email}</h4> }
                </userContext.Consumer>

                <p>This is Food villa App</p>
                {/* <Outlet/> */}
                 <ProfileFunctionalComponent name = {"Kanchan"}/>  {/*//here we passing the props */}
                {/* <ProfileFunctionalComponent/> */}
                 <Profile name = {"First-child"}/>
                {/* <Profile name = {"Second-child"}/> */}
                </div>
            </div>
        )
    }
}

export default About;



/*****
 * //rendering 
 * Parent constructor
 * Parent render
 * First-child constructor
 * First-child render
 * Second-child constructor
 * Second-child render   //rendering done here  
 * First- child - componentDidMount   //comitting start there
 * //DOM is updating here
 * Second - child - componentDidMount
 * Parent - componentDidMount
 */