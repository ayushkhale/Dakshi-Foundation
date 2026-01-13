import React from "react";

const GovtImages = () => {
  const partners = [
    "https://i.ibb.co/tPs1LkhV/image-search-1768287156578.png",
    "https://i.ibb.co/8LL6XF0s/image-search-1768287215280.png",
    "https://i.ibb.co/fdb71q7x/image-search-1768287367054.jpg",
    "https://i.ibb.co/hJYfhQY5/image-search-1768287401455.png",
    "https://i.ibb.co/PvHcQVWV/image-search-1768287658025.png",
    "https://i.ibb.co/W4WhK0sx/image-search-1768287480864.png",
    "https://i.ibb.co/PG9LVhhg/image-search-1768287581312.jpg",
    "https://i.ibb.co/Py4gRs0/image-search-1768287677773.png",

  ];

  return (
    <section
      id="partners"
      className="p-8 text-center items-center my-[100px] overflow-hidden"
    >


   
      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-16">
          {/* First set */}
          {partners.map((img, index) => (
            <img
              key={`first-${index}`}
              src={img}
              alt="Partner"
              className="w-32 object-contain rounded-lg"
            />
          ))}

          {/* Duplicate set for seamless loop */}
          {partners.map((img, index) => (
            <img
              key={`second-${index}`}
              src={img}
              alt="Partner"
              className="w-32 object-contain rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovtImages;
