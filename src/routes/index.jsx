import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import WalletPage from "../pages/Wallet";
import MenuBook from "../pages/MenuBook";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/wallet",
    element: <WalletPage />,
  },
  {
    path: "/menu",
    element: <MenuBook />,
  },
]);
