// components/Auth/Auth.jsx
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import UserMenu from "./UserMenu";
import GuestButtons from "./GuestButton.jsx";

const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? <UserMenu logout={logout} /> : <GuestButtons />;
};

export default Auth;
