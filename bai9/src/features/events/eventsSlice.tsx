import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
}

interface EventsState {
  events: Event[];
}

const initialState: EventsState = {
  events: [],
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<Event>) => {
      console.log('Adding new event:', action.payload);
      state.events.push(action.payload);
    },
    editEvent: (state, action: PayloadAction<Event>) => {
      const index = state.events.findIndex((event) => event.id === action.payload.id);
      if (index !== -1) {
        console.log('Editing event:', action.payload);
        state.events[index] = action.payload;
      }
    },
    deleteEvent: (state, action: PayloadAction<number>) => {
      console.log('Deleting event with id:', action.payload);
      state.events = state.events.filter((event) => event.id !== action.payload);
    },
  },
});

export const { addEvent, editEvent, deleteEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
