import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ReactComponent as FooterLogo } from '../img/svg/logo-foot.svg';
// import  ShapeRight  from '../img/shape-right-line.png';


function Footer() {

  return (
    <div className="footer py-5 position-relative ">
      <div className="container pt-lg-5 pt-0 position-relative z-index-1">
        {/* limited edition bucks */}
        <div className="d-flex Browse-box justify-content-between align-items-center wow slideInUp">
          <h2>Browse the new <br />limited edition bucks</h2>
          <Button variant="light" className="rounded-pill me-3">Browse now</Button>
        </div>
        {/* Copyright */}
        <div className="row mt-lg-5 mt-0 pt-4">
          <div className="col-lg-7 wow slideInLeft">
            <div className="left-foot">
              <FooterLogo className="mb-5" />
              <p className="mb-2 mt-3">Subscribe to Starstake iNFT Newsletter</p>
              <Form>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form>
            </div>
          </div>
          <div className="col-lg-5 wow slideInRight">
            <div className="right-foot">
              <div className="row">
                <div className="col-lg-6 mt-lg-0 mt-4">
                  <h3>Main menu</h3>
                  <ul className="p-0 m-0">
                    <li>
                      <Link to="/AboutUs">Home</Link>
                    </li>
                    <li>
                      <Link to="/">Marketplace</Link>
                    </li>
                    <li>
                      <Link to="/">Get NFT bucks</Link>
                    </li>
                    <li>
                      <Link to="/">How it works</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 mt-lg-0 mt-4">
                  <h3>Follow us on</h3>
                  <ul className="p-0 m-0">
                    <li>
                      <Link to="/">Facebook</Link>
                    </li>
                    <li>
                      <Link to="/">Linkedin</Link>
                    </li>
                    <li>
                      <Link to="/">Twitter</Link>
                    </li>
                    <li>
                      <Link to="/">Instagram</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 text-center border-top mt-5 pt-4">
          <h6 className="m-0">Copyright @ Starstake 2021 - All rights reserved</h6>
        </div>
      </div>
      <div className="position-absolute end-0 top-0 shape-right">
        <img src="https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/shape-right-line.png" alt="" />
      </div>
    </div>
  )

}
export default Footer;
