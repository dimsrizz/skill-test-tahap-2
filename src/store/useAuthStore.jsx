import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  (set) => ({
    isLoggedIn: false,
    accessToken: "",
    tokenType: "",
    login: (token, type) => {
      localStorage.setItem("accessToken", token);
      localStorage.setItem("tokenType", type);

      set({ isLoggedIn: true, accessToken: token, tokenType: type });
    },
    logout: () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("tokenType");
      set({ isLoggedIn: false, accessToken: "", tokenType: "" });
    },
    checkLogin: () => {
      const token = localStorage.getItem("accessToken");
      const type = localStorage.getItem("tokenType");
      if (token && type) {
        set({ isLoggedIn: true, accessToken: token, tokenType: type });
      }
    },
  }),
  {
    name: "authStorage", // unique name for the storage
  }
);

export default useAuthStore;
