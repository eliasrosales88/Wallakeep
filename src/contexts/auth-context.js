import React from "react";

// const isAuthenticated = () => localStorage.getItem("name") && localStorage.getItem("lastname") ? true : false;


const authContext = React.createContext({
  authenticated: localStorage.getItem("authenticated") || false,
  name: localStorage.getItem("name") || "",
  lastname: localStorage.getItem("lastname") || "",
  login: () => {}
});

export default authContext;