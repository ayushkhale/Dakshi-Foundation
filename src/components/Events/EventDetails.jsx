import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EventDetails = () => {
  const { state } = useLocation();
  const event = state?.event;
  const navigate = useNavigate();

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-zinc-800">
        <div className="text-center">
          <p className="text-lg font-medium">No event data found.</p>
          <button
            className="mt-4 bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const allImages = Object.keys(event)
    .filter((key) => key.startsWith('image') && event[key])
    .map((key) => event[key]);

  return (
    <div className="bg-white min-h-screen py-10 px-4">
      <div className="bg-zinc-50 text-zinc-800 rounded-xl border border-red-400 hover:border-red-500 transition-colors duration-200 shadow-sm p-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{event.title}</h1>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-8 text-sm">
          <p><strong>Event ID:</strong> {event.event_id}</p>
          <p><strong>Purpose:</strong> {event.purpose}</p>
          <p><strong>Date:</strong> {event.event_date}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Added By:</strong> {event.add_by}</p>
          <p><strong>Created By (ID):</strong> {event.created_by}</p>
          <p><strong>Created At:</strong> {new Date(event.createdAt).toLocaleString()}</p>
          <p><strong>Updated At:</strong> {new Date(event.updatedAt).toLocaleString()}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-sm leading-relaxed whitespace-pre-wrap text-zinc-700">
            {event.description}
          </p>
        </div>

        {allImages.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Images</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {allImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Event ${index + 1}`}
                  className="rounded-lg w-full object-cover h-56 border border-zinc-200 shadow"
                />
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 text-right">
          <button
            className="bg-red-600 text-white px-6 py-2 rounded-md text-sm hover:bg-red-700"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
