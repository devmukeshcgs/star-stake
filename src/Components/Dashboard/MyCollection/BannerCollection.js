import React from 'react';
import { Row, Col, Button} from 'react-bootstrap';
import { ReactComponent as BgCollectionValue } from '../../../img/svg/BgCollectionValue.svg';

function BannerCollection()  {  

  return (
       <div className="banner-collection overflow-hidden">
            <Row className="align-items-center">
              <Col md={6}>
                 <div className="px-4 pt-4 pb-0 total-blance position-relative text-center border-right">
                   <BgCollectionValue />
                   <div className="position-absolute top-0 bottom-0 start-0 end-0 text-center pt-5 mt-5">
                     <h4 className="mt-4 mb-5 pt-3">$100,000</h4>
                     <p>NFTB Dollars balance</p>
                     <span>33 NFTBs</span>
                   </div>
                 </div>
              </Col>
              <Col md={6}>
                 <div className="px-md-5 px-3 pb-5 pt-md-5 pt-0 text-white action-text">
                   <h4>More means more <br />stuff to buy!</h4>
                   <p>Collect more NFT bucks and lorem ipsum dolor sit amet</p>
                   <Button variant="light">Buy more</Button>
                 </div>
              </Col>
            </Row>
       </div>
    )
  
  }
export default BannerCollection;
