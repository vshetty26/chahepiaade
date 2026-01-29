import React from 'react';
import storefrontImage from '../assets/storefront.jpg';

const About = () => {
    return (
        <section className="w-full bg-cafe-black text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-20 relative overflow-hidden">

            {/* Background blobs */}
            <div className="absolute top-20 right-[-100px] w-80 h-80 bg-[#E76F51] rounded-full mix-blend-screen filter blur-[100px] opacity-10"></div>
            <div className="absolute bottom-20 left-[-100px] w-64 h-64 bg-[#F4A261] rounded-full mix-blend-screen filter blur-[80px] opacity-10"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 md:gap-20 items-center">

                {/* Text Content */}
                <div className="space-y-6 sm:space-y-8 md:space-y-10 order-2 md:order-1">
                    <div className="space-y-2">
                        <span className="text-[#F4A261] text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase block mb-3 sm:mb-4">Our Journey</span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] tracking-tight">
                            <span className="text-white block">Brewing</span>
                            <span className="text-gray-600 block">Traditions</span>
                            <span className="text-[#E76F51] block">Since 2024</span>
                        </h2>
                    </div>

                    <div className="space-y-4 sm:space-y-6 text-gray-400 text-base sm:text-lg font-light leading-relaxed max-w-lg">
                        <p>
                            Chah E Piaa De was born from a simple dream - to bring the authentic taste of Indian chai to every corner of the city. Our founder, inspired by childhood memories of sipping chai with family, set out to recreate that warmth and connection.
                        </p>
                        <p>
                            Every cup we serve is a tribute to the rich heritage of Indian tea culture, blended with modern innovation and a commitment to quality that never wavers.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-8 sm:gap-12 md:gap-16 pt-6 sm:pt-8 border-t border-white/10">
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-[#F4A261]">100%</h3>
                            <p className="text-gray-500 text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mt-2 font-bold">Organic <br /> Ingredients</p>
                        </div>
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-[#F4A261]">5<span className="text-lg sm:text-xl align-top">★</span></h3>
                            <p className="text-gray-500 text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mt-2 font-bold">Customer <br /> Rating</p>
                        </div>
                    </div>
                </div>

                {/* Image Area with Frame */}
                <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
                    {/* The Frame Container */}
                    <div className="relative w-full max-w-[350px] sm:max-w-[400px] aspect-[2/3] group">
                        {/* Thin Border Frame */}
                        <div className="absolute inset-0 border border-[#F4A261]/30 rounded-[2rem] transform translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>

                        {/* Image Container */}
                        <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl z-10 border border-white/5 bg-black">
                            <img
                                src={storefrontImage}
                                alt="Storefront"
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                            />
                            {/* Inner gradient for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 pointer-events-none"></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
