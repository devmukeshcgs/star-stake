import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { ReactComponent as LogoS } from '../../../img/svg/WatchlistCard/logo-S.svg';
import IMG1 from "../../../img/svg/WatchlistCard/01.png";
import IMG2 from "../../../img/svg/WatchlistCard/02.png";
import IMG3 from "../../../img/svg/WatchlistCard/03.png";
import IMG4 from "../../../img/svg/WatchlistCard/04.png";
import IMG5 from "../../../img/svg/WatchlistCard/05.png";
import IMG6 from "../../../img/svg/WatchlistCard/06.png";
function WatchlistCard(props) {

    return (
        <div className="watchlist-cards  mt-5">
            <Row>
                <Col md={4} md={4} sm={6} className="watchlist-card-box" >
                    <div className="br-19">
                        <div className="img-watchlist position-relative">
                            {/* <ListImg1 /> */}
                            <img src={IMG1} alt="" />
                        </div>
                        <div className="watchlist-text  pb-3">
                            <div className="px-3 py-2 px-sm-2">
                                <div className="category p-2 px-3"> <span className=" px-1"><LogoS /></span> Starstake | music</div>
                                <div className=" d-flex justify-content-between align-items-center mt-4 ">
                                    <div className="">
                                        <div className="stake-name">Saphyre Cryptothink one more line gose here</div>
                                    </div>
                                    <div>
                                        <div className="outof">1 of 100</div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 py-2 px-sm-2">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div className="art-by">by John Alter</div>
                                    <div className="art-name">Digital picture</div>
                                </div>
                            </div>
                            <div className="px-3 py-2 px-sm-2">
                                <div className="d-flex justify-content-between align-items-center align-content-center mob-wrap mob-center mob-col">
                                    <div className="time">3h 15m left</div>
                                    <div className="cta p-2 px-3">Start staking</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4} md={4} sm={6} className="watchlist-card-box" >
                    <div className="br-19">
                        <div className="img-watchlist position-relative">
                            {/* <ListImg2 /> */}
                            <img src={IMG2} alt="" />
                        </div>
                        <div className="watchlist-text  pb-3">
                            <div className="px-3 py-2">
                                <div className="category p-2 px-3"> <span className=" px-1"><LogoS /></span> Starstake | music</div>
                                <div className=" d-flex justify-content-between align-items-center mt-4">
                                    <div className="">
                                        <div className="stake-name">Saphyre Cryptothink one more line gose here</div>
                                    </div>
                                    <div>
                                        <div className="outof">1 of 100</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 py-2">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div className="art-by">by John Alter</div>
                                    <div className="art-name">Digital picture</div>
                                </div>
                            </div>
                            <div className="p-3 py-2">
                                <div className="d-flex justify-content-between  align-items-center align-content-center">
                                    <div className="time">3h 15m left</div>
                                    <div className="cta p-2 px-3">Start staking</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4} md={4} sm={6} className="watchlist-card-box" >
                    <div className="br-19">
                        <div className="img-watchlist position-relative">
                            {/* <ListImg3 /> */}
                            <img src={IMG3} alt="" />
                        </div>
                        <div className="watchlist-text pb-3">
                            <div className="px-3 py-2">
                                <div className="category p-2 px-3"> <span className=" px-1"><LogoS /></span> Starstake | music</div>
                                <div className=" d-flex justify-content-between align-items-center mt-4">
                                    <div className="">
                                        <div className="stake-name">Saphyre Cryptothink one more line gose here</div>
                                    </div>
                                    <div>
                                        <div className="outof">1 of 100</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 py-2">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div className="art-by">by John Alter</div>
                                    <div className="art-name">Digital picture</div>
                                </div>
                            </div>
                            <div className="p-3 py-2">
                                <div className="d-flex justify-content-between  align-items-center align-content-center">
                                    <div className="time">3h 15m left</div>
                                    <div className="cta p-2 px-3">Start staking</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4} md={4} sm={6} className="watchlist-card-box" >
                    <div className="br-19">
                        <div className="img-watchlist position-relative">
                            {/* <ListImg4 /> */}
                            <img src={IMG4} alt="" />
                        </div>
                        <div className="watchlist-text pb-3">
                            <div className="px-3 py-2">
                                <div className="category p-2 px-3"> <span className=" px-1"><LogoS /></span> Starstake | music</div>
                                <div className=" d-flex justify-content-between align-items-center mt-4">
                                    <div className="">
                                        <div className="stake-name">Saphyre Cryptothink one more line gose here</div>
                                    </div>
                                    <div>
                                        <div className="outof">1 of 100</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 py-2">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div className="art-by">by John Alter</div>
                                    <div className="art-name">Digital picture</div>
                                </div>
                            </div>
                            <div className="p-3 py-2">
                                <div className="d-flex justify-content-between  align-items-center align-content-center">
                                    <div className="time">3h 15m left</div>
                                    <div className="cta p-2 px-3">Start staking</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4} md={4} sm={6} className="watchlist-card-box" >
                    <div className="br-19">
                        <div className="img-watchlist position-relative">
                            {/* <ListImg2 /> */}
                            <img src={IMG5} alt="" />
                        </div>
                        <div className="watchlist-text pb-3">
                            <div className="px-3 py-2">
                                <div className="category p-2 px-3"> <span className=" px-1"><LogoS /></span> Starstake | music</div>
                                <div className=" d-flex justify-content-between align-items-center mt-4">
                                    <div className="">
                                        <div className="stake-name">Saphyre Cryptothink one more line gose here</div>
                                    </div>
                                    <div>
                                        <div className="outof">1 of 100</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 py-2">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div className="art-by">by John Alter</div>
                                    <div className="art-name">Digital picture</div>
                                </div>
                            </div>
                            <div className="p-3 py-2">
                                <div className="d-flex justify-content-between  align-items-center align-content-center">
                                    <div className="time">3h 15m left</div>
                                    <div className="cta p-2 px-3">Start staking</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4} md={4} sm={6} className="watchlist-card-box" ><div className="br-19">
                    <div className="img-watchlist position-relative">
                        {/* <ListImg3 /> */}
                        <img src={IMG6} alt="" />
                    </div>
                    <div className="watchlist-text pb-3">
                        <div className="px-3 py-2">
                            <div className="category p-2 px-3"> <span className=" px-1"><LogoS /></span> Starstake | music</div>
                            <div className=" d-flex justify-content-between align-items-center mt-4">
                                <div className="">
                                    <div className="stake-name">Saphyre Cryptothink one more line gose here</div>
                                </div>
                                <div>
                                    <div className="outof">1 of 100</div>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 py-2">
                            <div className="d-flex justify-content-between align-items-start">
                                <div className="art-by">by John Alter</div>
                                <div className="art-name">Digital picture</div>
                            </div>
                        </div>
                        <div className="p-3 py-2">
                            <div className="d-flex justify-content-between  align-items-center align-content-center">
                                <div className="time">3h 15m left</div>
                                <div className="cta p-2 px-3">Start staking</div>
                            </div>
                        </div>
                    </div>
                </div>
                </Col>
            </Row >
            {/* </div> */}

        </div>
    )

}
export default WatchlistCard;