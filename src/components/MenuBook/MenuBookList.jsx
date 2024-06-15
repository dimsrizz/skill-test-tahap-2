// src/components/Menu.js
import React from "react";

export default function MenuBookList({ data }) {
  return (
    <div className="p-4">
      <div key={data.category_name} className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{data.category_name}</h2>
        <div>
          {data.menu &&
            data.menu.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-white border-dotted border-b-2"
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
    </div>
  );
}
