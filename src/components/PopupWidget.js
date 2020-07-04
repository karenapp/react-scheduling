import * as React from "react";
import {
  loadScript,
} from "../karen";
import '../widget.css';

const defaultProps = {
  branding: false,
  color: "#00a2ff",
  textColor: "#ffffff",
  text: "Schedule time with me",
};

class PopupWidget extends React.Component {
  componentDidUpdate() {
    const options = {
      ...defaultProps,
      ...this.props,
      url: this.props.url
    };

    window.Karen.initBadgeWidget(options);
  }

  componentDidMount() {
    loadScript();

    const options = {
      ...defaultProps,
      ...this.props,
      url: this.props.url
    };

    window.Karen.initBadgeWidget(options);
  }

  componentWillUnmount() {
    window.Karen.destroyBadgeWidget();
    window.Karen.closePopupWidget();
  }

  render() {
    return <div></div>;
  }
}

export default PopupWidget;
