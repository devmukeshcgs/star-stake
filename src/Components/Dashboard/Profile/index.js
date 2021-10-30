import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../../Header";
import SideNav from "../../SideNav";
import ProfilePicture from "./ProfilePicture";
import Nickname from "./Nickname";
import Email from "./Email";
import UserPrivacy from "./UserPrivacy";
import Notifications from "./Notifications";
import { ReactComponent as BackIconArrow } from "../../../img/svg/backIcon.svg";
import { ReactComponent as CopyIcon } from '../../../img/svg/copyIcon.svg';

function Profile(props) {

   return (
      <div className="new-user-setup">
         <Header history={props.history} prop={props.prop} connect={() => { props.connect(); }} />
         <SideNav />
         <div className="right-wrapper">
            <div className="px-lg-5 py-5 px-3 main  text-white">
               <div className="back-link d-flex ">
                  <Link to="/GetBucks">
                     <BackIconArrow />
                  </Link>
                  <h3 className="ms-4">User profile</h3>
               </div>
               <div className="profile-section  p-lg-5">
                  <div className="profile-wallet-address text-center mb-5 mt-lg-0 mt-4">
                     <h6> Your wallet address is <span>0xBBB6...e96e</span> <CopyIcon /></h6>
                  </div>
                  <ProfilePicture />
                  <hr />
                  <Nickname />
                  <hr />
                  <Email />
                  <hr />
                  <UserPrivacy />
                  <hr />
                  <Notifications />
               </div>
            </div>
         </div>
      </div>
   )

}
export default Profile;