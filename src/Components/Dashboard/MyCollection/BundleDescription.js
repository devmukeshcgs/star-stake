import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BadgeIcon } from "../../../img/svg/start-badge.svg";
import { ReactComponent as BoxTileIcon } from "../../../img/svg/box-tile.svg";
import { ReactComponent as DimondIcon } from "../../../img/svg/dimond.svg";
import { ReactComponent as CartIcon } from "../../../img/svg/cart.svg";


function BundleDescription() {

    return (
        <div className="bundle-detail">
            <div className="box-address p-4 mb-4">
                <div className="text-container">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="path">/Bundle Details</h5>
                        <h5 className="bundle-price">$1000</h5>
                    </div>
                    <div className="created-by">
                        <p>Bundled by  <Link to="/userid">JChris Hawk</Link></p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="address-detail">
                            <h2>The billionaire’s party bundle</h2>
                            <p className=" py-2"><BadgeIcon /> <BoxTileIcon /> <DimondIcon /></p>
                            <button className=" d-flex align-items-center justify-content-center add-to-cart"><CartIcon /> &nbsp;Add to cart</button>
                            <p className=" py-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu condimentum urna. In vel semper nibh. Sed quis interdum nulla, sed suscipit erat. Aenean sed finibus orci, a vehicula diam. Vestibulum at fringilla leo. Nam quis sem lacus. Sed magna nisl, faucibus id maximus et, auctor non enim. Integer eget nisl et diam blandit facilisis. In faucibus velit condimentum, faucibus metus non, vehicula urna.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default BundleDescription;
