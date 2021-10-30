import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from "../../Header";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Container } from 'react-bootstrap';
import { ReactComponent as CopyIcon } from '../../../img/svg/copyIcon.svg';
import { ReactComponent as MintIcon } from '../../../img/svg/mint.svg';
import { ReactComponent as StackFanIcon } from '../../../img/svg/staked-fans.svg';
import { ReactComponent as QuestionIcon } from '../../../img/svg/question-circle.svg';
import { ReactComponent as SmallLogo } from '../../../img/svg/small-logo.svg';
import { ReactComponent as ModalCloseIcon } from '../../../img/svg/modal-close.svg';
import StarImg from '../../../img/StarProfile/star-img.png';
// import DeviderPNG from '../../../img/devider.png';
import AboutBG from '../../../img/about-bg.png';
import { ReactComponent as GetbucksIcon } from '../../../img/svg/sidenavicon/CardListIcon.svg';
import { ReactComponent as ShareIcon } from '../../../img/svg/share.svg';
import { ReactComponent as Devider } from '../../../img/svg/devider.svg';
import AboutStarPro from './AboutStarPro';
import WatchlistCard from "./WatchlistCard";
import MyNftBucks from './../StakeWatchlist/MyNftBucks';
import SimilarArtitstsCard from "./SimilarArtitstsCard";
import WhyYouShouldPurchase from "./WhyYouShouldPurchase";
import FaqStakingPayments from "./FaqStakingPayments";
import Stardom from './Stardom';
import StarProFooter from './StarProFooter';
import { ReactComponent as LogoS } from "../../../img/svg/logo-s.svg";
import { ReactComponent as FacebookIcon } from "../../../img/svg/fb.svg";
import { ReactComponent as InstagramIcon } from "../../../img/svg/ig.svg";
import { ReactComponent as TwitterIcon } from "../../../img/svg/tw.svg";
import { ReactComponent as TikTokIcon } from "../../../img/svg/tt.svg";
import { ReactComponent as FooterLogo } from '../../../img/svg/footer-logo.svg';
import CollectionList from '../MyCollection/CollectionList'
function StarProfile(props) {
   //Modal state
   const [show, setShow] = useState(false);

   //Modal
   const handleShow = () => {
      setShow(true)
   };
   const handleClose = () => {
      setShow(false);
   }
   //SCROLL
   let refMyiNFTs = React.useRef();
   const scrollTo = (ref) => {
      if (!ref.current) return;
      ref.current.scrollIntoView({ behavior: "smooth" });
   }

   return (
      <div className="star-profile">
         <Header history={props.history} prop={props.prop} connect={() => { props.connect(); }} />
         {/* <SideNav /> */}
         <div className="full-wrapper">
            <div className="main  text-white">
               <div className="star-profile-section">
                  <div className="d-lg-flex flex-sm-column align-items-stretch flex-md-row header-sec">
                     <div className="start-img">
                        {/* <img src={StarImg} alt="" /> */}
                     </div>
                     <div className="start-details">
                        <div className="start-pro d-flex flex-row justify-content-start align-content-center align-items-center  mb-4">
                           <div className="pro-pic m-2">
                              <div className="pic">
                                 <img src={StarImg} alt="" />
                              </div>
                           </div>
                           <div className="pro-name m-2">
                              <div>Sheng Belmonte</div>
                              <div className="wallet-addr d-flex flex-row">0x23......XFEF342r5234GHSDT&nbsp;&nbsp;<CopyIcon className="pl-2" /></div>
                           </div>
                        </div>
                        <div className="pro-bio">
                           <p>Buying with crypto online is not a good experience. From the constant price changes to the conversion to actual money, there's a reason we don't use it to buy merchandise online. NFTbucks take the power of cryptocurrency and improves it for the real world of ecommerce visually.</p>
                        </div>
                        <div className="nft-status d-flex justify-content-between align-content-center align-aitems-center mb-4">
                           <div className="nft-minted ">
                              <div className="count">3</div>
                              <div className="text"><MintIcon />&nbsp;# of iNFTs minted</div>
                           </div>
                           <div className="staked-fans-count">
                              <div className="count">800,000</div>
                              <div className="text"><StackFanIcon /> &nbsp;Total staked fans</div>
                           </div>
                        </div>
                        <div className="cta text-center mb-4 d-grid gap-2">
                           <Button variant="primary">Stake my likeness</Button>
                        </div>
                        <div className="info text-center d-flex justify-content-center align-content-center align-aitems-center">
                           Get access to my exclusive fan rewards  &nbsp;<QuestionIcon className="svg-q" />
                        </div>
                        <div className="stake-my-iNFTs-link text-center">
                           {/* <Link >or Stake my iNFTs</Link> */}
                           <Button variant="link" onClick={() => scrollTo(refMyiNFTs)}>or Stake my iNFTs</Button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="bottom-band ">
                  <Container>
                     <div className="d-lg-flex justify-content-between align-content-center align-items-center p-2 flex-sm-column flex-md-row">
                        <div className="logo-music-profile"> <SmallLogo />  | music | profile </div>
                        <div className="cta d-md-flex flex-md-row justify-content-center align-content-center align-aitems-center  d-flex flex-column">
                           <div className="px-2" onClick={handleShow}><ShareIcon className="share-icon" />&nbsp;Share</div>
                           <div className="px-2"><MintIcon className="mint-icon" />&nbsp;Reward tokens</div>
                           <div className="px-2"><GetbucksIcon className="bucks-icon" />&nbsp;NFT bucks</div>
                           <div className="px-2"><StackFanIcon className="stack-fan-icon" />&nbsp;Collectable token</div>
                        </div>
                     </div>
                  </Container>
               </div>

               <div className="p-2 p-md-5 position-relative">
                  {/* <img className="about-bg" src={AboutBG} alt="" srcset="" /> */}
                  <AboutStarPro />
               </div>

               <div className="p-3 p-md-5" ref={refMyiNFTs}>
                  <div className="watchlist-section mt-5" >
                     <h4 className="h-30">My iNFTs</h4>
                     <WatchlistCard cardCount={3} />
                     <div className="text-center my-4">
                        <Button variant="outline-primary">See more</Button>
                     </div>
                  </div>
               </div>

               <div className="p-3 p-md-5">
                  <div className="my-nft-section mt-5">
                     <h4 className="h-30">My NFT bucks</h4>
                     <MyNftBucks cardCount={3} />
                     <div className="text-center my-5">
                        <Button variant="outline-primary">See more</Button>
                     </div>
                  </div>
               </div>

               <div className="p-3 p-md-5">
                  <div className="mt-5">
                     <h4 className="h-30">Similar Artitsts</h4>
                     <SimilarArtitstsCard />
                  </div>
               </div>
               <div className="p-3 p-md-5">
                  <div className="mt-5">
                     <h4 className="h-30 my-5">Why you should purchase StarStake iNFTs...</h4>
                     <WhyYouShouldPurchase />
                  </div>
               </div>
            </div>
            <div className="main pt-5 text-black png-devider">
               <img src="https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/devider.png" alt="" />
               <div className="devider-logo p-4"><LogoS /></div>
            </div>
            {/* FaqStakingPayments */}
            <div className="main p-5 text-black bg-white">
               <FaqStakingPayments />
            </div>
            {/* STARDOM */}
            <div className="main pt-5 text-black bg-white">
               <Stardom />
            </div>
            <div className="main py-5 text-white">
               <StarProFooter />
            </div>
         </div>
         <Modal
            className="shareModal"
            show={show}
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            size="lg"
         >
            <Modal.Body className="justify-content-center  p-4">
               <div className="p-4 position-relative">
                  <div className="closebtn" onClick={handleClose} > <ModalCloseIcon /></div>
                  <h4 className="share-modal-text mb-4 ">Share this profile page with others to earn instant rewards!</h4>
                  <div className="social-links">
                     <div className="social px-2 mb-4">
                        <Link><FacebookIcon /></Link>
                        <Link><InstagramIcon /></Link>
                        <Link><TwitterIcon /></Link>
                     </div>
                  </div>
                  <div>
                     <Form>
                        <InputGroup className="mb-2">
                           <FormControl readOnly id="link" placeholder="" size="lg" value="https://www.loom.com/share/aa1083...." />
                           <InputGroup.Text >Copy</InputGroup.Text>
                        </InputGroup>
                        <Form.Text>
                           <Link to="/"> How to earn referral rewards? </Link>
                        </Form.Text>
                     </Form>
                  </div>
               </div>
            </Modal.Body>
         </Modal>
      </div >
   )
}
export default StarProfile;
