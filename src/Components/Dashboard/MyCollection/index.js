import React from 'react';
import Header from "../../Header";
import SideNav from "../../SideNav";
import BannerCollection from "./BannerCollection";
import FilterSection from "./Filter/index";
import CollectionList from "./CollectionList";

class MyCollection extends React.Component {

  render() {
    return (
      <div className="my-collection">
        <Header history={this.props.history}  prop={this.props.prop} connect={() => { this.props.connect(); }} />
        <SideNav />
        <div className="right-wrapper">
          <div className="p-md-5 p-3 main">
            <BannerCollection />
            <div className="your-collection pt-5 pb-2">
              <h3>Your collection</h3>
              <FilterSection />
              <CollectionList />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MyCollection;
