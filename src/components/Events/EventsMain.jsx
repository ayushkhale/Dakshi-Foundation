import React, { useState, useEffect } from 'react';

const EventsMain = () => {
  // State to hold the events data
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch events data from API when the component mounts
  useEffect(() => {
    fetch('http://192.168.1.2:3000/all-events')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setEvents(data.data); // Update state with fetched events
        } else {
          setError('Failed to fetch events');
        }
        setLoading(false); // Stop loading after data is fetched
      })
      .catch(err => {
        setError('An error occurred while fetching events');
        setLoading(false);
      });
  }, []);

  // If loading, show a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there's an error, show the error message
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-red-600 min-h-screen py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map(event => (
          <div
            key={event._id}
            className="group flex flex-col md:flex-row bg-white text-red-600 rounded-lg overflow-hidden w-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-95 hover:bg-blur-500"
          >
            <div className="p-8 flex flex-col justify-between flex-1">
              <h2 className="text-red-600 text-2xl mb-3 font-semibold">{event.title}</h2>

              <div className="flex items-center mb-2">
                <i className="fas fa-calendar-alt text-red-600 text-xs"></i>
                <span className="text-red-600 text-xs font-normal">
                  <strong>Date:</strong> {event.event_date} 
                </span>
              </div>

              <div className="w-12 h-[2px] bg-red-600 mb-4"></div>

              <p className="text-red-600 text-xs font-normal leading-relaxed">
                <strong>Description:</strong> {event.description.substring(0, 200)}...
              </p>

              {/* Display event ID */}
              <p className="text-red-600 text-xs font-normal mt-2">
                <strong>Event ID:</strong> {event._id}
              </p>
            </div>

            <div className="flex justify-center items-center w-full md:w-[280px] relative">
              {event.images[0] && (
                <img
                  alt="Event"
                  className="w-full md:w-[280px] object-cover rounded-lg"
                  height="200"
                  src={event.images[0]} // Display the first image of the event
                  width="280"
                />
              )}
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-lg">
                  See Event
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsMain;
