import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../../Header";
import SideNav from "../../SideNav";
import AccountSectting from "./AccountSectting";
import { ReactComponent as BackIconArrow } from "../../../img/svg/backIcon.svg";

class Setting extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <div className="new-user-setup">
            <Header history={this.props.history}  prop={this.props.prop} connect={() => { this.props.connect(); }} />
            <SideNav />
            <div className="right-wrapper">
               <div className="p-5 main">
                  <div className="back-link">
                     <Link to="/">
                        <BackIconArrow />
                     </Link>
                  </div>
                  <div className="setting-section mt-5">
                     <h4>Settings</h4>
                     <AccountSectting />
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
export default Setting;
