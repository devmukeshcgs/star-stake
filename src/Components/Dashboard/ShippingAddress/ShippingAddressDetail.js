import React from 'react';
import { Button } from 'react-bootstrap';
import { ReactComponent as RightClick } from '../../../img/svg/rightclick.svg';

function ShippingAddressDetail()  {  

  return (
       <div className="shapping-detail">
          <div className="box-address p-4 mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <div className="address-detail">
              <h4>Chris Jones</h4>
              <p>#432432552645</p>
              <h3>1384, Crestidge lane, SAINT PAUL, MN 55123</h3>
            </div>
            <div className="action-address">
              <Button className="p-0 btn-none"><RightClick className="me-2" /> Default</Button>
              <br />
              <Button variant="outline-primary" className="p-0 mt-3">Delete</Button>
            </div>
         </div>
          </div>
          <div className="box-address p-4">
          <div className="d-flex justify-content-between align-items-center">
            <div className="address-detail">
              <h4>Not Chris Jones</h4>
              <p>#432432552647</p>
              <h3>235, Crestidge lane, SAINT PAUL, MN 55123</h3>
            </div>
            <div className="action-address">
              <Button variant="primary" className="p-0">Set default</Button>
              <br />
              <Button variant="outline-primary" className="p-0 mt-3">Delete</Button>
            </div>
         </div>
          </div>
       </div>
    )
  
  }
export default ShippingAddressDetail;
