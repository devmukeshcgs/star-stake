import styled from "styled-components";
import { palette } from "styled-theme";
// import { transition, borderRadius } from '../../settings/style-util';
// import WithDirection from '../../settings/withDirection';

const MainLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // background-color: ${({ theme }) => theme.colors.body2};
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
`;
export default MainLayoutWrapper;
// export default WithDirection(TopbarWrapper);

export const Section2 = styled.div`
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  font-family: ${({ theme }) => theme.font};
  // background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  // align-items: stretch;
`;

export const DataTblSec = styled.div`
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  font-family: ${({ theme }) => theme.font};
  margin-right:10px;
  flex:2;
  // background:blue;
  // background: ${({ theme }) => theme.colors.white};
`;
export const OrderSec = styled.div`
  font-family: ${({ theme }) => theme.font};
  padding: 10px;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  font-family: ${({ theme }) => theme.font};
  // background:red;
  flex: 1;
  background: ${({ theme }) => theme.colors.white};
`;
