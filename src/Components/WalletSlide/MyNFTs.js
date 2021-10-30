import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CartImg from '../../img/Carts1.png';
import CartImg2 from '../../img/Carts2.png';
import CartImg3 from '../../img/star-profle-card.png';

export default function MyNFTs() {
    return (
        <div className="my-buckes">
            <div className="balances mb-4">
                <div className="bal">
                    <span>iNFTs in my wallet</span>
                    <span className="amount">15</span>
                </div>
                <div className="bal">
                    <span>Total Staked</span>
                    <span className="amount">$30,000</span>
                </div>
                <div className="liat-cart-slide">
                    <div className="collecton px-4 pt-4">
                        <div className="images large-img">
                            <img src={CartImg3} alt="" srcset="" />
                        </div>
                        <div className="details">
                            {/* <div className="amount">$50,000</div> */}
                            <Link to="/" className="collection-link">View My Portfolio</Link>
                            <Link to="/" className="more-link">Purcahse History</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
