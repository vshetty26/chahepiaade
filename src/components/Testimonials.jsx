import React from 'react';

const TestimonialCard = ({ quote, author, role }) => (
    <div className="bg-white/5 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/5 relative">
        <div className="text-[#F4A261] text-3xl sm:text-4xl font-serif absolute top-4 sm:top-6 left-4 sm:left-6">"</div>
        <div className="flex text-[#F4A261] mb-4 sm:mb-6 justify-center">
            {[...Array(5)].map((_, i) => (
                <span key={i} className="text-sm">★</span>
            ))}
        </div>
        <p className="text-gray-300 text-sm sm:text-base text-center italic mb-4 sm:mb-6 leading-relaxed relative z-10">
            {quote}
        </p>
        <div className="text-center">
            <h4 className="text-white font-bold text-sm sm:text-base">{author}</h4>
            <span className="text-gray-500 text-[10px] sm:text-xs tracking-widest uppercase">{role}</span>
        </div>
    </div>
);

const Testimonials = () => {
    const reviews = [
        {
            quote: "The best chai I've had outside of India! The masala blend is perfect and the atmosphere is so welcoming.",
            author: "Priya Sharma",
            role: "Regular Customer"
        },
        {
            quote: "A hidden gem! The Kesar Badam Chai is absolutely divine. This place has become my daily ritual.",
            author: "Rajesh Kumar",
            role: "Chai Enthusiast"
        },
        {
            quote: "Authentic flavors, cozy ambiance, and friendly staff. Chah E Piaa De feels like home away from home!",
            author: "Anjali Mehta",
            role: "Food Blogger"
        }
    ];

    return (
        <section className="w-full bg-cafe-black py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <span className="text-[#F4A261] text-xs font-bold tracking-[0.2em] uppercase">Testimonials</span>
                    <h2 className="text-3xl sm:text-4xl text-white font-bold mt-2 uppercase">What Our <br /> Customers Say</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                    {reviews.map((review, index) => (
                        <TestimonialCard key={index} {...review} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
