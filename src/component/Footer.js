import { useContext } from "react";
import userContext from "../utils/UserContext";

// footer
const Footer = () => {

const {user} = useContext(userContext);    
return <h1 className="text-white text-center font-bold bg-black mt-16 p-2">
This side is Developed by {user.name} - {user.email}</h1>
}

export default Footer;