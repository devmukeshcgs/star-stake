import React from "react";
import { toggleTheme } from "./../redux/themeSwitcher/actions";
import { connect } from "react-redux";

class ToggleBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  toggleThemeHandler() {
    this.setState({ isActive: !this.state.isActive });
    console.log("STATE", this.props);
    console.log("PROPS", this.props);

    if (this.props.appTheme.name === "light") {
      this.props.toggleTheme("dark");
    } else {
      this.props.toggleTheme("light");
    }
  }

  render() {
    const state = this.state;
    const activeCls = state.isActive ? " is-active" : "";
    const activeTxt = state.isActive ? "Dark 🌜" : "Light 🌞";
    return (
      <button
        className={"SlideBtn" + activeCls}
        onClick={this.toggleThemeHandler.bind(this)}
      >
        <span className="SlideBtn-label visuallyhidden">{activeTxt}</span>
        <span className="SlideBtn-knob"></span>
      </button>
    );
  }
}

// export default ToggleBtn;
function mapStateToProps(state) {
  return {
    appTheme: state.ThemeSwitcher.appTheme,
    error: state.error,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    toggleTheme: (themeType) => {
      return dispatch(toggleTheme(themeType));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ToggleBtn);
