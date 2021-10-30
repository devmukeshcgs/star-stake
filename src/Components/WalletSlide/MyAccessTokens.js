import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CartImg from '../../img/Carts1.png';
import CartImg2 from '../../img/Carts2.png';
import CartImg4 from '../../img/access-tokan.png';

export default function MyAccessTokens() {
    return (
        <div className="my-buckes">
            <div className="balances mb-4">
                <div className="bal">
                    <span>Total access tokens</span>
                    <span className="amount">15</span>
                </div>
                <div className="liat-cart-slide">
                    <div className="collecton px-4 pt-4">
                        <div className="images large-img">
                            <img src={CartImg4} alt="" srcset="" />
                        </div>
                        <div className="details">
                            {/* <div className="amount">$50,000</div> */}
                            <Link to="/" className="collection-link">Claim My Rewards</Link>
                            <Link to="/" className="more-link">Purchase History </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
