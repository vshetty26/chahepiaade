import React from 'react';
import heroImage from '../assets/hero.png';
import spaceVideo from '../assets/our-space.mp4';

const OurSpace = () => {
    return (
        <section className="w-full bg-cafe-black py-16 sm:py-20 px-4 sm:px-6 md:px-10 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#F4A261] rounded-full mix-blend-screen filter blur-[100px] opacity-5 pointer-events-none transform -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E76F51] rounded-full mix-blend-screen filter blur-[120px] opacity-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
                {/* Header Text */}
                <div className="mb-10 sm:mb-12 space-y-3 sm:space-y-4 max-w-3xl">
                    <span className="text-[#F4A261] text-xs font-bold tracking-[0.2em] uppercase block mb-3 animate-fade-in-up">
                        Our Space
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold uppercase leading-tight tracking-tight animate-fade-in-up delay-100">
                        Experience The <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A261] to-[#E76F51]">
                            Chah E Piaa De Vibe
                        </span>
                    </h2>
                    <p className="text-gray-300 text-base sm:text-lg md:text-xl font-light mt-4 sm:mt-6 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                        Warm woods, comfortable seating, and an atmosphere that feels like home.
                        Step into our world and let the aroma of freshly brewed chai embrace you.
                    </p>
                </div>

                {/* Video Container */}
                <div className="w-full max-w-5xl relative group rounded-2xl overflow-hidden shadow-2xl shadow-[#F4A261]/10 border border-white/10 animate-fade-in-up delay-300">
                    {/* Placeholder / Video */}
                    <div className="aspect-video w-full bg-black/50 relative">
                        <video
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                            poster={heroImage}
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={spaceVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurSpace;
