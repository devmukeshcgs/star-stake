import React from 'react';
import {Row, Col} from 'react-bootstrap';

function Notifications()  {  

  return (
    <div className="profile-text py-5">
      <Row>
        <Col lg={3} md={3}>
            <div  className="text-end pe-lg-5 mb-lg-0 mb-4">
              <h6>Notifications</h6>
            </div>
        </Col>
        <Col lg={7} md={9}>
            <div className="ps-lg-5">
              <div className="d-flex justify-content-between mb-5">
                  <div className="noti-text">
                    <h5>Starstake news/updates</h5>
                    <p>Occasional updates from starstake team</p>
                  </div>
                  <div>
                  <div className='custom-control custom-switch'>
                    <input
                      type='checkbox'
                      className='custom-control-input'
                      id='customSwitchesChecked'
                      defaultChecked
                    />
                    <label className='custom-control-label' htmlFor='customSwitchesChecked'>
                    </label>
                  </div>
                  </div>
              </div>
              <div className="d-flex justify-content-between mb-5">
                  <div className="noti-text">
                    <h5>iNFT Drops </h5>
                    <p>When a new inft becomes available for staking</p>
                  </div>
                  <div>
                  <div className='custom-control custom-switch'>
                    <input
                      type='checkbox'
                      className='custom-control-input'
                      id='customSwitchesChecked1'
                      defaultChecked
                    />
                    <label className='custom-control-label' htmlFor='customSwitchesChecked1'>
                    </label>
                  </div>
                  </div>
              </div>
              <div className="d-flex justify-content-between mb-5">
                  <div className="noti-text">
                    <h5>My Stake Updates</h5>
                    <p>When an update is published about any of your staked INFTs</p>
                  </div>
                  <div>
                  <div className='custom-control custom-switch'>
                    <input
                      type='checkbox'
                      className='custom-control-input'
                      id='customSwitchesChecked2'
                      defaultChecked
                    />
                    <label className='custom-control-label' htmlFor='customSwitchesChecked2'>
                    </label>
                  </div>
                  </div>
              </div>
              <div className="d-flex justify-content-between mb-5">
                  <div className="noti-text">
                    <h5>My Stake Royalties</h5>
                    <p>When you receive a royalty payment on your staked INFTs</p>
                  </div>
                  <div>
                  <div className='custom-control custom-switch'>
                    <input
                      type='checkbox'
                      className='custom-control-input'
                      id='customSwitchesChecked3'
                      defaultChecked
                    />
                    <label className='custom-control-label' htmlFor='customSwitchesChecked3'>
                    </label>
                  </div>
                  </div>
              </div>
              <div className="d-flex justify-content-between mb-5">
                  <div className="noti-text">
                    <h5>When you receive a royalty payment on your staked INFTs</h5>
                    <p>When a reply is made on your comment on an iNFT</p>
                  </div>
                  <div>
                  <div className='custom-control custom-switch'>
                    <input
                      type='checkbox'
                      className='custom-control-input'
                      id='customSwitchesChecked4'
                      defaultChecked
                    />
                    <label className='custom-control-label' htmlFor='customSwitchesChecked4'>
                    </label>
                  </div>
                  </div>
              </div>
              <div className="d-flex justify-content-between mb-5">
                  <div className="noti-text">
                    <h5>Referral successful</h5>
                    <p>When an iNFT your referred is purchased</p>
                  </div>
                  <div>
                  <div className='custom-control custom-switch'>
                    <input
                      type='checkbox'
                      className='custom-control-input'
                      id='customSwitchesChecked5'
                      defaultChecked
                    />
                    <label className='custom-control-label' htmlFor='customSwitchesChecked5'>
                    </label>
                  </div>
                  </div>
              </div>
              <div className="d-flex justify-content-between mb-5">
                  <div className="noti-text">
                    <h5>Daily Staking Summary</h5>
                    <p>A daily performance summary of your INFT portfolio</p>
                  </div>
                  <div>
                  <div className='custom-control custom-switch'>
                    <input
                      type='checkbox'
                      className='custom-control-input'
                      id='customSwitchesChecked6'
                      defaultChecked
                    />
                    <label className='custom-control-label' htmlFor='customSwitchesChecked6'>
                    </label>
                  </div>
                  </div>
              </div>
              <div className="d-flex justify-content-between mb-5">
                  <div className="noti-text">
                    <h5>Weekly Staking Summary</h5>
                    <p>WA weekly performance summary of your INFT portfolio</p>
                  </div>
                  <div>
                  <div className='custom-control custom-switch'>
                    <input
                      type='checkbox'
                      className='custom-control-input'
                      id='customSwitchesChecked7'
                      defaultChecked
                    />
                    <label className='custom-control-label' htmlFor='customSwitchesChecked7'>
                    </label>
                  </div>
                  </div>
              </div>
              <div className="d-flex justify-content-between mb-5">
                  <div className="noti-text">
                    <h5>Monthly Staking Summary</h5>
                    <p>A monthly performance summary of your INFT portfolio</p>
                  </div>
                  <div>
                  <div className='custom-control custom-switch'>
                    <input
                      type='checkbox'
                      className='custom-control-input'
                      id='customSwitchesChecked8'
                      defaultChecked
                    />
                    <label className='custom-control-label' htmlFor='customSwitchesChecked8'>
                    </label>
                  </div>
                  </div>
              </div>
            </div>
        </Col>
      </Row>
     </div>
    )
  
  }
export default Notifications;
