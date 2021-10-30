import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ShapeIcon1 } from '../../../img/svg/shape1.svg';
import { ReactComponent as ListImgA } from '../../../img/svg/YourCollection/listimg-A.svg';
import { ReactComponent as ListImgB } from '../../../img/svg/YourCollection/listimg-B.svg';
import { ReactComponent as ListImgC } from '../../../img/svg/YourCollection/listimg-C.svg';
import { ReactComponent as ListImgD } from '../../../img/svg/YourCollection/listimg-C.svg';
import { ReactComponent as ClickIcon } from '../../../img/svg/clickIcon.svg';
import Slider from "react-slick";


function StandardBucks()  {  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }; 

  return (
       <div className="standard-bucks p-lg-5 p-3 mt-5 ">
           <h2><ShapeIcon1 /> Standard bucks in bundle <span>(5)</span></h2>
           <div className="slider-bundle mt-lg-5 mt-4">
           <Slider {...settings}>
                        <div>
                          <div className="collections-box">
                             <div className="collections-img position-relative">
                               {/* img */}
                               <ListImgA />
                                {/* Hover Link */}
                                <div className="img-hover-click position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center text-center align-items-center">
                                    <Link to="/BuckDetail">
                                      <ClickIcon />
                                      <p>Click for buck details</p>
                                    </Link>
                                </div>
                             </div>
                          </div>
                        </div>
                        <div>
                          <div className="collections-box">
                             <div className="collections-img position-relative">
                               {/* img */}
                             <ListImgB />
                              {/* Hover Link */}
                              <div className="img-hover-click position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center text-center align-items-center">
                                  <Link to="/BuckDetail">
                                    <ClickIcon />
                                    <p>Click for buck details</p>
                                  </Link>
                              </div>
                             </div>
                          </div>
                        </div>
                        <div>
                          <div className="collections-box">
                             <div className="collections-img position-relative">
                               {/* img */}
                                <ListImgC />
                                 {/* Hover Link */}
                                  <div className="img-hover-click position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center text-center align-items-center">
                                      <Link to="/BuckDetail">
                                        <ClickIcon />
                                        <p>Click for buck details</p>
                                      </Link>
                                  </div>
                             </div>
                          </div>
                        </div>
                        <div>
                          <div className="collections-box">
                             <div className="collections-img position-relative">
                                {/* img */}
                                <ListImgD />
                                 {/* Hover Link */}
                                <div className="img-hover-click position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center text-center align-items-center">
                                    <Link to="/BuckDetail">
                                      <ClickIcon />
                                      <p>Click for buck details</p>
                                    </Link>
                                </div>
                             </div>
                          </div>
                        </div>
                      </Slider>
               </div>
       </div>
    )
  
  }
export default StandardBucks;
