import React from 'react';
import Button  from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { ReactComponent as ListImg1 } from '../../../img/svg/NFTbucksList/cards1.svg';
import { ReactComponent as ListImg2 } from '../../../img/svg/NFTbucksList/cards2.svg';
import { ReactComponent as ListImg3 } from '../../../img/svg/NFTbucksList/cards3.svg';
import { ReactComponent as ListImg4 } from '../../../img/svg/NFTbucksList/cards4.svg';
import { ReactComponent as ListImg5 } from '../../../img/svg/NFTbucksList/cards5.svg';
import { ReactComponent as ClickIcon } from '../../../img/svg/clickIcon.svg';
function CardList()  {  

  return (
       <div className="Essentials-list">
             <div className="d-flex justify-content-between mob-wrap px-lg-5 px-2">
               <div className="collection-list-box mb-4">
                   {/* Img List */}
                   <div className="img-collection position-relative">
                       {/* Img */}
                        <ListImg1 />
                        {/* Hover Link */}
                       <div className="img-hover-click position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center text-center align-items-center">
                          <Link to="/BuckDetail">
                            <ClickIcon />
                            <p>Click for buck details</p>
                          </Link>
                       </div>
                   </div>
                   {/* Text-List */}
                   <div className="collection-text pt-3">
                   <div className="d-flex justify-content-between">
                        {/* Price */}
                        <div className="price d-flex align-items-center justify-content-center">
                          $10
                        </div>
                        {/* Add to cart */}
                        <div className="qty">
                          <Button className="p-0 add-cart-btn">Add to cart</Button>
                        </div>
                      </div>
                   </div>
                 </div>
                 <div className="collection-list-box mb-4">
                   {/* Img List */}
                   <div className="img-collection position-relative">
                       {/* Img */}
                       <ListImg2 />
                        {/* Hover Link */}
                        <div className="img-hover-click position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center text-center align-items-center">
                          <Link to="/BuckDetail">
                            <ClickIcon />
                            <p>Click for buck details</p>
                          </Link>
                       </div>
                   </div>
                   {/* Text-List */}
                   <div className="collection-text pt-3">
                      <div className="d-flex justify-content-between">
                        {/* Price */}
                        <div className="price d-flex align-items-center justify-content-center">
                          $10
                        </div>
                        {/* Add to cart */}
                        <div className="qty">
                          <Button className="p-0 add-cart-btn">Add to cart</Button>
                        </div>
                      </div>
                   </div>
                 </div>
                 <div className="collection-list-box mb-4">
                   {/* Img List */}
                   <div className="img-collection position-relative">
                       {/* Img */}
                       <ListImg3 />
                        {/* Hover Link */}
                        <div className="img-hover-click position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center text-center align-items-center">
                          <Link to="/BuckDetail">
                            <ClickIcon />
                            <p>Click for buck details</p>
                          </Link>
                       </div>
                   </div>
                   {/* Text-List */}
                   <div className="collection-text pt-3">
                      <div className="d-flex justify-content-between">
                        {/* Price */}
                        <div className="price d-flex align-items-center justify-content-center">
                          $10
                        </div>
                        {/* Add to cart */}
                        <div className="qty">
                          <Button className="p-0 add-cart-btn">Add to cart</Button>
                        </div>
                      </div>
                   </div>
                 </div>
                 <div className="collection-list-box mb-4">
                   {/* Img List */}
                   <div className="img-collection position-relative">
                       {/* Img */}
                       <ListImg4 />
                        {/* Hover Link */}
                        <div className="img-hover-click position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center text-center align-items-center">
                          <Link to="/BuckDetail">
                            <ClickIcon />
                            <p>Click for buck details</p>
                          </Link>
                       </div>
                   </div>
                   {/* Text-List */}
                   <div className="collection-text pt-3">
                      <div className="d-flex justify-content-between">
                        {/* Price */}
                        <div className="price d-flex align-items-center justify-content-center">
                          $10
                        </div>
                        {/* Add to cart */}
                        <div className="qty">
                          <Button className="p-0 add-cart-btn">Add to cart</Button>
                        </div>
                      </div>
                   </div>
                 </div>
                 <div className="collection-list-box mb-4">
                   {/* Img List */}
                   <div className="img-collection position-relative">
                       {/* Img */}
                       <ListImg5 />
                        {/* Hover Link */}
                        <div className="img-hover-click position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center text-center align-items-center">
                          <Link to="/BuckDetail">
                            <ClickIcon />
                            <p>Click for buck details</p>
                          </Link>
                       </div>
                   </div>
                   {/* Text-List */}
                   <div className="collection-text pt-3">
                      <div className="d-flex justify-content-between">
                        {/* Price */}
                        <div className="price d-flex align-items-center justify-content-center">
                          $10
                        </div>
                        {/* Add to cart */}
                        <div className="qty">
                          <Button className="p-0 add-cart-btn">Add to cart</Button>
                        </div>
                      </div>
                   </div>
                 </div>
                 <div className="collection-list-box mb-4 lg-screen">
                   {/* Img List */}
                   <div className="img-collection position-relative">
                       {/* Img */}
                        <ListImg1 />
                        {/* Hover Link */}
                       <div className="img-hover-click position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center text-center align-items-center">
                          <Link to="/BuckDetail">
                            <ClickIcon />
                            <p>Click for buck details</p>
                          </Link>
                       </div>
                   </div>
                   {/* Text-List */}
                   <div className="collection-text pt-3">
                   <div className="d-flex justify-content-between">
                        {/* Price */}
                        <div className="price d-flex align-items-center justify-content-center">
                          $10
                        </div>
                        {/* Add to cart */}
                        <div className="qty">
                          <Button className="p-0 add-cart-btn">Add to cart</Button>
                        </div>
                      </div>
                   </div>
                 </div>
                 <div className="collection-list-box mb-4 lxx-screen">
                   {/* Img List */}
                   <div className="img-collection position-relative">
                       {/* Img */}
                       <ListImg5 />
                        {/* Hover Link */}
                        <div className="img-hover-click position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center text-center align-items-center">
                          <Link to="/BuckDetail">
                            <ClickIcon />
                            <p>Click for buck details</p>
                          </Link>
                       </div>
                   </div>
                   {/* Text-List */}
                   <div className="collection-text pt-3">
                      <div className="d-flex justify-content-between">
                        {/* Price */}
                        <div className="price d-flex align-items-center justify-content-center">
                          $10
                        </div>
                        {/* Add to cart */}
                        <div className="qty">
                          <Button className="p-0 add-cart-btn">Add to cart</Button>
                        </div>
                      </div>
                   </div>
                 </div>
              </div>
       </div>
    )
  
  }
export default CardList;
