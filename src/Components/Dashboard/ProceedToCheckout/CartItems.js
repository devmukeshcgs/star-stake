import React from "react";
import { Form, Button } from "react-bootstrap";
import { ReactComponent as CartList1 } from "../../../img/svg/cardsList1.svg";
import { ReactComponent as CartList2 } from "../../../img/svg/cardsList2.svg";

export default function CartItems() {
  return (
    <div className="liat-cart-slide pe-lg-4">
      <div className="list-cart-box d-flex mb-5 mt-3">
        <div className="img-carrt me-4">
          <CartList2 />
        </div>
        <div className="text-cart-list px-4">
          <h6>Steve jobs $10 bucks Founders edition</h6>
          <div className="quantity d-flex">
            Quantity{" "}
            <Form.Select aria-label="Default select example" className="ms-3">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Form.Select>
          </div>
          <div className="cart-price mt-4">$1</div>
          <div className="eth-text mt-3">(0.009 ETH)</div>
        </div>
        <div className="delete-action">
          <Button variant="outline-primary">Delete</Button>
        </div>
      </div>
      <div className="list-cart-box d-flex mb-5 mt-3">
        <div className="img-carrt me-4">
          <CartList1 />
        </div>
        <div className="text-cart-list px-4">
          <h6>Stan lee $1000 bucks Founders edition</h6>
          <div className="quantity d-flex">
            Quantity{" "}
            <Form.Select aria-label="Default select example" className="ms-3">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Form.Select>
          </div>
          <div className="cart-price mt-4">$20</div>
          <div className="eth-text mt-3">(0.01 ETH)</div>
        </div>
        <div className="delete-action">
          <Button variant="outline-primary">Delete</Button>
        </div>
      </div>
    </div>
  );
}
