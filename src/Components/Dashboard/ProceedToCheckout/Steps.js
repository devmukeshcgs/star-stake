import React from "react";

export default function Steps() {
  return (
       <div className="tab-active-top text-center mb-lg-5 mb-3">
             <ul className="d-inline-flex m-auto p-0 pe-lg-5">
               <li className="position-relative">
                 <span></span>
                 <h4>Details</h4>
               </li>
               <li className="position-relative">
                 <span></span>
                 <h4>Payment</h4>
               </li>
               <li className="position-relative op-low">
                 <span></span>
                 <h4>Completed</h4>
               </li>
             </ul>
           </div>
  );
}
