import React from 'react';
import Carousel from '../HeroCarrousel';

export default function HeroSection() {
  let images = [
    "./resources/images/ring_oro.webp",
    "./resources/images/ring_plata.webp",
    "./resources/images/aros_oro.webp"
  ]
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-secondary font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                Descubrí tu próximo Accesorio
              </h1>
              <p className="max-w-[600px] text-gray-700 md:text-xl">
                Encontra los mejores productos artesanales hechos con plata y oro
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                href="/products"
                className="inline-flex justify-center items-center px-6 py-3 bg-primary text-white rounded-lg text-lg hover:bg-secondary-dark transition duration-300"
              >
                Comprá
              </a>
              <a
                href="/about"
                className="inline-flex justify-center items-center px-6 py-3 border border-primary text-primary rounded-lg text-lg hover:bg-secondary hover:text-white transition duration-300"
              >
                Conocé mas
              </a>
            </div>
          </div>
          
          <Carousel images={images}></Carousel>
        </div>
      </div>
    </section>
  );
}
