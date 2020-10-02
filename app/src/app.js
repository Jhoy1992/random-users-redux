import "regenerator-runtime/runtime.js";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import api from "./services/api";
import store from "./store";
import { addUsers } from "./actions/users";

import Header from "./components/Header";
import UsersList from "./components/UsersList";

import "./css/styles.css";

function App() {
  useEffect(() => {
    const loadUsers = async () => {
      const response = await api.get("/users");

      store.dispatch(addUsers(response.data));
    };

    loadUsers();
  }, []);

  return (
    <div>
      <Header />
      <UsersList />
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
