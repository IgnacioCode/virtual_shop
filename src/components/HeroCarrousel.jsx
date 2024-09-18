import React, { useState, useEffect } from 'react';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Función para avanzar en el carrusel
  const handleNext = () => {
    if (isAnimating) return; // Evita la doble animación
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsAnimating(false);
    }, 600); // Duración de la animación
  };

  // Función para retroceder en el carrusel
  const handlePrevious = () => {
    if (isAnimating) return; // Evita la doble animación
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 600); // Duración de la animación
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Cambia cada 2 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="overflow-hidden relative">
        <div
          className={`flex transition-transform duration-1000 ease-in-out transform ${
            isAnimating ? 'translate-x-0' : ''
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-80 object-cover rounded-lg flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Indicadores de las diapositivas */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-slate-100' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
