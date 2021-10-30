import React from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap'
import toastr from 'toastr';
import '../../../toastr.css';

import ConnectYourWallet from "./ConnectYourWallet";
import CreateAccount from "./CreateAccount";
import SignIn from "./SignIn";
import GetStarted from "./GetStarted";

class SetupTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: this.props.prop.currentStep,
      isValidUsername: this.props.prop.isValidUsername,
      isValidSignature: this.props.prop.isValidSignature
    }
    toastr.options = {
      // positionClass: 'toast-top-full-width',
      hideDuration: 300,
      timeOut: 3000,
    };
  }

  componentDidMount() {
    // this.setCurrentStep();
  }

  async setCurrentStep() {
    if (!this.props.prop.isEnabled) {
      await this.setState({ currentStep: 1 })
      this.props.changeLoginStatus(this.state)
    } else if (this.props.prop.isEnabled && !this.state.isValidUsername) {
      await this.setState({ currentStep: 2 })
      this.props.changeLoginStatus(this.state)
    } else if (this.props.prop.isEnabled && this.state.currentStep == 2 && this.state.isValidUsername) {
      await this.setState({ currentStep: 3 })
      this.props.changeLoginStatus(this.state)
    } else if (this.props.prop.isEnabled && this.state.currentStep == 3 && this.state.isValidSignature) {
      await this.setState({ currentStep: 4 })
      this.props.changeLoginStatus(this.state)
    }
  }

  async changeStep() {
    if (this.state.currentStep == 2) {
      await this.setState({ isValidUsername: true, currentStep: 3 })
      this.props.changeLoginStatus(this.state)
    } else if (this.state.currentStep == 3) {
      try{
        const signature = await this.props.prop.web3.eth.personal.sign("Welcome to StarStake!\n\n"+'Click "Sign" to sign in. No password needed!\n\n'+
        "This request will not trigger a blockchain transaction or cost any gas fees.\n\n"+"Your authentication status will be reset after 24 hours.\n\n"+
        "I accept the StarStake Terms of Service: \n https://starstake.com/ \n\n"+"Wallet address:\n"+this.props.prop.account
        , this.props.prop.account,"$tartStakeP@$sword@123%45&98765_p@ssFree");
        console.log(signature)
        await this.setState({ isValidSignature: true, currentStep: 4 })
        this.props.changeLoginStatus(this.state)
      }catch(e){
        // toastr.error("Unable to sign.Please try again!")
        e.message ? toastr.error(e.message) :toastr.error("Unable to sign.Please try again!")
      }
      
    }
  }

  render() {
    return (
      <div className="px-xl-5 py-lg-5 new_user_Account position-relative">
        <Tab.Container id="left-tabs-example" defaultActiveKey="Connect-your-wallet">
          <Row className="align-items-center">
            <Col lg={4}>
              <Nav variant="pills" className="flex-column position-relative">
                <Nav.Item className="w-100">
                  <Nav.Link className={"mb-5 " + (this.props.prop.isEnabled ? 'active-done ' : '') + (this.state.currentStep == 1 ? 'active' : '')}>
                    <span className="me-3 position-relative"></span>
                       Connect your wallet
                      </Nav.Link>
                </Nav.Item>
                <Nav.Item className="w-100">
                  <Nav.Link className={"mb-5 " + (this.state.currentStep > 2 ? 'active-done ' : ' ') + (this.state.currentStep == 2 ? 'active' : '')}>
                    <span className="me-3 position-relative"></span>
                      Create Account
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="w-100">
                  <Nav.Link className={"mb-5 " + (this.state.currentStep > 3 ? 'active-done ' : '') + (this.state.currentStep == 3 ? 'active' : '')}>
                    <span className="me-3 position-relative"></span>
                       Sign in
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="w-100">
                  <Nav.Link className={"mb-5 " + (this.state.currentStep == 4 ? 'active-done ' : '') + (this.state.currentStep == 4 ? 'active' : '')}>
                    <span className="me-3 position-relative"></span>
                       Get started
                     </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col lg={8}>
              <Tab.Content className="mt-lg-0 mt-5">
                <Tab.Pane className="active">
                  {
                    this.state.currentStep == 1 ? <ConnectYourWallet /> : ''
                  }
                  {
                    this.state.currentStep == 2 ? <CreateAccount nextStep={() => { this.changeStep(3) }} /> : ''
                  }
                  {
                    this.state.currentStep == 3 ? <SignIn nextStep={() => { this.changeStep(4) }} /> : ''
                  }
                  {
                    this.state.currentStep == 4 ? <GetStarted /> : ''
                  }
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    )
  }
}
export default SetupTab;
