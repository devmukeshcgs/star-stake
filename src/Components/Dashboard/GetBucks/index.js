import React from 'react';
import Header from "../../Header";
import SideNav from "../../SideNav";
import NFTbucksEssentials from "./NFTbucksEssentials";
import CardList from "./CardList";
import CollectionsList from "./CollectionsList";
import BundlesList from "./BundlesList";

function GetBucks(props) {

   return (
      <div className="new-user-setup">
         <Header history={props.history} prop={props.prop} connect={() => { props.connect(); }} />
         <SideNav />
         <div className="right-wrapper">
            <div className="main ">
               <NFTbucksEssentials />
               <CardList />
               <CollectionsList />
               <BundlesList />
            </div>
         </div>
      </div>
   )

}
export default GetBucks;
