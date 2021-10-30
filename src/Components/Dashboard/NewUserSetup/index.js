import React from 'react';
import Header from "../../Header";
import SideNav from "../../SideNav";
import SetupTab from "./SetupTab";

class NewUserSetup extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="new-user-setup">
            <Header history={this.props.history} prop={this.props.prop} connect={() => { this.props.connect(); }} />
            <SideNav />
            <div className="right-wrapper">
               <div className="p-4 main">
                  <SetupTab prop={this.props.prop} changeLoginStatus={($event) => { this.props.changeLoginStatus($event) }} />
               </div>

            </div>
         </div>
      )
   }
}
export default NewUserSetup;
