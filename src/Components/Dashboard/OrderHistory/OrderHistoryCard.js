import React from 'react';
import Button from 'react-bootstrap/Button';
// import { ReactComponent as ListImg5 } from '../../../img/svg/WatchlistCard/cards5.svg';
import IMG1 from "../../../img/svg/WatchlistCard/01.png";
import IMG2 from "../../../img/svg/WatchlistCard/02.png";
function WatchlistCard(props) {
    console.log("PROPS", props);
    return (
        <div className="ohistory-cards mt-5">
            <div className="">
                <div className="d-lg-flex flex-lg-row ohistory-card-box flex-column mb-2 mb-lg-4">
                    <div className="ohistory-img position-relative ">
                        <img src={IMG1} alt="" />
                    </div>
                    <div className="ohistory-text  p-3 ">
                        <div className="art-name">Digital picture</div>
                        <div className="stake-name mb-3">Saphyre Cryptothink</div>
                        <div className="art-by mb-3">by John Alter</div>
                        <div className="fanart-update">Fan Art + Updates</div>
                        <div className="short-dis mb-3">
                            <p>Get access to my fan rewards for staking any amount....
                                <a href="http://">Show details</a>
                            </p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mob-wrap mob-center">
                            <div className="">
                                <div className="staked-amount">Staked amount: <span> $600</span></div>
                            </div>
                            <div className="cta p-2 px-3">
                                <Button variant="outline-primary" onClick={props.showDetails}>Details</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-lg-flex flex-lg-row ohistory-card-box flex-column mb-2 mb-lg-4">
                    <div className="ohistory-img position-relative ">
                        <img src={IMG2} alt="" />
                    </div>
                    <div className="ohistory-text  p-3 ">
                        <div className="art-name">Book</div>
                        <div className="stake-name mb-3">Memory iNFT book</div>
                        <div className="art-by mb-3">by John Alter</div>
                        <div className="fanart-update">Fan Art + Updates</div>
                        <div className="short-dis mb-3">
                            <p>Get access to my fan rewards for staking any amount....
                                <a href="http://">Show details</a>
                            </p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mob-wrap mob-center">
                            <div className="">
                                <div className="staked-amount">Staked amount: <span> $600</span></div>
                            </div>
                            <div className="cta p-2 px-3">
                                <Button variant="outline-primary" onClick={props.showDetails}>Details</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default WatchlistCard;