import React from 'react';
import heroBg from '../assets/hero-bg.jpg';

const Hero = () => {
    return (
        <section id="home" className="relative w-full min-h-[600px] sm:min-h-screen bg-cafe-black text-white pt-20 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 md:px-8 flex items-center justify-center overflow-hidden">

            {/* Decorative Elements (background blobs?) */}

            {/* Main Beige Card with Background Image */}
            <div
                className="w-full max-w-7xl rounded-[1.5rem] sm:rounded-[2.5rem] md:rounded-[4rem] relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex flex-col md:flex-row items-center overflow-hidden"
                style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/30 rounded-[1.5rem] sm:rounded-[2.5rem] md:rounded-[4rem]"></div>

                {/* Left Content */}
                <div className="w-full md:w-1/2 z-10 flex flex-col gap-3 sm:gap-6 px-5 sm:px-8 md:pl-20 py-8 sm:py-12 md:py-0 relative text-center md:text-left">
                    <span className="text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-amber-300 uppercase drop-shadow-lg">Traditional chai brewing</span>

                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] uppercase">
                        <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent drop-shadow-2xl">CHAH E</span> <br />
                        <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-amber-400 bg-clip-text text-transparent drop-shadow-2xl">PIAA DE</span>
                    </h1>

                    <p className="text-white text-xs sm:text-sm md:text-base max-w-md leading-relaxed mx-auto md:mx-0 drop-shadow-lg">
                        Experience authentic Indian chai in a warm, welcoming atmosphere. Every cup tells a story of tradition, love, and the perfect blend of spices.
                    </p>

                    <div className="mt-2 sm:mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 relative z-30 items-center md:items-start">
                        <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 sm:px-8 py-3 rounded-full text-xs font-bold tracking-widest hover:from-orange-600 hover:to-amber-600 transition-all uppercase w-full sm:w-auto shadow-xl hover:shadow-2xl transform hover:scale-105">
                            Explore Menu
                        </button>
                        <button className="bg-white/90 backdrop-blur-sm border-2 border-white text-gray-900 px-6 sm:px-8 py-3 rounded-full text-xs font-bold tracking-widest hover:bg-white hover:scale-105 transition-all uppercase w-full sm:w-auto shadow-xl">
                            Find Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
