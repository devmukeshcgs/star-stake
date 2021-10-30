import React from 'react';
import {Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import  CollectionsImg1  from '../../../img/CollectionsImg/CollectionsImg1.png';
import { ReactComponent as StarstakeIcon } from '../../../img/CollectionsImg/starstakeIcon.svg';
import { ReactComponent as LimitedIcon } from '../../../img/CollectionsImg/LimitedIcon.svg';
import { ReactComponent as StarIcon } from '../../../img/CollectionsImg/starIcon.svg';
import { ReactComponent as CardListIcon } from '../../../img/svg/CardListIcon.svg';
import { ReactComponent as LimitedIcons } from '../../../img/svg/limitedIcon.svg';

function CollectionsList()  {  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
       <div className="collections-list p-lg-5 px-3 py-5">
             <h3>Collections</h3>
             <div className="mt-4">
             <Tab.Container id="left-tabs-example" defaultActiveKey="1st-Founders-Edition">
             <Nav variant="pills" className="pb-3">
                  <Nav.Item>
                    <Nav.Link eventKey="1st-Founders-Edition">
                       1st Founders edition
                      </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Old-Founders-Ed" >
                       Old founders ed..
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Music-Edition">
                      Music edition
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="All">
                       All
                     </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content className="mt-lg-0 mt-lg-5 mt-2">
                  <Tab.Pane eventKey="1st-Founders-Edition">
                     <Slider {...settings}>
                        <div>
                          <div className="collections-box">
                             <div className="collections-img">
                               <img src={ CollectionsImg1 } alt="" />
                             </div>
                             <div className="collection-text mt-3 text-white">
                             <div className="d-flex justify-content-between">
                                {/* logo */}
                                <div className="logo-list d-flex align-items-center justify-content-center">
                                   <StarstakeIcon />
                                </div>
                                {/* total list */}
                                <div className="total-list">
                                  <CardListIcon className="me-2" /> 21
                                </div>
                              </div>
                              <h6 className="my-3">NBA Founders edition collection</h6>
                              <div className="action-collection mb-3">
                                 <Link className="view-Collection-btn " to="/FoundersCollection">View Collection</Link>
                              </div>
                             </div>
                          </div>
                        </div>
                        <div>
                          <div className="collections-box">
                             <div className="collections-img position-relative">
                               <img src={ CollectionsImg1 } alt="" />
                               <div className="collections-hover position-absolute top-0 start-0 bottom-0 end-0 px-5 pt-4">
                                    <div className="d-flex">
                                      <div>
                                          <LimitedIcons />
                                      </div>
                                    <div className="text-bundle ms-2 text-white">
                                      <h6>Expires on 10/2/2022</h6>
                                    </div>
                                    </div>
                                  </div>
                             </div>
                             <div className="collection-text mt-3 text-white">
                             <div className="d-flex justify-content-between">
                                {/* logo */}
                                <div className="logo-list d-flex align-items-center justify-content-center">
                                   <LimitedIcon />
                                </div>
                                {/* total list */}
                                <div className="total-list">
                                <CardListIcon className="me-2" /> 21
                                </div>
                              </div>
                              <h6 className="my-3">NBA Founders edition collection</h6>
                              <div className="action-collection mb-3">
                                 <Link className="view-Collection-btn" to="/FoundersCollection">View Collection</Link>
                              </div>
                             </div>
                          </div>
                        </div>
                        <div>
                          <div className="collections-box">
                             <div className="collections-img ">
                               <img src={ CollectionsImg1 } alt="" />
                             </div>
                             <div className="collection-text mt-3 text-white">
                             <div className="d-flex justify-content-between">
                                {/* logo */}
                                <div className="logo-list d-flex align-items-center justify-content-center">
                                   <StarIcon />
                                </div>
                                {/* total list */}
                                <div className="total-list">
                                <CardListIcon className="me-2" /> 21
                                </div>
                              </div>
                              <h6 className="my-3">Stan Lee Founders collection</h6>
                              <div className="action-collection mb-3">
                                 <Link className="view-Collection-btn" to="/FoundersCollection">View Collection</Link>
                              </div>
                             </div>
                          </div>
                        </div>
                        <div>
                          <div className="collections-box">
                             <div className="collections-img">
                               <img src={ CollectionsImg1 } alt="" />
                             </div>
                             <div className="collection-text mt-3 text-white">
                             <div className="d-flex justify-content-between">
                                {/* logo */}
                                <div className="logo-list d-flex align-items-center justify-content-center">
                                   <StarstakeIcon />
                                </div>
                                {/* total list */}
                                <div className="total-list">
                                <CardListIcon className="me-2" /> 21
                                </div>
                              </div>
                              <h6 className="my-3">Steve jobs founders collection</h6>
                              <div className="action-collection mb-3">
                                 <Link className="view-Collection-btn" to="/FoundersCollection">View Collection</Link>
                              </div>
                             </div>
                          </div>
                        </div>
                        <div>
                          <div className="collections-box">
                             <div className="collections-img">
                               <img src={ CollectionsImg1 } alt="" />
                             </div>
                             <div className="collection-text mt-3 text-white">
                             <div className="d-flex justify-content-between">
                                {/* logo */}
                                <div className="logo-list d-flex align-items-center justify-content-center">
                                   <StarstakeIcon />
                                </div>
                                {/* total list */}
                                <div className="total-list">
                                  <CardListIcon className="me-2" /> 21
                                </div>
                              </div>
                              <h6 className="my-3">NBA Founders edition collection</h6>
                              <div className="action-collection mb-3">
                                 <Link className="view-Collection-btn " to="/FoundersCollection">View Collection</Link>
                              </div>
                             </div>
                          </div>
                        </div>
                      </Slider>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Old-Founders-Ed">
                  <Slider {...settings}>
                        <div>
                          <div className="collections-box">
                             <div className="collections-img">
                               <img src={ CollectionsImg1 } alt="" />
                             </div>
                             <div className="collection-text mt-3 text-white">
                             <div className="d-flex justify-content-between">
                                {/* logo */}
                                <div className="logo-list d-flex align-items-center justify-content-center">
                                   <StarstakeIcon />
                                </div>
                                {/* total list */}
                                <div className="total-list">
                                  <CardListIcon className="me-2" /> 21
                                </div>
                              </div>
                              <h6 className="my-3">NBA Founders edition collection</h6>
                              <div className="action-collection mb-3">
                                 <Link className="view-Collection-btn" to="/FoundersCollection">View Collection</Link>
                              </div>
                             </div>
                          </div>
                        </div>
                        <div>
                          <div className="collections-box">
                             <div className="collections-img position-relative">
                               <img src={ CollectionsImg1 } alt="" />
                               <div className="collections-hover position-absolute top-0 start-0 bottom-0 end-0 px-5 pt-4">
                                    <div className="d-flex">
                                      <div>
                                          <LimitedIcons />
                                      </div>
                                    <div className="text-bundle ms-2 text-white">
                                      <h6>Expires on 10/2/2022</h6>
                                    </div>
                                    </div>
                                  </div>
                             </div>
                             <div className="collection-text mt-3 text-white">
                             <div className="d-flex justify-content-between">
                                {/* logo */}
                                <div className="logo-list d-flex align-items-center justify-content-center">
                                   <LimitedIcon />
                                </div>
                                {/* total list */}
                                <div className="total-list">
                                <CardListIcon className="me-2" /> 21
                                </div>
                              </div>
                              <h6 className="my-3">NBA Founders edition collection</h6>
                              <div className="action-collection mb-3">
                                 <Link className="view-Collection-btn" to="/FoundersCollection">View Collection</Link>
                              </div>
                             </div>
                          </div>
                        </div>
                        <div>
                          <div className="collections-box">
                             <div className="collections-img">
                               <img src={ CollectionsImg1 } alt="" />
                             </div>
                             <div className="collection-text mt-3 text-white">
                             <div className="d-flex justify-content-between">
                                {/* logo */}
                                <div className="logo-list d-flex align-items-center justify-content-center">
                                   <StarIcon />
                                </div>
                                {/* total list */}
                                <div className="total-list">
                                <CardListIcon className="me-2" /> 21
                                </div>
                              </div>
                              <h6 className="my-3">Stan Lee Founders collection</h6>
                              <div className="action-collection mb-3">
                                 <Link className="view-Collection-btn" to="/FoundersCollection">View Collection</Link>
                              </div>
                             </div>
                          </div>
                        </div>
                        <div>
                          <div className="collections-box">
                             <div className="collections-img">
                               <img src={ CollectionsImg1 } alt="" />
                             </div>
                             <div className="collection-text mt-3 text-white">
                             <div className="d-flex justify-content-between">
                                {/* logo */}
                                <div className="logo-list d-flex align-items-center justify-content-center">
                                   <StarstakeIcon />
                                </div>
                                {/* total list */}
                                <div className="total-list">
                                <CardListIcon className="me-2" /> 21
                                </div>
                              </div>
                              <h6 className="my-3">Steve jobs founders collection</h6>
                              <div className="action-collection mb-3">
                                 <Link className="view-Collection-btn" to="/FoundersCollection">View Collection</Link>
                              </div>
                             </div>
                          </div>
                        </div>
                        <div>
                          <div className="collections-box">
                             <div className="collections-img">
                               <img src={ CollectionsImg1 } alt="" />
                             </div>
                             <div className="collection-text mt-3 text-white">
                             <div className="d-flex justify-content-between">
                                {/* logo */}
                                <div className="logo-list d-flex align-items-center justify-content-center">
                                   <StarstakeIcon />
                                </div>
                                {/* total list */}
                                <div className="total-list">
                                  <CardListIcon className="me-2" /> 21
                                </div>
                              </div>
                              <h6 className="my-3">NBA Founders edition collection</h6>
                              <div className="action-collection mb-3">
                                 <Link className="view-Collection-btn " to="/FoundersCollection">View Collection</Link>
                              </div>
                             </div>
                          </div>
                        </div>
                      </Slider>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Music-Edition">
                  <Slider {...settings}>
                        <div>
                          <div className="collections-box">
                             <div className="collections-img">
                               <img src={ CollectionsImg1 } alt="" />
                             </div>
                             <div className="collection-text mt-3 text-white">
                             <div className="d-flex justify-content-between">
                                {/* logo */}
                                <div className="logo-list d-flex align-items-center justify-content-center">
                                   <StarstakeIcon />
                                </div>
                                {/* total list */}
                                <div className="total-list">
                                  <CardListIcon className="me-2" /> 21
                                </div>
                              </div>
                              <h6 className="my-3">NBA Founders edition collection</h6>
                              <div className="action-collection mb-3">
                                <Link className="view-Collection-btn" to="/FoundersCollection">View Collection</Link>
                              </div>
                             </div>
                          </div>
                        </div>
                        <div>
                          <div className="collections-box">
                             <div className="collections-img position-relative">
                               <img src={ CollectionsImg1 } alt="" />
                               <div className="collections-hover position-absolute top-0 start-0 bottom-0 end-0 px-5 pt-4">
                                    <div className="d-flex">
                                      <div>
                                          <LimitedIcons />
                                      </div>
                                    <div className="text-bundle ms-2 text-white">
                                      <h6>Expires on 10/2/2022</h6>
                                    </div>
                                    </div>
                                  </div>
                             </div>
                             <div className="collection-text mt-3 text-white">
                             <div className="d-flex justify-content-between">
                                {/* logo */}
                                <div className="logo-list d-flex align-items-center justify-content-center">
                                   <LimitedIcon />
                                </div>
                                {/* total list */}
                                <div className="total-list">
                                <CardListIcon className="me-2" /> 21
                                </div>
                              </div>
                              <h6 className="my-3">NBA Founders edition collection</h6>
                              <div className="action-collection mb-3">
                                 <Link className="view-Collection-btn" to="/FoundersCollection">View Collection</Link>
                              </div>
                             </div>
                          </div>
                        </div>
                        <div>
                          <div className="collections-box">
                             <div className="collections-img">
                               <img src={ CollectionsImg1 } alt="" />
                             </div>
                             <div className="collection-text mt-3 text-white">
                             <div className="d-flex justify-content-between">
                                {/* logo */}
                                <div className="logo-list d-flex align-items-center justify-content-center">
                                   <StarIcon />
                                </div>
                                {/* total list */}
                                <div className="total-list">
                                <CardListIcon className="me-2" /> 21
                                </div>
                              </div>
                              <h6 className="my-3">Stan Lee Founders collection</h6>
                              <div className="action-collection mb-3">
                                 <Link className="view-Collection-btn" to="/FoundersCollection">View Collection</Link>
                              </div>
                             </div>
                          </div>
                        </div>
                        <div>
                          <div className="collections-box">
                             <div className="collections-img">
                               <img src={ CollectionsImg1 } alt="" />
                             </div>
                             <div className="collection-text mt-3 text-white">
                             <div className="d-flex justify-content-between">
                                {/* logo */}
                                <div className="logo-list d-flex align-items-center justify-content-center">
                                   <StarstakeIcon />
                                </div>
                                {/* total list */}
                                <div className="total-list">
                                <CardListIcon className="me-2" /> 21
                                </div>
                              </div>
                              <h6 className="my-3">Steve jobs founders collection</h6>
                              <div className="action-collection mb-3">
                                 <Link className="view-Collection-btn" to="/FoundersCollection">View Collection</Link>
                              </div>
                             </div>
                          </div>
                        </div>
                      </Slider>
                  </Tab.Pane>
                  <Tab.Pane eventKey="All">
                  <Slider {...settings}>
                        <div>
                          <div className="collections-box">
                             <div className="collections-img">
                               <img src={ CollectionsImg1 } alt="" />
                             </div>
                             <div className="collection-text mt-3 text-white">
                             <div className="d-flex justify-content-between">
                                {/* logo */}
                                <div className="logo-list d-flex align-items-center justify-content-center">
                                   <StarstakeIcon />
                                </div>
                                {/* total list */}
                                <div className="total-list">
                                  <CardListIcon className="me-2" /> 21
                                </div>
                              </div>
                              <h6 className="my-3">NBA Founders edition collection</h6>
                              <div className="action-collection mb-3">
                                 <Link className="view-Collection-btn" to="/FoundersCollection">View Collection</Link>
                              </div>
                             </div>
                          </div>
                        </div>
                        <div>
                          <div className="collections-box">
                             <div className="collections-img position-relative">
                               <img src={ CollectionsImg1 } alt="" />
                               <div className="collections-hover position-absolute top-0 start-0 bottom-0 end-0 px-5 pt-4">
                                    <div className="d-flex">
                                      <div>
                                          <LimitedIcons />
                                      </div>
                                    <div className="text-bundle ms-2 text-white">
                                      <h6>Expires on 10/2/2022</h6>
                                    </div>
                                    </div>
                                  </div>
                             </div>
                             <div className="collection-text mt-3 text-white">
                             <div className="d-flex justify-content-between">
                                {/* logo */}
                                <div className="logo-list d-flex align-items-center justify-content-center">
                                   <LimitedIcon />
                                </div>
                                {/* total list */}
                                <div className="total-list">
                                <CardListIcon className="me-2" /> 21
                                </div>
                              </div>
                              <h6 className="my-3">NBA Founders edition collection</h6>
                              <div className="action-collection mb-3">
                                  <Link className="view-Collection-btn" to="/FoundersCollection">View Collection</Link>
                              </div>
                             </div>
                          </div>
                        </div>
                        <div>
                          <div className="collections-box">
                             <div className="collections-img">
                               <img src={ CollectionsImg1 } alt="" />
                             </div>
                             <div className="collection-text mt-3 text-white">
                             <div className="d-flex justify-content-between">
                                {/* logo */}
                                <div className="logo-list d-flex align-items-center justify-content-center">
                                   <StarIcon />
                                </div>
                                {/* total list */}
                                <div className="total-list">
                                <CardListIcon className="me-2" /> 21
                                </div>
                              </div>
                              <h6 className="my-3">Stan Lee Founders collection</h6>
                              <div className="action-collection mb-3">
                                 <Link className="view-Collection-btn" to="/FoundersCollection">View Collection</Link>
                              </div>
                             </div>
                          </div>
                        </div>
                        <div>
                          <div className="collections-box">
                             <div className="collections-img">
                               <img src={ CollectionsImg1 } alt="" />
                             </div>
                             <div className="collection-text mt-3 text-white">
                             <div className="d-flex justify-content-between">
                                {/* logo */}
                                <div className="logo-list d-flex align-items-center justify-content-center">
                                   <StarstakeIcon />
                                </div>
                                {/* total list */}
                                <div className="total-list">
                                  <CardListIcon className="me-2" /> 21
                                </div>
                              </div>
                              <h6 className="my-3">Steve jobs founders collection</h6>
                              <div className="action-collection mb-3">
                                 <Link className="view-Collection-btn" to="/FoundersCollection">View Collection</Link>
                              </div>
                             </div>
                          </div>
                        </div>
                      </Slider>
                  </Tab.Pane>
                </Tab.Content>
                </Tab.Container>
             </div>
       </div>
    )
  
  }
export default CollectionsList;
