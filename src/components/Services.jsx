import React from 'react';
import masalaChai from '../assets/dishes/masala_chai.jpg';
import kesarChai from '../assets/dishes/kesar_badam_chai.jpg';
import tulsiChai from '../assets/dishes/ginger_tulsi_chai.jpg';

const MenuItem = ({ title, price, description, tag, tagColor, image }) => (
    <div className="flex flex-col text-left space-y-4 p-4 bg-white/5 hover:bg-white/10 rounded-3xl transition-all duration-300 group border border-white/5 hover:border-[#F4A261]/30 relative overflow-hidden">
        {tag && (
            <span className={`absolute top-4 right-4 z-10 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-lg ${tagColor || 'bg-[#F4A261] text-white'}`}>
                {tag}
            </span>
        )}

        <div className="w-full h-56 rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
        </div>

        <div className="px-2">
            <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-white group-hover:text-[#F4A261] transition-colors">{title}</h3>
                <p className="text-[#F4A261] font-bold text-lg">₹{price}</p>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mt-2 line-clamp-2">
                {description}
            </p>
        </div>
    </div>
);

const Services = () => {
    return (
        <section className="w-full bg-cafe-black py-24 px-4 md:px-20 relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4A261] rounded-full mix-blend-screen filter blur-[120px] opacity-10 pointer-events-none"></div>

            <div className="text-center mb-16">
                <span className="text-[#F4A261] text-xs font-bold tracking-[0.2em] uppercase">Our Menu</span>
                <h2 className="text-4xl text-white font-bold mt-2 uppercase">Featured Chai Varieties</h2>
                <p className="text-gray-400 mt-4 max-w-xl mx-auto font-light">
                    Handcrafted with premium ingredients and authentic recipes passed down through generations
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <MenuItem
                    title="Classic Masala Chai"
                    price="60"
                    description="Traditional blend of aromatic spices with premium black tea."
                    tag="Bestseller"
                    tagColor="bg-[#E76F51] text-white"
                    image={masalaChai}
                />

                <MenuItem
                    title="Kesar Badam Chai"
                    price="80"
                    description="Rich saffron and almond infused chai with a royal touch."
                    tag="Premium"
                    tagColor="bg-yellow-600 text-white"
                    image={kesarChai}
                />

                <MenuItem
                    title="Ginger Tulsi Chai"
                    price="65"
                    description="Healing blend of fresh ginger and holy basil."
                    tag="Healthy"
                    tagColor="bg-green-600 text-white"
                    image={tulsiChai}
                />
            </div>

            <div className="mt-16 text-center">
                <button className="border border-white/20 hover:bg-white hover:text-black text-white px-8 py-3 rounded-full text-xs font-bold tracking-widest transition-all uppercase">
                    View Full Menu
                </button>
            </div>
        </section>
    );
};

export default Services;
