import React,{ useState }  from 'react';
import { Link } from 'react-router-dom';
import { Button,Form } from 'react-bootstrap';
import { ReactComponent as BackIconArrow } from "../img/svg/backIcon.svg";
import { ReactComponent as CartIcon } from "../img/svg/CartIcon.svg";
import { ReactComponent as CartList1 } from "../img/svg/cart-list.svg";
import { ReactComponent as AlertIcon } from "../img/svg/alertIcon.svg";
import { ReactComponent as CloseCartIcon } from '../img/svg/CloseCartIcon.svg';

function CartSlide()  {  
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
  setActive(!isActive);
  };

  return (
    <>           
    <Button onClick={handleToggle}  className="p-0 mob-none nav-link cart-nav-item position-relative">
        <CartIcon />
        <span className="total-cart position-absolute top-0 d-flex align-items-center justify-content-center">2</span>
        <div className="hover-open-dropdown position-absolute">
            <div className="d-flex justify-content-center align-items-center h-100">
            <Link to="/" className="me-2"><CloseCartIcon /></Link> <Link to="/">You have 2 new items in your cart!</Link>
            </div>
        </div>
      </Button>
       <div className={ isActive ? "cart-slide-right cart-none" : 'cart-slide-right' }>
          <div className="cart-bg text-white">
            <div className="d-flex text-white justify-content-between px-4 pt-4">
                 <div className="cart-heading d-flex ">
                   <Button onClick={handleToggle} className="p-0 bg-cart-close">
                     <BackIconArrow />
                   </Button>
                  <h3 className="ms-4"> <CartIcon className="me-2" /> My Cart</h3>
                  </div>
                  <div className="balance-eth">
                    <span>ETH Balance </span>
                    4.23 ETH
                  </div>
            </div>
            <div className="text-end need-text mt-3 mb-5 px-4">
               Need Ethereum? <span>Grab some here </span>
            </div>
            <div className="main-heading mb-4 px-4">
              <h1>You have 2 Item(s)</h1>
            </div>
            <div className="liat-cart-slide px-4">
              <div className="list-cart-box d-flex mb-5 mt-3">
                 <div className="img-carrt me-4">
                    <CartList1 />
                 </div>
                 <div className="text-cart-list px-4">
                   <h6>Steve jobs $10 bucks Founders edition</h6>
                   <div className="quantity d-flex">
                     Quantity   <Form.Select aria-label="Default select example" className="ms-3">
                                <option>1</option>
                                <option value="1">2</option>
                                <option value="2">3</option>
                                <option value="3">4</option>
                              </Form.Select>
                   </div>
                   <div className="cart-price mt-4">
                     $1
                   </div>
                   <div className="eth-text mt-3">
                      (0.009 ETH)
                   </div>
                 </div>
              </div>
              <div className="list-cart-box d-flex mb-5 mt-3">
                 <div className="img-carrt  me-4">
                    <CartList1 />
                 </div>
                 <div className="text-cart-list px-3">
                   <h6>Steve jobs $10 bucks Founders edition</h6>
                   <div className="quantity d-flex ">
                     Quantity  
                            <Form.Select aria-label="Default select example" className="ms-3">
                                <option>1</option>
                                <option value="1">2</option>
                                <option value="2">3</option>
                                <option value="3">4</option>
                              </Form.Select>
                   </div>
                   <div className="cart-price mt-4">
                     $1
                   </div>
                   <div className="eth-text mt-3">
                      (0.009 ETH)
                   </div>
                 </div>
              </div>
            </div>
            <div className="summary p-4">
                 <h5>Summary</h5>
                 <div className="sumary-text d-flex justify-content-between mb-2 mt-3">
                   Total dollar value <span>$21.00</span>
                 </div>
                 <div className="sumary-text d-flex justify-content-between">
                    ETH value <span>0.01 ETH <AlertIcon /></span>
                 </div>
            </div>
            <div className="checkout-action">
              <Button>Proceed to checkout portal</Button>
            </div>
          </div>
      </div>
      </>  
    )
  
  }
export default CartSlide;