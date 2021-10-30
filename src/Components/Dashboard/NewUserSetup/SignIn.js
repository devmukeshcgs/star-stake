import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap'

class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }

  onNextStep() {
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
            <h3 className="pb-5">Sign in</h3>

            <Form className="mt-5">
              <p className="px-2">Almost there! We just need your digital signature for authentication purposes</p>
              <Button className="mt-4" onClick={()=>{this.onNextStep()}}>Continue</Button>
            </Form>
            <p className="mt-5 text-white">By creating account, you agree to our <Link to="/" >Terms &  <br className="mob-br" />Conditions </Link>and <Link to="/" >Privacy Policy</Link>.</p>
          </div>
        </div>
      </div>
    )
  }
}
export default SignIn;
