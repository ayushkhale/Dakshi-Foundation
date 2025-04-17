import React from 'react';

const EventsHero = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center h-44"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/16225733/pexels-photo-16225733/free-photo-of-a-group-of-children-sitting-on-a-bench.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
      >
        <div className="absolute inset-0 bg-black opacity-85"></div>
        <div className="container mx-auto relative z-10 flex flex-col justify-center h-full px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            All Published Events
          </h1>
          <p className="text-sm md:text-2xl text-white mt-4 text-center">
            Explore our latest events and initiatives that are creating impact across communities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default EventsHero;
