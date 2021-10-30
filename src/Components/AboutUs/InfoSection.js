import React from 'react';

function InfoSection()  {  


  return (
       <div className="info-section">
         <div className="container">
           <div className="row">
             <div className="col-lg-4">
               {/* box-info */}
               <div className="info-box wow slideInLeft">
                 <h5>What are NFT bucks?</h5>
                 <p className="mb-0">NFTbucks are NFT images connected to a smart contract that backs its value </p>
               </div>
              </div>
              <div className="col-lg-4 border-x border-s">
               {/* box-info */}
               <div className="info-box wow slideInUp">
                 <h5>NFTB design editions</h5>
                 <p className="mb-0">NFTbucks provide a visual cryptocurrency that you can see and enjoy. NFTbucks can be collected as art or used as currency on applications like StarStake. Various design themes make purchasing and using NFTbucks simple, secure, and enjoyable.</p>
               </div>
              </div>
               <div className="col-lg-4">
               {/* box-info */}
               <div className="info-box wow slideInRight">
                 <h5>A better way to pay</h5>
                 <p className="mb-0">Buying with crypto online is not a good experience. From the constant price changes to the conversion to actual money, there's a reason we don't use it to buy merchandise online. NFTbucks take the power of cryptocurrency and improves it for the real world of ecommerce visually.</p>
               </div>
             </div>
           </div>
         </div>
       </div>
    )
  
  }
export default InfoSection;
