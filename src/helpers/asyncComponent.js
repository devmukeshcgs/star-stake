// import React, { Component } from "react";
// // import ReactPlaceholder from "react-placeholder";
// // import "react-placeholder/lib/reactPlaceholder.css";

// class AsyncComponent extends Component {
//   state = { Component: undefined };
//   componentWillUnmount() {
//     this.mounted = false;
//   }
//   async componentDidMount() {
//     this.mounted = true;
//     const componentArguement = this.props.componentArguement;
//     let Component;
//     switch (componentArguement) {
//       case "googleChart":
//         const { Chart: googleChart } = await this.props.load;
//         Component = googleChart;
//         break;
//       default:
//         const { default: newComponent } = await this.props.load;
//         Component = newComponent;
//     }
//     if (this.mounted) {
//       this.setState({
//         Component: <Component {...this.props.componentProps} />,
//       });
//     }
//   }

//   render() {
//     const Component = this.state.Component || <div />;
//     try {
//       if (this.mounted) {
//       }
//     } catch (e) {}
//     return <div />;
//   }
// }

// export default AsyncComponent;

import React, { Component } from "react";

const asyncComponent = (importComponent) => {
  return class extends Component {
    state = {
      component: null,
    };

    componentDidMount() {
      importComponent().then((cmp) => {
        this.setState({ component: cmp.default });
      });
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  };
};

export default asyncComponent;
