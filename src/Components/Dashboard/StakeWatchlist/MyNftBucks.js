import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as ListImgA } from '../../../img/svg/YourCollection/listimg-A.svg';
import { ReactComponent as ListImgB } from '../../../img/svg/YourCollection/listimg-B.svg';
import { ReactComponent as ListImgC } from '../../../img/svg/YourCollection/listimg-C.svg';
import { ReactComponent as ListImgD } from '../../../img/svg/YourCollection/listimg-D.svg';
import { ReactComponent as ClickIcon } from '../../../img/svg/clickIcon.svg';
import { ReactComponent as ShapeIcon1 } from '../../../img/svg/shape1.svg';
import { ReactComponent as ShapeIcon2 } from '../../../img/svg/shape2.svg';
import { ReactComponent as ShapeIcon3 } from '../../../img/svg/shape3.svg';
function MyNftBucks(props) {

    return (
        <div className="collection-list pt-3">
            <div className="d-flex justify-content-between mob-wrap mt-4">
                <div className="collection-list-box mb-4">
                    <div className="img-collection position-relative">
                        {/* <ListImgA /> */}
                        <img src="https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/Carts1.png" alt="" />
                        <div className="img-hover-click position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center text-center align-items-center">
                            <Link to="/BuckDetail">
                                <ClickIcon />
                                <p>Click for buck details</p>
                            </Link>
                        </div>
                    </div>
                    <div className="collection-text pt-3">
                        <div className="name-br mb-3">
                            <ShapeIcon3 className="me-2" /> Rare
                        </div>
                        <h5>Thomas edison bucks Founders edition</h5>
                        <div className="amount-cta pt-4 d-flex justify-content-between align-items-center">
                            <div className="amount">$10</div>
                            <div className="cta">Add to cart</div>
                        </div>
                        {/* <div className="d-flex justify-content-between">
                            <div className="price d-flex align-items-center justify-content-center">
                                $10
                            </div>
                            <div className="qty">Qty: 3</div>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <h6>Locked</h6>
                            <span>
                                <LikeIcon />
                            </span>
                        </div> */}
                    </div>
                </div>
                <div className="collection-list-box mb-4">
                    {/* Img List */}
                    <div className="img-collection position-relative">
                        {/* Img */}
                        {/* <ListImgB /> */}
                        <img src="https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/Carts2.png" alt="" />

                        {/* Hover Link */}
                        <div className="img-hover-click position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center text-center align-items-center">
                            <Link to="/BuckDetail">
                                <ClickIcon />
                                <p>Click for buck details</p>
                            </Link>
                        </div>
                    </div>
                    {/* Text-List */}
                    <div className="collection-text pt-3">
                        <div className="name-br mb-3">
                            <ShapeIcon2 className="me-2" /> Collectable
                        </div>
                        {/* Name */}
                        <h5>Stan lee bucks Founders edition</h5>
                        <div className="amount-cta pt-4 d-flex justify-content-between align-items-center">
                            <div className="amount">$1000</div>
                            <div className="cta">Add to cart</div>
                        </div>
                    </div>
                </div>
                <div className="collection-list-box mb-4">
                    {/* Img List */}
                    <div className="img-collection position-relative">
                        {/* Img */}
                        <ListImgC />
                        {/* <img src="https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/Carts3.png" alt="" /> */}

                        {/* Hover Link */}
                        <div className="img-hover-click position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center text-center align-items-center">
                            <Link to="/BuckDetail">
                                <ClickIcon />
                                <p>Click for buck details</p>
                            </Link>
                        </div>
                    </div>
                    {/* Text-List */}
                    <div className="collection-text pt-3">
                        <div className="name-br mb-3">
                            <ShapeIcon1 className="me-2" /> Standard
                        </div>
                        {/* Name */}
                        <h5>Another Stan lee bucks Founders edition</h5>
                        <div className="amount-cta pt-4 d-flex justify-content-between align-items-center">
                            <div className="amount">$1000</div>
                            <div className="cta">Add to cart</div>
                        </div>
                    </div>
                </div>
                <div className="collection-list-box mb-4">
                    {/* Img List */}
                    <div className="img-collection position-relative">
                        {/* Img */}
                        <ListImgD />
                        {/* Hover Link */}
                        <div className="img-hover-click position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center text-center align-items-center">
                            <Link to="/BuckDetail">
                                <ClickIcon />
                                <p>Click for buck details</p>
                            </Link>
                        </div>
                    </div>
                    {/* Text-List */}
                    <div className="collection-text pt-3">
                        <div className="name-br mb-3">
                            <ShapeIcon3 className="me-2" /> Rare
                        </div>
                        {/* Name */}
                        <h5>Steve jobs bucks Founders edition</h5>
                        <div className="amount-cta pt-4 d-flex justify-content-between align-items-center">
                            <div className="amount">$10</div>
                            <div className="cta">Add to cart</div>
                        </div>
                    </div>
                </div>
                <div className="collection-list-box mb-4">
                    {/* Img List */}
                    <div className="img-collection position-relative">
                        {/* Img */}
                        {/* <ListImgA /> */}
                        <img src="https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/Carts1.png" alt="" />

                        {/* Hover Link */}
                        <div className="img-hover-click position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center text-center align-items-center">
                            <Link to="/BuckDetail">
                                <ClickIcon />
                                <p>Click for buck details</p>
                            </Link>
                        </div>
                    </div>
                    {/* Text-List */}
                    <div className="collection-text pt-3">
                        <div className="name-br mb-3">
                            <ShapeIcon3 className="me-2" /> Rare
                        </div>
                        {/* Name */}
                        <h5>Thomas edison bucks Founders edition</h5>
                        <div className="amount-cta pt-4 d-flex justify-content-between align-items-center">
                            <div className="amount">$10</div>
                            <div className="cta">Add to cart</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default MyNftBucks;