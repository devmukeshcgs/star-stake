import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import IMG1 from "../../../img/svg/WatchlistCard/001.png";
import IMG2 from "../../../img/svg/WatchlistCard/002.png";
import { ReactComponent as FacebookIcon } from "../../../img/svg/fb.svg";
import { ReactComponent as InstagramIcon } from "../../../img/svg/ig.svg";
import { ReactComponent as TwitterIcon } from "../../../img/svg/tw.svg";
import { ReactComponent as TikTokIcon } from "../../../img/svg/tt.svg";
import { ReactComponent as FooterLogo } from '../../../img/svg/footer-logo.svg';


function StarProFooter(props) {
    return (
        <div className="star-footer  my-5">
            <Container>
                <Row>
                    <Col sm={7}>
                        <FooterLogo className="mb-4" />
                        <div className="subscribe py-4">
                            <Form>
                                <Form.Group className="" controlId="formBasicEmail">
                                    <Form.Label>Subscribe to Starstake iNFT Newsletter</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" />
                                </Form.Group>
                                {/* <Button variant="primary" type="submit">
                                    Submit
                                </Button> */}
                            </Form>
                        </div>
                        <div className="social-links py-4">
                            <p>Follow Starstake</p>
                            <div className="social px-2 mb-4">
                                <Link><FacebookIcon /></Link>
                                <Link><InstagramIcon /></Link>
                                <Link><TwitterIcon /></Link>
                                <Link><TikTokIcon /></Link>
                            </div>
                        </div>
                    </Col>
                    <Col sm={5}>
                        <div className="d-flex flex-row justify-content-between">
                            <div className="f-menus">
                                <div>Main menu</div>
                                <ul className="p-0 m-0">
                                    <li>
                                        <Link to="/">Home</Link>
                                        <Link to="/">Marketplace</Link>
                                        <Link to="/">Get NFT bucks</Link>
                                        <Link to="/">How it works</Link>
                                        <Link to="/">Become a star</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="f-menus">
                                <div>Other menu</div>
                                <ul className="p-0 m-0">
                                    <li>
                                        <Link to="/">Astra Program</Link>
                                        <Link to="/">Staker</Link>
                                        <Link to="/">Star</Link>
                                        <Link to="/">Blog</Link>
                                        <Link to="/">Help Center</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="pt-4 tnc">
                    <Col sm={7}>2021 - Starstake™. All rights reserved</Col>
                    <Col sm={5} className="">
                        <div className="d-flex flex-row justify-content-between">
                            <div><Link to="/">Terms & Conditions</Link></div>
                            <div><Link to="/">Privacy Policy</Link></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default StarProFooter;