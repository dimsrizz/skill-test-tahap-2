import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      accessToken: "",
      tokenType: "",
      login: (token, type) => {
        set({ isLoggedIn: true, accessToken: token, tokenType: type });
        localStorage.setItem("accessToken", token);
        localStorage.setItem("tokenType", type);
      },
      logout: () => {
        set({ isLoggedIn: false, accessToken: "", tokenType: "" });
        localStorage.removeItem("accessToken");
        localStorage.removeItem("tokenType");
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
      name: "auth-storage", // Optional name for the storage
      getStorage: () => localStorage, // Explicitly set the storage provider
    }
  )
);

export default useAuthStore;
