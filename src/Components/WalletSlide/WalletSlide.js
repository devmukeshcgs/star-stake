import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'

import { ReactComponent as BackIconArrow } from "../../img/svg/backIcon.svg";
import { ReactComponent as CartIcon } from "../../img/svg/CartIcon.svg";
import CartList1 from "../../img/svg/cart-list.svg";
import { ReactComponent as AlertIcon } from "../../img/svg/alertIcon.svg";
import { ReactComponent as CloseCartIcon } from '../../img/svg/CloseCartIcon.svg';
import { ReactComponent as WalletIcon } from '../../img/svg/wallet-icon-A.svg';
import { ReactComponent as CopyIcon } from '../../img/svg/copyIcon.svg';
import { ReactComponent as BagIcon } from '../../img/svg/bag.svg';
import { ReactComponent as TicketIcon } from '../../img/svg/Ticket.svg';
import { ReactComponent as LogoutIcon } from '../../img/svg/Logout.svg';
import { ReactComponent as Bookmark2Icon } from '../../img/svg/Bookmark2.svg';
import { ReactComponent as DownArrowIcon } from '../../img/svg/down-arrow.svg';
import { ReactComponent as GearIcon } from '../../img/svg/gear.svg';
import { ReactComponent as LogOutIcon } from '../../img/svg/log-out.svg';
import { ReactComponent as RefreshIcon } from '../../img/svg/refresh.svg';
import { ReactComponent as ProfileIcon } from '../../img/svg/profile.svg';
import { ReactComponent as Wallet2Icon } from '../../img/svg/Wallet.svg';

import AvtarImg from '../../img/avatar.png';

import MyCrypto from './MyCrypto'
import MyBucks from './MyBucks'
import MyNFTs from './MyNFTs'
import MyAccessTokens from './MyAccessTokens'
function WalletSlide() {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <>
            <Button onClick={handleToggle} className="p-0 nav-link wallet-nav-item position-relative ms-2">
                <WalletIcon />
                {/* <span className="total-cart position-absolute top-0 d-flex align-items-center justify-content-center">2</span>
                <div className="hover-open-dropdown position-absolute">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <Link to="/" className="me-2"><CloseCartIcon /></Link> <Link to="/"> !</Link>
                    </div>
                </div> */}
            </Button>
            <div className={isActive ? "wallet-slide-right wallet-none" : 'wallet-slide-right'}>
                <div className="wallet-bg text-white">
                    <div className="d-flex text-white justify-content-between px-2 pt-2 test">
                        <div className="wallet-heading d-flex ">
                            {/* <Button onClick={handleToggle} className="p-0 bg-wallet-close">
                                <BackIconArrow />
                            </Button> */}
                            <div className="my-wallet-dropdown">
                                <h3 className="ms-2">
                                    <span className="user-pro-pic me-2">
                                        <img src={AvtarImg} alt="" srcset="" />
                                    </span>My wallet <DownArrowIcon className="ms-2" /></h3>
                                <div className="drop-down-cont position-absolute  pl-4">
                                    <div className="hover-open-dropdown  p-0">
                                        <ul className="d-flex flex-column justify-content-start align-items-start p-0">
                                            <li>
                                                <Link to="/Setting" className=" "><GearIcon className="me-2" /> Settings</Link>
                                            </li>
                                            <li>
                                                <Link to="/Profile" className=" "><ProfileIcon className="me-2" /> Profile</Link>
                                            </li>
                                            <li>
                                                <Link to="/" className=" "><RefreshIcon className="me-2" /> Refresh funds</Link>
                                            </li>
                                            <li>
                                                <Link to="/" className=" "><LogOutIcon className="me-2" /> Logout</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wallet-address">
                            0mkix23......XFEe <CopyIcon className="me-2" />
                        </div>
                    </div>
                    <div className="total p-2 test">
                        <div>Total balance</div>
                        <div className="amount">$100,000 USD</div>
                    </div>
                    <div className="add-funds test">
                        <Button variant="primary" block>Add Funds</Button>
                    </div>

                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Tab.Content>
                            <Tab.Pane className="tab-cont-scroll" eventKey="first">
                                <div><MyCrypto /></div>
                            </Tab.Pane>
                            <Tab.Pane className="tab-cont-scroll" eventKey="second">
                                <div><MyBucks /></div>
                            </Tab.Pane>
                            <Tab.Pane className="tab-cont-scroll" eventKey="third">
                                <div><MyNFTs /></div>
                            </Tab.Pane>
                            <Tab.Pane className="tab-cont-scroll" eventKey="forth">
                                <div><MyAccessTokens /></div>
                            </Tab.Pane>
                        </Tab.Content>
                        {/* FOOTER */}
                        <div className="wallet-slide-footer">
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        <Wallet2Icon className="me-3" />
                                        My Crypto</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        <BagIcon className="me-3" />
                                        My Bucks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        <Bookmark2Icon className="me-3" />
                                        My iNFTs</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="forth">
                                        <TicketIcon className="me-3" />
                                        My Access Tokens</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Link className="logout" to="/"><LogoutIcon className="me-3" /> Logout</Link>
                        </div>
                    </Tab.Container>
                </div>
            </div>
        </>
    )
}
export default WalletSlide;