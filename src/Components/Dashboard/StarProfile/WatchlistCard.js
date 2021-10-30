import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { ReactComponent as LogoS } from '../../../img/svg/WatchlistCard/logo-S.svg';
import IMG00 from "../../../img/StarProfile/000.png";
import IMG01 from "../../../img/StarProfile/001.png";
import IMG02 from "../../../img/StarProfile/002.png";

function WatchlistCard(props) {
    return (
        <div className="watchlist-cards  mt-5">
            <Row>
                <Col md={4} md={4} sm={6} className="watchlist-card-box" >
                    <div className="br-19">
                        <div className="img-watchlist position-relative">
                            {/* <ListImg1 /> */}
                            <img src="https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/star-profile/000.png" alt="" />
                        </div>
                        <div className="watchlist-text px-4 pb-3">
                            <div className=" py-2 px-sm-2">
                                <div className="category p-2 px-3"> <span className=" px-1"><LogoS /></span> Starstake | music</div>
                                <div className=" d-flex justify-content-between align-items-center mt-5 ">
                                    <div className="">
                                        <div className="stake-name">Gigil - Single by
                                            Sheng Belmonte</div>
                                    </div>
                                    <div>
                                        <div className="outof">11 of 50</div>
                                    </div>
                                </div>
                            </div>
                            <div className="  py-2 px-sm-2">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div className="art-by">by Sheng Belmonte</div>
                                    <div className="art-name">Song</div>
                                </div>
                            </div>
                            <div className="  py-2 px-sm-2">
                                <div className="d-flex justify-content-between align-items-center align-content-center mob-wrap mob-center mob-col">
                                    <div className="time">Ends 01/01/2025</div>
                                    <div className="cta p-3 px-3">Start staking</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4} md={4} sm={6} className="watchlist-card-box" >
                    <div className="br-19">
                        <div className="img-watchlist position-relative">
                            {/* <ListImg2 /> */}
                            <img src="https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/star-profile/001.png" alt="" />
                        </div>
                        <div className="watchlist-text px-4 pb-3">
                            <div className=" py-2">
                                <div className="category p-2 px-3"> <span className=" px-1"><LogoS /></span> Starstake | music</div>
                                <div className=" d-flex justify-content-between align-items-center mt-5">
                                    <div className="">
                                        <div className="stake-name">Sheng Belmonte Debut <br />Album</div>
                                    </div>
                                    <div>
                                        <div className="outof">Unlimited</div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-2">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div className="art-by">by Sheng Belmonte</div>
                                    <div className="art-name">Album</div>
                                </div>
                            </div>
                            <div className="py-2">
                                <div className="d-flex justify-content-between  align-items-center align-content-center">
                                    <div className="time">Ends 12/25/2050</div>
                                    <div className="cta p-3 px-3">Start staking</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4} md={4} sm={6} className="watchlist-card-box" >
                    <div className="br-19">
                        <div className="img-watchlist position-relative">
                            {/* <ListImg3 /> */}
                            <img src="https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/star-profile/002.png" alt="" />
                        </div>
                        <div className="watchlist-text px-4 pb-3">
                            <div className="py-2">
                                <div className="category p-2 px-3"> <span className=" px-1"><LogoS /></span> Starstake | music</div>
                                <div className=" d-flex justify-content-between align-items-center mt-5">
                                    <div className="">
                                        <div className="stake-name">Let Me Know - Single by Sheng Belmonte</div>
                                    </div>
                                    <div>
                                        <div className="outof">Unlimited</div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-2">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div className="art-by">by John Alter</div>
                                    <div className="art-name">Song</div>
                                </div>
                            </div>
                            <div className="py-2">
                                <div className="d-flex justify-content-between  align-items-center align-content-center">
                                    <div className="time">3h 15m left</div>
                                    <div className="cta p-3 px-3">Start staking</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row >
        </div >
    )
}
export default WatchlistCard;