import React, { useEffect, useState } from "react";
import MenuBookTabs from "../components/MenuBook/MenuBookTabs";
import MenuBookList from "../components/MenuBook/MenuBookList";
import BottomNav from "../components/BottomNavigation";
import axios from "axios";
import useAuthStore from "../store/useAuthStore";

const dummyData = {
  categories: [
    {
      category_name: "Makanan",
      items: [
        {
          item_name: "Nasi Goreng",
          item_price: 15000,
        },
        {
          item_name: "Mie Goreng",
          item_price: 15000,
        },
      ],
    },
    {
      category_name: "Minuman",
      items: [
        {
          item_name: "Es Teh",
          item_price: 5000,
        },
        {
          item_name: "Es Jeruk",
          item_price: 5000,
        },
      ],
    },
  ],
};

const MenuBook = () => {
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
  const { tokenType, accessToken } = useAuthStore();

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
        <MenuBookList data={dummyData} />
      </div>

      <div className="bottom-navigation fixed bottom-0 left-0 right-0 bg-white w-full shadow-md">
        <BottomNav navValue={1} />
      </div>
    </div>
  );
};

export default MenuBook;
