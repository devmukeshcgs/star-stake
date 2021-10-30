import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../../Header";
import SideNav from "../../SideNav";
import { Nav } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import OrderHistoryCard from "./OrderHistoryCard";
import NFTbucksCard from "./NFTbucksCard";
import { ReactComponent as BackIconArrow } from "../../../img/svg/backIcon.svg";
import { ReactComponent as LogoS } from "../../../img/svg/logo-s.svg";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import IMG3 from "../../../img/svg/WatchlistCard/003.png";
import OHIImg from "../../../img/svg/WatchlistCard/01.png";

class OrderHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showModalOH: false,
        };
    }
    //Modal
    handleShow = () => { this.setState({ showModal: true }); };
    handleClose = () => { this.setState({ showModal: false }); };
    handleShowOH = () => { this.setState({ showModalOH: true }); };
    handleCloseOH = () => { this.setState({ showModalOH: false }); };

    render() {
        return (
            <div className="order-history">
                <Header history={this.props.history} prop={this.props.prop} connect={() => { this.props.connect(); }} />
                <SideNav />
                <div className="right-wrapper">
                    <div className="p-5 main">
                        <div className="back-link">
                            <Link to="/">
                                <BackIconArrow />
                            </Link>
                        </div>
                        <div className="ohistory-section mt-5">
                            <h4>Order History</h4>
                            <div>
                                <Tab.Container id="" defaultActiveKey="first">
                                    <Nav variant="pills" className="flex-row">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">NFT Bucks</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">iNFT stakes</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <NFTbucksCard showDetails={this.handleShow} hideModal={this.handleClose} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <OrderHistoryCard showDetails={this.handleShowOH} hideModal={this.handleClose} />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>

                        </div>
                    </div>
                </div>
                <Modal className="nft-buks-modal" size="lg"
                    show={this.state.showModal} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter" centered >

                    <Modal.Body className="p-5">
                        <div className="d-flex justify-content-between align-items-center order-id-link  py-0">
                            <div className="">Order ID- #432432552645</div>
                            <Link to="/" className="go-to-w">Go to wallet</Link>
                        </div>
                        <div className="order-img-list  py-2">
                            <ul>
                                <li>
                                    <img src={IMG3} alt="" />
                                </li>
                                <li>
                                    <img src={IMG3} alt="" />
                                </li>
                                <li>
                                    <img src={IMG3} alt="" />
                                </li>
                            </ul>
                        </div>
                        <div className="order-item-list py-2">
                            <div className="item d-flex justify-content-between align-items-center">
                                <div className=" d-flex justify-content-between align-items-center stake-name mb-3">Alexander Graham <span>0x12jlhljhfsdu47dgjksdf</span></div>
                                <div className="stake-name-price mb-3">$100</div>
                            </div>
                            <div className="item d-flex justify-content-between align-items-center">
                                <div className=" d-flex justify-content-between align-items-center stake-name mb-3">Steve job bucks <span>0x12jlhljhfsdu47dgjksdf</span></div>
                                <div className="stake-name-price mb-3">$1</div>
                            </div>
                            <div className="item d-flex justify-content-between align-items-center">
                                <div className=" d-flex justify-content-between align-items-center stake-name mb-3">Dr.Suess Buckes <span>0x12jlhljhfsdu47dgjksdf</span></div>
                                <div className="stake-name-price mb-3">$10</div>
                            </div>
                            <div className="item d-flex justify-content-between align-items-center">
                                <div className=" d-flex justify-content-between align-items-center stake-name mb-3">J.K.Rowling Bucks <span>0x12jlhljhfsdu47dgjksdf</span></div>
                                <div className="stake-name-price mb-3">$1</div>
                            </div>
                        </div>
                        <div className="item last d-flex justify-content-between align-items-center py-2">
                            <div className=" d-flex justify-content-between flex-column stake-name mb-3">
                                <div> Total</div>
                                <div className="status"> Status - <span> Completed</span></div>
                            </div>
                            <div className="stake-name-price mb-3">$112</div>
                        </div>
                        <div className="cta d-flex flex-column justify-content-between align-items-center">
                            <Button variant="outline-primary mb-4" onClick={this.handleClose} >Go back</Button>
                            <div>Something wrong? <Link to="/" >Let us know.</Link></div>
                        </div>
                    </Modal.Body>
                </Modal>
                <Modal className="nft-buks-modal" size="lg"
                    show={this.state.showModalOH} onHide={this.handleCloseOH} aria-labelledby="contained-modal-title-vcenter" centered >
                    <Modal.Body className="p-5">
                        <div className="d-flex justify-content-between align-items-center order-id-link  py-0">
                            <div className="">Order ID- #432432552645</div>
                            <Link to="/" className="go-to-w">Go to marketplace</Link>
                        </div>
                        <div>
                            <div className="d-flex flex-row ohistory-card-box flex-row py-3 ">
                                <div className="ohistory-img position-relative ">
                                    <img src={OHIImg} alt="" />
                                </div>
                                <div className="ohistory-text d-flex flex-row ohistory-card-box justify-content-between flex-column px-3 ">
                                    <div className="starstake"><LogoS />&nbsp;&nbsp;Starstake | Arts</div>
                                    <div className="stake-name ">Saphyre Cryptothink</div>
                                    <div className="art-by ">by John Alter</div>
                                    <div className="d-flex justify-content-between align-items-center ">
                                        <div className="art-name">Digital art</div>
                                        <div className="reward-access">Reward Access: <span>100$</span></div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="">
                                            <div className="staked-amount">Staked amount: <span> $600</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="buck-spent">NFT Bucks spent</div>
                        <div className="order-item-list py-2">
                            <div className="item d-flex justify-content-between align-items-center">
                                <div className=" d-flex justify-content-between align-items-center stake-name mb-3">Alexander Graham <span>0x12jlhljhfsdu47dgjksdf</span></div>
                                <div className="stake-name-price mb-3">$100</div>
                            </div>
                            <div className="item d-flex justify-content-between align-items-center">
                                <div className=" d-flex justify-content-between align-items-center stake-name mb-3">Steve job bucks <span>0x12jlhljhfsdu47dgjksdf</span></div>
                                <div className="stake-name-price mb-3">$1</div>
                            </div>
                            <div className="item d-flex justify-content-between align-items-center">
                                <div className=" d-flex justify-content-between align-items-center stake-name mb-3">Dr.Suess Buckes <span>0x12jlhljhfsdu47dgjksdf</span></div>
                                <div className="stake-name-price mb-3">$10</div>
                            </div>
                            <div className="item d-flex justify-content-between align-items-center">
                                <div className=" d-flex justify-content-between align-items-center stake-name mb-3">J.K.Rowling Bucks <span>0x12jlhljhfsdu47dgjksdf</span></div>
                                <div className="stake-name-price mb-3">$1</div>
                            </div>
                        </div>
                        <div className="item last d-flex justify-content-between align-items-center py-2">
                            <div className=" d-flex justify-content-between flex-column stake-name mb-3">
                                <div> Total</div>
                                <div className="status"> Status - <span> Completed</span></div>
                            </div>
                            <div className="stake-name-price mb-3">$112</div>
                        </div>
                        <div className="cta d-flex flex-column justify-content-between align-items-center">
                            <Button variant="outline-primary mb-4" onClick={this.handleCloseOH}>Go back</Button>
                            <div>Something wrong? <Link to="/" >Let us know.</Link></div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
export default OrderHistory;
