import styled from "styled-components";
import { palette } from "styled-theme";
// import { transition, borderRadius } from '../../settings/style-util';
// import WithDirection from '../../settings/withDirection';
import { Link } from "react-router-dom";
import { BiRestaurant } from "react-icons/bi";
import CLIcon from "./gray-coinlock.png";
import clSVG from "./cl-icon.svg";

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  // align-items: start;
  align-items: stretch;
  font-family: ${({ theme }) => theme.font};
  width: 100%;
  // height: 1500px;
`;

export const Card = styled.div`
  padding: 10px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  border: 0px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  margin: 10px 10px 10px 0px;
  // background-image: url("${clSVG}");
  background-position: -10px -10px;
  background-repeat: no-repeat;
  background-size: contain;
  &:nth-child(1) {
    margin-left: 10px;
  }
//   &:after {
//     width: 4px;
//     height: 4px;
//     content: "";
//     position: absolute;
//     background: ${({ theme }) => theme.colors.primary};
//   }
`;

export const Disconnect = styled(Link)`
  position: absolute;
  top: -12px;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  box-sizing: border-box;
  border: 4px solid ${({ theme }) => theme.colors.body2};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  background: #ff2e2e;
`;
export const Deposit = styled(Link)`
  position: absolute;
  left: 40px;
  top: -12px;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  box-sizing: border-box;
  border: 4px solid ${({ theme }) => theme.colors.body2};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
`;

export const CardTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  text-align: right;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  .asset-icon {
    width: 26px;
    margin-left: 5px;
  }
`;
export const CardDetail = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
`;
export const Current = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.text};
`;

export const CurrentText = styled.span`
  font-size: 10px;
  text-align: right;
  margin-bottom: 10px;
  font-weight: 300;
  letter-spacing: 1px;
`;
export const CurrentAmount = styled.span`
  font-size: 14px;
  text-align: right;
`;

export const Price = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: nowrap;
  flex-direction: column;
  margin-left: 10px;
  align-items: flex-end;
  color: ${({ theme }) => theme.colors.text};
`;

export const PriceCurrency = styled.span`
  display: block;
  font-size: 11px;
  text-align: right;
  margin-bottom: 10px;
  letter-spacing: 1px;
`;
export const PriceAmount = styled.span`
  display: block;
  font-size: 14px;
  text-align: right;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Cta = styled.div`
  text-align: right;
`;
export default CardsWrapper;
