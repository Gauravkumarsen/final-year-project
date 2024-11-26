import React from "react";
import './footer.css';

const Footer =()=>{
    return(
   <div className="footer">
       <div className="top">
             <div>
                <h1><span> Travel</span>..`IN`..<span>Dia</span></h1>
                <p>Travel..Safe..`IN`..India </p>
             </div>
             <div></div>
       </div>

       <div className="bottom">
       <div>
        <h4> Project</h4>
        <a href="/">Updates</a>
        <a href="/">Status</a>
        <a href="/">Tech-Stacks</a>
       </div>
       <div>
        <h4>Our Products</h4>
        <a href="/">Hotel Booking</a>
        <a href="/">Ticket Booking</a>
        <a href="/">Budget Planning</a>
       </div>
       <div>
        <h4>About Us</h4>
        <a href="/">Terms & Conditions</a>
        <a href="/">Customer Support</a>
        <a href="/">Careers</a>
       </div>
       </div>
   </div>
   
    )
}

export default Footer