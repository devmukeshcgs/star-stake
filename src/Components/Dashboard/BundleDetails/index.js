import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../../Header";
import SideNav from "../../SideNav";
import SingleDetails from "./SingleDetails";
import { ReactComponent as BackIconArrow } from "../../../img/svg/backIcon.svg";

function BundleDetails(props) {

   return (
      <div className="new-user-setup">
         <Header history={props.history} prop={props.prop} connect={() => { props.connect(); }} />
         <SideNav />
         <div className="right-wrapper">
            <div className="main px-lg-5 py-5 px-3 overflow-hidden">
               <div className="back-link d-flex text-white mb-5">
                  <Link to="/GetBucks">
                     <BackIconArrow />
                  </Link>
                  <h3 className="ms-4">Go back to get bucks</h3>
               </div>
               <SingleDetails />
            </div>
         </div>
      </div>
   )
}
export default BundleDetails;
