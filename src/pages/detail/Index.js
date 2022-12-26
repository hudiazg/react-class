import useSingleGif from "../../hook/useSingleGif";

function Detail({ params }) {
  const { id } = params;

  const { gif, loading, isError } = useSingleGif({ id });

  return (
    <>
      <div>
        <h2>Detail {id}</h2>
        <h1>{gif.title}</h1>
        <img src={gif.url} alt={gif.title}></img>
      </div>
    </>
  );
}

export default Detail;
