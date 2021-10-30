import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CollectionList from "./CollectionList";
import { ReactComponent as ShapeIcon3 } from '../../../img/svg/shape3.svg';
import { ReactComponent as BundlesDetail } from '../../../img/svg/Yourcollection description.svg';
import { ReactComponent as ShadowShapeVideo } from '../../../img/svg/Shadow-shape-video.svg';

function SingleBuckDetail()  {  

  return (
       <div className="single-detail-bundle position-relative ">
           <div className="position-absolute mob-none" style={ { top:'-146px', right:'-80px'} }>
             <ShadowShapeVideo />
           </div>
           <div className="d-flex mob-wrap position-relative z-index-1">
             <div className="detail-img">
                 <BundlesDetail />
                 <div className="text-action-img text-white mt-4">
                    <h4>NFTb availability</h4>
                    <div className='custom-control custom-switch mt-2'>
                    <input
                      type='checkbox'
                      className='custom-control-input'
                      id='customSwitchesChecked'
                      defaultChecked
                    />
                    <label className='custom-control-label' htmlFor='customSwitchesChecked'>
                    </label>
                  </div>
                    <p className="py-4">*All bucks are set to  <br /><Link to="/" className="secondary-col" > available </Link> by default.</p>
                    <Button className="p-0 add-cart-btn">Add to cart</Button>
                 </div>
             </div>
             <div className="w-75 mob-100">
             <div className="text-detail mt-5">
                  <h5 className="justify-content-between d-flex mb-4">/General info <span className="detail">129/135</span></h5>
                  <div className="auth-detail mb-2">Created by  <Link to="/"  className="secondary-col">Jennifer Anniston </Link></div>
                  <ul className="d-flex p-0">
                    <li  className="secondary-col"><ShapeIcon3 /> Rare</li>
                  </ul>
                  <h1>Leonardo da vinci Founders edition NFT Buck</h1>
                  <h6 className="secondary-col">Founders Collection - 1st Edition</h6> 
                  <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu condimentum urna. In vel semper nibh. Sed quis interdum nulla, sed suscipit erat. Aenean sed finibus orci, a vehicula diam. Vestibulum at fringilla leo. Nam quis sem lacus. Sed magna nisl, faucibus id maximus et, auctor non enim. Integer eget nisl et diam blandit facilisis. In faucibus velit condimentum, faucibus metus non, vehicula urna. Etiam mattis luctus leo vitae hendrerit. Fusce nec condimentum nulla, et pretium dui. Praesent faucibus tincidunt sem a luctus. Quisque eros erat, dapibus at nunc porttitor, porta volutpat urna. Proin iaculis erat ac tincidunt commodo. Etiam condimentum urna at enim luctus mattis.
                    <br /> <br />
                     Integer efficitur tortor lorem, ac lacinia ex dignissim non. Proin congue mauris cursus, congue elit id, pharetra lacus. Nam porta purus eget mattis consectetur.  </p>
                  <h6>Collection Minted by Chris Hawk</h6>
             </div>
             <div className="token-info p-lg-5 p-3 mt-5 text-white">
                <h5 className="mb-4">/Token info</h5>
                <div className="d-flex justify-content-between align-items-center py-2">
                        <div>Contract address</div>
                        <div className="secondary-col">0x 9KHIUG...E48</div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2">
                        <div>Token Id</div>
                        <div className="gray-col">49865865321..</div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2">
                        <div>Token Standard</div>
                        <div className="gray-col">ERC-1155</div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2">
                        <div>Blockchain</div>
                        <div className="gray-col">Ethrium</div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2">
                        <div>Metadata</div>
                        <div className="secondary-col">Frozen</div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2">
                        <div>Dollervalue</div>
                        <div className="secondary-col">$10</div>
                    </div>
             </div>
             </div>
           </div>
           <div className="position-absolute mob-none" style={ { top:'600px', right:'-80px', opacity:'0.4'} }>
             <ShadowShapeVideo />
           </div>
           <CollectionList />
       </div>
    )
  
  }
export default SingleBuckDetail;
