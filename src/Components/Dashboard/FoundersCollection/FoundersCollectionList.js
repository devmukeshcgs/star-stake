import React from 'react';
import { Link } from 'react-router-dom';
import Button  from 'react-bootstrap/Button';
import { ReactComponent as ListImgA } from '../../../img/svg/YourCollection/listimg-A.svg';
import { ReactComponent as ListImgB } from '../../../img/svg/YourCollection/listimg-B.svg';
import { ReactComponent as ListImgC } from '../../../img/svg/YourCollection/listimg-C.svg';
import { ReactComponent as ListImgD } from '../../../img/svg/YourCollection/listimg-D.svg';
import { ReactComponent as ClickIcon } from '../../../img/svg/clickIcon.svg';
import { ReactComponent as ShapeIcon1 } from '../../../img/svg/shape1.svg';
import { ReactComponent as ShapeIcon2 } from '../../../img/svg/shape2.svg';
import { ReactComponent as ShapeIcon3 } from '../../../img/svg/shape3.svg';

function FoundersCollectionList()  {  

  return (
   <div className="collection-list pt-3 founderscollectionlist px-lg-4">
   <div className="d-flex justify-content-between flex-wrap mob-wrap">
          <div className="collection-list-box mb-5">
            {/* Img List */}
            <div className="img-collection position-relative">
                {/* Img */}
                <ListImgA />
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
               <div className="name-br mb-3">
                  <ShapeIcon3 className="me-2" /> Rare
               </div>
                {/* Name */}
               <h5>Thomas edison bucks Founders edition</h5>
               <hr />
               <div className="d-flex justify-content-between">
                     {/* Price */}
                     <div className="price">
                        $10
                      </div>
                     {/* Add to cart */}
                     <div className="qty">
                         <Button className="p-0 add-cart-btn">Add to cart</Button>
                     </div>
                 </div>
            </div>
          </div>
          <div className="collection-list-box mb-5">
            {/* Img List */}
            <div className="img-collection position-relative">
                {/* Img */}
                <ListImgB />
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
               <div className="name-br mb-3">
                  <ShapeIcon2 className="me-2" /> Collectable
               </div>
                {/* Name */}
               <h5>Thomas edison bucks Founders edition</h5>
               <hr />
               <div className="d-flex justify-content-between">
                     {/* Price */}
                     <div className="price ">
                        $10
                      </div>
                     {/* Add to cart */}
                     <div className="qty">
                         <Button className="p-0 add-cart-btn">Add to cart</Button>
                     </div>
                 </div>
            </div>
          </div>
          <div className="collection-list-box mb-5">
            {/* Img List */}
            <div className="img-collection position-relative">
                {/* Img */}
                <ListImgC />
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
               <div className="name-br mb-3">
                  <ShapeIcon1 className="me-2" /> Standard
               </div>
                {/* Name */}
               <h5>Thomas edison bucks Founders edition</h5>
               <hr />
               <div className="d-flex justify-content-between">
                     {/* Price */}
                     <div className="price ">
                        $10
                      </div>
                     {/* Add to cart */}
                     <div className="qty">
                         <Button className="p-0 add-cart-btn">Add to cart</Button>
                     </div>
                 </div>
            </div>
          </div>
          <div className="collection-list-box mb-5">
            {/* Img List */}
            <div className="img-collection position-relative">
                {/* Img */}
                <ListImgD />
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
               <div className="name-br mb-3">
               <ShapeIcon2 className="me-2" /> Collectable
               </div>
                {/* Name */}
               <h5>Thomas edison bucks Founders edition</h5>
               <hr />
               <div className="d-flex justify-content-between">
                     {/* Price */}
                     <div className="price">
                        $10
                      </div>
                     {/* Add to cart */}
                     <div className="qty">
                         <Button className="p-0 add-cart-btn">Add to cart</Button>
                     </div>
                 </div>
            </div>
          </div>
          <div className="collection-list-box mb-5">
            {/* Img List */}
            <div className="img-collection position-relative">
                {/* Img */}
                <ListImgA />
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
               <div className="name-br mb-3">
                  <ShapeIcon3 className="me-2" /> Rare
               </div>
                {/* Name */}
               <h5>Thomas edison bucks Founders edition</h5>
               <hr />
               <div className="d-flex justify-content-between">
                     {/* Price */}
                     <div className="price">
                        $10
                      </div>
                     {/* Add to cart */}
                     <div className="qty">
                         <Button className="p-0 add-cart-btn">Add to cart</Button>
                     </div>
                 </div>
            </div>
          </div>
          <div className="collection-list-box mb-5">
            {/* Img List */}
            <div className="img-collection position-relative">
                {/* Img */}
                <ListImgB />
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
               <div className="name-br mb-3">
                  <ShapeIcon2 className="me-2" /> Collectable
               </div>
                {/* Name */}
               <h5>Thomas edison bucks Founders edition</h5>
               <hr />
               <div className="d-flex justify-content-between">
                     {/* Price */}
                     <div className="price ">
                        $10
                      </div>
                     {/* Add to cart */}
                     <div className="qty">
                         <Button className="p-0 add-cart-btn">Add to cart</Button>
                     </div>
                 </div>
            </div>
          </div>
          <div className="collection-list-box mb-5">
            {/* Img List */}
            <div className="img-collection position-relative">
                {/* Img */}
                <ListImgC />
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
               <div className="name-br mb-3">
                  <ShapeIcon1 className="me-2" /> Standard
               </div>
                {/* Name */}
               <h5>Thomas edison bucks Founders edition</h5>
               <hr />
               <div className="d-flex justify-content-between">
                     {/* Price */}
                     <div className="price ">
                        $10
                      </div>
                     {/* Add to cart */}
                     <div className="qty">
                         <Button className="p-0 add-cart-btn">Add to cart</Button>
                     </div>
                 </div>
            </div>
          </div>
          <div className="collection-list-box mb-5">
            {/* Img List */}
            <div className="img-collection position-relative">
                {/* Img */}
                <ListImgD />
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
               <div className="name-br mb-3">
               <ShapeIcon2 className="me-2" /> Collectable
               </div>
                {/* Name */}
               <h5>Thomas edison bucks Founders edition</h5>
               <hr />
               <div className="d-flex justify-content-between">
                     {/* Price */}
                     <div className="price">
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
export default FoundersCollectionList;
