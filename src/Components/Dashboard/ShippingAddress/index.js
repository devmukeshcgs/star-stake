import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../../Header";
import SideNav from "../../SideNav";
import { Row, Col } from 'react-bootstrap';
import ShippingAddressDetail from "./ShippingAddressDetail";
import AddAddress from "./AddAddress";
import { ReactComponent as BackIconArrow } from "../../../img/svg/backIcon.svg";

class ShippingAddress extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <div className="shipping-address">
            <Header history={this.props.history}  prop={this.props.prop} connect={() => { this.props.connect(); }} />
            <SideNav />
            <div className="right-wrapper">
               <div className="p-5 main">
                  <div className="back-link">
                     <Link to="/">
                        <BackIconArrow />
                     </Link>
                  </div>
                  <div className="shipping-section mt-5">
                     <Row>
                        <Col lg={9}>
                           <h4 className="mb-5">Shipping Address</h4>
                           <ShippingAddressDetail />
                           <AddAddress />
                        </Col>
                     </Row>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
export default ShippingAddress;
