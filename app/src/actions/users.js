export const addUsers = (users) => {
  return {
    type: "ADD_USERS",
    users,
  };
};

export const removeUser = (uuid) => {
  return {
    type: "REMOVE_USER",
    uuid,
  };
};
