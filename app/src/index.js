const React = require("react");
const ReactDOM = require("react-dom");
import MainContainer from "./containers/MainContainer"

class App extends React.Component {
  render() {
    return (
      <MainContainer/>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
