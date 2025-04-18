import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EventDetails = () => {
  const { state } = useLocation();
  const event = state?.event;
  const navigate = useNavigate();

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-900 text-white">
        <div>
          <p>No event data found.</p>
          <button
            className="mt-4 bg-white text-zinc-900 px-4 py-2 rounded"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 min-h-screen py-10 px-4">
      <div className="bg-white text-zinc-900 rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{event.title}</h1>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <p><strong>Event ID:</strong> {event.event_id}</p>
          <p><strong>Purpose:</strong> {event.purpose}</p>
          <p><strong>Date:</strong> {event.event_date}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Added By:</strong> {event.add_by}</p>
          <p><strong>Created By (ID):</strong> {event.created_by}</p>
          <p><strong>Created At:</strong> {new Date(event.createdAt).toLocaleString()}</p>
          <p><strong>Updated At:</strong> {new Date(event.updatedAt).toLocaleString()}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{event.description}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Images</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {event.images && event.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Event ${i + 1}`}
                className="rounded-lg w-full object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
