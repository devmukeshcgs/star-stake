import React from 'react';
import Button from 'react-bootstrap/Button';
import { ReactComponent as HassleImgShadow } from '../../img/svg/hassle-img-shadow.svg';

function HassleSection() {


  return (
    <div className="hassle-section py-5">
      <div className="container py-lg-5 py-0">
        <div className="row pt-4">
          {/* heading */}
          <div className="col-12 heading text-center">
            <h1>Crypto doesn’t need to be a hassle</h1>
            <p>NFT Bucks make using crypto like reaching into your pocket and handing <br className="mob-br" />someone a $100 Benjamin</p>
          </div>
          <div className="text-center mt-3">
            {/* list link li */}
            <ul className="d-flex p-0 m-0 justify-content-center">
              <li>
                Visual
              </li>
              <li>
                Valuable
              </li>
              <li>
                Collectable
              </li>
            </ul>
          </div>
          {/* img */}
          <div className="hassle-img-box text-center py-4 position-relative wow slideInUp">
            <div className="position-relative z-index-1">
              <img src="https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/hassle-img.png" />

              {/* <HassleImg /> */}
            </div>
            {/* shadow shape */}
            <div className="shadow-hassle-img position-absolute">
              <HassleImgShadow />
            </div>
          </div>
          {/* action */}
          <div className="text-center  z-index-1 position-relative">
            <Button variant="primary">Check out new designs</Button>
          </div>
        </div>
      </div>
    </div>
  )

}
export default HassleSection;
