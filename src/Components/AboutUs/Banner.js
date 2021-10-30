import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import ModalVideo from 'react-modal-video'
import { ReactComponent as VideoPlayIcon } from '../../img/svg/play-icon-A.svg';
import { ReactComponent as ShapeBg } from '../../img/svg/shape-banner-bg-A.svg';
import { ReactComponent as ShadowShape } from '../../img/svg/Shadow-shape-video.svg';

function Banner() {

  const [isOpen, setOpen] = useState(false)

  return (
    <div className="Banner align-items-center position-relative overflow-hidden wow slideInUp" >
      <div className="container py-5 position-relative">
        <div className="py-md-5 py-0 mt-5">
          <div className=" py-lg-5 py-0 d-flex justify-content-end position-relative z-index-1 mob-banner-a">
            {/* text  */}
            <div className="mob-banner-b text-banner-A align-items-center d-flex position-absolute top-0 start-0 bottom-0 end-auto z-index-1">
              <div>
                <h1 className="text-white mb-lg-5 mb-4">A New Visual Way To Buy and Sell Online.</h1>
                <Button variant="outline-primary">Get NFT Bucks</Button>
              </div>
            </div>
            {/*end  text  */}
            {/* video box */}
            <div className="video-box-A position-relative mt-lg-0 mt-5">
              {/* <VideoImg /> */}
              <img src="https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/hero-img.png" />
              {/* video icon */}
              <div className="video-icon-A position-absolute  justify-content-center d-flex align-items-center top-0 start-0 bottom-0 end-0">
                <Nav.Link onClick={() => setOpen(true)} className="position-relative">
                  <VideoPlayIcon className="position-relative z-index-1" />
                </Nav.Link>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="RCFucPefx_A" onClose={() => setOpen(false)} />
              </div>
              {/* end video icon */}
            </div>
            {/*end  video box */}
          </div>
        </div>
        {/* bg shadow */}
        <div className="bg-shadow-video position-absolute top-0 overflow-hidden">
          <ShadowShape />
        </div>
      </div>
      {/* bg shape */}
      <div className="shape-banner-bg position-absolute  start-0 overflow-hidden">
        <ShapeBg />
      </div>
    </div>
  )

}
export default Banner;
