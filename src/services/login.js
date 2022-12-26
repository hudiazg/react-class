import { API_LOGIN } from "./settings";

export default function loginService({ username, password }) {
  return fetch(`${API_LOGIN}auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.statusCode === 401) {
        return null;
      }
      const { access_token } = res;
      return access_token;
    })
    .catch((err) => {
      console.log(err);
    });
}
