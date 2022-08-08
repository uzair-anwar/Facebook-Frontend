import React, { createContext, useState } from "react";
export const UserContext = createContext();
export function UserProvider({ children }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user, setUser] = useState();
  const [token, setToken] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
}
