import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  increase() {
    this.setState({ count: this.state.count + 1 });
  }
  decrease = () => {
    this.setState({ count: this.state.count - 1 });
    console.log(this);
  };
  show() {
    alert(this.state.count);
  }
  //lifecyclehook
  componentDidMount() {
    console.log("component mounted");
  }
  componentWillUnmount() {
    console.log("component unmounted");
  }
  render() {
    return (
      <div>
        <h1 className="count">{this.state.count}</h1>
        <button onClick={(() => this.increase.bind(this))()}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
        <button onClick={(() => this.show.bind(this))()}>Show Count</button>
        <br />
      </div>
    );
  }
}
export default Counter;
