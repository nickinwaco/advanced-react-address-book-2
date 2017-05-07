<ListOfUsers users={this.props.users} onUserSelect={(selectedUser) => {  // on userUserSelect is a function
  console.log("user selected in APP.js but returned from LOU:", selectedUser);
  this.setState({
    selectedUserList: [
      ...this.state.selectedUserList,
      selectedUser
    ]
  });
