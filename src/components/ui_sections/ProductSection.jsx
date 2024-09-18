import React from 'react';
import ProductCard from '../ProductCard'; // Importa el componente de tarjeta de producto

export default function ProductsSection() {
  const products = [
    {name:"Anillo dorado",price:"19.99",image:"./resources/images/ring_oro.webp"},
    {name:"Anillo de Plata",price:"9.99",image:"./resources/images/ring_plata.webp"},
    {name:"Collar Hermoso",price:"12.99",image:"./resources/images/collar_oro.webp"},
    {name:"Aritos Perfectos",price:"5.99",image:"./resources/images/aros_oro.webp"}
  ];

  return (
    <section className="w-full py-10 md:py-10 lg:py-10 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-secondary font-bold tracking-tighter sm:text-5xl mb-8">Más comprados</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.name} productName={product.name} price={product.price} image={product.image} />
          ))}
        </div>
      </div>
    </section>
  );
}