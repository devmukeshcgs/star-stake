import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { ReactComponent as GetbucksIcon } from '../img/svg/sidenavicon/CardListIcon.svg';
import Modal from 'react-bootstrap/Modal';
import { ReactComponent as AboutIcon } from '../img/svg/sidenavicon/about.svg';
import { ReactComponent as MycollectionIcon } from '../img/svg/sidenavicon/MycollectionIcon.svg';
import { ReactComponent as AddEtheriumIcon } from '../img/svg/sidenavicon/AddEtheriumIcon.svg';
import { ReactComponent as CartIcon } from '../img/svg/sidenavicon/cartIcon.svg';
import { ReactComponent as StakeWatchlist } from '../img/svg/sidenavicon/StakeWatchlist.svg';
import { ReactComponent as OrderHistoryIcon } from '../img/svg/sidenavicon/OrderHistoryIcon.svg';
import { ReactComponent as ShippingAddressIcon } from '../img/svg/sidenavicon/ShippingAddress.svg';
import { ReactComponent as SupportIcon } from '../img/svg/sidenavicon/supportIcon.svg';
import { ReactComponent as SettingIcon } from '../img/svg/sidenavicon/settingIcon.svg';
import { ReactComponent as ProfileIcon } from '../img/svg/sidenavicon/profileIcon.svg';
import { ReactComponent as LogoutIcon } from '../img/svg/sidenavicon/logoutIcon.svg';
import { ReactComponent as BackIcons } from '../img/svg/backIcon.svg';
import { ReactComponent as PngkitIcon } from '../img/svg/pngkitIcon.svg';
import { ReactComponent as BackIconArrow } from "../img/svg/backIcon.svg";
import { ReactComponent as CopyIcon } from "../img/svg/copyIcon.svg";
import { ReactComponent as EthIcon } from "../img/svg/eth.svg";
import EthImg from "../img/eth-logo.png";
import InfoCard from "./Dashboard/MyCollection/InfoCard"
import DepFromCard from './Modals/DepFromCard';
import ErrorMsg from './Modals/ErrorMsg';
import SuccessMsg from './Modals/SuccessMsg';
import DepositFomExchange from "./Modals/DepositFomExchange"
// import AddETH from './Modals/AddETH';

function SideNav() {
   const [state, setState] = useState('default')

   const [isActive, setActive] = useState("false");

   const handleToggle = () => {
      setActive(!isActive);
   };

   //assigning location variable
   const location = useLocation();

   //destructuring pathname from location
   const { pathname } = location;

   //Javascript split method to get the name of the path in array
   const splitLocation = pathname.split("/");
   //Modal state
   const [show, setShow] = useState(false);
   const [show2, setShow2] = useState(false);
   const [show3, setShow3] = useState(false);
   const [show4, setShow4] = useState(false);

   //Modal
   const handleShow = () => {
      setState('default')
      setShow(true)
      setShow2(false)
      setShow3(false)
      setShow4(false);
   };
   const handleShow2 = () => {
      setShow2(true)
      setShow(false)
      setShow3(false)
      setShow4(false);

   };
   const handleShow3 = () => {
      setShow3(true)
      setShow(false)
      setShow2(false)
      setShow4(false);

   };
   const handleShow4 = () => {
      setShow4(true)
      setShow(false)
      setShow2(false)
      setShow3(false)
   };
   const handleClose = () => {
      setShow(false);
      setShow2(false);
      setShow3(false);
      setShow4(false);
      setState('default')
   }

   return (
      <div className="side-bar-nav position-relative">
         <Button onClick={handleToggle} className="mob-btn-side-nav">
            <BackIcons />
         </Button>
         <div className={isActive ? "side-nav" : 'side-nav open-nav'} >
            <div className="link-list mb-4">
               <p>NFT bucks</p>
               <ul className="p-0 m-0">
                  <li>
                     <Link to="/GetBucks" >
                        <span>
                           <GetbucksIcon />
                        </span>
                        Get bucks
                     </Link>
                  </li>
                  <li>
                     <Link to="/#">
                        <span>
                           <AboutIcon />
                        </span>
                        About
                     </Link>
                  </li>
                  <li >
                     <Link className={splitLocation[1] === "MyCollection" ? "active" : ""} to="/MyCollection">
                        <span>
                           <MycollectionIcon />
                        </span>
                        My collection
                     </Link>
                  </li>
                  <li>
                     <a className="modal-btn" onClick={handleShow}>
                        <span>
                           <AddEtheriumIcon />
                        </span>
                        Add etherium
                     </a>
                  </li>
               </ul>
            </div>
            <div className="link-list mb-4">
               <p>Order</p>
               <ul className="p-0 m-0">
                  <li>
                     <Link to="/ProceedToCheckout">
                        <span>
                           <CartIcon />
                        </span>
                        Bucks Cart
                     </Link>
                  </li>
                  <li>
                     <Link className={splitLocation[1] === "StakeWatchlist" ? "active" : ""} to="/StakeWatchlist">
                        <span>
                           <StakeWatchlist />
                        </span>
                        Stake Watchlist
                     </Link>
                  </li>
                  <li>
                     <Link to="/#">
                        <span>
                           <SupportIcon />
                        </span>
                        Support
                     </Link>
                  </li>
                  <li>
                     <Link className={splitLocation[1] === "OrderHistory" ? "active" : ""} to="/OrderHistory">
                        <span>
                           <OrderHistoryIcon />
                        </span>
                        Order History
                     </Link>
                  </li>
                  <li>
                     <Link className={splitLocation[1] === "ShippingAddress" ? "active" : ""} to="/ShippingAddress">
                        <span>
                           <ShippingAddressIcon />
                        </span>
                        Shipping address
                     </Link>
                  </li>
               </ul>
            </div>
            <div className="link-list">
               <p>My wallet</p>
               <ul className="p-0 m-0">
                  <li>
                     <Link to="/Setting" className={splitLocation[1] === "Setting" ? "active" : ""} >
                        <span>
                           <SettingIcon />
                        </span>
                        Settings
                     </Link>
                  </li>
                  <li>
                     <Link to="/Profile" className={splitLocation[1] === "Profile" ? "active" : ""}>
                        <span>
                           <ProfileIcon />
                        </span>
                        Profile
                     </Link>
                  </li>
                  <li>
                     <Link to="/#">
                        <span>
                           <LogoutIcon />
                        </span>
                        Log out
                     </Link>
                  </li>
               </ul>
            </div>

            <div>
               <InfoCard />
            </div>
         </div>

         <Modal
            show={show}
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
         >
            <Modal.Header closeButton>
               <Modal.Title
                  className="back-link d-flex justify-content-center align-items-center py-4 px-1">
                  <div className="modal-back" onClick={handleClose}>
                     <BackIconArrow width="24" />
                  </div>
               </Modal.Title>
            </Modal.Header>
            <Modal.Body className="justify-content-center ">
               <div className="d-grid gap-2 py-4">
                  <div className="d-flex justify-content-center align-items-center ">
                     {/* <EthIcon /> */}
                     <img src={EthImg} alt="" srcset="" />
                  </div>
                  <div className="px-4 my-4">
                     <p className="err-msg">Oh, dang! Looks like your ETH balance is low.
                        Add to buy NFT bucks!</p>
                  </div>
                  <div className="d-flex justify-content-center align-items-center ">
                     <Button variant="primary" onClick={handleShow4}>Add ETH</Button>
                  </div>
               </div>
            </Modal.Body>
         </Modal>
         <Modal
            show={show4}
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
         >
            <Modal.Header closeButton>
               <Modal.Title
                  className="back-link d-flex justify-content-center align-items-center py-4 px-1">
                  <div className="modal-back" onClick={handleClose}>
                     <BackIconArrow width="24" />
                  </div>
                  <h4 className="ms-4 m-0">Buy ETH</h4>
               </Modal.Title>
            </Modal.Header>
            <Modal.Body className="justify-content-center ">
               <div className="d-grid gap-4 p-4">
                  <Button variant="outline-primary" size="sm" onClick={handleShow2}>
                     Deposite from exchange
                  </Button>
                  <Button variant="outline-primary" size="md" onClick={handleShow3}>
                     Deposite from card
                  </Button>
               </div>
               <div className="d-flex justify-content-center align-items-center py-2">
                  <Link to="/" className="d-block mt-2"> <PngkitIcon width="36" className="mx-4" /> Powered By Metamask</Link>
               </div>
            </Modal.Body>
         </Modal>
         {/* MODAL 2 */}

         <Modal
            show={show2}
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
         >
            {state === 'default' && (<DepositFomExchange
               closePopUp={handleClose}
               showSuccess={() => setState('completed')} />)}

            {state === 'error' && <ErrorMsg
               closePopUp={handleClose}
               title="Error code 4rec" />}

            {state === 'completed' && <SuccessMsg
               closePopUp={handleClose}
               title="Completed" />}
         </Modal>

         {/* MODAL 3 */}
         <Modal
            show={show3}
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
         >
            {state === 'default' && (<DepFromCard
               closePopUp={handleClose}
               showErr={() => setState('error')} />)}

            {state === 'error' && <ErrorMsg
               closePopUp={handleClose}
               title="Error code 4rec" />}
            {state === 'completed' && <SuccessMsg
               closePopUp={handleClose}

               title="Completed" />}
         </Modal>
      </div>)
}
export default SideNav;
