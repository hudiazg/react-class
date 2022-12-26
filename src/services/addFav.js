import { API_LOGIN } from "./settings";

export default function addFavService({ id, jwt }) {
  return fetch(`${API_LOGIN}fav/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: jwt,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
}
