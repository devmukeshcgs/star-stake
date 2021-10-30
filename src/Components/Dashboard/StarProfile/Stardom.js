import React from 'react';
import Button from 'react-bootstrap/Button';
import StardomImg from '../../../img/stardom.png';
import { Link } from 'react-router-dom';

function Stardom(props) {
    return (
        <div className="stardom-section my-4">
            {/* d-lg-flex justify-content-between align-content-center align-items-center p-2 flex-sm-column flex-md-row */}
            <div className=" d-lg-flex justify-content-between align-content-center align-items-center position-relative flex-sm-column flex-md-row">
                <div className="stars-img-bg">
                    <img className="" src="https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/stardom-bg.png" alt="" />
                </div>

                <div className="startdom-text text-white py-4">
                    <h4 className="my-5">Stardom awaits you!</h4>
                    <p>Starstake is an open platform that connects fans and consumers to their favorite intellectual properties. You don’t need to be famous or have thousands of followers to be a star on Starstake. Big or small, one or many... if you own it, you can tokenize it as an infinity NFT™.
                    </p>
                    <p>
                        <b>Create your own access economy today on Starstake. </b>
                    </p>
                    <div className="cta my-4">
                        <Button variant="primary" className="mr-4">Become a star</Button>&nbsp;&nbsp;
                        <Link to="/" className="link-white" >How it works?</Link>
                    </div>
                </div>
                <div className="stars-img">
                    <img src="https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/star-profile/stardom.png" alt="" />
                </div>
            </div>

        </div>
    )
}
export default Stardom;