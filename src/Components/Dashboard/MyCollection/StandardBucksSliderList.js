import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ListImgA } from '../../../img/svg/YourCollection/listimg-A.svg';
import { ReactComponent as ListImgB } from '../../../img/svg/YourCollection/listimg-B.svg';
import { ReactComponent as ListImgC } from '../../../img/svg/YourCollection/listimg-C.svg';
import { ReactComponent as ClickIcon } from '../../../img/svg/clickIcon.svg';
import { ReactComponent as BadgeIcon } from "../../../img/svg/start-badge.svg";
import { ReactComponent as BoxTileIcon } from "../../../img/svg/box-tile.svg";
import { ReactComponent as RArrowIcon } from "../../../img/svg/right-arrow.svg";

function StandardBucksSliderList(props) {
    console.log(props);

    const [count, setCount] = useState(0);
    const list = [
        {
            name: "One",
            img: ListImgA
        },
        {
            name: "Two",
            img: ListImgB
        },
        {
            name: "Three",
            img: ListImgC
        }
    ]
    return (
        <div className="bucks-slider pt-3">
            <h5> {props.icon === "badge" ? <BadgeIcon /> : props.icon === "tile" ? <BoxTileIcon /> : null} &nbsp;{props.title} <span className="count">({props.count})</span></h5>
            <div className="pager">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="d-flex justify-content-between mob-wrap">
                <div className="bucks-slider-box mb-4 p-2">
                    <div className="img-collection position-relative">
                        <ListImgA />
                        <div className="img-hover-click position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center text-center align-items-center">
                            <Link to="/BuckDetails">
                                <ClickIcon />
                                <p>Click for buck details</p>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="bucks-slider-box mb-4 p-2">
                    {/* Img List */}
                    <div className="img-collection position-relative">
                        {/* Img */}
                        <ListImgB />
                        {/* Hover Link */}
                        <div className="img-hover-click position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center text-center align-items-center">
                            <Link to="/">
                                <ClickIcon />
                                <p>Click for buck details</p>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="bucks-slider-box mb-4 p-2">
                    {/* Img List */}
                    <div className="img-collection position-relative">
                        {/* Img */}
                        <ListImgC />
                        {/* Hover Link */}
                        <div className="img-hover-click position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center text-center align-items-center">
                            <Link to="/">
                                <ClickIcon />
                                <p>Click for buck details</p>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="bucks-slider-box mb-4 p-2">
                    <div className="img-collection position-relative next-arrow-cont">
                        <div className="next-arrow position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center text-center align-items-center">
                            <RArrowIcon />
                        </div>
                        {/* <div className="img-hover-click position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center text-center align-items-center">
                            <Link to="/">
                                <ClickIcon />
                                <p>Click for buck details</p>
                            </Link>
                        </div> */}
                    </div>

                </div>
            </div>
        </div>
    )
}
export default StandardBucksSliderList;
