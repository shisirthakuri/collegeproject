import axios from "axios";


const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true, // send cookies automatically (refresh token)
});

// Attach access token from localStorage to every request if exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accesstoken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor to handle access token refresh on 401 errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.error("Response error:", error);

    const originalRequest = error.config;

    // Check if error is 401 (Unauthorized) and request is not already retried
    if (error.response?.status === 401 && !originalRequest._retry) {
      console.log("401 Unauthorized detected, attempting token refresh...");
      originalRequest._retry = true;
      try {
        // Call refresh token endpoint to get a new access token
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/refresh-token`,
          {}, // empty body
          { withCredentials: true } // send refresh token cookie
        );

        const newAccessToken = response.data.accessToken;
        if (!newAccessToken) {
          console.error("No new access token returned from refresh");
          throw new Error("No new access token returned");
        }

        // Save the new token in localStorage
        localStorage.setItem("accesstoken", newAccessToken);

        // Update the Authorization header and retry original request
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        console.log("Retrying original request with new access token");
        return api(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token failed or expired, logging out", refreshError);
        // If refresh token expired or refresh request fails, logout user
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
