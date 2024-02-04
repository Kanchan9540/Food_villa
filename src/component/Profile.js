import { useEffect, useState } from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0);   // here we will create a state variable one by one
   // const [count1, setCount1] = useState(0);

   useEffect(() =>{
    //API call
    //console.log("useEffect");
    const Timer = setInterval(() => {
    console.log("KanchanDev OP");
     },1000);
    
    console.log("useEffct");

     return() => {   // using this fnc our setInterval will be stoped or this fnc will called when we unmounted the component.
        clearInterval(Timer);   // this method is used to stop the unmounted
        console.log("useEffect return");
     }

   },[])

   console.log("render");
    return(
        <div>
            <h2>Profile Component</h2>
            <h3>Name: {props.name}</h3>
            {/* <h3>Count: {count}</h3> */}
            {/* <button onClick = {() => {
                setCount(1);  // here diferent func for each and every variable.
               // setCount1(2);  // here we change 2 useState variabe at a same tym.
            }}>count</button> */}
        </div>
    );
};

export default Profile;