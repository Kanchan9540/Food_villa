import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
const cartItems = useSelector(store => store.cart.items);  // this is the place you will tell what you are subscribing to. always subscribe a small portion of your store or items only.

const dispatch = useDispatch();
const handleClearCart = () => {
    dispatch(clearCart());
  }

   return (
   <div>
    <h1 className="font-bold text-3xl text-center underline">Cart Items - {cartItems.length}</h1>
    <button className="bg-black text-white p-2 m-5 rounded-xl" 
    onClick={() => handleClearCart()}>Clear Cart</button>

    <div className="flex flex-wrap">
    {cartItems.map(item => 
    <FoodItem key={item.id} {...item} />
    )}
    </div>
    
   </div>

)};

export default Cart;