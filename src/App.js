import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import PublicRoutes from "./router";
import { Provider } from "react-redux";

// const App = ({ history }) => {
//   return <ConnectedRouter history={history}>{PublicRoutes}</ConnectedRouter>;
// };
import configureStore, { history } from "./redux/store";
import AppHolder from "./AppStyle";
import styled, { ThemeProvider } from "styled-components";
import WebFont from "webfontloader";

//import themes from "./settings/themes";
//import { themeConfig } from "./settings";

import { GlobalStyles } from "./theme/GlobalStyles";
import { useTheme } from "./theme/useTheme";
import ThemeSelector from "./ThemeSelector";

const store = configureStore();
// const App = () => <PublicRoutes history={history} />;
const Container = styled.div`
  margin: 0;
`;

function App() {
  // 3: Get the selected theme, font list, etc.
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setSelectedTheme(theme);
    }
    return function cleanup() {
      mounted = false;
    };
  }, [themeLoaded]);

  // 4: Load all the fonts
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      WebFont.load({
        google: {
          families: getFonts(),
        },
      });
    }
    return function cleanup() {
      mounted = false;
    };
  });

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          {/* <Container style={{ fontFamily: selectedTheme.font }}> */}
          <ThemeSelector setter={setSelectedTheme} />
          <AppHolder>
            <Provider store={store}>
              <PublicRoutes history={history} />
            </Provider>
          </AppHolder>
          {/* </Container> */}
        </ThemeProvider>
      )}
    </>

    // <Thex`meProvider theme={themes[themeConfig.theme]}>
    //   <AppHolder>
    //     <Provider store={store}>
    //       <PublicRoutes history={history} />
    //     </Provider>
    //   </AppHolder>
    // </ThemeProvider>
  );
}
// App.propTypes = {
//   history: PropTypes.object,
// };

export default App;
