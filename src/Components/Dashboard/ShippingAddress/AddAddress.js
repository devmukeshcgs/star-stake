import React, { useState } from 'react';
import { Button, Modal,Form } from 'react-bootstrap';
import { ReactComponent as BackIconArrow } from "../../../img/svg/backIcon.svg";


function AddAddress()  {  
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="text-center mt-5 add-address">
        <Button className="p-0" onClick={handleShow}>Add address</Button>
        <Modal className="add-address-modal" show={show} onHide={handleClose}>
        <Modal.Header className="px-5 pt-5 justify-content-center">
          <span className="position-absolute start-0" onClick={handleClose}>
            <BackIconArrow />
          </span>
          <Modal.Title>Add address</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-lg-5 pt-lg-3 px-3">
        <Form>
          <Form.Group className="mb-5" controlId="formBasicEmail">
            <Form.Label className="mb-3">Name</Form.Label>
            <Form.Control type="name" placeholder="Enter Name" value="0x23ASF224ER3432523FXFEF342r5234GHSDT" />
          </Form.Group>
          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Label className="mb-3">Address line #1</Form.Label>
            <Form.Control type="text" placeholder="Address line #1" value="0x23ASF224ER3432523FXFEF342r5234GHSDT" />
          </Form.Group>
          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Label className="mb-3">Address line #2</Form.Label>
            <Form.Control type="text" placeholder="Address line #2" value="0x23ASF224ER3432523FXFEF342r5234GHSDT" />
          </Form.Group>
          <div class="text-center mb-5 mt-2">
            <Button variant="primary" type="submit" className="p-0" >
                Add this address
            </Button>
          </div>
        </Form>
        </Modal.Body>
      </Modal>
    </div>
    )
  
  }
export default AddAddress;
