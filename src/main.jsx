import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, useNavigate } from "react-router-dom";
import { router } from "./routes/index.jsx";
import axios from "axios";
import useAuthStore from "./store/useAuthStore.jsx";

axios.defaults.baseURL =
  import.meta.env.VITE_API_BASE_URL || "https://soal.staging.id";

// handle 401 Unauthorized
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      useAuthStore.getState().logout(); // Clear auth store
      window.location("/"); // Redirect to login page
    }
    return Promise.reject(error);
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
