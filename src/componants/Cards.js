import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

import CardsWrapper, {
  Card,
  CardTitle,
  CardDetail,
  Current,
  CurrentText,
  CurrentAmount,
  Price,
  PriceCurrency,
  Disconnect,
  Deposit,
  PriceAmount,
  Cta,
} from "./cards.style";
import { ButtonBuySell } from "../theme/GlobalStyles";

import {
  FiGrid,
  FiRepeat,
  FiMinus,
  FiPlus,
  FiLink2,
  FiLink,
} from "react-icons/fi";
import B from "../asstes/bitcoin.png";
import P from "../asstes/p-icon.png";
import L from "../asstes/l-icon.png";
import M from "../asstes/m-icon.png";
import LC from "../asstes/lc.png";

import { useTheme } from "../theme/useTheme";

const Cards = (props) => {
  const { theme, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);
  const columns = [
    {
      icon: B,
      title: "Bitcoin",
      current: "5.00006091",
      usd: "$289,550.93",
      dataIndex: "number",
      key: "number",
    },
    {
      icon: LC,
      title: "Lockcoin",
      current: "5",
      usd: "$2.3",
      dataIndex: "name",
      key: "name",
    },
    {
      icon: P,
      title: "Protect",
      current: "0.091",
      usd: "$8",
      dataIndex: "expiry",
      key: "expiry",
    },
    {
      icon: L,
      title: "Leverage",
      current: "0.00",
      usd: "$0.93",
      dataIndex: "cvc",
      key: "cvc",
    },
    {
      icon: M,
      title: "Membership",
      current: "12.091",
      usd: "$09.93",
      dataIndex: "cvc",
      key: "cvc",
    },
  ];

  // console.log(theme);
  return (
    <CardsWrapper>
      {columns.map((column, index) => {
        const { key, usd, current, icon, title } = column;
        return (
          <Card
            styles={{ backgroundImage: `url(${icon})` }}
            key={index}
            className="clCard"
          >
            {title === "Bitcoin" ? (
              <>
                <Disconnect to="/">
                  <FiLink />
                </Disconnect>
                <Deposit to="/">
                  <FiPlus />
                </Deposit>
              </>
            ) : (
              ""
            )}

            <CardTitle>
              {title} <img className="asset-icon" src={icon} alt="Logo" />
            </CardTitle>
            <CardDetail>
              <Current>
                <CurrentText>Current Protect</CurrentText>
                <CurrentAmount>{current}</CurrentAmount>
              </Current>
              <Price>
                <PriceCurrency>USD</PriceCurrency>
                <PriceAmount>{usd}</PriceAmount>
              </Price>
            </CardDetail>
            {title === "Bitcoin" ? (
              <Cta>
                <ButtonBuySell green>Buy</ButtonBuySell>
                <ButtonBuySell red>Sell</ButtonBuySell>
              </Cta>
            ) : (
              ""
            )}
            {title === "Membership" ? (
              <Cta>
                <ButtonBuySell green>Upgrade</ButtonBuySell>{" "}
              </Cta>
            ) : (
              ""
            )}
          </Card>
        );
      })}

      {/* <Card className="clCard">
        <Disconnect to="/">
          <FiMinus />
        </Disconnect>
        <Deposit to="/">
          <FiPlus />
        </Deposit>
        <CardTitle>LockCoin</CardTitle>
        <CardDetail>
          <Current>
            <CurrentText>Current Protect</CurrentText>
            <CurrentAmount>0.0001004</CurrentAmount>
          </Current>
          <Price>
            <PriceCurrency>USD</PriceCurrency>
            <PriceAmount>$5.00</PriceAmount>
          </Price>
        </CardDetail>
        <Cta>
          <ButtonBuySell>Buy</ButtonBuySell>
          <ButtonBuySell>Sell</ButtonBuySell>
        </Cta>
      </Card>
      <Card className="clCard">
        <CardTitle>LockCoin</CardTitle>
        <CardDetail>
          <Current>
            <CurrentText>Current Protect</CurrentText>
            <CurrentAmount>0.0001004</CurrentAmount>
          </Current>
          <Price>
            <PriceCurrency>USD</PriceCurrency>
            <PriceAmount>$5.00</PriceAmount>
          </Price>
        </CardDetail>
      </Card>
      <Card className="clCard">
        <CardTitle>LockCoin</CardTitle>
        <CardDetail>
          <Current>
            <CurrentText>Current Protect</CurrentText>
            <CurrentAmount>0.0001004</CurrentAmount>
          </Current>
          <Price>
            <PriceCurrency>USD</PriceCurrency>
            <PriceAmount>$5.00</PriceAmount>
          </Price>
        </CardDetail>
      </Card>
      <Card className="clCard">
        <CardTitle>LockCoin</CardTitle>
        <CardDetail>
          <Current>
            <CurrentText>Current Protect</CurrentText>
            <CurrentAmount>0.0001004</CurrentAmount>
          </Current>
          <Price>
            <PriceCurrency>USD</PriceCurrency>
            <PriceAmount>$5.00</PriceAmount>
          </Price>
        </CardDetail>
      </Card>
      <Card className="clCard">
        <CardTitle>LockCoin</CardTitle>
        <CardDetail>
          <Current>
            <CurrentText>Current Protect</CurrentText>
            <CurrentAmount>0.0001004</CurrentAmount>
          </Current>
          <Price>
            <PriceCurrency>USD</PriceCurrency>
            <PriceAmount>$5.00</PriceAmount>
          </Price>
        </CardDetail>
      </Card>
     */}
    </CardsWrapper>
  );
};

// #endregion

export default Cards;
