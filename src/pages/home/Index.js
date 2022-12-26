import React from "react";
import MyGif from "../../components/gif/index";
import MySearchForm from "../../components/search-form/Index";
import { useGifs } from "../../hook/useGifs";

function Home() {
  const { gifs, loading } = useGifs();

  return (
    <>
      <MySearchForm />
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <div className="container-gifs">
          <MyGif gifs={gifs} />
        </div>
      )}
    </>
  );
}

export default Home;
