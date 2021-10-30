import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { ReactComponent as FacebookIcon } from "../../../img/svg/fb.svg";
import { ReactComponent as InstagramIcon } from "../../../img/svg/ig.svg";
import { ReactComponent as TwitterIcon } from "../../../img/svg/tw.svg";
import { ReactComponent as TikTokIcon } from "../../../img/svg/tt.svg";

function AboutStarPro() {
    return (<div className="">
        <div className="about-pro d-md-flex flex-md-row justify-content-start align-content-center align-aitems-center d-flex flex-column">
            <div className="about-img  mx-4 ">
                <img src="https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/star-profile/about-img.png" alt="" />
            </div>
            <div className="about-text pb-5">
                <img className="about-bg" src="https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/star-profile/about-bg.png" />
                <h3 className="px-4 pt-4 pb-4">About me</h3>
                <div className="px-4 pb-5">
                    <p>
                        Buying with crypto online is not a good experience. From the constant price changes to the conversion to actual money, there's a reason we don't use it to buy merchandise online. NFTbucks take the power of cryptocurrency and improves it for the real world of ecommerce visually.
                    </p>
                </div>
                <div className="social px-2 mb-4">
                    <Link><FacebookIcon /></Link>
                    <Link><InstagramIcon /></Link>
                    <Link><TwitterIcon /></Link>
                    <Link><TikTokIcon /></Link>
                </div>
                <div className="cta px-4 mb-4 ">
                    <Button variant="primary">Stake my likeness</Button>
                </div>
            </div>
        </div>
    </div>)
}
export default AboutStarPro;