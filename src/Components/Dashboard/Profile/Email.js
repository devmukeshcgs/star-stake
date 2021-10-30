import React from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';

function ProfilePicture()  {  

  return (
    <div className="profile-text py-5">
      <Row>
        <Col lg={3} md={3}>
            <div  className="text-end pe-lg-5 mb-lg-0 mb-4">
              <h6>Email</h6>
            </div>
        </Col>
        <Col lg={7} md={9}>
            <div className="d-block ps-lg-5">
                <p>Your current nickname is  <b>chrisjones@gmail.com</b></p>
                <p>Your email is used to send you important updates. You can change your email address.</p>
                <Form.Control type="text" placeholder="Enter new email address" className="mb-4" />
                <Button className="p-0">Update</Button>
            </div>
        </Col>
      </Row>
     </div>
    )
  
  }
export default ProfilePicture;
