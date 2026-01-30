import React from 'react';
import masalaChai from '../assets/dishes/masala_chai.jpg';
import spillChai from '../assets/spillchai.png';

const ServiceCard = ({ title, description, icon }) => (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-[#F4A261]/50 transition-all duration-300 group h-full flex flex-col gap-4 text-left">
        <div className="w-12 h-12 rounded-full border border-[#F4A261]/50 flex items-center justify-center text-[#F4A261] group-hover:bg-[#F4A261] group-hover:text-black transition-all duration-300">
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    </div>
);

const ServiceFeatures = () => {
    return (
        <section className="w-full bg-cafe-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 relative overflow-hidden">

            {/* Header */}
            <div className="text-center mb-12 sm:mb-16 md:mb-20 relative z-10">
                <span className="text-[#F4A261] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Features</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold uppercase tracking-tight">Our Services</h2>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-8 items-center relative z-10">

                {/* Left Column */}
                <div className="flex flex-col gap-8 order-2 lg:order-1">
                    <ServiceCard
                        title="Freshly Brewed"
                        description="Every cup is brewed fresh upon order for the perfect taste and temperature."
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        }
                    />
                    <ServiceCard
                        title="Premium Spices"
                        description="We use only high-grade cardamom, ginger, saffron, and organic tea leaves."
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        }
                    />
                </div>

                {/* Center Column - Creative Visual */}
                <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] flex items-center justify-center order-1 lg:order-2 overflow-visible">

                    {/* Glow Effect */}
                    <div className="absolute w-[400px] h-[400px] bg-[#F4A261] rounded-full blur-[100px] opacity-10"></div>

                    {/* Spill Chai Image - Large and Overflowing */}
                    <div className="relative w-full h-full flex items-center justify-center z-10">
                        <img
                            src={spillChai}
                            alt="Chai Spill - Massive"
                            className="w-auto h-full object-contain drop-shadow-2xl animate-float scale-image-massive"
                            style={{
                                transform: 'scale(1.2)',
                            }}
                        />
                        <style>{`
                            @media (min-width: 640px) {
                                .scale-image-massive {
                                    transform: scale(1.2) !important;
                                }
                            }
                            @media (min-width: 1024px) {
                                .scale-image-massive {
                                    transform: scale(1.4) !important;
                                }
                            }
                        `}</style>
                    </div>

                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-8 order-3">
                    <ServiceCard
                        title="Ideal Ambiance"
                        description="A warm, cozy space designed for you to relax, work, or catch up with friends."
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        }
                    />
                    <ServiceCard
                        title="Traditional Taste"
                        description="Authentic recipes rooted in tradition to give you the real taste of home."
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        }
                    />
                </div>

            </div>
        </section>
    );
};

export default ServiceFeatures;
