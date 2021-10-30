import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { BiMenu, BiX } from "react-icons/bi";
import { Button } from "../../theme/GlobalStyles";
import { Link } from "react-router-dom";
import appActions from "../../redux/app/actions";
import { connect } from "react-redux";

import styled from "styled-components";
import PropTypes from "prop-types";
import {
  SidebarWrapper,
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavFooter,
  NavFooterContainer,
  MenuIcon,
  Micon,
  Mtext,
  Menu,
  MenuItem,
  MenuLink,
  MenuItemBtn,
  MenuLinkBtn,
} from "./sidebar.style";
import {
  FiGrid,
  FiRepeat,
  FiPieChart,
  FiBook,
  FiAward,
  FiLifeBuoy,
  FiAlertCircle,
  FiDollarSign,
  FiUser,
} from "react-icons/fi";
import { IoStarOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

import CLLogo from "../../asstes/logo.svg";
import CLLogoIcon from "../../asstes/logo-icon.svg";

const {
  toggleOpenDrawer,
  changeOpenKeys,
  changeCurrent,
  toggleCollapsed,
} = appActions;
const propTypes = {};
const defaultProps = {};
// class Sidebar extends React.Component {

const Sidebar = (props) => {
  // console.log("Sidebar PROPS", props);

  const { app } = props;
  const collapsed = app.collapsed && !app.openDrawer;

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1000) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      showButton();
    }
    return function cleanup() {
      mounted = false;
    };
  }, []);
  window.addEventListener("resize", showButton);
  // console.log("COLLAPSED", collapsed);
  return (
    <SidebarWrapper className={collapsed ? "collapsed" : ""}>
      <div className="scrollarea">
        <IconContext.Provider
          value={{
            color: ({ theme }) => theme.colors.white,
            className: "midIcon",
          }}
        >
          <Nav>
            <NavbarContainer>
              <NavLogo to="/">
                <img src={collapsed ? CLLogoIcon : CLLogo} alt="CoinLock" />
              </NavLogo>

              <Menu onClick={handleClick} click={click}>
                <MenuItem>
                  <MenuLink
                    collapsed={collapsed.toString()}
                    className="active"
                    onClick={closeMenu}
                    to="/dashboard"
                  >
                    <Micon>
                      <FiGrid />
                    </Micon>
                    <span className={collapsed ? "hide" : ""}>Dashboard</span>
                  </MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink
                    collapsed={collapsed.toString()}
                    onClick={closeMenu}
                    to={"/dashboard/transactions"}
                  >
                    <Micon>
                      <FiRepeat />
                    </Micon>
                    <Mtext className={collapsed ? "hide" : ""}>
                      Transactions
                    </Mtext>
                  </MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink
                    collapsed={collapsed.toString()}
                    onClick={closeMenu}
                    to="/dashboard/payments"
                  >
                    <Micon>
                      <FiDollarSign />
                    </Micon>
                    <Mtext className={collapsed ? "hide" : ""}>Payments</Mtext>
                  </MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink
                    collapsed={collapsed.toString()}
                    onClick={closeMenu}
                    to="/dashboard/rewards"
                  >
                    <Micon>
                      <IoStarOutline />
                    </Micon>
                    <Mtext className={collapsed ? "hide" : ""}>Rewards</Mtext>
                  </MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink
                    collapsed={collapsed.toString()}
                    onClick={closeMenu}
                    to="/dashboard/membership"
                  >
                    <Micon>
                      <FiAward />
                    </Micon>
                    <Mtext className={collapsed ? "hide" : ""}>
                      Membership
                    </Mtext>
                  </MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink
                    collapsed={collapsed.toString()}
                    onClick={closeMenu}
                    to="/dashboard/profile"
                  >
                    <Micon>
                      <VscAccount />
                    </Micon>
                    <Mtext className={collapsed ? "hide" : ""}>Profile</Mtext>
                  </MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink
                    collapsed={collapsed.toString()}
                    onClick={closeMenu}
                    to="/dashboard/learn"
                  >
                    <Micon>
                      <FiBook />
                    </Micon>
                    <Mtext className={collapsed ? "hide" : ""}>Learn</Mtext>
                  </MenuLink>
                </MenuItem>
                {/* <MenuItemBtn>
                  {button ? (
                    <MenuLinkBtn to="/order-now">
                      <Button primary>Order Now</Button>
                    </MenuLinkBtn>
                  ) : (
                    <MenuLinkBtn to="/order-now">
                      <Button primary bigFont onClick={closeMenu}>
                        Order Now
                      </Button>
                    </MenuLinkBtn>
                  )}
                </MenuItemBtn> */}
              </Menu>
            </NavbarContainer>
          </Nav>
          <NavFooter>
            <NavFooterContainer>
              <Menu>
                <MenuItem>
                  <MenuLink
                    collapsed={collapsed.toString()}
                    onClick={closeMenu}
                    to="/dashboard"
                  >
                    <Micon>
                      <FiLifeBuoy />
                    </Micon>
                    <Mtext className={collapsed ? "hide" : ""}>Support</Mtext>
                  </MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink
                    collapsed={collapsed.toString()}
                    onClick={closeMenu}
                    to="/dashboard"
                  >
                    <Micon>
                      <FiAlertCircle />
                    </Micon>
                    <Mtext className={collapsed ? "hide" : ""}>T&C</Mtext>
                  </MenuLink>
                </MenuItem>
              </Menu>
            </NavFooterContainer>
          </NavFooter>
        </IconContext.Provider>
      </div>
    </SidebarWrapper>
  );
};

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;
// #endregion

// export default Sidebar;
export default connect(
  (state) => ({
    app: state.App,
  }),
  { toggleOpenDrawer, changeOpenKeys, changeCurrent, toggleCollapsed }
)(Sidebar);
