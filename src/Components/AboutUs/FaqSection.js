import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function FaqSection() {

  return (
    <div className="faq-section py-5 bg-white position-relative overflow-hidden">
      <div className="container py-lg-5 py-0 position-relative z-index-1">
        <div className="heading mb-5">
          <h2>We know you have <br />questions</h2>
        </div>
        <div className="row">
          <div className="col-lg-6 wow slideInLeft">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>What are NFT bucks?</Accordion.Header>
                <Accordion.Body>
                  NFT bucks are used to stake iNFTs on StarStake.  NFT Bucks are a digital currency backed by stabilized crypto tokens
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>How can i buy NFT bucks?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet,
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Are NFT Bucks stable?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet,
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>What blockchain network is used</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet,
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="position-absolute end-0 faq-dashboard-img col-lg-6 text-end ps-4 wow slideInRight">
        <img src="https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/Dashboard-4.png" alt="" />
      </div>
      <div className="position-absolute start-0 shape-left">
        <img src="https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/shape-left-line.png" alt="" />
      </div>
    </div>
  )

}
export default FaqSection;
