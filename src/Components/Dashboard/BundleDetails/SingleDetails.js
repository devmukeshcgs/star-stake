import React from 'react';
import StandardBucks from "./StandardBucks";
import CollectableBucks from "./CollectableBucks";
import { Link } from 'react-router-dom';
import Button  from 'react-bootstrap/Button';
import { ReactComponent as ShapeIcon1 } from '../../../img/svg/shape1.svg';
import { ReactComponent as ShapeIcon2 } from '../../../img/svg/shape2.svg';
import { ReactComponent as ShapeIcon3 } from '../../../img/svg/shape3.svg';
import { ReactComponent as CartIcon } from '../../../img/svg/CartIcon.svg';
import { ReactComponent as BundlesDetail } from '../../../img/svg/BundlesImg/BundlesDetail.svg';
import { ReactComponent as ShadowShapeVideo } from '../../../img/svg/Shadow-shape-video.svg';


function SingleDetails()  {  

  return (
       <div className="single-detail-bundle position-relative">
          <div className="position-absolute mob-none" style={ { top:'-146px', right:'-80px'} }>
             <ShadowShapeVideo />
           </div>
           <div className="d-flex mob-wrap position-relative z-index-1">
             <div className="detail-img">
                 <BundlesDetail />
             </div>
             <div className="w-75 mob-100">
             <div className="text-detail mt-5">
                  <h5 className="justify-content-between d-flex mb-4">/Bundle Details <span className="price-detail">$1000</span></h5>
                  <div className="auth-detail mb-2">Bundled by <Link to="/">Chris Hawk</Link></div>
                  <h1>The billionaire’s party bundle</h1>
                  <ul className="d-flex p-0">
                    <li><ShapeIcon1 /></li>
                    <li><ShapeIcon2 className="mx-2" /></li>
                    <li><ShapeIcon3 /></li>
                  </ul>
                  <Button className="view-bundle-btn my-4"> <CartIcon className="me-2" /> Add to cart</Button>
                  <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu condimentum urna.
                     In vel semper nibh. Sed quis interdum nulla, sed suscipit erat. Aenean sed finibus orci,
                      a vehicula diam. Vestibulum at fringilla leo. Nam quis sem lacus. Sed magna nisl, faucibus 
                      id maximus et, auctor non enim. Integer eget nisl et diam blandit facilisis. In faucibus 
                      velit condimentum, faucibus metus non, vehicula urna.</p>
             </div>
               <StandardBucks />
               <CollectableBucks />
             
             </div>
           </div>
           <div className="position-absolute mob-none" style={ { top:'600px', right:'-80px', opacity:'0.4'} }>
                <ShadowShapeVideo />
               </div>
       </div>
    )
  
  }
export default SingleDetails;
