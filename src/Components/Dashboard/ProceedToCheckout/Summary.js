import React from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as AlertIcon } from "../../../img/svg/alertIcon.svg";

export default function Summary() {
  return (
    <div className="summary-checkout pe-lg-4">
      <h5>Summary</h5>
      <div className="sumary-text d-flex justify-content-between mt-3">
        Total dollar value <span>$21.00</span>
      </div>
      <div className="sumary-text d-flex justify-content-between">
        ETH value{" "}
        <span>
          0.01 ETH <AlertIcon />
        </span>
      </div>
      <div className="need-eth">
        Need Ethereum? <a href="/#">Grab some here</a>
        <div className="complete-transaction">
          <Button>Complete transaction</Button>
        </div>
      </div>
    </div>
  );
}
