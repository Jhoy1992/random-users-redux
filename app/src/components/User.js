import React from "react";
import { connect } from "react-redux";

import { removeUser } from "../actions/users";

function User({ picture, name, location, email, login, removeUser }) {
  const handleRemoveUser = (uuid) => {
    removeUser(uuid);
  };

  return (
    <div className="random-user">
      <div className="user-image" onClick={() => handleRemoveUser(login.uuid)}>
        <img src={picture.medium} alt={name.first} />
      </div>

      <div>
        <strong>Name:</strong> {name.first} {name.last}
      </div>

      <div>
        <strong>Country:</strong> {location.country}
      </div>

      <div>
        <strong>Email:</strong> {email}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeUser: (uuid) => {
    dispatch(removeUser(uuid));
  },
});

export default connect(null, mapDispatchToProps)(User);
