import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import PropTypes from "prop-types";
import ListOfUsers from "./components/ListOfUsers.js";
import UserDetail from "./components/UserDetail.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUserList: []
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>
        Available users
        </h2>
        <ListOfUsers users={this.props.users} />
        <h2>
         Selected users
         </h2>
        <ListOfUsers users={[]} />
      </div>
    );

  }
}



App.propTypes = {
  users: PropTypes.array
};

export default App;
