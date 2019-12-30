const React = require("react");
const ReactDOM = require("react-dom");
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Hello Babarajkeepers</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
