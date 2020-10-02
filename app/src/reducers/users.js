const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_USERS":
      return [...state, ...action.users];
    case "REMOVE_USER": {
      const users = state.filter((user) => user.login.uuid !== action.uuid);
      return [...users];
    }

    default:
      return state;
  }
};

export default usersReducer;
