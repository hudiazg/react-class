import { useEffect, useState, useContext } from "react";
import getGifs from "../services/getGifs";
import GifsContextProvider from "../context/GifContextProvider";

export function useGifs({ keyword, page } = { keyword: null, page: 1 }) {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifsContextProvider);

  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "random";

  useEffect(() => {
    setLoading(true);
    if (keywordToUse) localStorage.setItem("lastKeyword", keywordToUse);

    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keywordToUse, setGifs]);

  return { loading, gifs };
}
