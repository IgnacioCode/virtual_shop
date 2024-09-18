import React from 'react';

export default function ContactSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-1 lg:gap-12 text-center">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-secondary font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                                Contactanos
                            </h1>
                            <p className="max-w-[600px] mx-auto text-gray-700 md:text-xl">
                                Conéctate con nosotros por redes sociales o envíanos un mensaje.
                            </p>
                        </div>
                        <div className="flex justify-center gap-6 mt-8">
                            {/* Imagen de Facebook */}

                            <button className="text-primary hover:text-secondary">
                                <span className="sr-only">Search</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.675 0h-21.35C.599 0 0 .599 0 1.325v21.351C0 23.4.599 24 1.325 24h11.483v-9.294H9.847v-3.622h2.961V8.413c0-2.933 1.792-4.538 4.413-4.538 1.254 0 2.332.093 2.645.135v3.067l-1.816.001c-1.424 0-1.7.677-1.7 1.67v2.189h3.391l-.442 3.622h-2.949V24h5.782c.727 0 1.325-.599 1.325-1.324V1.325C24 .599 23.401 0 22.675 0z" />
                                </svg>
                            </button>

                            {/* Imagen de Instagram */}
                            <button className="text-primary hover:text-secondary">
                                <span className="sr-only">Search</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.402a4.92 4.92 0 0 1 1.675 1.009 4.92 4.92 0 0 1 1.01 1.675c.162.46.346 1.26.402 2.43.059 1.267.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.402 2.43a4.92 4.92 0 0 1-1.009 1.675 4.92 4.92 0 0 1-1.675 1.01c-.46.162-1.26.346-2.43.402-1.267.059-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.402a4.92 4.92 0 0 1-1.675-1.01 4.92 4.92 0 0 1-1.01-1.675c-.162-.46-.346-1.26-.402-2.43C2.175 15.583 2.163 15.204 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.402-2.43A4.92 4.92 0 0 1 3.644 3.04a4.92 4.92 0 0 1 1.675-1.01c.46-.162 1.26-.346 2.43-.402C8.417 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.015 7.053.073c-1.348.062-2.272.27-3.077.571a7.156 7.156 0 0 0-2.608 1.635 7.156 7.156 0 0 0-1.635 2.608c-.301.805-.509 1.729-.571 3.077C.015 8.333 0 8.741 0 12s.015 3.667.073 4.947c.062 1.348.27 2.272.571 3.077a7.156 7.156 0 0 0 1.635 2.608 7.156 7.156 0 0 0 2.608 1.635c.805.301 1.729.509 3.077.571C8.333 23.985 8.741 24 12 24s3.667-.015 4.947-.073c1.348-.062 2.272-.27 3.077-.571a7.156 7.156 0 0 0 2.608-1.635 7.156 7.156 0 0 0 1.635-2.608c.301-.805.509-1.729.571-3.077C23.985 15.667 24 15.259 24 12s-.015-3.667-.073-4.947c-.062-1.348-.27-2.272-.571-3.077a7.156 7.156 0 0 0-1.635-2.608A7.156 7.156 0 0 0 18.954.644c-.805-.301-1.729-.509-3.077-.571C15.667.015 15.259 0 12 0zm0 5.838a6.163 6.163 0 1 0 0 12.327 6.163 6.163 0 0 0 0-12.327zm0 10.164a3.999 3.999 0 1 1 0-7.997 3.999 3.999 0 0 1 0 7.997zm6.406-11.345a1.44 1.44 0 1 0-2.881 0 1.44 1.44 0 0 0 2.881 0z" />
                                </svg>

                            </button>
                            {/* Imagen de Twitter */}
                            <button className="text-primary hover:text-secondary">
                                <span className="sr-only">Search</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775a4.932 4.932 0 0 0 2.165-2.723c-.951.564-2.005.974-3.127 1.195A4.918 4.918 0 0 0 16.616 3c-2.72 0-4.92 2.2-4.92 4.92 0 .386.044.763.128 1.124C7.728 8.837 4.1 6.633 1.671 3.149a4.92 4.92 0 0 0-.666 2.475c0 1.708.87 3.216 2.19 4.101a4.903 4.903 0 0 1-2.228-.616v.062c0 2.385 1.694 4.374 3.946 4.827a4.93 4.93 0 0 1-2.224.084c.626 1.954 2.444 3.377 4.6 3.417a9.868 9.868 0 0 1-6.11 2.106c-.397 0-.787-.023-1.175-.069A13.94 13.94 0 0 0 7.548 21c9.055 0 14.009-7.5 14.009-14.009 0-.213-.005-.426-.014-.637A10.005 10.005 0 0 0 24 4.557z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
