import styled from "styled-components";
import { palette } from "styled-theme";
// import { transition, borderRadius } from '../../settings/style-util';
// import WithDirection from '../../settings/withDirection';
// import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiRestaurant } from "react-icons/bi";
import { Container } from "../../theme/GlobalStyles";

export const SidebarWrapper = styled.div`
  position:fixed;
  font-family: ${({ theme }) => theme.font};
  z-index: 1000;
  width: 200px;
  .scrollarea {
    display:flex;
    height: 100vh;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;
  }

  a {
    display: flex;
    // background: ${({ theme }) => theme.colors.sidebar};
  }
  &.collapsed {
    width:  ${({ theme }) => theme.sidebar.minWidth};
    overflow: hidden;
  }
  .hide {
    display: none;
  }
  .show {
    display: inline-block;
  }
 
`;

// export default WithDirection(SidebarWrapper);

export const Nav = styled.nav`
  height: 100%;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.sidebar};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  // background: ${({ theme }) => theme.colors.secondary};
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px 20px 15px 20px;
  // height: 100vh;
  // background: ${({ theme }) => theme.colors.primary};
`;

export const NavLogo = styled(Link)`
  cursor: pointer;
  display: flex;
  text-decoration: none;
  border-bottom: 0px solid #ccc;
  transition: all 0.5s ease;
  &:hover {
    // transform: scale(1.05);
  }
`;

export const NavIcon = styled(BiRestaurant)`
  margin-right: 0.8rem;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(2);
  }
`;

// export const MenuIcon = styled.div`
//   // display: none;
//   @media (max-width: 1000px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-50%, 20%);
//     font-size: 1rem;
//     cursor: pointer;
//   }
// `;

export const Menu = styled.ul`
  // display: flex;
  align-items: center;
  text-align: center;
  padding: 0px;
  width: 100%;

  @media only screen and (max-width: 1000px) {
    // display: flex;
    // flex-direction: column;
    // // width: 180px;
    // height: 100vh;
    // position: absolute;
    // top: 0px;
    // left: ${({ click }) => (click ? "0" : "-100%")};
    // background-color: rgba(0, 0, 0, 0.9);
    // transition: all 0.5s ease;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  height: auto;
  margin-bottom: 20px;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;
export const Micon = styled.span`
  // display: block;
  // padding: 0px 8px 0px 0px;
  &:nth-child(1) {
    width: 24px;
    text-align: center;
  }
`;
export const Mtext = styled.span`
  // display: block;
  // padding: 0px 8px 0px 0px;
  &:nth-child(1) {
    width: 24px;
    text-align: center;
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  padding: 10px 10px;
  margin-bottom:8px;
  height: 100%;
  width:100%;
  transition: all 0.3s ease;
  border-radius:6px;
  box-sizing: border-box;
  span{
    display:inline-block;
    margin-left:10px;
    &:nth-child(1) {
      margin-left:0px;
        }
  }
  &:hover {
    //background-color:${({ theme }) => theme.colors.secondary};
     transform: translateX(3px);
    color: ${({ theme }) => theme.colors.secondary};
    span{
      svg{
        color: ${({ theme }) => theme.colors.secondary} !important;
      }
    }
  }
  // &:hover {
  //   color: ${({ theme }) => theme.colors.link.text};
  //   transform: traslateY(-3rem);
  // }
  &:active {
    transform: traslateY(3rem);
    color: #fff;
    background:  ${({ theme }) => theme.colors.grayLight};
  }
  &.active{
    background: ${({ theme }) => theme.colors.secondary} ;
    color: ${({ theme }) => theme.colors.white};
    span{
      svg{
        color: ${({ theme }) => theme.colors.white} !important;
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    // display: block;
    // padding: 3rem;
    // text-align: center;
    // transition: all 0.2s ease;
  }
`;

export const MenuItemBtn = styled.li`
  // list-style: none;
  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 120px;
  }
`;

export const MenuLinkBtn = styled(Link)`
  // text-decoration: none;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // padding: 8px 16px;
  // height: 100%;
  // width: 100%;
  // border: none;
  // outline: none;
`;
export const NavFooter = styled.div`
  background: ${({ theme }) => theme.colors.white};
  z-index: 999;
`;
export const NavFooterContainer = styled(Container)`
  // background: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: end;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px 20px 15px 20px;
`;
