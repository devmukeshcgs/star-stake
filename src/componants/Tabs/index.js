import React from "react";
import Tabs, { TabPane } from "rc-tabs";
import TabsWrapper from "./tabs.style";
import TestComponant from "../TestComp";

import CLDataTable from "../../componants/DataTable";

var callback = function (key) {};
const propTypes = {};
const defaultProps = {};
class OrderTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TabsWrapper>
        <Tabs className="tabs" defaultActiveKey="1" onChange={callback}>
          <TabPane className="tabPan" tab="New Orders" key="1">
            <TestComponant />
          </TabPane>
          <TabPane tab="Timelock" key="2">
            second
          </TabPane>
          <TabPane tab="Order Tool" key="3">
            third
          </TabPane>
        </Tabs>
      </TabsWrapper>
    );
  }
}

OrderTab.propTypes = propTypes;
OrderTab.defaultProps = defaultProps;

export default OrderTab;
