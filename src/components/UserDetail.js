import React from "react";
import PropTypes from "prop-types";

function UserDetail(props) {
 // console.log(props.user, " from UD1")
 // console.log(props.onSelect, "from UD2")
  return (
    <div>
      {props.user.firstName} {props.user.lastName}
      <button onClick={props.onSelect}>
    Select
    </button>
    </div>
  );
}

UserDetail.propTypes = {
  onSelect: PropTypes.func.isRequired,
  user: PropTypes.object  // is received INBNOUND from LOU not APP.js
};

export default UserDetail;
