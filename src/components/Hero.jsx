import React from 'react';
import heroImage from '../assets/hero2.png';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen bg-cafe-black text-white pt-20 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 md:px-8 flex items-center justify-center overflow-hidden">

            {/* Decorative Elements (background blobs?) */}

            {/* Main Beige Card */}
            <div className="w-full max-w-7xl bg-cafe-beige rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[4rem] relative min-h-[450px] sm:min-h-[500px] md:min-h-[600px] flex items-center overflow-visible">

                {/* Left Content */}
                <div className="w-full md:w-1/2 z-10 flex flex-col gap-4 sm:gap-6 text-cafe-black px-6 sm:px-8 md:pl-20 py-10 sm:py-12 md:py-0 relative">
                    <span className="text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] opacity-80 uppercase">Traditional chai brewing</span>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] uppercase">
                        CHAH E <br />
                        <span className="text-cafe-brown">PIAA DE</span>
                    </h1>

                    <p className="text-gray-700 text-xs sm:text-sm md:text-base max-w-md leading-relaxed">
                        Experience authentic Indian chai in a warm, welcoming atmosphere. Every cup tells a story of tradition, love, and the perfect blend of spices.
                    </p>

                    <div className="mt-2 sm:mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <button className="bg-black text-white px-6 sm:px-8 py-3 rounded-full text-xs font-bold tracking-widest hover:bg-gray-800 transition-all uppercase w-full sm:w-auto">
                            Explore Menu
                        </button>
                        <button className="bg-transparent border-2 border-black text-black px-6 sm:px-8 py-3 rounded-full text-xs font-bold tracking-widest hover:bg-black hover:text-white transition-all uppercase w-full sm:w-auto">
                            Find Us
                        </button>
                    </div>
                </div>

                {/* Right Content / Zoomed Video */}
                {/* Right Content / Image Splash with Spill & Dark Effect */}
                <div className="absolute top-1/2 right-[-30%] sm:right-[-20%] md:right-[-10%] transform -translate-y-1/2 w-[120%] sm:w-[110%] md:w-[75%] h-[100%] sm:h-[125%] z-20 pointer-events-none flex items-center justify-center">
                    <div className="relative w-full h-full">
                        {/* Image with contrast filters for 'dark' vibe */}
                        <img
                            src={heroImage}
                            alt="Chai Splash"
                            className="w-full h-full object-contain drop-shadow-2xl scale-110 sm:scale-125 md:scale-150 transform transition-transform duration-700 hover:scale-125 sm:hover:scale-160 filter contrast-125 brightness-90 saturate-110"
                            style={{
                                maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 100%)',
                                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 100%)'
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
