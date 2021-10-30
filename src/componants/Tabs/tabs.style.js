import styled from "styled-components";
import { palette } from "styled-theme";
// import { transition, borderRadius } from '../../settings/style-util';
// import WithDirection from '../../settings/withDirection';
import { Link } from "react-router-dom";
import { BiRestaurant } from "react-icons/bi";
// import CLIcon from "./gray-coinlock.png";
// import clSVG from "./cl-icon.svg";

const TabsWrapper = styled.div`
  //   padding: 0px 10px 5px 10px;
  .rc-tabs {
    .rc-tabs-nav {
      .rc-tabs-nav-wrap {
        .rc-tabs-nav-list {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-content: center;
          justify-content: space-between;
          align-items: flex-end;
          .rc-tabs-tab {
            flex: 1;
            &::nth-last-child(1) {
              //   width: 0px;
              //   flex: 0;
            }
            .rc-tabs-tab-btn {
              text-align: center;
              font-size: 14px;
              padding: 10px 15px;
              color: ${({ theme }) => theme.colors.gray};
            }
            &.rc-tabs-tab-active {
              .rc-tabs-tab-btn {
                color: ${({ theme }) => theme.colors.white};
                border-radius: 25px;
                border-bottom: 0px solid ${({ theme }) => theme.colors.primary};
                background-color: ${({ theme }) => theme.colors.secondary};
              }
            }
          }
        }
      }
    }
    .rc-tabs-content-holder {
      .rc-tabs-content {
        .rc-tabs-tabpane {
          &.rc-tabs-tabpane-active {
            padding: 10px;
            background-color: ${({ theme }) => theme.colors.grayLight};
            color: ${({ theme }) => theme.colors.secondary};
          }
        }
      }
    }
  }
`;
export default TabsWrapper;
export const Tabs = styled.div`
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  background: blue;
  font-family: ${({ theme }) => theme.font};
  // background: ${({ theme }) => theme.colors.white};
  // display: flex;
  // flex-wrap: nowrap;
  // flex-direction: row;
  // align-items: stretch;
`;
