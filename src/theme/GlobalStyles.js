import { createGlobalStyle } from "styled-components";
import styled, { css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.body2};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    font-weight:400;
    transition: all 0.50s linear;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
  }
  a {
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
  }
  button.btn {
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
  }
  button.cancel {
    background-color: #ff0000;
    color: ${({ theme }) => theme.colors.button.text};
  }
  button:disabled {
    background-color: #ebebeb;
    color: #333333;
  }
  button {
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: #1064EA;
    color: #FFFFFF;
    font-family: ${({ theme }) => theme.font};
  }
  label{
    position:absolute;
    top:-8px;
    left:12px;
    font-size: 12px;
    padding:4px 8px;
    background: #ffffff;
    display:block;
    border-radius: 6px;
    z-index:1;
  }
  .err{
    border-color:red;
    
  }
  input, select, textarea{
    outline:none;
    width:100%;
    border:0px;
    padding: 12px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    box-sizing: border-box;
    cursor: pointer;
    background-color:${({ theme }) => theme.colors.white};
    border:1px solid ${({ theme }) => theme.colors.grayLight};
    color: ${({ theme }) => theme.colors.grayDark};
    font-family: ${({ theme }) => theme.font};
    ${(props) =>
      props.active &&
      css`
        border: 5px solid ${({ theme }) => theme.colors.grayLight};
      `}
   
  }
  .midIcon {
    font-size: 18px;
    vertical-align: middle;  
  }
  .bigIcon {
      font-size: 24px;
      vertical-align: middle;  
  }
`;
export const FieldWrapper = styled.div`
  width:100%;
  // background-color: ${({ theme }) => theme.colors.body2};
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.font};
  margin-bottom: 10px;
  position:relative;

  span{
    font-size: 12px;
    color:red;
  }
`;
export const Container = styled.div`
  margin: 0 auto;
  // padding: 0 50px;
  // max-width: 1300px;
  // width: 100%;
  @media (max-width: 400px) {
    padding: 0 10px;
  }
  @media (max-width: 991px) {
    padding: 0 30px;
  }
  @media (min-width: 1500px) {
    max-width: 1500px;
  }
  @media (min-width: 1800px) {
    max-width: 1800px;
    padding: 0 30px;
  }
`;
export const SecTitle = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 22px;
  color: ${({ theme }) => theme.colors.grayDark};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  .asset-icon {
    width: 26px;
    margin-left: 5px;
  }
`;
export const H1 = styled.h1`
  margin: 10px 0px 20px 0px;
  font-size: 24px;
  font-weight: 600;
  @media (max-width: 400px) {
  }
  @media (max-width: 991px) {
  }
  @media (min-width: 1500px) {
  }
  @media (min-width: 1800px) {
  }
`;

export const Button = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? "30px" : "20px")};
  background-color: ${({ primary }) => (primary ? "green" : "#000")};
  color: ${({ primary }) => (primary ? "#fff" : "#fff")};
  padding: ${({ big }) => (big ? "8px 4px" : "6px 12px")};
  font-size: ${({ bigFont }) => (bigFont ? "12px" : "12px")};
  outline: none;
  margin-left: 5px;
  cursor: pointer;
  border: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({ primary }) => (primary ? "#fff" : "#E38B06")};
    transform: translateY(-0.5rem) scale(1.02);
    color: #000;
  }
  &:active {
    transform: translateY(0.5rem);
  }
  @media only screen and (max-width: 1000px) {
    /* width: 100%; */
    padding: ${({ big }) => (big ? "18px 30px" : "10px 20px")};
  }
  @media only screen and (max-width: 375px) {
    padding: ${({ big }) => (big ? "12px 20px" : "10px 20px")};
    font-size: ${({ bigFont }) => (bigFont ? "16px" : "18px")};
  }
`;
export const ButtonBuySell = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? "30px" : "20px")};
  background-color: ${({ green }) => (green ? "#45ad45" : "#ff4747")};
  color: ${({ primary }) => (primary ? "#fff" : "#fff")};
  padding: ${({ big }) => (big ? "8px 14px" : "4px 12px")};
  font-size: ${({ bigFont }) => (bigFont ? "12px" : "12px")};
  outline: none;
  margin-left: 5px;
  cursor: pointer;
  border: none;
  transition: all 0.5s ease;
  &:hover {
  }
  &:active {
    transform: translateY(3px);
  }
  @media only screen and (max-width: 1000px) {
  }
  @media only screen and (max-width: 375px) {
  }
`;
export const OutlineButton = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? "40px" : "30px")};
  border: 2px solid #333;
  color: #333;
  outline: none;
  padding: ${({ big }) => (big ? "15px 60px" : "13px 55px")};
  font-size: ${({ fontBig }) => (fontBig ? "22px" : "18px")};
  transition: all 0.5s ease;
  background-color: #fefefe;
  &:hover {
    background-color: #333;
    color: #fff;
    border: none;
    transform: translateY(-0.5rem) scale(1.02);
  }
  &:active {
    transform: translateY(0.5rem);
  }
  @media only screen and (max-width: 1200px) {
    border-radius: ${({ bigRadius }) => (bigRadius ? "20px" : "18px")};
    padding: ${({ big }) => (big ? "9px 30px" : "8px 28px")};
    font-size: ${({ fontBig }) => (fontBig ? "18px" : "16px")};
  }
  @media only screen and (max-width: 780px) {
    border: none;
    color: #e38b06;
    padding: 1rem 2rem;
    background: none;
    transition: all 0.4s ease;
    &:hover {
      border-bottom: 1px solid #e38b06;
      background: none;
      border-radius: 0;
      color: #e38b06;
    }
  }
`;
