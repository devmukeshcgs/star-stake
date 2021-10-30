import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useTheme } from "./../../theme/useTheme";
import Cards from "../../componants/Cards";
import CLDataTables from "../../componants/DataTable";
import OrderTab from "./../../componants/Tabs";
import MainLayoutWrapper, {
  Section2,
  DataTblSec,
  OrderSec,
} from "./mainLayout.style";
import CLReactTabs from "../../componants/ReactTabs";
const MainLayout = (props) => {
  const { theme, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  return (
    <MainLayoutWrapper>
      <Cards />
      <Section2>
        <DataTblSec>
          <CLReactTabs />
        </DataTblSec>
        <OrderSec>
          <OrderTab />
        </OrderSec>
      </Section2>
    </MainLayoutWrapper>
  );
};

function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps, {})(MainLayout);
