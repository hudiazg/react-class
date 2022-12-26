import React from "react";
import useUser from "../../hook/useUser";
import { useLocation } from "wouter";

export default function Fav({ id }) {
  const { isLogged, favs, addFav } = useUser();
  const [, navigate] = useLocation();

  const handleClick = () => {
    if (!isLogged) return navigate("/login");
    // TODO Add Fav recibir el id y enviarlo a la funcion addFav
  };

  return (
    <button onClick={handleClick}>
      <span>add</span>
    </button>
  );
}
