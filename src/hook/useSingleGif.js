import { useContext, useEffect, useState } from "react";
import getSingleGif from "../services/getSingleGif";
import GifsContextProvider from "../context/GifContextProvider";

export default function useSingleGif({ id }) {
  const { gifs } = useContext(GifsContextProvider);
  console.log("gif: ", id);
  const gifFromCache = gifs.length > 0 ? gifs.find((g) => g.id === id) : {};
  console.log("gif: ", gifFromCache);

  const [gif, setGif] = useState(gifFromCache);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(
    function () {
      if (!gif.id) {
        console.log("entra al servicio");
        setLoading(true);
        getSingleGif({ id })
          .then((g) => {
            setGif(g);
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            setIsError(true);
          });
      }
    },
    [gif, id]
  );

  return { gif, loading, isError };
}
