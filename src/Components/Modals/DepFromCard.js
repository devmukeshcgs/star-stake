import React from 'react'
import { ReactComponent as BackIcons } from '../../img/svg/backIcon.svg';
import { ReactComponent as PngkitIcon } from '../../img/svg/pngkitIcon.svg';
import { ReactComponent as BackIconArrow } from "../../img/svg/backIcon.svg";
import { ReactComponent as CopyIcon } from "../../img/svg/copyIcon.svg";
import Button from 'react-bootstrap/Button';

export default function DepFromCard(props) {
    return (<div>
        <div className="modal-header" >
            <div
                className="modal-title back-link d-flex justify-content-center align-items-center py-4 px-1">
                <div className="modal-back" onClick={props.closePopUp}>
                    <BackIconArrow width="24" />
                </div>
                <h4 className="ms-4">Deposit from card</h4>
                <span></span>
            </div>
        </div>
        <div className=" modal-body justify-content-center ">
            <div className="d-grid gap-4 p-4">
                <div className="text-w">
                    <p className="text-w">Only add the address which you have access to Adding wrong address might lead to loss of asset.</p>
                </div>
                <div className="w-label px-2 d-flex justify-content-between align-items-center text-w ">
                    <small>Wallet address</small> <small><PngkitIcon width="18" height="18" className="mx-1" />Metamask</small>
                </div>
                <div className="tran ">
                    <div className=" address  d-flex justify-content-between align-items-center p-3 px-4">
                        <p className="m-0">0x34BDOIW98WIUGSDFFSEPWRNLK</p>
                    </div>
                    <div className=" asset d-flex justify-content-start  align-items-center p-2 px-4">
                        <p className="m-0">ETH</p>-<small>Etherium</small>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center ">
                    <Button variant="primary" onClick={props.showErr}>Complete transaction</Button>
                </div>
            </div>
        </div>
    </div >)
}
