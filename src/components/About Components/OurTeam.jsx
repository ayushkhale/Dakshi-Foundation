import React, { useEffect, useState } from 'react';
import networkconfig from '../../networkconfig';

const OurTeam = () => {
  const [teamData, setTeamData] = useState([]);
  const [visibleMembers, setVisibleMembers] = useState(4);
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const handleViewMore = () => {
    setShowMore(!showMore);
    setVisibleMembers(showMore ? 4 : teamData.length);
  };

  useEffect(() => {
    fetch(`${networkconfig.BASE_URL}/get-team-members`)
      .then(res => res.json())
      .then(response => {
        if (response.success) {
          setTeamData(response.data);
        } else {
          setError(response.message || 'Failed to load team data.');
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch team data:', error);
        setError('Something went wrong. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="p-16 text-center items-center bg-red-600 text-white">
        <h2 className="text-3xl font-bold">Loading team members...</h2>
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
    <section id="our-team" className="p-16 text-center items-center bg-red-600">
      <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl text-white font-bold">Our Team</h2>

      <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamData.slice(0, visibleMembers).map((member, index) => (
          <div
            key={index}
            className="relative p-4 bg-white shadow-lg rounded-lg transform transition-all duration-300 items-center hover:scale-105 cursor-pointer"
            style={{ overflow: 'hidden' }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-36 object-cover rounded-xl mx-auto"
            />
            <h3 className="text-2xl font-bold mt-4">{member.name}</h3>
            <p>{member.role}</p>

            <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-100 backdrop-blur-lg opacity-0 transition-opacity duration-300 hover:opacity-100 cursor-pointer">
              <h3 className="text-2xl font-bold">{member.name}</h3>
              <p className="text-md">{member.role}</p>
              <p className="text-gray-600 mt-2 text-center px-4">{member.description}</p>
            </div>
          </div>
        ))}
      </div>

      {teamData.length > 4 && (
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

export default OurTeam;
