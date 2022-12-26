import React, { useEffect } from "react";
import { useState } from "react";
import getFavsService from "../services/getFavs";

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [jwt, setJwt] = useState(() => window.sessionStorage.getItem("jwt"));
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    if (!jwt) return setFavs([]);
    getFavsService({ jwt })
      .then(setFavs)
      .catch((err) => console.log(err));
  }, [jwt]);

  return (
    <Context.Provider value={{ jwt, favs, setFavs, setJwt }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
