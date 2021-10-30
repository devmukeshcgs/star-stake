import React from 'react'
import { ReactComponent as BackIcons } from '../../img/svg/backIcon.svg';
import { ReactComponent as PngkitIcon } from '../../img/svg/pngkitIcon.svg';
import { ReactComponent as SuccessCheckIcon } from "../../img/svg/success-check.svg";
import { ReactComponent as CopyIcon } from "../../img/svg/copyIcon.svg";
import Button from 'react-bootstrap/Button';
import { ReactComponent as BackIconArrow } from "../../img/svg/backIcon.svg";

export default function SuccessMsg(props) {
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
        <div className="modal-body justify-content-center ">
            <div className="d-grid gap-4 p-4">
                <div className="d-flex justify-content-center align-items-center ">
                    <SuccessCheckIcon />
                </div>
            </div>
            <div className="px-4 my-4">
                <p className="err-msg">Order completed!</p>
            </div>
            <div className="d-grid gap-4 p-4">
                <div className="d-flex justify-content-center align-items-center ">
                    <Button variant="primary" onClick={props.closePopUp}>Continue</Button>
                </div>
            </div>
        </div>
    </div>)
}
