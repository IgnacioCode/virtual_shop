import React from 'react';
import Header from '../header.jsx'
import HeroSection from '../ui_sections/heroSection.jsx';
import ProductsSection from '../ui_sections/ProductSection.jsx';
import ContactSection from '../ui_sections/ContactSection.jsx';

function SearchPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Barra de búsqueda superior */}
            <div className="container w-3/5 mx-auto px-4 py-4">
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    className="w-full p-2 border border-gray-300 rounded-lg"
                />
            </div>

            {/* Contenido principal */}
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">

                {/* Filtros del lado izquierdo */}
                <aside className="col-span-1 bg-white p-4 rounded-lg shadow">
                    <h2 className="text-secondary text-xl font-bold mb-4">Filtros</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-secondary font-medium mb-2">Categoría</h3>
                            <select className="w-full p-2 border border-gray-300 rounded-lg">
                                <option>Electrónica</option>
                                <option>Ropa</option>
                                <option>Hogar</option>
                                <option>Juguetes</option>
                            </select>
                        </div>
                        <div>
                            <h3 className="text-secondary font-medium">Rango de precio</h3>
                            <input
                                type="range"
                                className="w-full bg-red"
                                min="0"
                                max="35000"
                                step="100"
                            />
                            <div className="flex justify-between text-sm">
                                <span>$0</span>
                                <span>$35.000</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-secondary font-medium">Marca</h3>
                            <div>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Sony
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Samsung
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Apple
                                </label>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Lista de productos */}
                <section className="col-span-1 md:col-span-3 bg-white p-4 rounded-lg shadow">
                    <h2 className="text-lg font-bold mb-4">Resultados de búsqueda</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Cada producto en la lista */}
                        <ProductCard
                            image="https://via.placeholder.com/150"
                            name="Producto 1"
                            price="$100"
                        />
                        <ProductCard
                            image="https://via.placeholder.com/150"
                            name="Producto 2"
                            price="$200"
                        />
                        <ProductCard
                            image="https://via.placeholder.com/150"
                            name="Producto 3"
                            price="$300"
                        />
                        {/* Puedes mapear una lista de productos desde una API */}
                    </div>
                </section>
            </div>
        </div>
    );
}

function ProductCard({ image, name, price }) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow p-4">
            <img src={image} alt={name} className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h3 className="text-md font-semibold">{name}</h3>
            <p className="text-lg font-bold text-primary mt-2">{price}</p>
            <button className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition duration-300">
                Ver producto
            </button>
        </div>
    );
}

export default SearchPage;
