import React, { useEffect, useState } from 'react';
import networkconfig from '../../networkconfig';

const OurPartners = () => {
  const [partners, setPartners] = useState([]);
  const [visiblePartners, setVisiblePartners] = useState(4);
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const handleViewMore = () => {
    setShowMore(!showMore);
    setVisiblePartners(showMore ? 4 : partners.length);
  };

  useEffect(() => {
    fetch(`${networkconfig.BASE_URL}/get-ngo-partner`)
      .then(res => res.json())
      .then(response => {
        if (response.success) {
          setPartners(response.data);
        } else {
          setError(response.message || 'Failed to load partners data.');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch partners:', err);
        setError('Something went wrong. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="p-16 text-center items-center bg-red-600 text-white">
        <h2 className="text-3xl font-bold">Loading partners...</h2>
      </section>
    );
  }

  if (error) {
    return (
      <section className="p-16 text-center items-center bg-red-600 text-white">
        <h2 className="text-3xl font-bold">Error: {error}</h2>
      </section>
    );
  }

  return (
    <section id="our-partners" className="p-16 text-center items-center bg-red-600">
      <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl text-white font-bold">Our Partners</h2>

      <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {partners.slice(0, visiblePartners).map((partner, index) => (
          <div
            key={index}
            className="relative p-10 bg-white shadow-lg rounded-lg transform transition-all duration-300 items-center hover:scale-105 cursor-pointer"
            style={{ overflow: 'hidden' }}
          >
            <div className="flex flex-row items-center justify-center">
              <img
                src={partner.person_image}
                alt={partner.name}
                className="w-24 p-2 object-cover rounded-xl mx-auto"
              />
              <img
                src={partner.company_logo}
                alt={`${partner.name} logo`}
                className="w-24 p-2 object-cover rounded-2xl mx-auto mt-4"
              />
            </div>
            <h3 className="text-2xl font-bold mt-4">{partner.name}</h3>
            <p>{partner.contactPerson}</p>

            <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-100 backdrop-blur-lg opacity-0 transition-opacity duration-300 hover:opacity-100 cursor-pointer">
              <h3 className="text-2xl font-bold">{partner.name}</h3>
              <p className="text-md">{partner.contactPerson}</p>
              <p className="text-gray-600 mt-2 text-left px-4">{partner.description}</p>
              <p className="text-sm mt-2">
                Get us : <a href={`mailto:${partner.email}`} className="text-red-500 underline">{partner.email}</a>
              </p>

              {partner.weblink && (
                <p className="text-sm mt-2">
                  Website:{' '}
                  <a
                    href={partner.weblink}
                    className="text-red-500 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {partner.weblink}
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {partners.length > 4 && (
        <button
          onClick={handleViewMore}
          className="mt-8 bg-white text-red-600 font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-red-100 transition-all duration-300"
        >
          {showMore ? 'Show Less' : 'View More'}
        </button>
      )}
    </section>
  );
};

export default OurPartners;
