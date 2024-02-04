import { useContext } from "react";
import userContext from "../utils/UserContext";

// footer
const Footer = () => {

const {user} = useContext(userContext);    
return <h1 className="p=5 m-5 text-center font-bold">
This side is Developed by {user.name} - {user.email}</h1>
}

export default Footer;