import React from "react";
import "./Alert.scss";
import { connect } from "react-redux";
import { withNaming } from "@bem-react/classname";
const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("site-alert");

class Alert extends React.Component<any> {
  render() {
    const { alertType, message, visible } = this.props;
    return visible ? <div className={b({ [alertType]: true })}>{message}</div> : <span />;
  }
}

const mapStateToProps = (state: any) => {
  const { alertType, message, visible, description, icon } = state.alert;
  return { alertType, message, visible, description, icon };
};

const connectedComponent = connect(
  mapStateToProps,
  null
)(Alert);

export { connectedComponent as Alert };
