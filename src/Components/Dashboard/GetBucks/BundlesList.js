import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BundlesImg1 } from '../../../img/svg/BundlesImg/BundlesImg1.svg';
import { ReactComponent as BundlesImg2 } from '../../../img/svg/BundlesImg/BundlesImg2.svg';
import { ReactComponent as BundlesImg3 } from '../../../img/svg/BundlesImg/BundlesImg3.svg';
import { ReactComponent as BundlesImg4 } from '../../../img/svg/BundlesImg/BundlesImg4.svg';
import { ReactComponent as ShapeIcon1 } from '../../../img/svg/shape1.svg';
import { ReactComponent as ShapeIcon2 } from '../../../img/svg/shape2.svg';
import { ReactComponent as ShapeIcon3 } from '../../../img/svg/shape3.svg';
import { ReactComponent as BucksIcon } from '../../../img/svg/bucksIcon.svg';
import { ReactComponent as CardListWhiteIcon } from '../../../img/svg/CardListWhiteIcon.svg';


function BundlesList()  {  

  return (
       <div className="bundles-list px-lg-5 px-3">
             <h3 className="mb-4">Bundles</h3>
             <div className="d-flex justify-content-between mob-wrap">
               <div className="collection-list-box mb-4">
                   {/* Img List */}
                   <div className="img-collection position-relative">
                       {/* Img */}
                        <BundlesImg1 className="img-svg" />
                   </div>
                   {/* Text-List */}
                   <div className="collection-text pt-3">
                   <div className="d-flex justify-content-between">
                        {/* Price */}
                        <div className="price d-flex align-items-center justify-content-center">
                          $2262
                        </div>
                        <div className="shape-Icon d-flex">
                            <ShapeIcon1 />
                            <ShapeIcon2 className="mx-2" />
                            <ShapeIcon3 />
                        </div>
                      </div>
                      <h6 className="my-3">StarStake Founders Complete collection</h6>
                        {/* Action bundle  */}
                        <div className="action-bundle">
                          <Link className="view-bundle-btn" to="/BundleDetails">View bundle</Link>
                        </div>
                   </div>
                 </div>
                 <div className="collection-list-box mb-4">
                   {/* Img List */}
                   <div className="img-collection position-relative">
                       {/* Img */}
                       <BundlesImg2 className="img-svg" />
                       {/* open hover */}
                       <div className="bundles-hover position-absolute top-0 start-0 bottom-0 end-0 p-3">
                         <div className="d-flex">
                           <div>
                              <BucksIcon />
                           </div>
                         <div className="text-bundle ms-2 text-white">
                           <h6>Includes rare bucks</h6>
                            <CardListWhiteIcon className="me-2 mb-1" /> 6
                         </div>
                         </div>
                       </div>
                   </div>
                   {/* Text-List */}
                   <div className="collection-text pt-3">
                   <div className="d-flex justify-content-between">
                        {/* Price */}
                        <div className="price d-flex align-items-center justify-content-center">
                           $1131
                        </div>
                        <div className="shape-Icon d-flex">
                            <ShapeIcon1 />
                        </div>
                      </div>
                      <h6 className="my-3">StarStake Founders Standard Collection</h6>
                        {/* Action bundle  */}
                        <div className="action-bundle">
                          <Link className="view-bundle-btn" to="/BundleDetails">View bundle</Link>
                        </div>
                   </div>
                 </div>
                 <div className="collection-list-box mb-4">
                   {/* Img List */}
                   <div className="img-collection position-relative">
                       {/* Img */}
                       <BundlesImg3 className="img-svg" />
                         {/* open hover */}
                         <div className="bundles-hover position-absolute top-0 start-0 bottom-0 end-0 p-3">
                         <div className="d-flex">
                           <div>
                              <BucksIcon />
                           </div>
                         <div className="text-bundle ms-2 text-white">
                           <h6>Includes collectable bucks</h6>
                            <CardListWhiteIcon className="me-2 mb-1" /> 5
                         </div>
                         </div>
                       </div>
                   </div>
                    {/* Text-List */}
                    <div className="collection-text pt-3">
                   <div className="d-flex justify-content-between">
                        {/* Price */}
                        <div className="price d-flex align-items-center justify-content-center">
                          $1131
                        </div>
                        <div className="shape-Icon d-flex">
                            <ShapeIcon2 />
                        </div>
                      </div>
                      <h6 className="my-3">StarStake Founders Collectables Collection</h6>
                        {/* Action bundle  */}
                        <div className="action-bundle">
                           <Link className="view-bundle-btn" to="/BundleDetails">View bundle</Link>
                        </div>
                   </div>
                 </div>
                 <div className="collection-list-box mb-4">
                   {/* Img List */}
                   <div className="img-collection position-relative">
                       {/* Img */}
                       <BundlesImg4 className="img-svg" />
                         {/* open hover */}
                         <div className="bundles-hover position-absolute top-0 start-0 bottom-0 end-0 p-3">
                         <div className="d-flex">
                           <div>
                              <BucksIcon />
                           </div>
                         <div className="text-bundle ms-2 text-white">
                           <h6>Includes standard bucks</h6>
                            <CardListWhiteIcon className="me-2 mb-1" /> 21
                         </div>
                         </div>
                       </div>
                   </div>
                    {/* Text-List */}
                    <div className="collection-text pt-3">
                   <div className="d-flex justify-content-between">
                        {/* Price */}
                        <div className="price d-flex align-items-center justify-content-center">
                          $$500
                        </div>
                        <div className="shape-Icon d-flex">
                            <ShapeIcon3 />
                        </div>
                      </div>
                      <h6 className="my-3">StarStake Founders Small Bucks Bundle</h6>
                        {/* Action bundle  */}
                        <div className="action-bundle">
                          <Link className="view-bundle-btn" to="/BundleDetails">View bundle</Link>
                        </div>
                   </div>
                 </div>
                 <div className="collection-list-box mb-4 lxx-screen">
                   {/* Img List */}
                   <div className="img-collection position-relative">
                       {/* Img */}
                        <BundlesImg1 className="img-svg" />
                   </div>
                   {/* Text-List */}
                   <div className="collection-text pt-3">
                   <div className="d-flex justify-content-between">
                        {/* Price */}
                        <div className="price d-flex align-items-center justify-content-center">
                          $2262
                        </div>
                        <div className="shape-Icon d-flex">
                            <ShapeIcon1 />
                            <ShapeIcon2 className="mx-2" />
                            <ShapeIcon3 />
                        </div>
                      </div>
                      <h6 className="my-3">StarStake Founders Complete collection</h6>
                        {/* Action bundle  */}
                        <div className="action-bundle">
                          <Link className="view-bundle-btn" to="/BundleDetails">View bundle</Link>
                        </div>
                   </div>
                 </div>
              </div>
       </div>
    )
  
  }
export default BundlesList;
