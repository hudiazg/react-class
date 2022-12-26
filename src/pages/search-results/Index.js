import MyGif from "../../components/gif";
import { useGifs } from "../../hook/useGifs";

function SearchResults({ params }) {
  const { keyword } = params;
  const { gifs, loading } = useGifs({ keyword });

  return (
    <>
      <h2>{keyword}</h2>

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

export default SearchResults;
