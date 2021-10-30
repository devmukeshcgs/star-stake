import styled from "styled-components";
import { palette } from "styled-theme";
// import bgImage from '../../image/sign.jpg';
// import WithDirection from '../../settings/withDirection';

const AppStyleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export default AppStyleWrapper;

export const LayoutWrapper = styled.div`
  margin-left: ${({ collapsed }) => (collapsed ? "60px" : "200px")};
  display: flex;
  z-index: 1;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  position: relative;
`;
export const AppRouterWrapper = styled.div`
  display: flex;
  // background: #cccccc;
  flex-direction: column;
  width: 100%;
`;
