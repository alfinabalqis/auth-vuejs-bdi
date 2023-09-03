import axios from "axios";

const API_URL = "http://localhost:8000/api/auth/";

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "signin", {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    return axios.post(API_URL + "signup", {
      username: user.username,
      no_hp: user.no_hp,
      tgl_lahir: user.tgl_lahir,
      email: user.email,
      password: user.password,
    });
  }
}

export default new AuthService();
