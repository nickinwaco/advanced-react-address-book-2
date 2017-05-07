import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import PropTypes from "prop-types";
import ListOfUsers from "./components/ListOfUsers.js";
import UserDetail from "./components/UserDetail.js";
import SearchBar from "./components/SearchBar";

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
        <SearchBar />
        <ListOfUsers users={this.props.users} onUserSelect={(selectedUser) => {  // on userUserSelect is a function
          // console.log("user selected in APP.js but returned from LOU:", selectedUser);
          this.setState({
            selectedUserList: [
              ...this.state.selectedUserList,
              selectedUser
            ]

          }); console.log(this.state.selectedUserList, "from APps.js")
        }} />
        <h2>
         Selected users
         </h2>
        <ListOfUsers users={this.state.selectedUserList} onUserSelect={() => {}} />
      </div>
    );

  }
}



App.propTypes = {
  users: PropTypes.array
};

export default App;
