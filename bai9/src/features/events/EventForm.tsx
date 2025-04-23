import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addEvent, editEvent } from './eventsSlice';
import { AppDispatch } from '../../app/store';

interface EventFormProps {
  eventToEdit?: {
    id: number;
    title: string;
    date: string;
    description: string;
  };
}

const EventForm: React.FC<EventFormProps> = ({ eventToEdit }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [title, setTitle] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  useEffect(() => {
    if (eventToEdit) {
      setTitle(eventToEdit.title);
      setDate(eventToEdit.date);
      setDescription(eventToEdit.description);
    }
  }, [eventToEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newEvent = {
      id: eventToEdit ? eventToEdit.id : Date.now(),
      title,
      date,
      description,
    };

    if (eventToEdit) {
      dispatch(editEvent(newEvent)); // If editing, dispatch editEvent
    } else {
      dispatch(addEvent(newEvent)); // If adding new, dispatch addEvent
    }

    // Reset form after submit
    setTitle('');
    setDate('');
    setDescription('');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>{eventToEdit ? 'Edit Event' : 'Add New Event'}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Event title"
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Event description"
          />
        </div>
        <button type="submit">{eventToEdit ? 'Update Event' : 'Add Event'}</button>
      </form>
    </div>
  );
};

export default EventForm;
