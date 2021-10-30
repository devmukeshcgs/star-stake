import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap'

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
  }

  onNextStep(){
    this.props.nextStep();
  }

  render() {
    return (
      <div className="connect-user-new text-center">
        <div className="mb-4 height-heading">
          <h2>Starstake setup</h2>
        </div>
        <div className="setup-bg-box p-md-5 p-3  m-auto">
          <div className="mt-4">
            <h3>Create account</h3>
            <p className="px-2">Your email is used to send you important updates. Your nickname is how other stars will identify you.</p>
            <Form className="px-3 pt-4">
              <Form.Control type="email" placeholder="Enter your email" className="mb-4" />
              <Form.Control type="name" placeholder="Enter your nickname" />
              <Button className="mt-4" onClick={()=>{this.onNextStep()}}>Continue</Button>
            </Form>
            <p className="mt-3 text-white">By creating account, you agree to our <Link to="/" >Terms & <br className="mob-br" />Conditions </Link>and <Link to="/" >Privacy Policy</Link>.</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CreateAccount;
