import React from 'react';

export default function ProductCard({ productName, price, image }) {
  return (
    <div className="group relative bg-white-100 overflow-hidden rounded-lg shadow-lg bg-white">
      <img
        alt={`Product ${productName}`}
        className="object-cover w-full h-60"
        height="300"
        src={image}
        width="300"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{productName}</h3>
        <p className="text-gray-700">${price}</p>
        <a
          href="#"
          className="block mt-4 w-full text-center bg-primary text-white rounded-lg py-2 hover:bg-secondary transition duration-300"
        >
          Comprar
        </a>
      </div>
    </div>
  );
}
