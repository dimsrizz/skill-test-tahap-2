import React from "react";

function MenuBookList() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Seasonal Product</h2>
      <div className="grid grid-cols-1 ">
        <div className="bg-white shadow-md p-4">
          <h3 className="text-xl font-bold mb-2">Raisin Delight Frappe</h3>
          <p className="text-gray-600">
            A timeless classic. A sweet, creamy, rich, flavorful experience of
            vanilla cream and juicy ripe raisins with a hint of warmth.
          </p>
          <span className="font-bold text-lg">50.000</span>
        </div>
        <div className="bg-white shadow-md p-4">
          <h3 className="text-xl font-bold mb-2">Green Tea Latte</h3>
          <p className="text-gray-600">
            A perfect combination between special green tea and fresh milk.
          </p>
          <span className="font-bold text-lg">47.000</span>
        </div>
        <div className="bg-white shadow-md p-4">
          <h3 className="text-xl font-bold mb-2">Malaka Brulee Latte</h3>
          <p className="text-gray-600">
            A Caffe Latte packed with a rich and intense Melaka brown sugar
            flavor with a creamier custardy flavor and body.
          </p>
          <span className="font-bold text-lg">40.000</span>
        </div>
      </div>
    </div>
  );
}

export default MenuBookList;
