import styled from "styled-components";
import { palette } from "styled-theme";
// import { transition, borderRadius } from '../../settings/style-util';
// import WithDirection from '../../settings/withDirection';
import { Link } from "react-router-dom";
import { BiRestaurant } from "react-icons/bi";
// import CLIcon from "./gray-coinlock.png";
// import clSVG from "./cl-icon.svg";

const DTWrapper = styled.div`
  padding: 0px 10px 5px 10px;
`;
export default DTWrapper;
export const DTContainer = styled.div`
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  font-family: ${({ theme }) => theme.font};
  // background: ${({ theme }) => theme.colors.white};
  // display: flex;
  // flex-wrap: nowrap;
  // flex-direction: row;
  // align-items: stretch;
`;
