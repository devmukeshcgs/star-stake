import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Row, Col } from 'react-bootstrap';

function FaqStakingPayments(props) {
    return (
        <div className="faq-staking-payments my-5">
            <Row>
                <Col className="faq">
                    <div className="px-5">
                        <h1 className="px-3">General FAQs</h1>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What are NFT bucks?</Accordion.Header>
                                <Accordion.Body>NFT bucks are used to stake iNFTs on StarStake.  NFT Bucks are a digital currency backed by stabilized crypto tokens
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How can I buy NFT bucks?</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Are NFT Bucks stable?</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>What blockchain network is used</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Col>
                <Col className="stak-payment">
                    <div className="px-5">
                        <h1 className="px-3">   Staking & Payments</h1>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What are NFT bucks?</Accordion.Header>
                                <Accordion.Body>
                                    NFT bucks are used to stake iNFTs on StarStake.  NFT Bucks are a digital currency backed by stabilized crypto tokens
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How can I buy NFT bucks?</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Are NFT Bucks stable?</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>What blockchain network is used</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default FaqStakingPayments;