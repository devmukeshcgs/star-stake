import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";
import SideNav from "../../SideNav";
import { ReactComponent as BackIconArrow } from "../../../img/svg/backIcon.svg";
import "./ProceedToCheckout.scss";
import CartItems from "./CartItems";
import Summary from "./Summary";
import Steps from "./Steps";

export default function ProceedToCheckout(props) {
  return (
    <div className="checkoutPage">
      <Header history={props.history} prop={props.prop} connect={() => { props.connect(); }} />
      <SideNav />
      <div className="right-wrapper">
        <div className="px-lg-5 py-5 px-3 main  text-white">
          <Steps />
          <div className="back-link">
            <Link to="/GetBucks">
              <BackIconArrow />
            </Link>
            <h3>NFTbucks Checkout</h3>
          </div>
          <CartItems />
          <Summary />
        </div>
      </div>
    </div>
  );
}
