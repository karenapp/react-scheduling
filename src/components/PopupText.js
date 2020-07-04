import * as React from "react";
import {
  loadScript,
} from "../karen";
import '../widget.css';

const initWidget = (options) => {
  window.Karen.initPopupWidget(options);
};

const createClickHandler = (widgetOptions) => (e) => {
  e.preventDefault();
  return initWidget(widgetOptions);
};

class PopupText extends React.Component {
  componentWillUnmount() {
    window.Karen.closePopupWidget();
  }

  componentWillMount() {
    loadScript();
  }

  render() {
    const widgetOptions = { url: this.props.url };
    return (
      <a href="" onClick={createClickHandler(widgetOptions)}>
        {this.props.text}
      </a>
    );
  }
}

export default PopupText;
