import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import networkconfig from '../../networkconfig';

const EventsMain = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${networkconfig.BASE_URL}/all-events`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setEvents(data.data);
        } else {
          setModalMessage('Failed to fetch events');
          setModalVisible(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setModalMessage('An error occurred while fetching events');
        setModalVisible(true);
        setLoading(false);
      });
  }, []);

  const handleSeeEvent = (event) => {
    navigate('/event-details', { state: { event } });
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="bg-white min-h-screen py-10 px-4 md:px-12 lg:px-20 font-[San Francisco]">
      {loading ? (
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-zinc-00 border-t-red-800"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {events.map(event => (
            <div
              key={event._id}
              className="group flex flex-col bg-zinc-100 rounded-xl border border-red-800 shadow-sm overflow-hidden transition-transform duration-300 ease-in-out hover:shadow-md hover:scale-[0.99]"
            >
              <div className="relative w-full h-56 overflow-hidden">
                {(event.image1 || (event.images && event.images[0])) && (
                  <img
                    alt="Event"
                    src={event.image1 || event.images[0]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handleSeeEvent(event)}
                    className="bg-red-800 text-white px-6 py-2 rounded-full shadow-sm text-sm hover:bg-red-800"
                  >
                    View Details
                  </button>
                </div>
              </div>

              <div className="p-6 flex flex-col space-y-3">
                <h2 className="text-xl font-semibold text-red-800">{event.title}</h2>

                <div className="text-sm text-zinc-500 flex items-center space-x-2">
                  <i className="fas fa-calendar-alt"></i>
                  <span>{event.event_date}</span>
                </div>

                <p className="text-zinc-700 text-sm leading-snug">
                  {event.description.substring(0, 150)}...
                </p>

                <div className="text-[11px] text-zinc-500 mt-2">
                  Event ID: <span className="font-medium">{event.event_id}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {modalVisible && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl text-center">
            <h3 className="text-xl font-bold text-red-600 mb-3">Error</h3>
            <p className="text-sm text-zinc-700 mb-5">{modalMessage}</p>
            <button
              onClick={closeModal}
              className="bg-red-600 hover:bg-red-500 text-white px-5 py-2 rounded-full text-sm transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsMain;
