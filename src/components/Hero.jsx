import React from 'react';
import heroImage from '../assets/hero2.png';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen bg-cafe-black text-white pt-24 pb-12 px-4 md:px-8 flex items-center justify-center overflow-hidden">

            {/* Decorative Elements (background blobs?) */}

            {/* Main Beige Card */}
            <div className="w-full max-w-7xl bg-cafe-beige rounded-[2.5rem] md:rounded-[4rem] relative min-h-[500px] md:min-h-[600px] flex items-center overflow-visible">

                {/* Left Content */}
                <div className="w-full md:w-1/2 z-10 flex flex-col gap-6 text-cafe-black px-8 md:pl-20 py-12 md:py-0 relative">
                    <span className="text-sm font-semibold tracking-[0.2em] opacity-80 uppercase">Traditional chai brewing</span>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] uppercase">
                        CHAH E <br />
                        <span className="text-cafe-brown">PIAA DE</span>
                    </h1>

                    <p className="text-gray-700 text-sm md:text-base max-w-md leading-relaxed">
                        Experience authentic Indian chai in a warm, welcoming atmosphere. Every cup tells a story of tradition, love, and the perfect blend of spices.
                    </p>

                    <div className="mt-4 flex gap-4">
                        <button className="bg-black text-white px-8 py-3 rounded-full text-xs font-bold tracking-widest hover:bg-gray-800 transition-all uppercase">
                            Explore Menu
                        </button>
                        <button className="bg-transparent border-2 border-black text-black px-8 py-3 rounded-full text-xs font-bold tracking-widest hover:bg-black hover:text-white transition-all uppercase">
                            Find Us
                        </button>
                    </div>
                </div>

                {/* Right Content / Zoomed Video */}
                {/* Right Content / Image Splash with Spill & Dark Effect */}
                <div className="absolute top-1/2 right-[-20%] md:right-[-10%] transform -translate-y-1/2 w-[110%] md:w-[75%] h-[125%] z-20 pointer-events-none flex items-center justify-center">
                    <div className="relative w-full h-full">
                        {/* Image with contrast filters for 'dark' vibe */}
                        <img
                            src={heroImage}
                            alt="Chai Splash"
                            className="w-full h-full object-contain drop-shadow-2xl scale-125 md:scale-150 transform transition-transform duration-700 hover:scale-160 filter contrast-125 brightness-90 saturate-110"
                            style={{
                                maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 100%)',
                                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 100%)'
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
