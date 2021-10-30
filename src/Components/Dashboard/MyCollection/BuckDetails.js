import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ListImgA } from '../../../img/svg/YourCollection/listimg-E.svg';

import Header from "../../Header";
import SideNav from "../../SideNav";
import Description from "./Description";
import { ReactComponent as BackIconArrow } from "../../../img/svg/backIcon.svg";
import { Row, Col } from 'react-bootstrap';
import CollectionList from "./CollectionList";

class BuckDetails extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="new-user-setup">
                <Header history={this.props.history} prop={this.props.prop}  connect={() => { this.props.connect(); }} />
                <SideNav />
                <div className="right-wrapper">
                    <div className="p-5 main  text-white">
                        <div className="back-link d-flex">
                            <Link to="/">
                                <BackIconArrow />
                            </Link>
                            <h3 className="ms-4">Your Collection - Description</h3>
                        </div>
                        <div className="description-section mt-5">
                            <Row >
                                <Col lg={3}>
                                    <div className="detail-img">
                                        <ListImgA />
                                    </div>
                                    <div className="py-4">
                                        NFTb availability
                                    </div>
                                    <div>
                                        Radio Button
                                    </div>
                                    <div className="availability">
                                        <p>*All bucks are set to <span>available</span> by default.</p>
                                        <button className=" d-flex align-items-center justify-content-center add-to-cart px-3">Add to cart</button>
                                    </div>
                                </Col>
                                <Col lg={9}>
                                    <Description />
                                </Col>
                            </Row>
                            <Row >
                                <Col lg={12}>
                                    <CollectionList />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BuckDetails;
