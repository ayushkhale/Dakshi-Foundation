import React from 'react';

const ContactHero = () => {
    const scrollToContactForm = () => {
        const contactSection = document.getElementById('contact-form');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section 
            className="relative bg-cover bg-center h-80 flex items-center justify-center"
            style={{ backgroundImage: `url('https://images.pexels.com/photos/7960704/pexels-photo-7960704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
        >
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="container mx-auto relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 md:px-8 lg:px-12">
                <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
                    Get in Touch with Dakshi Foundation
                </h1>
                <p className="text-xs md:text-xl text-white mt-4 text-center">
                    Have questions, suggestions, or want to collaborate? We’d love to hear from you.
                </p>
            </div>
        </section>
    );
};

export default ContactHero;
