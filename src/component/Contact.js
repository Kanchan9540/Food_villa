import React from "react";

const Contact = () => {
   return (
      <div className="overflow-hidden overflow-y-hidden">
         {/* <h1 className="font-bold text-3xl text-center underline">Contact us page</h1> */}
         
        <form className="flex justify-center items-center v-screen p-8 ">
        <div className="border border-black w-90 h-3/4 p-2 m-5 rounded-lg px-8 bg-black text-white">
         
         <h1 className="text-center font-bold text-xl underline underline-offset-4 p-2">Contact Me</h1>
         <h1 className="font-bold py-2">Name</h1> 
         <input className="border border-black w-60 rounded-lg px-2 p-1 text-black" type="text" placeholder="Enter your name" />
         <h1 className="font-bold py-2">E-mail Id</h1> 
         <input className="w-60 rounded-lg border border-black px-2 p-1 text-black" type="text" placeholder="Enter your mail" />
         <h1 className="font-bold py-2">Message</h1> 
         <textarea className="rounded-lg border px-2 p-1 resize-none text-black border-black" name="message" rows="4" cols="30" placeholder="Enter your text here"></textarea>

         <button className="block mx-24 my-2 p-1 px-4 border border-green-900 bg-green-500 text-black rounded-lg">Send</button>
         
         </div>
        </form>
      </div>
   );
};

export default Contact;
