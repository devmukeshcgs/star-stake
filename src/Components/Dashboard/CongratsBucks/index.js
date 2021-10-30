import React from 'react';
import Header from "../../Header";
import SideNav from "../../SideNav";
import SetupTab from "./SetupTab";

function CongratsBucks(props) {

   return (
      <div className="new-user-setup">
         <Header history={props.history} prop={props.prop} connect={() => { props.connect(); }} />
         <SideNav />
         <div className="right-wrapper">
            <div className="px-lg-5 px-3 py-5 main">
               <SetupTab />
            </div>

         </div>
      </div>
   )

}
export default CongratsBucks;
