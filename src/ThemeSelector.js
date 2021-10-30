import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from "lodash";
import { useTheme } from "./theme/useTheme";
import { getFromLS } from "./utils/storage";

const ThemedButton = styled.button`
  border: 0;
  display: inline-block;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 4px;
  margin-top: 0px;
  width: 100%;
  cursor: pointer;
`;

const Wrapper = styled.li`
  padding: 5px;
  text-align: center;
  border-radius: 4px;
  border: 0px solid #ccc;
  list-style: none;
`;

const Container = styled.ul`
  position: absolute;
  bottom: 100px;
  z-index: 99999;
  right: 0px;
  padding: 0px;
`;

export default (props) => {
  const themesFromStore = getFromLS("all-themes");
  const [data, setData] = useState(themesFromStore.data);
  const [themes, setThemes] = useState([]);
  const { setMode } = useTheme();

  const themeSwitcher = (selectedTheme) => {
    setMode(selectedTheme);
    props.setter(selectedTheme);
  };

  useEffect(() => {
    setThemes(_.keys(data));
  }, [data]);

  useEffect(() => {
    props.newTheme && updateThemeCard(props.newTheme);
  }, [props.newTheme]);

  const updateThemeCard = (theme) => {
    const key = _.keys(theme)[0];
    const updated = { ...data, [key]: theme[key] };
    setData(updated);
  };

  const ThemeCard = (props) => {
    let THEME = data[_.camelCase(props.theme.name)];
    return (
      <Wrapper
        style={{
          backgroundColor: `${THEME.colors.body}`,
          color: `${THEME.colors.text}`,
          fontFamily: `${THEME.font}`,
        }}
      >
        <ThemedButton
          onClick={(theme) => themeSwitcher(props.theme)}
          style={{
            backgroundColor: `${THEME.colors.button.background}`,
            color: `${THEME.colors.button.text}`,
            fontFamily: `${THEME.font}`,
          }}
        >
          {props.theme.name}
        </ThemedButton>
      </Wrapper>
    );
  };

  return (
    <div>
      <Container>
        {themes.length > 0 &&
          themes.map((theme) => (
            <ThemeCard theme={data[theme]} key={data[theme].id} />
          ))}
      </Container>
    </div>
  );
};
