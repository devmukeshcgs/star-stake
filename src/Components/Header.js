import React from 'react';
import { Link } from 'react-router-dom';
import WalletSlide from "./WalletSlide/WalletSlide";
import CartSlide from "./CartSlide";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { ReactComponent as Logo } from '../img/svg/logo.svg';
import { ReactComponent as WalletIcon } from '../img/svg/wallet-icon-A.svg';
import { ReactComponent as NotiIcon } from '../img/svg/noti-icon.svg';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      colorChange: false,
      windowWidth: window.innerWidth
    }
  }
  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.changeNavbarColor());
    window.addEventListener("resize", this.handleResize);

  }

  changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      this.setState({ colorChange: true });
    }
    else {
      this.setState({ colorChange: true })
    }
  }

  getShortAccountId() {
    let address = "" + (this.props.prop.account ? this.props.prop.account : '');
    return address.slice(0, 8) + "....." + address.slice(address.length - 3, address.length);
  }

  render() {
    const { windowWidth } = this.state;
    console.log("windowWidth", windowWidth);
    return (
      <div className="header" >
        <Navbar collapseOnSelect expand="lg" bg="" variant="" className={this.state.colorChange ? 'navbar colorChange p-2 ' : 'navbar p-2 '} fixed="top">
          <Container fluid>
            <Navbar.Brand to="/" className="ms-lg-3 ps-lg-1">
              <Logo />
            </Navbar.Brand>
            <div className="mob-block">
              <Link to="/#" className="nav-btn2 nav-link">
                <NotiIcon /> 0
              </Link>
              {windowWidth < 991 ? <WalletSlide /> : null}
              <CartSlide />
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-lg-auto ms-0 align-items-center">
                <Link className="nav-link" to="/#">Marketplace</Link>
                <Link className="nav-link" to="/#">How it works</Link>
                <Link className="nav-link" to="/#">Be a star</Link>
                <Link className="nav-link" to="/#">Resources</Link>
              </Nav>
              <Nav className="me-0 ms-lg-4 align-items-center right-nav">
                <Link to="/#" className="nav-btn1 mb-lg-0 mb-3 nav-link">
                  <span>Stake</span>
                </Link>
                {/* <Link to="/NewUserSetup" className="nav-btn1 nav-link">
                  <span>Connect to Wallet</span>
                </Link> */}
                {this.props.prop.isEnabled ?
                  <a className="nav-btn1 nav-link">
                    <span>{this.getShortAccountId()}</span>
                  </a> : <a className="nav-btn1 nav-link" onClick={() => { this.props.connect(this.props.history) }}>
                    <span>Connect to Wallet</span>
                  </a>}
                <Link to="/#" className="nav-btn2 mob-none nav-link">
                  <NotiIcon /> 0
                </Link>
                {windowWidth > 991 ? <WalletSlide /> : null}
                <CartSlide />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}
export default Header;