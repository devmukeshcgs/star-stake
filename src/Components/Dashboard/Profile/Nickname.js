import React from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';

function ProfilePicture()  {  

  return (
       <div className="profile-text py-5">
            <Row>
               <Col lg={3} md={3}>
                  <div  className="text-end pe-lg-5 mb-lg-0 mb-4">
                     <h6>Nickname</h6>
                  </div>
               </Col>
               <Col lg={7} md={9}>
                   <div className="d-block ps-lg-5">
                       <p>Your current nickname is <b>Chris Jones</b></p>
                       <p>Your nickname is used to send you important updates. Your nickname is how other stars will identify you.</p>
                       <Form.Control type="text" placeholder="Enter new nickname" className="mb-4" />
                       <Button className="p-0 bg-none">Update</Button>
                   </div>
               </Col>
            </Row>
       </div>
    )
  
  }
export default ProfilePicture;
