import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import WalletPage from "../pages/Wallet";
import MenuBook from "../pages/MenuBook";
import RequireAuth from "./RequireAuth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/wallet",
    element: (
      <RequireAuth>
        <WalletPage />
      </RequireAuth>
    ),
  },
  {
    path: "/menu",
    element: (
      <RequireAuth>
        <MenuBook />
      </RequireAuth>
    ),
  },
]);
