import styled from "styled-components";
import { palette } from "styled-theme";
// import { transition, borderRadius } from '../../settings/style-util';
// import WithDirection from '../../settings/withDirection';
import { Link } from "react-router-dom";

export const TopbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  background: ${({ theme }) => theme.colors.white};
  margin: 10px 10px 5px 10px;
  border-radius: 4px;
`;
export const MenuIcon = styled.div`
  cursor: pointer;
  text-decoration: none;
  font-weight: Normal;
  display: inline-block;
  color: ${({ theme }) => theme.colors.text};
  padding: 10px 10px;
  transition: all 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.link.text};
    transform: traslateY(-3rem);
  }
  &:active {
    transform: traslateY(3rem);
    color: #e38b06;
    background: ${({ theme }) => theme.colors.body};
  }
  @media only screen and (max-width: 1000px) {
    text-align: center;
    transition: all 0.2s ease;
  }
`;
export const LeftSec = styled.div`
  width: 100%;
`;
export const MidSec = styled.div`
  width: 100%;
  height: 100%;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: flex-end;
`;
export const Notice = styled.span`
  font-size: 12px;
  text-align: right;
`;
export const RightSec = styled.div`
  width: 100%;
  text-align: right;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: Normal;
  display: inline-block;
  color: ${({ theme }) => theme.colors.text};
  padding: 10px 15px;
  transition: all 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.link.text};
    transform: traslateY(-3rem);
  }
  &:active {
    transform: traslateY(3rem);
    color: #e38b06;
    background: ${({ theme }) => theme.colors.body};
  }
  @media only screen and (max-width: 1000px) {
    text-align: center;
    transition: all 0.2s ease;
  }
`;
// export default WithDirection(TopbarWrapper);
