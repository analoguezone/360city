import React from "react";

const multiRowCardBlock = (WrappedComponent, rowItem) => {
  return class MultiRowCardBlock extends React.Component {
    render() {
      return <WrappedComponent {...this.props} rowItems={rowItem} />;
    }
  };
};

export default multiRowCardBlock;
