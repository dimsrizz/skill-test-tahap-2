import React, { useEffect, useState } from "react";
import ElevateAppBar from "../components/NavigationBar";
import WalletSection from "../components/Wallet/WalletSection";
import BottomNav from "../components/BottomNavigation";
import { CustomCarousel } from "../components/CustomCarousel";
import axios from "axios";
import useAuthStore from "../store/useAuthStore";

const WalletPage = () => {
  const [data, setData] = useState([]);
  const { tokenType, accessToken } = useAuthStore();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/api/home", {
        headers: {
          Authorization: `${tokenType} ${accessToken}`,
        },
      });

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
      <div className="carousel w-auto lg:h-auto lg:px-6">
        <CustomCarousel data={data.banner} />
      </div>

      <div className="md:p-12">
        <div className="bottom-navigation fixed bottom-0 left-0 right-0 bg-white w-full shadow-md">
          <BottomNav navValue={0} />
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
