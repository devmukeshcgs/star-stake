import React from 'react';
import Header from "../Header";
import Banner from "./Banner";
import InfoSection from "./InfoSection";
import HassleSection from "./HassleSection";
import CardSection from "./CardSection";
import ControlCryptoSection from "./ControlCryptoSection";
import ShapeBgLogo from "./ShapeBgLogo";
import ProcessSection from "./ProcessSection";
import PickStakeEarnSection from "./PickStakeEarnSection";
import FaqSection from "./FaqSection";
import Footer from "../Footer";

class AboutUs extends React.Component {


  render() {
    return (
      <div className="main About-us">
        <Header history={this.props.history} prop={this.props.prop}  connect={() => { this.props.connect(); }} />
        <Banner />
        <InfoSection />
        <HassleSection />
        <CardSection />
        <ControlCryptoSection />
        <ShapeBgLogo />
        <ProcessSection />
        <PickStakeEarnSection />
        <FaqSection />
        <Footer />
      </div>
    )

  }
}
export default AboutUs;
