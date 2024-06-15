import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
// import Logo from "assets/logo.png";
import Logo from "../assets/logo.png";
import axios from "axios";
import useAuthStore from "../store/useAuthStore";
import { router } from "../routes";

const client_id = import.meta.env.VITE_CLIENT_ID;
const client_secret = import.meta.env.VITE_CLIENT_SECRET;
const grant_type = import.meta.env.VITE_GRANT_TYPE;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const useAuth = useAuthStore();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("username", email);
    formData.append("password", password);
    formData.append("client_secret", client_secret);
    formData.append("client_id", client_id);
    formData.append("grant_type", grant_type);

    try {
      const response = await axios.post("/oauth/token", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      localStorage.setItem("tokenType", response.data.token_type);
      localStorage.setItem("accessToken", response.data.access_token);

      useAuth.login(response.data.access_token, response.data.token_type);
      router.navigate("/wallet");
    } catch (error) {
      console.error("Error fetching token:", error);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh", bgcolor: "#f8f9fb" }}
    >
      <Grid item xs={12} md={6} lg={4}>
        <Box
          sx={{
            p: 4,
          }}
        >
          <img src={Logo} alt="logo" className="mb-5 w-full p-4" />

          <form onSubmit={handleSubmit} className="text-center w-3/4 mx-auto">
            <div className="mb-4">
              <label className="block text-[#cbccce] text-sm font-bold mb-2">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#cbccce] text-sm font-bold mb-2">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <button className="w-2/3 mt-4 bg-white hover:bg-gray-100 text-gray-800 font-bold py-2  rounded-lg shadow-md">
              <span>Login</span>
            </button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
