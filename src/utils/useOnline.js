import { useEffect, useState } from "react";


const useOnline = () => {
    const[isOnline , setIsOnline] = useState(true);

   useEffect(() => { 
     const handleOnline = () => {
        setIsOnline(true);  
     }
     const handleOffline = () => {
        setIsOnline(false);  
     }
    window.addEventListener("online", handleOnline);  // event handler
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline)
   };
},[]);

    return isOnline;  // return true or false
}

export default useOnline;