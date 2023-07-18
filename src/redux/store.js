import { configureStore } from '@reduxjs/toolkit';

import { taskReducer } from './tasksSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filters: filterReducer,
  },
});
