import React from 'react';

const Location = () => {
    return (
        <section className="w-full bg-[#111] py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-20 relative overflow-hidden">
            {/* Map Background Placeholder - dark overlay */}
            <div className="absolute inset-0 bg-[#F4A261]/5 opacity-20 pattern-dots"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center relative z-10">

                {/* Contact Info */}
                <div className="bg-cafe-black p-8 sm:p-10 md:p-14 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] border border-white/10 shadow-2xl">
                    <span className="text-[#F4A261] text-xs font-bold tracking-[0.2em] uppercase">Find Us</span>
                    <h2 className="text-3xl sm:text-4xl text-white font-bold mt-2 mb-6 sm:mb-8 uppercase">Visit Us</h2>

                    <div className="space-y-8">
                        <div>
                            <h4 className="text-white font-bold mb-2">Address</h4>
                            <p className="text-gray-400">PO BOX 392 STN A</p>
                            <p className="text-gray-400">Abbotsford BC V2T 6Z7</p>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-2">Hours</h4>
                            <div className="flex justify-between max-w-xs text-gray-400">
                                <span>Mon to Fri:</span>
                                <span>7am - 10pm</span>
                            </div>
                            <div className="flex justify-between max-w-xs text-gray-400 mt-1">
                                <span>Sat & Sun:</span>
                                <span>8am - 11pm</span>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-2">Contact</h4>
                            <p className="text-gray-400 block hover:text-[#F4A261] transition-colors cursor-pointer">+1 (604) 123-4567</p>
                            <p className="text-gray-400 block hover:text-[#F4A261] transition-colors cursor-pointer">info@chahepiaade.com</p>
                        </div>

                        <button className="bg-white text-black px-8 py-3 rounded-full text-xs font-bold tracking-widest hover:bg-[#F4A261] hover:text-white transition-all uppercase w-full md:w-auto">
                            Get Directions
                        </button>
                    </div>
                </div>

                {/* Map Area */}
                <div className="h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-white/5 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] relative overflow-hidden flex items-center justify-center border border-white/5">
                    <div className="text-center p-8">
                        <div className="w-20 h-20 bg-[#F4A261]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#F4A261]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl text-white font-bold">Find Us on the Map</h3>
                        <p className="text-gray-500 mt-2">See location</p>
                    </div>
                    {/* Normally an iframe map goes here */}
                </div>

            </div>
        </section>
    );
};

export default Location;
