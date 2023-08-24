import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0, show: false };
  }

  hide = () => {
    this.setState({ ...this.setState, show: !this.state.show });
  };
  increase() {
    this.setState({ ...this.setState, count: this.state.count + 1 });
  }
  decrease = () => {
    this.setState({ ...this.setState, count: this.state.count - 1 });
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
        <p>Class based counter</p>
        <button onClick={(() => this.hide.bind(this))()} className="btn">
          Show/Hide
        </button>
        {this.state.show ? (
          ""
        ) : (
          <>
            <h1 className="count">{this.state.count}</h1>
            <button
              onClick={(() => this.increase.bind(this))()}
              className="btn"
            >
              Increase
            </button>
            <button onClick={this.decrease} className="btn">
              Decrease
            </button>
            <button onClick={(() => this.show.bind(this))()} className="btn">
              Show Count
            </button>
            <br />
          </>
        )}
      </div>
    );
  }
}
export default Counter;
