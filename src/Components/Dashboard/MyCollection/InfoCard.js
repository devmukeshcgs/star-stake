import React from 'react';
import { Button } from 'react-bootstrap';
function InfoCard() {
    return (
        <div className="info-card p-3">
            <h5> What are NFT Bucks? </h5>
            <p><small>NFT Bucks are a digital currency backed by stabilized crypto tokens. </small></p>
            <div className="d-grid gap-2">
                <Button size="md" variant="primary">Learn more</Button>
            </div>
        </div>
    )
}
export default InfoCard;
