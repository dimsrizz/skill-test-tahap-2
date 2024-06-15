import React, { useEffect, useState } from "react";
import MenuBookTabs from "../components/MenuBookTabs";
import MenuBookList from "../components/MenuBookList";
import BottomNav from "../components/BottomNavigation";
import axios from "axios";

const MenuBook = () => {
  const tokenType = localStorage.getItem("tokenType");
  const accessToken = localStorage.getItem("accessToken");
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post("/api/menu", null, {
        headers: {
          Authorization: `${tokenType} ${accessToken}`,
        },
      });

      const categories = res.data.result.categories.map(
        (item) => item.category_name
      );

      setData(res.data.result);
      setCategories([...categories]);
    };

    fetchData();
  }, []);

  return (
    <div className="w-screen h-screen bg-[#f8f9fb]">
      <div className="top-nav bg-white p-4">
        <h1 className="text-center text-2xl font-bold">MENU</h1>
        <div className="mt-2">
          <MenuBookTabs data={categories} />
        </div>
      </div>
      <div className="content">
        <MenuBookList data={data} />
      </div>

      <div className="bottom-navigation fixed bottom-0 left-0 right-0 bg-white w-full shadow-md">
        <BottomNav navValue={1} />
      </div>
    </div>
  );
};

export default MenuBook;
