import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-cafe-black text-white pt-16 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 md:px-10 lg:px-20">

            {/* Subscription Card replaced with "Our Journey" or a simple footer callout */}
            <div className="max-w-7xl mx-auto bg-cafe-beige rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-8 sm:p-10 md:p-16 text-center text-cafe-black relative overflow-hidden mb-16 sm:mb-20">
                <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-60">Join Our Community</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 mb-6 sm:mb-8">Follow Our Journey</h2>
                <div className="flex justify-center gap-4">
                    <button className="bg-black text-white px-6 sm:px-8 py-3 rounded-full text-xs font-bold tracking-widest hover:bg-[#333] transition-all uppercase shadow-lg">
                        @CHAHEPIAADE
                    </button>
                </div>

                {/* Decor */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
            </div>

            {/* Bottom Footer Links */}
            <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 sm:pt-10 flex flex-col md:flex-row justify-between items-start gap-8 sm:gap-10">

                {/* Brand */}
                <div className="flex flex-col items-center md:items-start gap-4 max-w-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-white/10">
                            <span className="text-white text-sm font-bold">C</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-xl tracking-wider leading-none">Chah E Piaa De</span>
                            <span className="text-white/60 text-[10px]">Serving authentic Indian chai since 2024</span>
                        </div>
                    </div>
                    <p className="text-gray-400 text-sm mt-2 font-light leading-relaxed">
                        Experience the warmth of tradition in every cup.
                        Made with ❤️ and chai.
                    </p>
                </div>

                {/* Links */}
                <div className="flex gap-16 text-xs uppercase tracking-widest text-gray-400">
                    <div className="flex flex-col gap-4">
                        <span className="text-[#F4A261] font-bold">Quick Links</span>
                        <a href="#" className="hover:text-white transition-colors">Menu</a>
                        <a href="#" className="hover:text-white transition-colors">Locations</a>
                        <a href="#" className="hover:text-white transition-colors">About Us</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </div>

                {/* Social */}
                <div className="flex flex-col gap-4">
                    <span className="text-[#F4A261] text-xs font-bold uppercase tracking-widest">Connect With Us</span>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 bg-[#F4A261] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#F4A261] transition-all">
                            📷
                        </a>
                        <a href="#" className="w-10 h-10 bg-[#F4A261] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#F4A261] transition-all">
                            📘
                        </a>
                        <a href="#" className="w-10 h-10 bg-[#F4A261] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#F4A261] transition-all">
                            🐦
                        </a>
                    </div>
                </div>

            </div>

            <div className="mt-12 sm:mt-16 border-t border-white/5 pt-6 sm:pt-8 text-center text-[10px] text-gray-600 uppercase tracking-widest flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-0">
                <span>© 2024 Chah E Piaa De. All rights reserved.</span>
                <span className="mt-2 md:mt-0 opacity-50">Made with ❤️ and chai</span>
            </div>
        </footer>
    );
};

export default Footer;
