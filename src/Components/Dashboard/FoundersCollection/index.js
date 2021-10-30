import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../../Header";
import SideNav from "../../SideNav";
import FoundersCollectionList from "./FoundersCollectionList";
import { ReactComponent as BackIconArrow } from "../../../img/svg/backIcon.svg";
import { ReactComponent as LineIcon } from "../../../img/svg/lineIcon.svg";

function FoundersCollection(props) {

   return (
      <div className="new-user-setup">
         <Header history={props.history} prop={props.prop} connect={() => { props.connect(); }} />
         <SideNav />
         <div className="right-wrapper">
            <div className="main px-lg-5 py-5 px-3 ">
               <div className="text-center headings text-white">
                  <h1>Founders Collection</h1>
                  <p>This StarStake founders collection of NFT Bucks includes original artwork <br />of the world’s greatest
                     intellectual property founders. </p>
                  <LineIcon />
               </div>
               <div className="back-link d-flex text-white mb-5 px-lg-4">
                  <Link to="/GetBucks">
                     <BackIconArrow />
                  </Link>
               </div>
               <h3 className="text-white mb-3 px-lg-4">Founders Collection</h3>
               <FoundersCollectionList />
            </div>
         </div>
      </div>
   )

}
export default FoundersCollection;