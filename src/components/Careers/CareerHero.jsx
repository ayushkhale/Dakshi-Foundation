import React from 'react';

const CareerHero = () => {
    return (
        <div>
            <section
                className="relative bg-cover bg-center h-96"
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/7580997/pexels-photo-7580997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                }}
            >
                <div className="absolute inset-0 bg-black opacity-85"></div>
                <div className="container mx-auto relative z-10 flex flex-col justify-center h-full px-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                        Join Our Team
                    </h1>
                    <p className="text-sm md:text-2xl text-white mt-4 text-center">
                        Be a part of a passionate team committed to making real change in the world.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default CareerHero;
