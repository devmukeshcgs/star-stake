import React from 'react';
import {Tab, Row, Col, Nav} from 'react-bootstrap'
import GetStarted from "./GetStarted";

function SetupTab()  {  

  return (
       <div className="px-xl-3 pb-lg-5 new_user_Account position-relative">
           <div className="tab-active-top text-center mb-lg-5 mb-3">
             <ul className="d-inline-flex m-auto p-0 pe-lg-5">
               <li className="position-relative">
                 <span></span>
                 <h4>Details</h4>
               </li>
               <li className="position-relative">
                 <span></span>
                 <h4>Payment</h4>
               </li>
               <li className="position-relative">
                 <span></span>
                 <h4>Completed</h4>
               </li>
             </ul>
           </div>
           <Tab.Container id="left-tabs-example" defaultActiveKey="Get-started">
            <Row className="align-items-center">
              <Col lg={4} className="mt-lg-5">
                <Nav variant="pills" className="flex-column position-relative mt-5 pe-lg-5">
                  <Nav.Item className="w-100 ">
                    <Nav.Link  className="mb-5 active-done">
                       <span className="me-3 position-relative justify-content-center align-items-center d-inline-flex"></span>
                          You got bucks!
                      </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="w-100">
                    <Nav.Link className="mb-5  active">
                      <span className="me-3 position-relative justify-content-center align-items-center d-inline-flex">1</span>
                      Browse the Marketplace
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="w-100">
                    <Nav.Link  className="mb-5 active">
                       <span className="me-3 position-relative justify-content-center align-items-center d-inline-flex">2</span>
                       Find a iNFT to stake
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="w-100">
                    <Nav.Link className="mb-5 active">
                      <span className="me-3 position-relative justify-content-center align-items-center d-inline-flex">3</span>
                      Choose access reward and enter staking amount
                     </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="w-100">
                    <Nav.Link className="mb-5 active">
                      <span className="me-3 position-relative justify-content-center align-items-center d-inline-flex">4</span>
                      Select the bucks you want use for payment
                     </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="w-100">
                    <Nav.Link className=" active">
                      <span className="me-3 position-relative justify-content-center align-items-center d-inline-flex">5</span>
                       Agree to terms and complete order
                     </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col lg={8}>
                <Tab.Content className="mt-lg-0 mt-5 ">
                  <Tab.Pane eventKey="Get-started">
                     <GetStarted />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
       </div>
    )
  
  }
export default SetupTab;
