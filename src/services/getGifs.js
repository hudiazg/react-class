import { APIURL } from "./settings";

export default function getGifs({ keyword }) {
  const URL = `${APIURL}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
  return fetch(URL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((g) => {
        const { id, title } = g;
        const { url } = g.images.downsized_medium;
        return { id, title, url };
      });
      return gifs;
    });
}
