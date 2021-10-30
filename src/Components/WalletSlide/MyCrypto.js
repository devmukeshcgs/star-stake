import React from 'react'
import { Button } from 'react-bootstrap';

export default function MyCrypto() {
    return (
        <div className="my-crypto">
            <div className="balances mb-4">
                <div className="bal">
                    <span>Ethereum balance</span>
                    <span className="amount">15.103 ETH</span>
                </div>
                <div className="bal">
                    <span>USDC  balance</span>
                    <span className="amount">$50,000</span>
                </div>
                <div className="bal">
                    <span>NRGY balance</span>
                    <span className="amount">100 NRGY</span>
                </div>
                <div className="bal">
                    <span>NRGYGO balance</span>
                    <span className="amount">121,024,000 NRGYGO</span>
                </div>
            </div>
        </div>
    )
}
