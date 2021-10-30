import React from 'react';
import Button from 'react-bootstrap/Button';
// import { ReactComponent as ListImg5 } from '../../../img/svg/WatchlistCard/cards5.svg';
import IMG1 from "../../../img/svg/WatchlistCard/001.png";
import IMG2 from "../../../img/svg/WatchlistCard/002.png";
import { ReactComponent as CollectibleIcon } from "../../../img/svg/collectible.svg";
import { ReactComponent as RareIcon } from "../../../img/svg/rare.svg";

function NFTbucksCard(props) {
    return (
        <div className="nft-buks-cards  mt-5">
            <div className="">
                <div className="d-sm-flex flex-sm-row flex-sm-row nft-buks-card-box  mb-4 ">
                    <div className="nft-buks-img position-relative ">
                        <img src={IMG1} alt="" />
                    </div>
                    <div className="d-flex justify-content-between flex-column nft-buks-text px-md-3 ">
                        <div className="mb-lg-4 mb-2">
                            <div className="o-id pb-3 ">Order ID- #432432552645</div>
                            <div className="d-flex justify-content-between align-items-center mob-wrap">
                                <div className=" d-flex justify-content-between align-items-center stake-name mb-3 mob-wrap">
                                    Alexander Graham bell bucks <span className="px-0 px-lg-2"><CollectibleIcon /> Collectible</span>
                                </div>
                                <div className="stake-name-price mb-3">$100</div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mob-wrap">
                                <div className=" d-flex justify-content-between align-items-center stake-name mb-3 mob-wrap  mob-column mob-start">Steve job bucks<span className="px-2"><RareIcon /> Rare</span></div>
                                <div className="stake-name-price mb-3">$1</div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-2 mob-wrap">
                            <div className="mb-4 mb-md-2">
                                <div className="staked-amount mb-2">Total <span> $101</span></div>
                                <div className="tnx-id">Txn ID- KFN12314Asafk21345  </div>
                            </div>
                            <div className="cta ">
                                <Button variant="outline-primary" onClick={props.showDetails} >View details</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-sm-flex flex-sm-row flex-sm-row nft-buks-card-box  mb-4 ">
                    <div className="nft-buks-img position-relative ">
                        <img src={IMG2} alt="" />
                    </div>
                    <div className="d-flex justify-content-between flex-column nft-buks-text px-md-3 ">
                        <div className="mb-lg-4 mb-2">
                            <div className="o-id pb-3 ">Order ID- #432432552645</div>
                            <div className="d-flex justify-content-between align-items-center mob-wrap  mob-column mob-start">
                                <div className=" d-flex justify-content-between align-items-center stake-name mb-1 mb-lg-3 mob-wrap">The billionaire’s bundle  <span className="px-0 px-lg-2" ><CollectibleIcon /> Collectible</span></div>
                                <div className="stake-name-price mb-1 mb-lg-3">$100</div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-2 mob-wrap">
                            <div className="mb-4 mb-md-2">
                                <div className="staked-amount mb-2">Total <span> $101</span></div>
                                <div className="tnx-id">Txn ID- KFN12314Asafk21345  </div>
                            </div>
                            <div className="cta ">
                                <Button variant="outline-primary" onClick={props.showDetails} >View details</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-sm-flex flex-sm-row flex-sm-row nft-buks-card-box  mb-4 ">
                    <div className="nft-buks-img position-relative ">
                        <img src={IMG1} alt="" />
                    </div>
                    <div className="d-flex justify-content-between flex-column nft-buks-text px-md-3 ">
                        <div className="mb-lg-4 mb-2">
                            <div className="o-id pb-3 ">Order ID- #432432552645</div>
                            <div className="d-flex justify-content-between align-items-center mob-wrap">
                                <div className=" d-flex justify-content-between align-items-center stake-name mb-3 mob-wrap">Alexander Graham bell bucks <span className="px-0 px-lg-2"><CollectibleIcon /> Collectible</span></div>
                                <div className="stake-name-price mb-3">$100</div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mob-wrap  mob-column mob-start">
                                <div className=" d-flex justify-content-between align-items-center stake-name mb-3 ">Steve job bucks<span className="px-2"><RareIcon /> Rare</span></div>
                                <div className="stake-name-price mb-3">$1</div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2 mb-md-4">
                            <div className="more-link">
                                +2 more
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-2 mob-wrap">
                            <div className="mb-4 mb-md-2">
                                <div className="staked-amount mb-2">Total <span> $101</span></div>
                                <div className="tnx-id">Txn ID- KFN12314Asafk21345  </div>
                            </div>
                            <div className="cta ">
                                <Button variant="outline-primary" onClick={props.showDetails} >View details</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NFTbucksCard;