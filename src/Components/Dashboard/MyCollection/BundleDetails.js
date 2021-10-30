import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BundleImg } from '../../../img/svg/YourCollection/bundle.svg';

import Header from "../../Header";
import SideNav from "../../SideNav";
import BundleDescription from "./BundleDescription";
import { ReactComponent as BackIconArrow } from "../../../img/svg/backIcon.svg";

import { Row, Col } from 'react-bootstrap';
import StandardBucksSliderList from "./StandardBucksSliderList";

class BundleDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="new-user-setup">
                <Header history={this.props.history} connect={() => { this.props.connect(); }} />
                <SideNav />
                <div className="right-wrapper">
                    <div className="p-5 main  text-white">
                        <div className="back-link d-flex">
                            <Link to="/">
                                <BackIconArrow />
                            </Link>
                            <h3 className="ms-4">Go back to get bucks</h3>
                        </div>
                        <div className="bundle-description-section mt-5 mb-4">
                            <Row className="abs-bg-row">
                                <Col lg={2}> </Col>
                                <Col lg={10}>
                                    <div className="abs-bg p-4 mb-2">
                                    </div>
                                </Col>
                            </Row>

                            <Row >
                                <Col lg={3}>
                                    <div className="detail-img">
                                        <BundleImg />
                                    </div>
                                </Col>
                                <Col lg={9}>
                                    <BundleDescription />
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row >
                                <Col lg={2}>  </Col>
                                <Col lg={10}>
                                    <div className="dark-bg p-4 mb-4">
                                        <StandardBucksSliderList
                                            title={"Standard bucks in bundle"}
                                            count={5}
                                            icon={"badge"}
                                        />
                                    </div>
                                    <div className="dark-bg p-4 mb-4">
                                        <StandardBucksSliderList
                                            title={"Collectable bucks in bundle"}
                                            count={2}
                                            icon={"tile"}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BundleDetails;
