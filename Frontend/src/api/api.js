import axios from "axios";
import store from "../store/store";
import { updateAccessToken, logout } from "../store/auth/loginslice";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true, // important to send cookies
});

// Attach access token to request headers
api.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.accessToken;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Refresh access token on 401
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        localStorage.removeItem('token')
        // No need to send refresh token manually — it's in the HTTP-only cookie
        const response = await axios.post(
          "http://localhost:3000/refresh-token",
          {},
          { withCredentials: true }
        );

        const newAccessToken = response.data.accessToken;
        localStorage.setItem('token',newAccessToken)
        // Retry original request with new token
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (err) {
        store.dispatch(logout());
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
