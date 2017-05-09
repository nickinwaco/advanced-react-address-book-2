import React from "react";
import PropTypes from "prop-types";
import UserDetail from "./UserDetail";

function ListOfUsers(props) {
// console.log("lou ", props)
  return (
    <div>
      {props.users.map((user, key) => {
        return (
          <UserDetail  // sends/gets data from User Detail for each map
            user={user}
            onSelect={() => {
              console.log("user X was clicked in ListofUsers ", user);
              props.onUserSelect(user);
            }}
            onDelete={() => {
              console.log("what is props.user here:", user)
              props.onUserDelete();
            }}
            key={key} />);
      })}
    </div>
  );
}


ListOfUsers.propTypes = {
  users: PropTypes.array  // is received INBOUND from APP.js
};

export default ListOfUsers;
