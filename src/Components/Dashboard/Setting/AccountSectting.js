import React from 'react';
import { Row,Col,Button,Form } from 'react-bootstrap';
import { ReactComponent as AccountSettingIcon } from '../../../img/svg/sidenavicon/settingIcon.svg';
import { ReactComponent as CopyIcon } from '../../../img/svg/copyIcon.svg';


function AccountSectting()  {  

  return (
       <div className="account-sectting py-5 px-lg-5 px-3  mt-lg-5 mt-3">
          <div className="w-75">
          <h4><AccountSettingIcon className="me-2"/> Account settings</h4>
          <Form.Group className="mb-5 mt-4" controlId="formFileDisabled">
            <Form.Label className="mb-4">Your wallet address</Form.Label>
            <div className="position-relative">
               <Form.Control type="text" value="0x23ASF224ER3432523FXFEF342r5234GHSDT"  disabled />
               <span className="position-absolute top-0 end-0 py-4 px-5">
                  <CopyIcon />
               </span>
            </div>
         </Form.Group>
         <Row>
            <Col>
               <Button variant="primary" className="w-100">Add funds</Button>
            </Col>
            <Col>
               <Button variant="secondary" className="w-100">Get NFT bucks</Button>
            </Col>
            <Col>
               <Button variant="outline-primary" className="w-100">Log out</Button>
            </Col>
         </Row>
         </div>
       </div>
    )
  
  }
export default AccountSectting;
