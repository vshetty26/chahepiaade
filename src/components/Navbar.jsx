import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full py-6 px-4 md:px-10 flex justify-between items-center bg-transparent absolute top-0 z-50">
            <div className="flex items-center gap-3">
                {/* Placeholder Logo Icon */}
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-white/10 backdrop-blur-sm">
                    <span className="text-white text-lg font-bold">C</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-white font-bold text-xl tracking-wider leading-none">Chah E Piaa De</span>
                    <span className="text-white/80 text-xs font-medium">ਚਾਹ ਦੀ ਪਿਆਲਾ ਦੇ</span>
                </div>
            </div>

            <ul className="hidden md:flex gap-8 text-white/90 text-sm font-medium tracking-wide">
                <li className="hover:text-[#F4A261] cursor-pointer transition-colors">Home</li>
                <li className="hover:text-[#F4A261] cursor-pointer transition-colors">Menu</li>
                <li className="hover:text-[#F4A261] cursor-pointer transition-colors">About</li>
                <li className="hover:text-[#F4A261] cursor-pointer transition-colors">Locations</li>
                <li className="hover:text-[#F4A261] cursor-pointer transition-colors">Contact</li>
            </ul>

            <button className="hidden md:block bg-[#F4A261] hover:bg-[#E76F51] text-white px-6 py-2 rounded-full text-xs font-bold tracking-widest transition-all shadow-lg transform hover:scale-105">
                VISIT US
            </button>

            {/* Mobile Menu Icon */}
            <div className="md:hidden text-white cursor-pointer p-2" onClick={() => setIsOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-cafe-black/95 backdrop-blur-md text-white flex flex-col items-center py-10 gap-6 md:hidden z-40 border-b border-white/10">
                    <a href="#" className="text-lg font-medium">Home</a>
                    <a href="#" className="text-lg font-medium">Menu</a>
                    <a href="#" className="text-lg font-medium">About</a>
                    <a href="#" className="text-lg font-medium">Locations</a>
                    <a href="#" className="text-lg font-medium">Contact</a>
                    <button className="bg-[#F4A261] text-white px-8 py-3 rounded-full font-bold">VISIT US</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
