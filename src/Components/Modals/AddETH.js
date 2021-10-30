import React from 'react'
import { ReactComponent as EthIcon } from "../../img/svg/eth.svg";

import { ReactComponent as BackIconArrow } from "../../img/svg/backIcon.svg";
import Button from 'react-bootstrap/Button';

export default function AddETH(props) {
    return (<div>
        <div className="modal-header" >
            <div className="modal-title back-link d-flex justify-content-center align-items-center py-4 px-1">
                <div className="modal-back" onClick={props.closePopUp} >
                    <BackIconArrow width="24" />
                </div>
                <h4 className="ms-4">{props.title}</h4>
                <span></span>
            </div>
        </div>
        <div className="modal-body justify-content-center">
            <div className="d-grid gap-2 py-4">
                <div className="d-flex justify-content-center align-items-center ">
                    <EthIcon />
                </div>
                <div className="px-4 my-4">
                    <p className="err-msg">Oh, dang! Looks like your ETH balance is low.
                        Add to buy NFT bucks!</p>
                </div>
                <div className="d-flex justify-content-center align-items-center ">
                    <Button variant="primary" onClick={props.showErr}>Add ETH</Button>
                </div>
            </div>
        </div>
    </div>)
}
