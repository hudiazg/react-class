import { Link } from "wouter";
import Fav from "../fav/index";

export default function MyGif({ gifs }) {
  return gifs.map((g) => {
    return (
      <>
        <div>
          <div className="list-item" key={g.id}>
            <Link key={g.id} href={`/Detail/${g.id}`}>
              <img className="gif-img" src={g.url} alt={g.id} />
            </Link>
            <span className="gif-text">{g.id}</span>
            <Fav />
          </div>
        </div>
      </>
    );
  });
}
