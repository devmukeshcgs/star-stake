import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';

function UserPrivacy()  {  

  return (
    <div className="profile-text py-5">
      <Row>
        <Col lg={3} md={3}>
            <div  className="text-end pe-lg-5 mb-lg-0 mb-4">
              <h6>User privacy <br />& rights</h6>
            </div>
        </Col>
        <Col lg={7} md={9} >
            <div className="d-block ps-lg-5">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet est non eros malesuada tempor. Donec nec felis dignissim, hendrerit diam id, tincidunt arcu. Praesent efficitur ante risus, ut condimentum enim condimentum sed. 
                  <br /><br />
                 Sed posuere tellus at magna viverra, vitae luctus libero lobortis. Nullam ante turpis, sodales id eleifend ut, convallis vitae ante. Curabitur rhoncus lorem eget accumsan volutpat. Maecenas elit elit, varius eu massa sit amet, laoreet viverra ligula. </p>
                <Button className="p-0">Disconnect wallet from StarStake</Button>
            </div>
        </Col>
      </Row>
     </div>
    )
  
  }
export default UserPrivacy;
