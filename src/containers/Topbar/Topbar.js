import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { BiMenu, BiX } from "react-icons/bi";
import { Button } from "../../theme/GlobalStyles";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

import {
  TopbarWrapper,
  NavLink,
  LeftSec,
  MidSec,
  MenuIcon,
  RightSec,
  Notice,
} from "./topbar.style";
import { useTheme } from "./../../theme/useTheme";
import {
  FiAlignLeft,
  FiSearch,
  FiBell,
  FiAward,
  FiUser,
  FiMenu,
} from "react-icons/fi";
import appActions from "../../redux/app/actions";
const { toggleCollapsed } = appActions;

const Topbar = (props) => {
  const collapsed = props.collapsed && !props.openDrawer;

  ///////////////////////////////////////////////////
  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    props.toggleCollapsed();
  };
  ///////////////////////////////////////////////////

  const { theme, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  //console.log("Topbar PROPS", props);

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
  return (
    <TopbarWrapper>
      <IconContext.Provider
        value={{
          color: ({ theme }) => theme.colors.white,
          className: "midIcon",
        }}
      >
        <LeftSec>
          <MenuIcon onClick={menuIconClick}>
            {menuCollapse ? <BiX /> : <BiMenu />}
          </MenuIcon>
          {/* <NavLink onClick={menuIconClick}>
          {menuCollapse ? <BiX /> : <BiMenu />}
        </NavLink> */}
          <NavLink to="/">
            <FiSearch />
          </NavLink>
        </LeftSec>
        <MidSec>
          <Notice>
            ID Verification failed. Please try again before trading
          </Notice>
        </MidSec>
        <RightSec>
          <NavLink to="/">
            <FiAward />
          </NavLink>
          <NavLink to="/">
            <FiBell />
          </NavLink>
          <NavLink to="/">
            <FiUser />
          </NavLink>
        </RightSec>
      </IconContext.Provider>
    </TopbarWrapper>
  );
};

// #endregion

// export default Topbar;
export default connect(
  (state) => ({
    ...state.App,
  }),
  { toggleCollapsed }
)(Topbar);
