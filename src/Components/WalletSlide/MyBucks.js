import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CartImg from '../../img/Carts1.png';
import CartImg2 from '../../img/Carts2.png';
import NoBuckesImg from '../../img/no-buckes.png';

export default function MyBucks() {
    return (
        <div className="my-buckes">
            <div className="balances mb-4">
                <div className="bal">
                    <span>Total NFT Bucks in my collection</span>
                    <span className="amount">15.103 ETH</span>
                </div>
                <div className="collecton px-4 pt-4">
                    <div className="images">
                        <img src={CartImg} alt="" srcset="" />
                        <img src={CartImg2} alt="" srcset="" />
                    </div>
                    <div className="details">
                        <div className="amount">$50,000</div>
                        <Link to="/" className="collection-link">Go to my collection</Link>
                        <Link to="/" className="more-link">Get more bucks</Link>
                    </div>
                </div>
            </div>
            {/* <div className="balances mb-4">
                <div className="bal">
                    <span>Total NFT Bucks in my collection</span>
                    <span className="amount">0</span>
                </div>
                <div className="collecton px-4 pt-4 no-bucks">
                    <div className="images">
                        <img src={NoBuckesImg} alt="" srcset="" />
                    </div>
                    <div className="details">
                        <div className="no-bucks-msg">You don’t own any NFT bucks yet!</div>
                        <Link to="/" className="more-link">Get bucks</Link>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
