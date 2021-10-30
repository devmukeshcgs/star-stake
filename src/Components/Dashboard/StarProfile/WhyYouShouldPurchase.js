import React from 'react';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

function WhyYouShouldPurchase(props) {
    const FakeData = [
        {
            id: 1,
            text: "Support your favorite IP by purchasing an iNFT.",
        },
        {
            id: 2,
            text: "Recieve purchase rewards with unique access tokens.",
        },
        {
            id: 3,
            text: "Don’t just be a fan, stake to own your unique iNFT with access to great rewards.",
        },
        {
            id: 4,
            text: "Share your favourite IP to earn fan referral rewards.",
        },
        {
            id: 5,
            text: "Collect iNFTs to earn income as a licensor or sell them with contracts in-tact.",
        },
        {
            id: 6,
            text: "Connect with stars in all new ways or become a star through Starstake.",
        },
    ]

    return (
        <div className="my-5">
            <div className="why-shoud-purchase py-5">
                <Row className="">
                    {FakeData.map(item => {
                        return (
                            <Col sm={4} key={item.id} >
                                <div className="d-flex flex-row justify-content-start align-content-start align-items-start  card mb-4 p-4">
                                    <span className="p-2 ">{item.id}</span>
                                    <p className="p-2">{item.text}</p>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
                <div className="cta my-4">
                    <Button variant="primary" className="mr-2">How to stake</Button>&nbsp;&nbsp;
                    <Button variant="outline-primary" className="mr-2" >Become a star</Button>
                </div>
            </div>
        </div>
    )
}
export default WhyYouShouldPurchase;