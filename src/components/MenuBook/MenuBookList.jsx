// src/components/Menu.js
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function MenuBookList() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  const tokenType = localStorage.getItem("tokenType");
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post("/api/menu", null, {
          headers: {
            Authorization: `${tokenType} ${accessToken}`,
          },
        });

        setCategories(() => {
          return res.data.result.categories.map((item) => item.category_name);
        });

        setData(() => res.data.result.categories);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [tokenType, accessToken]);

  return (
    <div className="p-4">
      {data.length > 0 ? (
        data.map((category, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {category.category_name}
            </h2>
            <div>
              {category.menu &&
                category.menu.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white mb-1"
                  >
                    <div className="flex items-center">
                      <img
                        src={item.photo}
                        alt={item.name}
                        className="w-16 h-16 rounded object-cover mr-4"
                      />
                      <div>
                        <h3 className="text-lg font-bold">{item.name}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold">
                        {item.price && item.price.toLocaleString("id-ID")}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
