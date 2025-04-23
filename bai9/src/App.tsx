import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './app/store';
import { deleteEvent } from './features/events/eventsSlice';
import EventForm from './features/events/EventForm';

const App: React.FC = () => {
  const events = useSelector((state: RootState) => state.events.events);
  const [eventToEdit, setEventToEdit] = useState<any | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = (id: number) => {
    dispatch(deleteEvent(id));
  };

  const handleEdit = (event: any) => {
    setEventToEdit(event);
  };

  return (
    <div className="App" style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Event Management</h1>

      <EventForm eventToEdit={eventToEdit} />

      <h2>Events List</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <div>
              <strong>{event.title}</strong> ({event.date})
              <p>{event.description}</p>
              <button onClick={() => handleEdit(event)}>Edit</button>
              <button onClick={() => handleDelete(event.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
