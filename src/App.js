import React, { Suspense, lazy } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import WOW from 'wowjs';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import history from './history'
import Web3 from 'web3';
import toastr from 'toastr';
import './toastr.css';

import AboutUs from "./Components/AboutUs/index";
// import NewUserSetup from "./Components/Dashboard/NewUserSetup/index";
// import MyCollection from "./Components/Dashboard/MyCollection/index";
// import BuckDetails from "./Components/Dashboard/MyCollection/BuckDetails";
// import Setting from "./Components/Dashboard/Setting/index";
// import Profile from "./Components/Dashboard/Profile/index";
// import ShippingAddress from "./Components/Dashboard/ShippingAddress/index";
// import GetBucks from "./Components/Dashboard/GetBucks/index";
// import FoundersCollection from "./Components/Dashboard/FoundersCollection/index";
// import BuckDetail from "./Components/Dashboard/BuckDetail/index";
// import BundleDetails from "./Components/Dashboard/BundleDetails/index";
// import CongratsBucks from "./Components/Dashboard/CongratsBucks/index";
// import ProceedToCheckout from "./Components/Dashboard/ProceedToCheckout/index";

// const AboutUs = lazy(() => import("./Components/AboutUs/index"));
const NewUserSetup = lazy(() => import("./Components/Dashboard/NewUserSetup/index"));
const MyCollection = lazy(() => import("./Components/Dashboard/MyCollection/index"));
const BuckDetails = lazy(() => import("./Components/Dashboard/MyCollection/BuckDetails"));
const Setting = lazy(() => import("./Components/Dashboard/Setting/index"));
const Profile = lazy(() => import("./Components/Dashboard/Profile/index"));
const ShippingAddress = lazy(() => import("./Components/Dashboard/ShippingAddress/index"));
const GetBucks = lazy(() => import("./Components/Dashboard/GetBucks/index"));
const FoundersCollection = lazy(() => import("./Components/Dashboard/FoundersCollection/index"));
const BuckDetail = lazy(() => import("./Components/Dashboard/BuckDetail/index"));
const BundleDetails = lazy(() => import("./Components/Dashboard/MyCollection/BundleDetails"));
const CongratsBucks = lazy(() => import("./Components/Dashboard/CongratsBucks/index"));
const ProceedToCheckout = lazy(() => import("./Components/Dashboard/ProceedToCheckout/index"));

const StakeWatchlist = lazy(() => import("./Components/Dashboard/StakeWatchlist/index"));
const OrderHistory = lazy(() => import("./Components/Dashboard/OrderHistory/index"));
const StarProfile = lazy(() => import("./Components/Dashboard/StarProfile/index"));



// MUKESH
// import StakeWatchlist from "./Components/Dashboard/StakeWatchlist/index";
// import OrderHistory from "./Components/Dashboard/OrderHistory/index";
// import StarProfile from "./Components/Dashboard/StarProfile/index";

// Animation Wow
new WOW.WOW({
  live: false
}).init();
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      web3: null,
      networkType: null,
      chainId: null,
      account: null,
      isEnabled: false,
      isConnecting: false,
      canShow: true,
      redirect: null,
      currentStep: 1,
      isValidUsername: false,
      isValidSignature: false,
    };

    toastr.options = {
      // positionClass: 'toast-top-full-width',
      hideDuration: 300,
      timeOut: 3000,
    };
  }

  async connect() {
    if (this.state.isConnecting) {
      return;
    }
    this.setState({ isConnecting: true });
    if (window.ethereum) {
      await window.ethereum.enable().then((err, res) => {
        console.log("Res")
      });
      this.state.web3 = new Web3(window.ethereum);
      window.ethereum.on('networkChanged', (chainId) => {
        // handle the new network
        // document.location.reload();
        this.setConfig();
      });
      window.ethereum.on('chainChanged', (chainId) => {
        // handle the new network
        // document.location.reload();
        this.setConfig();
      });
      window.ethereum.on('accountsChanged', (chainId) => {
        // handle the new network
        document.location.reload();
      });
      window.ethereum.on('disconnect', (chainId) => {
        document.location.reload();
      });
      try {
        await this.setConfig();
      } catch (e) {
        // User has denied account access to DApp...
        // console.log("ERROR:::::::::::::::::::::", e)
        await this.setState({ isEnabled: false, currentStep: 1, });
      }
    } else if (window.web3 && window.web3.currentProvider) {
      // console.log("DONE::")
      window.web3.on('networkChanged', (chainId) => {
        // handle the new network
        // document.location.reload();
        this.setConfig();
      });
      window.web3.on('chainChanged', (chainId) => {
        // handle the new network
        // document.location.reload();
        this.setConfig();
      });
      window.web3.on('accountsChanged', (chainId) => {
        // handle the new network
        document.location.reload();
      });
      window.web3.on('disconnect', (chainId) => {
        document.location.reload();
      });
      this.state.web3 = new Web3(window.web3.currentProvider);
      try {
        await this.setConfig();
      } catch (e) {
        // User has denied account access to DApp...
        // console.log("ERROR:::::::::::::::::::::")
        await this.setState({ isEnabled: false, isConnecting: false, currentStep: 1 });
        this.changesReflactor();
      }
    } else {
      await this.setState({ isEnabled: false, isConnecting: false, currentStep: 1, redirect: 'NewUserSetup' });
      await this.setState({ redirect: null })
      this.changesReflactor();
    }
  }

  async setConfig() {
    // console.log("Network changed")
    const Id = await this.state.web3.eth.net.getNetworkType();
    const chainId = await this.state.web3.eth.getChainId();
    const accounts = await this.state.web3.eth.getAccounts();
    this.state.web3.eth.defaultAccount = accounts[0];
    await this.setState({ redirect: 'NewUserSetup' });
    await this.setState({ redirect: null })
    this.configNetwork(Id, chainId, accounts[0]);
  }

  async configNetwork(Id, chainId, account) {
    if (chainId !== 1 && chainId !== 4 && chainId !== 137 && chainId !== 80001) {
      toastr.info('Wrong network choosen.');
      await this.setState({
        isEnabled: false,
        currentStep: 1,
        isConnecting: false,
      });
      this.changesReflactor();
      return;
    } else if (chainId === 1 || chainId === 4 || chainId === 137 || chainId === 80001) {
      if (chainId === 1) {
      } else if (chainId === 4) {
      } else if (chainId === 137) {
      } else if (chainId === 80001) {
      }
      await this.setState({
        isEnabled: true,
        currentStep: 2,
        networkType: Id,
        chainId: chainId,
        account: account,
      });
      this.changesReflactor();
      // await this.setSmartContract();
    } else {
      this.changesReflactor();
    }
  }

  async changeLoginStatus({ currentStep, isValidUsername, isValidSignature }) {
    await this.setState({
      currentStep: currentStep,
      isValidUsername: isValidUsername,
      isValidSignature: isValidSignature
    })
    this.changesReflactor();
  }

  async changesReflactor() {
    await this.setState({ canShow: false });
    await this.setState({ canShow: true });
  }

  render() {
    return (
      <div className="App overflow-hidden">
        <HashRouter history={history} forceRefresh={true}>
          <Suspense fallback={<div>Loading...</div>}>
            {this.state.canShow ? (
              <Switch>
                {/* Route */}
                <Route exact path={`/`} render={(props) => (<AboutUs prop={this.state} history={history} connect={() => { this.connect(); }}></AboutUs>)}></Route>
                <Route exact path={`/AboutUs`} render={(props) => (<AboutUs prop={this.state} history={history} connect={() => { this.connect(); }}></AboutUs>)}></Route>
                <Route exact path={`/NewUserSetup`} render={(props) => (<NewUserSetup prop={this.state} history={history} connect={() => { this.connect(); }} changeLoginStatus={($event) => { this.changeLoginStatus($event) }}></NewUserSetup>)}></Route>
                <Route exact path={`/MyCollection`} render={(props) => (<MyCollection prop={this.state} history={history} connect={() => { this.connect(); }}></MyCollection>)}></Route>
                <Route exact path={`/Setting`} render={(props) => (<Setting prop={this.state} history={history} connect={() => { this.connect(); }}></Setting>)}></Route>
                <Route exact path={`/Profile`} render={(props) => (<Profile prop={this.state} history={history} connect={() => { this.connect(); }}></Profile>)}></Route>
                <Route exact path={`/ShippingAddress`} render={(props) => (<ShippingAddress prop={this.state} history={history} connect={() => { this.connect(); }}></ShippingAddress>)}></Route>
                <Route exact path={`/BuckDetails`} render={(props) => (<BuckDetails prop={this.state} history={history} connect={() => { this.connect(); }}></BuckDetails>)}></Route>
                <Route exact path={`/GetBucks`} render={(props) => (<GetBucks prop={this.state} history={history} connect={() => { this.connect(); }}></GetBucks>)}></Route>
                <Route exact path={`/FoundersCollection`} render={(props) => (<FoundersCollection prop={this.state} history={history} connect={() => { this.connect(); }}></FoundersCollection>)}></Route>
                <Route exact path={`/BuckDetail`} render={(props) => (<BuckDetail prop={this.state} history={history} connect={() => { this.connect(); }}></BuckDetail>)}></Route>
                <Route exact path={`/BundleDetails`} render={(props) => (<BundleDetails prop={this.state} history={history} connect={() => { this.connect(); }}></BundleDetails>)}></Route>
                <Route exact path={`/CongratsBucks`} render={(props) => (<CongratsBucks prop={this.state} history={history} connect={() => { this.connect(); }}></CongratsBucks>)}></Route>
                <Route exact path={`/ProceedToCheckout`} render={(props) => (<ProceedToCheckout prop={this.state} history={history} connect={() => { this.connect(); }}></ProceedToCheckout>)}></Route>

                {/* MUKESH */}
                <Route exact path={`/StakeWatchlist`} render={(props) => (<StakeWatchlist prop={this.state} history={history} connect={() => { this.connect(); }}></StakeWatchlist>)}></Route>
                <Route exact path={`/OrderHistory`} render={(props) => (<OrderHistory prop={this.state} history={history} connect={() => { this.connect(); }}></OrderHistory>)}></Route>
                <Route exact path={`/StarProfile`} render={(props) => (<StarProfile prop={this.state} history={history} connect={() => { this.connect(); }}></StarProfile>)}></Route>

              </Switch>
            ) : ''}

            {this.state.redirect ? <Redirect to={this.state.redirect} /> : ''}
          </Suspense>

        </HashRouter>
      </div>
    );
  }
}

export default App;
