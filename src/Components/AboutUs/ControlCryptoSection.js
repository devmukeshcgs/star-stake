import React from 'react';
import { ReactComponent as SpendBucksIcon } from '../../img/svg/Spend-bucks-Icon-A.svg';
import { ReactComponent as CollectUniqueBucksIcon } from '../../img/svg/Collect-Unique-Bucks-Icon-A.svg';
import { ReactComponent as SellYourBucksIcon } from '../../img/svg/Sell-Your-Bucks-Icon-A.svg';


function ControlCryptoSection()  {  

  return (
       <div className="control-crypto-section pt-5 pb-5">
         <div className="container pb-5">
           <div className="row mt-3 mb-lg-5"> 
               {/* heading */}
               <div className="col-12 heading text-center">
                 <h1>You now have control of your crypto <br className="mob-br" />without worrying about the price.</h1>
               </div>
            </div>
            <div className="row pt-5 pb-5">
              <div className="col-lg-4">
                {/* control-crypto-box */}
                <div className="control-crypto-box mb-lg-0 mb-5 wow slideInLeft">
                    <div className="icon-im-A align-items-center d-flex justify-content-center">
                        <SpendBucksIcon />
                    </div>
                   <div className="text-control-crypto pt-3">
                      <h5>Spend your bucks</h5>
                      <p>Purchase NFTbucks using Ethereum and begin staking your favorite stars on StarStake.</p>
                   </div>
                </div>
              </div>
              <div className="col-lg-4">
                {/* control-crypto-box */}
                <div className="control-crypto-box mb-lg-0 mb-5 wow slideInUp">
                    <div className="icon-im-A align-items-center d-flex justify-content-center">
                        <CollectUniqueBucksIcon />
                    </div>
                   <div className="text-control-crypto pt-3">
                      <h5>Collect Unique Bucks</h5>
                      <p>NFTbucks are created from unique designs, backed by their dollar value in crytocurrency. Check out our 'founders edition' series here.</p>
                   </div>
                </div>
              </div>
              <div className="col-lg-4">
                {/* control-crypto-box */}
                <div className="control-crypto-box mb-lg-0 mb-5 wow slideInRight">
                    <div className="icon-im-A align-items-center d-flex justify-content-center">
                        <SellYourBucksIcon />
                    </div>
                   <div className="text-control-crypto pt-3">
                      <h5>Sell Your Bucks</h5>
                      <p>If you find yourself with a hole in your pocket and can't spend all your NFTB dough, you can cash them out for USDC or even auction them on popular NFT marketplaces like Opensea.io.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
       </div>
    )
  
  }
export default ControlCryptoSection;
