import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
//TABS
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import  "react-tabs/style/react-tabs.css";
// import TabsWrapper from "./tabs.style";
import { RTWrapper } from "./tabs.style";
import CLDataTable from "../../componants/DataTable";
import TestComponant from "../TestComp";
//ICONS
import { FiRefreshCcw } from "react-icons/fi";
import LIcon from "../../asstes/l-icon.png";
import PIcon from "../../asstes/p-icon.png";

const propTypes = {};
const defaultProps = {};

class CLReactTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <RTWrapper>
        <Tabs>
          <TabList>
            <Tab>Positions</Tab>
            <Tab>Unfilled</Tab>
            <Tab>TimeLocks</Tab>
            <Tab>Marketplace</Tab>
          </TabList>

          <TabPanel>
            <div className="positionDetails">
              <div>
                <img className="asset-icon" src={LIcon} alt="Logo" />
              </div>
              <div>
                <span>Leverage Position</span>
                <span>
                  <FiRefreshCcw />
                </span>
              </div>
              <div>
                <span>Total Current BTC</span> <span>0.00000000</span>
              </div>
              <div>
                <span>Avg Start Price</span> <span>$ 0</span>
              </div>
              <div>
                <span>+/-</span> <span>0.00000000 BTC / $0.00</span>
              </div>
              <div>
                <span> Current</span> <span>%</span>
              </div>
            </div>
            <div className="positionDetails">
              <div>
                <img className="asset-icon" src={PIcon} alt="Logo" />
              </div>
              <div>
                <span>Protect Position</span>
                <span>
                  <FiRefreshCcw />
                </span>
              </div>
              <div>
                <span>Total Current BTC</span> <span>0.00000000</span>
              </div>
              <div>
                <span>Avg Start Price</span> <span>$ 0</span>
              </div>
              <div>
                <span>+/-</span> <span>0.00000000 BTC / $0.00</span>
              </div>
              <div>
                <span> Current</span> <span>%</span>
              </div>
            </div>
            <CLDataTable />
          </TabPanel>
          <TabPanel>
            <Tabs forceRenderTabPanel defaultIndex={1}>
              <TabList>
                <Tab>The Simpsons</Tab>
                <Tab>Futurama</Tab>
              </TabList>
              <TabPanel>XXXX</TabPanel>
              <TabPanel>YYYYY</TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <h2>TimeLocks</h2>
            <TestComponant />
          </TabPanel>
          <TabPanel>
            <h2>Marketplace</h2>
            <TestComponant />
          </TabPanel>
        </Tabs>
      </RTWrapper>
    );
  }
}

CLReactTabs.propTypes = propTypes;
CLReactTabs.defaultProps = defaultProps;

export default CLReactTabs;
