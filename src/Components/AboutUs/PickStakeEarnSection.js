import React from 'react';
import Button  from 'react-bootstrap/Button';

function PickStakeEarnSection()  {  


  return (
       <div className="pick-stake-earn-section py-5">
         <div className="container py-lg-5  py-0 text-center">
             <h2 className="text-white mb-3 wow slideInUp">Digital Money That’s Visual</h2>
             <p className="wow slideInUp">NFTbucks are the first visual NFT-based cryptocurrency designed to streamline <br className="mob-br"/>online transactions without using credit cards or unstable cryptocurrencies. </p>
             {/* Action */}
             <div className="d-flex justify-content-center mt-5">
               <Button variant="light" className="me-md-2 mb-md-0 mb-4 wow slideInLeft">Get NFTbucks now</Button>
               <Button variant="outline-light" className="ms-md-2 wow slideInRight">Check out marketplace</Button>
             </div>
          </div>
       </div>
    )
  
  }
export default PickStakeEarnSection;
