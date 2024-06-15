import React, { useEffect, useState } from "react";
import ElevateAppBar from "../components/NavigationBar";
import WalletSection from "../components/WalletSection";
import BottomNav from "../components/BottomNavigation";
import { CustomCarousel } from "../components/CustomCarousel";
import CustomDrawer from "../components/CustomDrawer";
import useAuthStore from "../store/useAuthStore";
import axios from "axios";

const WalletPage = () => {
  const [data, setData] = useState([]);

  const tokenType = localStorage.getItem("tokenType");
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/api/home", {
        headers: {
          Authorization: `${tokenType} ${accessToken}`,
        },
      });

      console.log(res.data.result);

      setData(res.data.result);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#f8f9fb] h-screen max-w-screen">
      <div className="navigation-bar">
        <ElevateAppBar />
      </div>
      <div className="wallet-page">
        <WalletSection data={data} />
      </div>
      <div className="carousel w-full lg:h-3/5">
        <CustomCarousel data={data.banner} />
      </div>

      <div className="bottom-navigation fixed bottom-0 left-0 right-0 bg-white w-full shadow-md">
        <BottomNav />
      </div>
    </div>
  );
};

export default WalletPage;
