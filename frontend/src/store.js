import { configureStore } from '@reduxjs/toolkit';
import authReducer from './store/authSlice';
import fileReducer from './store/fileSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    files: fileReducer
  },
});

export default store;
