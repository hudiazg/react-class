import getApiDetail from "./settings";

const fromApiResponse = (response) => {
  const { data } = response;
  const { images, title, id } = data;
  const { url } = images.downsized_medium;
  return { id, title, url };
};

export default function getSingleGif({ id }) {
  const URL = getApiDetail(id);
  return fetch(URL)
    .then((res) => res.json())
    .then(fromApiResponse);
}
