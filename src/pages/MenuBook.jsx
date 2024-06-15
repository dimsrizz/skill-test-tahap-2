import React, { useEffect, useState } from "react";
import MenuBookTabs from "../components/MenuBook/MenuBookTabs";
import MenuBookList from "../components/MenuBook/MenuBookList";
import BottomNav from "../components/BottomNavigation";
import axios from "axios";
import useAuthStore from "../store/useAuthStore";

const MenuBook = () => {
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState({
    category_name: "",
    items: [],
  });
  const { tokenType, accessToken } = useAuthStore();
  const [tabIdx, setTabIdx] = useState(0);

  function handleChange(event, newValue) {
    setTabIdx(newValue);
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post(
        "/api/menu",
        {
          show_all: 1,
        },
        {
          headers: {
            Authorization: `${tokenType} ${accessToken}`,
          },
        }
      );

      const categories = res.data.result.categories.map(
        (item) => item.category_name
      );

      setData(res.data.result.categories[tabIdx]);
      setCategories([...categories]);
    };

    fetchData();
  }, [tabIdx]);

  return (
    <div className="max-w-screen h-screen bg-[#f8f9fb]">
      <div className="top-nav bg-white p-4">
        <h1 className="text-center text-2xl font-bold">MENU</h1>
        <div className="mt-2 lg:flex lg:justify-center">
          <MenuBookTabs
            data={categories}
            tabIdx={tabIdx}
            handleChange={handleChange}
          />
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
