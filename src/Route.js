import React from "react";
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

class Route extends React.Component {

constructor(props){
  super(props);
  this.state = {
    page: this.renderSwitch(window.location.hash)
  };
  this.renderSwitch = this.renderSwitch.bind(this);
  this.routeSwitch = this.routeSwitch.bind(this);
}

componentDidMount() {
    window.addEventListener("hashchange", this.routeSwitch);
    this.setState({user: this.props.user})
}

routeSwitch() {
  this.setState({
    page: this.renderSwitch(window.location.hash)
    });
}

  renderSwitch(pathname) {
    switch(pathname) {
      case "#page1":
        return <Page1 />;
      case "#page2":
        return <Page2 />;
      case "#page3":
        return <Page3 />;
      default:
        return <Page1 />;
    }
  }

  render() {
    return(
      <div>
      {this.state.page}
      </div>
    )
  }
}

export default Route;
