import styled from "styled-components";
import { palette } from "styled-theme";
// import { transition, borderRadius } from "../../settings/style-util";
// import WithDirection from "../../settings/withDirection";

const PaymentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  margin: 0px;
`;
export default PaymentsWrapper;

export const Section1 = styled.div`
  border-radius: 4px;
  overflow: hidden;
  // background: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font};
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  // align-items: stretch;
  width:100%;

`;

export const PaymnetForm = styled.div`
  border-radius: 4px;
  // background-color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font};
  width:30%;
  justify-content: center;
  align-content: center;
  align-items: center;
  // display: flex;
  // flex-wrap: nowrap;
  // flex-direction: row;
  // align-items: center;
  padding:12px;
  margin: 5px 10px 5px 0px;

  &:nth-child(1) {
      margin-left: 10px;
  }
  form{
    margin:15px 0px;
  }
`;

export const PaymnetTbl = styled.div`
  border-radius: 4px;
  overflow: hidden;
  width:70%;
  margin: 5px 10px 5px 0px;
    padding:12px;
  // border:1px solid ${({ theme }) => theme.colors.grayLight};
  // background-color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font};
  // display: flex;
  // flex-wrap: nowrap;
  // flex-direction: row;
  // align-items: stretch;
`;
export const Section2 = styled.div`
  border-radius: 4px;
  // background-color: ${({ theme }) => theme.colors.secondary};
  // background: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font};
  // flex-wrap: nowrap;
  // flex-direction: row;
  // align-items: stretch;
`;
