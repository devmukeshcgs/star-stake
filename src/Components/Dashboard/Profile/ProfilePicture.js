import React from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Form, Button} from 'react-bootstrap';
import { ReactComponent as AvatarIcon } from '../../../img/svg/avatar.svg';

function ProfilePicture()  {  

  return (
       <div className="profile-img py-5">
            <Row>
               <Col lg={3} md={3}>
                  <div className="text-end pe-lg-5 mb-lg-0 mb-4">
                     <h6>Profile picture</h6>
                  </div>
               </Col>
               <Col lg={7} md={9}>
                   <div className="d-flex align-items-center ps-lg-5">
                     <div className="img-profile me-lg-5 me-3">
                         <AvatarIcon />
                     </div>
                     <div className="upload-remove">
                        <div className="upload-img">
                          <div className="position-relative">
                            <Form.Control type="file" placeholder="Change" className="position-relative z-index-1" />
                            <Button variant="outline-primary" className="position-absolute top-0 bottom-0 p-0">Change</Button>
                          </div>
                        </div>
                        <div className="remove-img text-center">
                          <Link to="/">
                            Remove picture
                          </Link>
                        </div>
                     </div>
                   </div>
               </Col>
            </Row>
       </div>
    )
  
  }
export default ProfilePicture;
