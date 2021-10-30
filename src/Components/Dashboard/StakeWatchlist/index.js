import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../../Header";
import SideNav from "../../SideNav";
import WatchlistCard from "./WatchlistCard";
import { ReactComponent as BackIconArrow } from "../../../img/svg/backIcon.svg";

class StakeWatchlist extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="stake-watchlist">
                <Header history={this.props.history} prop={this.props.prop} connect={() => { this.props.connect(); }} />
                <SideNav />
                <div className="right-wrapper">
                    <div className="p-5 main">
                        <div className="back-link">
                            <Link to="/">
                                <BackIconArrow />
                            </Link>
                        </div>
                        <div className="watchlist-section mt-5">
                            <h4>Stake Watchlist</h4>
                            <WatchlistCard cardCount={6} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default StakeWatchlist;
