import * as React from "react";
import {
  loadScript,
} from "../karen";
import '../widget.css';

const defaultStyles = {
  minWidth: "320px",
  height: "630px",
};

class InlineWidget extends React.Component{
  constructor(props) {
    super(props);
    
    this.widgetParentContainerRef = React.createRef();
    this.destroyInlineWidget = this.destroyInlineWidget.bind(this);
  }

  componentDidUpdate() {
    this.destroyInlineWidget();
    window.Karen.initInlineWidget({
      url: this.props.url,
      parentElement: this.widgetParentContainerRef.current
    });
  }

  componentDidMount() {
    loadScript();

    window.Karen.initInlineWidget({
      url: this.props.url,
      parentElement: this.widgetParentContainerRef.current,
    });
  }

  render() {
    return (
      <div
        className="karen-inline-widget"
        style={this.props.styles || defaultStyles}
        ref={this.widgetParentContainerRef}
        data-auto-load="false"
      ></div>
    );
  }

  destroyInlineWidget() {
    if(this.widgetParentContainerRef.current){
      this.widgetParentContainerRef.current.innerHTML = ""
    }
  }
}

export default InlineWidget;
