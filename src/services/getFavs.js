import { API_LOGIN } from "./settings";

export default function getFavsService({ jwt }) {
  return fetch(`${API_LOGIN}all`, {
    method: "GET",
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
