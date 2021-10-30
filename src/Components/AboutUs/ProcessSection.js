import React from 'react';
import { Link } from 'react-router-dom';
// import  ShapeRight  from '../../img/shape-right-line.png';

function ProcessSection() {

  return (
    <div className="process-section position-relative py-5 bg-white">
      <div className="container py-lg-5 py-0">
        <div className="heading mb-5">
          <h2>Getting your NFT bucks</h2>
        </div>
        <div className="row">
          <div className="col-lg-10">
            <div className="process-list pe-lg-4 pe-0">
              <ul className="position-relative p-0">
                <li className="d-flex align-items-start wow slideInUp">
                  <span className="d-inline-flex align-items-center justify-content-center me-4 bg-white position-relative z-index-1">1</span>
                  <div className="list-text">
                    <h6>Connect Your Wallet</h6>
                    <p>NFTbucks are created from unique designs, backed by their dollar value in crytocurrency.
                      <Link to="/#">Check out our 'founders edition' series here.</Link>
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start wow slideInUp">
                  <span className="d-inline-flex align-items-center justify-content-center me-4 bg-white position-relative z-index-1">2</span>
                  <div className="list-text">
                    <h6>Grab Some Ethereum</h6>
                    <p>To purchase your NFTbucks you need to have some Ethereum cryptocurrency in your wallet. Don't have Ethereum? You can grab some right on our site. <Link to="/#"> Click here.</Link>
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start wow slideInUp">
                  <span className="d-inline-flex align-items-center justify-content-center me-4 bg-white position-relative z-index-1">3</span>
                  <div className="list-text">
                    <h6>Choose your favorite designs and denominations</h6>
                    <p>Once you have some Ethereum in your MetaMask wallet, you can start browsing the cool NFTB designs and selecting the denominations that make sense for you.</p>
                  </div>
                </li>
                <li className="d-flex align-items-start wow slideInUp">
                  <span className="d-inline-flex align-items-center justify-content-center me-4 bg-white position-relative z-index-1">4</span>
                  <div className="list-text">
                    <h6>Purchase your NFT bucks</h6>
                    <p>Complete your purchase and convert your Ethereum into the dollar value of the NFTBs you selected. </p>
                  </div>
                </li>
                <li className="d-flex align-items-start wow slideInUp">
                  <span className="d-inline-flex align-items-center justify-content-center me-4 bg-white position-relative z-index-1">5</span>
                  <div className="list-text">
                    <h6>View your NFTB collection and spend them, collect them, or sell them.</h6>
                    <p>Complete your purchase and convert your Ethereum into the dollar value of the NFTBs you selected.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute end-0 shape-right">
        <img src="https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/shape-right-line.png" alt="" />
      </div>
    </div>
  )

}
export default ProcessSection;
