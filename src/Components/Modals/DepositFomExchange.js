import React from 'react'
import { Link } from 'react-router-dom';

import { ReactComponent as BackIcons } from '../../img/svg/backIcon.svg';
import { ReactComponent as PngkitIcon } from '../../img/svg/pngkitIcon.svg';
import { ReactComponent as BackIconArrow } from "../../img/svg/backIcon.svg";
import { ReactComponent as CopyIcon } from "../../img/svg/copyIcon.svg";
import Button from 'react-bootstrap/Button';

export default function DepositFomExchange(props) {
    return (<div >
        <div className="modal-header" >
            <div
                className="modal-title back-link d-flex justify-content-center align-items-center py-4 px-1">
                <div className="modal-back" onClick={props.closePopUp}>
                    <BackIconArrow width="24" />
                </div>
                <h4 className="ms-4">Deposit from exchange</h4>
                <span></span>
            </div>
        </div>
        <div className="modal-body justify-content-center ">
            <div className="d-grid gap-4 p-4">
                <div>
                    <p className="deposit-eth">Deposit ETH from <Link to="/">exchange</Link> to the following adress.</p>
                </div>
                <div className="address-box p-2 d-flex justify-content-between align-items-center px-4">
                    <p className="m-0">0x34BDOIW98WIUGSDFFSEPWRNLK</p> <CopyIcon width="24" height="24" className="m-2" />
                </div>
                <p>Only deposit ETH other ERC-20 token to this address</p>
                <div className="d-flex justify-content-center align-items-center ">
                    <Button variant="primary" onClick={props.showSuccess} >I've deposited.</Button>
                </div>
            </div>
        </div>
    </div>)
}
