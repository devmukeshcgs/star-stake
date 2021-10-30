import styled from "styled-components";

export const RTWrapper = styled.div`
padding: 0px 10px 5px 10px;

.positionDetails{
    border:1px solid  ${({ theme }) => theme.colors.grayVeryLight};
    border-radius: ${({ theme }) => theme.size.radius};
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    align-items: flex-end;
    padding:5px;
    margin-bottom:10px;
    div{
      padding:5px;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: flex-start;
      align-items: flex-start;
      span{
        color: ${({ theme }) => theme.colors.gray};
        padding:5px;
        font-size:12px;
        font-weight:400;
        &:nth-last-child(1) {
          font-weight:600;
          font-size:14px;
        }
      }
    }
}

.react-tabs {
    background-color: ${({ theme }) => theme.colors.white};
    -webkit-tap-highlight-color: transparent;
  }

  .react-tabs__tab-list {
    // border-bottom: 1px solid #aaa;
    margin: 0px;
    padding: 10px 0px 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .react-tabs__tab {
    // display: inline-block;
    // border: 1px solid transparent;
    // border-bottom: none;
    // bottom: -1px;
    // position: relative;
    list-style: none;
    // padding: 6px 12px;
    // cursor: pointer;
    text-align: center;
    font-size: 14px;
    padding: 10px 20px;
    color: ${({ theme }) => theme.colors.gray};
    border-bottom: 2px solid ${({ theme }) => theme.colors.white};
    &:after{
      content: "";
      width: 100%;
      height: 3px;
      border-radius: 2px;
      position: relative;
      display: block;
      bottom:-5px;    
    }
  }

  .react-tabs__tab--selected {
    // background: #fff;
    // border-color: #aaa;
    // color: black;
    // border-radius: 5px 5px 0 0;
    font-weight:500;
    color: ${({ theme }) => theme.colors.secondary};
    // border-radius: 25px;
    // order-top-right-radius: 0px;
    // border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
    // background-color: ${({ theme }) => theme.colors.secondary};
    &:after{
      content: "";
      width: 100%;
      height: 2px;
      border-radius: 2px;
      background:  ${({ theme }) => theme.colors.secondary};
      position: relative;
      display: block;
      bottom:-5px;    
    }
  }

  .react-tabs__tab--disabled {
    color: GrayText;
    cursor: default;
  }

  .react-tabs__tab:focus {
    box-shadow: 0 0 5px hsl(208, 99%, 50%);
    border-color: hsl(208, 99%, 50%);
    outline: none;
  }

  .react-tabs__tab:focus:after {
    content: "";
    position: absolute;
    height: 5px;
    left: -4px;
    right: -4px;
    bottom: -5px;
    background: #fff;
  }

  .react-tabs__tab-panel {
    display: none;
  }

  .react-tabs__tab-panel--selected {
    display: block;
    padding: 10px;
    // background-color: ${({ theme }) => theme.colors.grayLight};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
