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
      selectedUserList: [],
      searchTextValue: "",
      reset: false
    };
  }

  getFilteredUserList() {
    return this.props.users.filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`;
      return fullName.toLowerCase().indexOf(this.state.searchTextValue.toLowerCase()) !== -1;
    });  // end of arry filter list feature
  }  // end of getFilteredUserList function

  handleSearchBarChange(value) {
    this.setState({
      searchTextValue: value
    }); // end of state
  } // end of handleSearchBarChange function

  handleSelectUser(user) {
    this.setState({
      selectedUserList: [...this.state.selectedUserList,user]
    });
  }

  handleDeleteUser() {
    this.setState({
      selectedUserList: []
    });
  }

  handleResetUsers(){
    console.log("htest")
    this.setState({
      searchTextValue: " ",
      selectedUserList: []

    });
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
        <SearchBar onSearchQueryChange={this.handleSearchBarChange.bind(this)} />

        <ListOfUsers users={this.getFilteredUserList()} onUserSelect={(selectedUser) => {
      //  <ListOfUsers users={this.props.users} onUserSelect={(selectedUser) => {  // on userUserSelect is a function
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
        <ListOfUsers users={this.state.selectedUserList} onUserSelect={() => {}} onUserDelete={(selectedUser) => {
          this.setState({
            selectedUserList: [] // must hand it "empty array"
           });
           console.log(this.state.selectedUserList, "from APp.js delete")
           console.log(this.state, "just state from app.js")
        }} />
        <button onClick={this.handleResetUsers.bind(this)} > Reset </button>

      </div>
    );

  }
}



App.propTypes = {
  users: PropTypes.array
};

export default App;

//  **MOVED this component in exchange for onSearchQueryChange
// <SearchBar onChange={(value) => {
//     console.log("value retrieved", value);
//     this.setState({
//       searchTextValue: value
//     });
//   }} />
